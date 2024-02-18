import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [newClient, setNewClient] = useState({ id: null, name: '', email: '' });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('/api/clients'); // Replace '/api/clients' with your backend endpoint
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleAddClient = async () => {
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });
      if (response.ok) {
        const data = await response.json();
        setClients([...clients, data]);
        setNewClient({ id: null, name: '', email: '' });
      } else {
        console.error('Failed to add client:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const handleEditClient = async (id, newName, newEmail) => {
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, email: newEmail }),
      });
      if (response.ok) {
        const updatedClients = clients.map(client =>
          client.id === id ? { ...client, name: newName, email: newEmail } : client
        );
        setClients(updatedClients);
        setEditingClient(null);
      } else {
        console.error('Failed to edit client:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing client:', error);
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);
      } else {
        console.error('Failed to delete client:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Clients</h2>
          <ul className="list-group">
            {clients.map(client => (
              <li key={client.id} className="list-group-item">
                        {editingClient === client.id ? (
              <div>
                <input value={client.name} onChange={(e) => handleEditClient(client.id, e.target.value, client.email)} className="form-control form-control-sm mb-2" />
                <input value={client.email} onChange={(e) => handleEditClient(client.id, client.name, e.target.value)} className="form-control form-control-sm mb-2" />
                <button onClick={() => setEditingClient(null)} className="btn btn-primary btn-sm me-2">Save</button>
                <button onClick={() => handleDeleteClient(client.id)} className="btn btn-danger btn-sm">Delete</button>
              </div>
            ) : (
              <div>
                <span>{client.name}</span>
                <span>{client.email}</span>
                <button onClick={() => setEditingClient(client.id)} className="btn btn-primary btn-sm ms-2 me-2">Edit</button>
              </div>
            )}

              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h2>Add New Client</h2>
            <Formik
              initialValues={{ name: '', email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleAddClient}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-2">
                    <Field type="text" name="name" className="form-control form-control-sm" placeholder="Name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <Field type="email" name="email" className="form-control form-control-sm" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-success btn-sm" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Client'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientManagement;
