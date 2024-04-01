import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

const ClientManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditUser = async (id, updatedUser) => {
    try {
      const response = await fetch(`/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        fetchUsers();
        setEditingUser(null);
        setSaveMessage('Changes saved successfully.');
      } else {
        console.error('Failed to edit user:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers();
        setDeleteMessage('User deleted successfully.');
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container ">
      <h2>Edit Clients</h2>
      {saveMessage && <div className="alert alert-success">{saveMessage}</div>}
      {deleteMessage && <div className="alert alert-success">{deleteMessage}</div>}
      <div className="row ">
        {users && users.map(user => (
          <div key={user._id} className="col-md-6 mt-5 md-5">
            <div className="list-group-item border rounded p-3">
              {editingUser === user._id ? (
                <div className="d-flex flex-column">
                  <Formik
                    initialValues={{
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email: user.email,
                      gender: user.gender,
                      plan: user.plan
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      handleEditUser(user._id, values);
                      setSubmitting(false);
                    }}
                  >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <Field type="text" name="firstName" className="form-control mb-2" />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                        <Field type="text" name="lastName" className="form-control mb-2" />
                        <ErrorMessage name="lastName" component="div" className="text-danger" />
                        <Field type="email" name="email" className="form-control mb-2" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                        <Field type="text" name="gender" className="form-control mb-2" />
                        <ErrorMessage name="gender" component="div" className="text-danger" />
                        <Field type="text" name="plan" className="form-control mb-2" />
                        <ErrorMessage name="plan" component="div" className="text-danger" />
                        <button type="submit" className="btn btn-primary me-2" disabled={isSubmitting}>Save</button>
                        <button type="button" onClick={() => setEditingUser(null)} className="btn btn-secondary">Cancel</button>
                      </Form>
                    )}
                  </Formik>
                </div>
              ) : (
                <div>
                  <p>Name: {user.firstName} {user.lastName}</p>
                  <p>Email: {user.email}</p>
                  <p>Gender: {user.gender}</p>
                  <p>Plan: {user.plan}</p>
                  <button onClick={() => setEditingUser(user._id)} className="btn btn-primary me-2">Edit</button>
                  <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManagement;
