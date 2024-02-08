import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'employee' // Default role is set to 'employee'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form id="signupForm" className="p-3 bg-white shadow rounded needs-validation" noValidate onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">I am</label>
              <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange}>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter a username.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter a password.</div>
            </div>
           
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
