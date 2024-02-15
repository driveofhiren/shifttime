import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id="loginForm" className="p-3 bg-white shadow rounded">
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <Field type="text" className="form-control" id="username" name="username" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <Field type="password" className="form-control" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Login</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
