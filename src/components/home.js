import React from 'react';

const home = () => {
  return (
    <>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>ShiftTimeBootstrap Template - Index</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />
    {/* Favicons */}
    <link href="assets/img/favicon.png" rel="icon" />
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
    {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    {/* Vendor CSS Files */}
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link
      href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
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
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Services</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator" />
              </a>
              <ul>
                <li>
                  <a href="#" />
                </li>
                <li>
                  <a href="#">Scheduling</a>
                </li>
                <li>
                  <a href="#">Time Tracking</a>
                </li>
                <li>
                  <a href="#">Reporting and Insights</a>
                </li>
                <li>
                  <a href="#">Manager Logbook</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="signup.html">Join</a>
            </li>
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
    
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" >
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>
              Welcome to <span>ShiftTime</span>
            </h2>
            <p>
            Create schedules in minutes, streamline changes and reminders, hit labor targets.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started">
                Join
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="assets/img/hero-img.svg"
              className="img-fluid"
              alt=""
              data-aos="zoom-out"
              data-aos-delay={100}
            />
          </div>
        </div>
      </div>
    </section>
    <main id="main">
      <section id="about" className="about">
        <div className="container" >
          <div className="section-header">
            <h2>About Us</h2>
            <p>
            The ShiftTime team is very familiar with the restaurant industry. In fact, you can call us seasoned individuals who have spent years wearing different hats including serving, bartending, and more. During this time, one thing held true across the board – scheduling was often the most dreadful part of the job. 

Beyond keeping track of who could work which shifts, schedules copied over from the previous week didn’t take budgeting into consideration, it was difficult for staff members to switch shifts, and communication was often a challenge. Enter: ShiftTime.

What a long way we’ve come since those basement days in 2024!
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-6">
              <h3>Employee scheduling</h3>
              <img
                src="assets/img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
             
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5 textproduct">
                <p className="fst-italic">
                Thanks to data-backed labor forecasts, you’re setting your team up for success every time you create an optimized schedule with Ameego. Schedule your high performers where you need them – across multiple locations and brands, within one platform.
                </p>
              </div>
            </div>
          </div>


          <div className="row gy-4">
          
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5 textproduct">
                <p className="fst-italic">
                Manually recording who started their shift and when, who’s on break, and who has left for the day is a chore. Punching in and out with Ameego, using the format that is best for your team makes payroll painless with accurate timesheets.                 </p>
              </div>
            </div>

            <div className="col-lg-6">
              <h3>Time tracking</h3>
              <img
                src="assets/img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
              
            </div>
          </div>



          <div className="row gy-4">
            <div className="col-lg-6">
              <h3>Shift shop</h3>
              <img
                src="assets/img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
             
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5 textproduct">
                <p className="fst-italic">
                Rather than individually asking team members if they can cover a shift, your staff can view and make requests in-app. All you have to do now is approve the change.                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5 textproduct">
                <p className="fst-italic">
                No more missed shifts or showing up at the wrong time or location. Your team will be able to see their work schedules in the palm of their hands.                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <h3>Mobile app </h3>
              <img
                src="assets/img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
             
            </div>
          </div>

         
          
        </div>
      </section>


     
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials">
        <div className="container" >
          <div className="section-header">
            <h2>From our Customers</h2>
            <p>
              
            </p>
          </div>
          <div
            className="slides-3 swiper"
         
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit fore
                      eram velit sunt aliqua noster fugiat irure amet legam anim
                      culpa.
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore quem
                      eram duis noster aute amet eram fore quis sint minim.
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim duis
                      veniam ipsum anim magna sunt elit fore quem dolore.
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                      fore.
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
      {/* ======= Portfolio Section ======= */}
      {/* ======= Our Team Section ======= */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>
              Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
              porro nihil id ratione ea sunt quis dolorem dolore earum
            </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6 d-flex"
           
            >
              <div className="member">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h4>Walter White</h4>
                <span>Web Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-xl-3 col-md-6 d-flex"
             
            >
              <div className="member">
                <img
                  src="assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h4>Sarah Jhinson</h4>
                <span>Marketing</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-xl-3 col-md-6 d-flex"
             
            >
              <div className="member">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h4>William Anderson</h4>
                <span>Content</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-xl-3 col-md-6 d-flex"
            
            >
              <div className="member">
                <img
                  src="assets/img/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* End Our Team Section */}
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing sections-bg">
        <div className="container" >
          <div className="section-header">
            <h2>Pricing</h2>
            <p>
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
              incidunt dolores placeat sunt id nobis omnis tiledo stran delop
            </p>
          </div>
          <div
            className="row g-4 py-lg-5"
            data-aos="zoom-out"
            data-aos-delay={100}
          >
            <div className="col-lg-4">
              <div className="pricing-item">
                <h3>Free Plan</h3>
                <div className="icon">
                  <i className="bi bi-box" />
                </div>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#" className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
            <div className="col-lg-4">
              <div className="pricing-item featured">
                <h3>Business Plan</h3>
                <div className="icon">
                  <i className="bi bi-airplane" />
                </div>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i className="bi bi-check" /> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i className="bi bi-check" /> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#" className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
            <div className="col-lg-4">
              <div className="pricing-item">
                <h3>Developer Plan</h3>
                <div className="icon">
                  <i className="bi bi-send" />
                </div>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bi bi-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i className="bi bi-check" /> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i className="bi bi-check" /> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#" className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
        </div>
      </section>
    </main>
    {/* End #main */}
    {/* ======= Footer ======= */}
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>ShiftTime</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
              terra videa magna derita valies darta donna mare fermentum iaculis
              eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
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
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>  
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>ShiftTime</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
        </div>
      </div>
    </footer>
  </>
  
  );
};

export default home;
