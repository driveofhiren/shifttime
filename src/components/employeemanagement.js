import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
});

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({ id: null, name: '', email: '', role: '', phoneNumber: '' });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees'); // Replace '/api/employees' with your backend endpoint
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddEmployee = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const data = await response.json();
        setEmployees([...employees, data]);
        setNewEmployee({ id: null, name: '', email: '', role: '', phoneNumber: '' });
      } else {
        console.error('Failed to add employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditEmployee = async (id, newName, newEmail, newRole, newPhoneNumber) => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, email: newEmail, role: newRole, phoneNumber: newPhoneNumber }),
      });
      if (response.ok) {
        const updatedEmployees = employees.map(employee =>
          employee.id === id ? { ...employee, name: newName, email: newEmail, role: newRole, phoneNumber: newPhoneNumber } : employee
        );
        setEmployees(updatedEmployees);
        setEditingEmployee(null);
      } else {
        console.error('Failed to edit employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedEmployees = employees.filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
      } else {
        console.error('Failed to delete employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Employees</h2>
          <ul className="list-group">
            {employees.map(employee => (
              <li key={employee.id} className="list-group-item">
                {/* Rendering logic remains the same */}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h2>Add New Employee</h2>
            <Formik
              initialValues={{ name: '', email: '', role: '', phoneNumber: '' }}
              validationSchema={validationSchema}
              onSubmit={handleAddEmployee}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-2">
                    <Field type="text" name="name" className="form-control mb-2" placeholder="Name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <Field type="email" name="email" className="form-control mb-2" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <Field as="select" name="role" className="form-control mb-2">
                      <option value="">Select Role</option>
                      <option value="Manager">Manager</option>
                      <option value="Employee">Employee</option>
                    </Field>
                    <ErrorMessage name="role" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <Field type="text" name="phoneNumber" className="form-control mb-2" placeholder="Phone Number" />
                    <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Employee'}
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

export default EmployeeManagement;
