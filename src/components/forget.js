import React, { useState } from 'react'

const ForgotPassword = () => {
	const [formData, setFormData] = useState({
		email: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// Handle form submission here
		console.log(formData) // You can replace this with your submission logic
	}

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-6">
					<form
						id="forgotPasswordForm"
						className="p-3 bg-white shadow rounded needs-validation"
						noValidate
						onSubmit={handleSubmit}
					>
						<h2 className="text-center mb-4">Forgot Password</h2>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email:
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<div className="invalid-feedback">
								Please enter a valid email address.
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
