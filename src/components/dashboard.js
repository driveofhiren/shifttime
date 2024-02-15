import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  location: Yup.string().required('Location is required'),
  industry: Yup.string().required('Industry is required'),
  userType: Yup.string().required('User Type is required'),
});

function Dashboard() {
  return (
    <div className="container">
      <h2>Update Profile</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          password: '',
          location: '',
          industry: '',
          userType: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <Field type="text" className="form-control" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <Field type="email" className="form-control" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <Field type="text" className="form-control" id="phoneNumber" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Change Password</label>
              <Field type="password" className="form-control" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <Field type="text" className="form-control" id="location" name="location" />
              <ErrorMessage name="location" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="industry" className="form-label">Industry</label>
              <Field type="text" className="form-control" id="industry" name="industry" />
              <ErrorMessage name="industry" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="userType" className="form-label">User Type</label>
              <Field as="select" className="form-control" id="userType" name="userType">
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </Field>
              <ErrorMessage name="userType" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Update</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Dashboard;
