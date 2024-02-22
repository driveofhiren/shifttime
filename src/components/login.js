import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [loginError, setLoginError] = useState('')

	const users = [
		{ username: 'employee', password: 'employee123', role: 'employee' },
		{ username: 'manager', password: 'manager123', role: 'manager' },
		{
			username: 'superadmin',
			password: 'superadmin123',
			role: 'superadmin',
		},
	]

	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required'),
	})

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			const user = users.find(
				(user) =>
					user.username === values.username &&
					user.password === values.password
			)
			if (user) {
				setIsLoggedIn(true)
				sessionStorage.setItem('isLoggedIn', 'true')
				sessionStorage.setItem('username', user.username)
				sessionStorage.setItem('role', user.role)
			} else {
				setLoginError('Invalid username or password')
			}
			setSubmitting(false)
		}, 400)
	}

	const handleLogout = () => {
		setIsLoggedIn(false)
		sessionStorage.removeItem('isLoggedIn')
		sessionStorage.removeItem('username')
		sessionStorage.removeItem('role')
	}

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-6">
					{!isLoggedIn && (
						<Formik
							initialValues={{
								username: '',
								password: '',
							}}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ isSubmitting }) => (
								<Form
									id="loginForm"
									className="p-3 bg-white shadow rounded"
								>
									<h2 className="text-center mb-4">Login</h2>
									<div className="mb-3">
										<label
											htmlFor="username"
											className="form-label"
										>
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
											className="text-danger"
										/>
									</div>
									<div className="mb-3">
										<label
											htmlFor="password"
											className="form-label"
										>
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
										<div className="mb-3 text-danger">
											{loginError}
										</div>
									)}
									<button
										type="submit"
										className="btn btn-success"
										disabled={isSubmitting}
									>
										Login
									</button>
								</Form>
							)}
						</Formik>
					)}
					{isLoggedIn && (
						<div>
							<p>Welcome, {sessionStorage.getItem('username')}</p>
							<button
								onClick={handleLogout}
								className="btn btn-danger"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Login
