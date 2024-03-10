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
  const [newUser, setNewUser] = useState({ id: null, firstName: '', lastName: '', email: '', gender: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/users');
      if (response.ok) {
        const data = await response.json(); // Extract JSON data from response
        setUsers(data); // Set the users state to the fetched data
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        const data = await response.json();
        setUsers([...users, data]);
        setNewUser({ id: null, firstName: '', lastName: '', email: '', gender: '' });
      } else {
        console.error('Failed to add user:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = async (id, newFirstName, newLastName, newEmail, newGender) => {
    try {
      const response = await fetch(`/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: newFirstName, lastName: newLastName, email: newEmail, gender: newGender }),
      });
      if (response.ok) {
        const updatedUsers = users.map(user =>
          user.id === id ? { ...user, firstName: newFirstName, lastName: newLastName, email: newEmail, gender: newGender } : user
        );
        setUsers(updatedUsers);
        setEditingUser(null);
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
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="mb-4">Users</h2>
          <ul className="list-group">
            {users && users.map(user => (
              <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                {editingUser === user.id ? (
                  <div className="d-flex flex-column">
                    <label htmlFor={`firstName_${user.id}`}>First Name</label>
                    <input id={`firstName_${user.id}`} value={user.firstName} onChange={(e) => handleEditUser(user.id, e.target.value, user.lastName, user.email, user.gender)} className="form-control form-control-sm mb-2" />
                    <label htmlFor={`lastName_${user.id}`}>Last Name</label>
                    <input id={`lastName_${user.id}`} value={user.lastName} onChange={(e) => handleEditUser(user.id, user.firstName, e.target.value, user.email, user.gender)} className="form-control form-control-sm mb-2" />
                    <label htmlFor={`email_${user.id}`}>Email</label>
                    <input id={`email_${user.id}`} value={user.email} onChange={(e) => handleEditUser(user.id, user.firstName, user.lastName, e.target.value, user.gender)} className="form-control form-control-sm mb-2" />
                    <label htmlFor={`gender_${user.id}`}>Gender</label>
                    <input id={`gender_${user.id}`} value={user.gender} onChange={(e) => handleEditUser(user.id, user.firstName, user.lastName, user.email, e.target.value)} className="form-control form-control-sm mb-2" />
                    <button onClick={() => setEditingUser(null)} className="btn btn-primary btn-sm me-2">Save</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger btn-sm">Delete</button>
                  </div>
                ) : (
                  <div>
                  <span> <label>Name : </label>{user.firstName} {user.lastName}</span><br />
                  <span><label>Email :</label>{user.email}</span><br />
                  <span><label>Gender :</label>{user.gender}</span><br />
                  <button onClick={() => setEditingUser(user.id)} className="btn btn-primary btn-sm ms-2 me-2">Edit</button>
                </div>
                
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2>Add New User</h2>
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
              validationSchema={validationSchema}
              onSubmit={handleAddUser}
            >
              {({ isSubmitting }) => (
                <Form className="d-flex flex-column">
                  <div className="mb-2">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName" className="form-control form-control-sm" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" name="lastName" className="form-control form-control-sm" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="form-control form-control-sm" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="gender">Gender</label>
                    <Field type="text" name="gender" className="form-control form-control-sm" placeholder="Gender" />
                    <ErrorMessage name="gender" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-success btn-sm" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add User'}
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
