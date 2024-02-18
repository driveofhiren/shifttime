import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  location: Yup.string().required('Location is required'),
  userType: Yup.string().required('User Type is required'),
  role: Yup.string().required('Role is required'),
  clientId: Yup.string().required('Client ID is required'),
  isFirstTimeLogin: Yup.boolean().required('First Time Login is required'),
  emergencyContactName: Yup.string().required('Emergency Contact Name is required'),
  emergencyContactNumber: Yup.string().required('Emergency Contact Number is required'),
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
          userType: '',
          role: '',
          clientId: '',
          isFirstTimeLogin: true,
          emergencyContactName: '',
          emergencyContactNumber: ''
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
              <label htmlFor="userType" className="form-label">User Type</label>
              <Field as="select" className="form-control" id="userType" name="userType">
                <option value="Manager">Admin</option>
                <option value="Employee">Employee</option>
              </Field>
              <ErrorMessage name="userType" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <Field type="text" className="form-control" id="role" name="role" />
              <ErrorMessage name="role" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="clientId" className="form-label">Client ID</label>
              <Field type="text" className="form-control" id="clientId" name="clientId" />
              <ErrorMessage name="clientId" component="div" className="text-danger" />
            </div>
        
            <div className="mb-3">
              <label htmlFor="emergencyContactName" className="form-label">Emergency Contact Name</label>
              <Field type="text" className="form-control" id="emergencyContactName" name="emergencyContactName" />
              <ErrorMessage name="emergencyContactName" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="emergencyContactNumber" className="form-label">Emergency Contact Number</label>
              <Field type="text" className="form-control" id="emergencyContactNumber" name="emergencyContactNumber" />
              <ErrorMessage name="emergencyContactNumber" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Update</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Dashboard;
