import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    role: Yup.string().required('Role is required'),
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
              email: '',
              username: '',
              password: '',
              role: 'employee'
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id="signupForm" className="p-3 bg-white shadow rounded needs-validation" noValidate>
                <h2 className="text-center mb-4">Sign Up</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <Field type="email" className="form-control" id="email" name="email" required />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">I am</label>
                  <Field as="select" className="form-select" id="role" name="role" required>
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                  </Field>
                  <ErrorMessage name="role" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <Field type="text" className="form-control" id="username" name="username" required />
                  <ErrorMessage name="username" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <Field type="password" className="form-control" id="password" name="password" required />
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Sign Up</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
