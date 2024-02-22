import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn')
	const userRole = sessionStorage.getItem('role')

	const handleLogout = () => {
		console.log('hi')
		sessionStorage.removeItem('isLoggedIn')
		sessionStorage.removeItem('username')
		sessionStorage.removeItem('role')
	}

	return (
		<div>
			<meta charSet="utf-8" />
			<meta
				content="width=device-width, initial-scale=1.0"
				name="viewport"
			/>
			<title>ShiftTimeBootstrap Template - Index</title>
			<meta content="" name="description" />
			<meta content="" name="keywords" />
			<link href="assets/img/favicon.png" rel="icon" />
			<link
				href="assets/img/apple-touch-icon.png"
				rel="apple-touch-icon"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin=""
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
				rel="stylesheet"
			/>
			<link
				href="assets/vendor/bootstrap/css/bootstrap.min.css"
				rel="stylesheet"
			/>
			<link
				href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
				rel="stylesheet"
			/>
			<link href="assets/vendor/aos/aos.css" rel="stylesheet" />
			<link
				href="assets/vendor/glightbox/css/glightbox.min.css"
				rel="stylesheet"
			/>
			<link
				href="assets/vendor/swiper/swiper-bundle.min.css"
				rel="stylesheet"
			/>
			<link href="assets/css/main.css" rel="stylesheet" />

			<section id="topbar" className="topbar d-flex align-items-center">
				<div className="container d-flex justify-content-center justify-content-md-between">
					<div className="contact-info d-flex align-items-center">
						<i className="bi bi-envelope d-flex align-items-center">
							<a href="mailto:contact@example.com">Email us</a>
						</i>
						<i className="bi bi-phone d-flex align-items-center ms-4">
							<span>+1 4377993689 </span>
						</i>
					</div>
					<div className="social-links d-none d-md-flex align-items-center">
						<a href="#" className="twitter">
							<i className="bi bi-twitter" />
						</a>
						<a href="#" className="facebook">
							<i className="bi bi-facebook" />
						</a>
						<a href="#" className="instagram">
							<i className="bi bi-instagram" />
						</a>
						<a href="#" className="linkedin">
							<i className="bi bi-linkedin" />
						</a>
					</div>
				</div>
			</section>
			<header id="header" className="header d-flex align-items-center">
				<div className="container-fluid container-xl d-flex align-items-center justify-content-between">
					<a
						href="index.html"
						className="logo d-flex align-items-center"
					>
						<img src="assets/img/logo.png" alt="" />
					</a>
					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#team">Team</a>
							</li>
							{!isLoggedIn && (
								<>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/signup">Join</Link>
									</li>
								</>
							)}
							{isLoggedIn && (
								<>
									{/* Conditionally render based on user role */}
									{userRole === 'superadmin' && (
										<>
											<li>
												<Link to="/clientmanagement">
													Client Management
												</Link>
											</li>
											<li>
												<Link to="/dashboard">
													Dashboard
												</Link>
											</li>
										</>
									)}
									{userRole === 'employee' && (
										<li>
											<Link to="/dashboard">
												Dashboard
											</Link>
										</li>
									)}
									{userRole === 'manager' && (
										<li>
											<Link to="/employeemanagement">
												Employee management
											</Link>
										</li>
									)}
									<li>
										<button onClick={handleLogout}>
											Logout
										</button>
									</li>
								</>
							)}
							<li>
								<a href="blog.html">Contact</a>
							</li>
						</ul>
					</nav>
					{/* .navbar */}
					<i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
					<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
				</div>
			</header>
		</div>
	)
}

export default Header
