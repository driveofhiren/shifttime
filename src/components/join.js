import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    role: Yup.string().required('Role is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
     
      const { email, username, password, role, firstName, lastName, gender } = values;
  
      await axios.post('/signup', { email, username, password, role, firstName, lastName, gender });
      alert('User created successfully');
    } catch (error) {
      alert('Error creating user');
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
              role: 'ADMIN',
              firstName: '',
              lastName: '',
              gender: '',
              plan: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="p-3 bg-white shadow rounded needs-validation">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender:
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    id="gender"
                    name="gender"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.email}>{user.email}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default SignUp;