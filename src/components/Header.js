import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs'; // Assuming you've installed react-icons package
import { BsStarFill } from 'react-icons/bs'; 
import { BsStarHalf  } from 'react-icons/bs'; 
import { BsStar } from 'react-icons/bs'; 


function Header() {
    // Retrieve loggedIn and role data from localStorage
	let userRole,userPlan="";
    const isLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'));
    if (isLoggedIn) {
		userRole = isLoggedIn.role;
        userPlan = isLoggedIn.plan;
	}

    const handleLogout = () => {
        // Clear loggedIn and role data from localStorage upon logout
        localStorage.removeItem('loggedInUser');
        
        // Redirect to login page
        window.location.href = '/login'; // Change the URL to the login page URL
    };
    

    return (
        <div>
              <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>ShiftTimeBootstrap Template - Index</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />
            <link href="assets/img/favicon.png" rel="icon" />
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
            <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
            <link href="assets/css/main.css" rel="stylesheet" />
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                    </a>
                    <nav id="navbar" className="navbar">
    <ul>
        <li>
            <a href="/">Home</a>
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
                {userRole === 'SuperAdmin' && (
                    <>
                        <li>
                            <Link to="/clientmanagement">Client Management</Link>
                        </li>
                       
                    </>
                )}
                {userRole === 'employee' && (
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                )}
                {userRole === 'Manager' && (
                    <li>
                        <Link to="/employeemanagement">Employee Management</Link>
                    </li>
                )}
                <li>
                    <Link onClick={handleLogout}>Logout</Link>
                </li>
            </>
        )}
        <li>
            <a href="blog.html">Contact</a>
        </li>
        {isLoggedIn && (
            <>
                {userRole === 'SuperAdmin' && (
                    <li>
                        <BsPerson/> <Link to="/">SuperAdmin</Link>
                    </li>
                )}
                {userRole === 'employee' && (
                    <li>
                        <BsPerson/> <Link to="/">employee</Link>
                    </li>
                )}
                {userRole === 'Manager' && (
                    <li>
                        <BsPerson/> <Link to="/">Manager</Link>
                    </li>
                )}
                {userRole === 'ADMIN' && (
                    <li>
                        <BsPerson/> <Link to="/">ADMIN</Link>
                    </li>
                )}
            </>
        )}
        {isLoggedIn && userRole === 'ADMIN' && isLoggedIn.plan && (
            <>
                {isLoggedIn.plan === "Gold" && (
                    <li>
                        <BsStarFill  className="black" />
                    </li>
                )}
                {isLoggedIn.plan === "Silver" && (
                    <li>
                        <BsStarHalf className="black" />
                    </li>
                )}
                {isLoggedIn.plan === "Platinum" && (
                    <li>
                        <BsStar className="black" />
                    </li>
                )}
            </>
        )}
    </ul>
</nav>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
                </div>
            </header>
        </div>
    );
}

export default Header;
