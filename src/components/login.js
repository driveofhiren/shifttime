import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({ history }) => {
  const [loginError, setLoginError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/login', values);
      const { user } = response.data;
      setLoggedInUser(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      
    } catch (error) {
      setLoginError('Invalid email or password');
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="container">
      {loggedInUser && (
        <div>
          <h2>Welcome, {loggedInUser.role} {loggedInUser.firstName}</h2>
    
        </div>
      )}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="p-3 bg-white shadow rounded">
                <h2 className="text-center mb-4">Login</h2>
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
                    className="text-danger"
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
                    className="text-danger"
                  />
                </div>
                {loginError && (
                  <div className="mb-3 text-danger">{loginError}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
