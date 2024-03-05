import React from 'react'

const home = () => {
	const handleSubscription = (plan) => {
		// Logic to handle subscription, e.g., API call,

		const userModel = {
			email: '',
			username: '',
			password: '',
			role: 'employee',
			firstName: '',
			lastName: '',
			gender: '',
			plan: '',
		}
		console.log('User Model:', userModel)
	}
	return (
		<>
			<section id="hero" className="hero">
				<div className="container position-relative">
					<div className="row gy-5">
						<div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
							<h2>
								Welcome to <span>ShiftTime</span>
							</h2>
							<p>
								Create schedules in minutes, streamline changes
								and reminders, hit labor targets.
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
					<div className="container">
						<div className="section-header">
							<h2>About Us</h2>
							<p>
								The ShiftTime team is very familiar with the
								restaurant industry. In fact, you can call us
								seasoned individuals who have spent years
								wearing different hats including serving,
								bartending, and more. During this time, one
								thing held true across the board – scheduling
								was often the most dreadful part of the job.
								Beyond keeping track of who could work which
								shifts, schedules copied over from the previous
								week didn’t take budgeting into consideration,
								it was difficult for staff members to switch
								shifts, and communication was often a challenge.
								Enter: ShiftTime. What a long way we’ve come
								since those basement days in 2024!
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
										Thanks to data-backed labor forecasts,
										you’re setting your team up for success
										every time you create an optimized
										schedule with Ameego. Schedule your high
										performers where you need them – across
										multiple locations and brands, within
										one platform.
									</p>
								</div>
							</div>
						</div>

						<div className="row gy-4">
							<div className="col-lg-6">
								<div className="content ps-0 ps-lg-5 textproduct">
									<p className="fst-italic">
										Manually recording who started their
										shift and when, who’s on break, and who
										has left for the day is a chore.
										Punching in and out with Ameego, using
										the format that is best for your team
										makes payroll painless with accurate
										timesheets.{' '}
									</p>
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
										Rather than individually asking team
										members if they can cover a shift, your
										staff can view and make requests in-app.
										All you have to do now is approve the
										change.{' '}
									</p>
								</div>
							</div>
						</div>

						<div className="row gy-4">
							<div className="col-lg-6">
								<div className="content ps-0 ps-lg-5 textproduct">
									<p className="fst-italic">
										No more missed shifts or showing up at
										the wrong time or location. Your team
										will be able to see their work schedules
										in the palm of their hands.{' '}
									</p>
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
					<div className="container">
						<div className="section-header">
							<h2>From our Customers</h2>
							<p></p>
						</div>
						<div className="slides-3 swiper">
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
												Proin iaculis purus consequat
												sem cure digni ssim donec
												porttitora entum suscipit
												rhoncus. Accusantium quam,
												ultricies eget id, aliquam eget
												nibh et. Maecen aliquam, risus
												at semper.
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
												Export tempor illum tamen malis
												malis eram quae irure esse
												labore quem cillum quid cillum
												eram malis quorum velit fore
												eram velit sunt aliqua noster
												fugiat irure amet legam anim
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
												Enim nisi quem export duis
												labore cillum quae magna enim
												sint quorum nulla quem veniam
												duis minim tempor labore quem
												eram duis noster aute amet eram
												fore quis sint minim.
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
												Fugiat enim eram quae cillum
												dolore dolor amet nulla culpa
												multos export minim fugiat minim
												velit minim dolor enim duis
												veniam ipsum anim magna sunt
												elit fore quem dolore.
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
												Quis quorum aliqua sint quem
												legam fore sunt eram irure
												aliqua veniam tempor noster
												veniam enim culpa labore duis
												sunt culpa nulla illum cillum
												fugiat legam esse veniam culpa
												fore.
												<i className="bi bi-quote quote-icon-right" />
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-pagination" />
						</div>
					</div>
				</section>

				<section id="pricing" className="pricing sections-bg ">
					<div className="container">
						<div className="section-header">
							<h2>Pricing</h2>
							<p>
								Aperiam dolorum et et wuia molestias qui eveniet
								numquam nihil porro incidunt dolores placeat
								sunt id nobis omnis tiledo stran delop
							</p>
						</div>
						<div className="row g-4 py-lg-5">
							{/* Gold Plan */}
							<div className="col-lg-4">
								<div className="pricing-item">
									<h3>Gold Plan</h3>
									<div className="icon">
										<i className="bi bi-credit-card" />
									</div>
									<h4>
										<sup>$</sup>59
										<span> / mont</span>
									</h4>
									<ul>
										<li>
											<i className="bi bi-check" />{' '}
											One-touch scheduling
										</li>
										<li>
											<i className="bi bi-check" /> Labor
											optimization and alerts
										</li>
										<li>
											<i className="bi bi-check" /> Time
											clocking with punch in / out
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Timesheets with payroll export
										</li>
										<li>
											<i className="bi bi-check" /> Shift
											swapping
										</li>
									
									</ul>
									<div className="text-center">
										<button
											onClick={() =>
												handleSubscription('Gold')
											}
											className="buy-btn"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>

							{/* Silver Plan */}
							<div className="col-lg-4">
								<div className="pricing-item">
									<h3>Silver Plan</h3>
									<div className="icon">
										<i className="bi bi-credit-card" />
									</div>
									<h4>
										<sup>$</sup>49
										<span> / month</span>
									</h4>
									<ul>
										<li>
											<i className="bi bi-check" />{' '}
											One-touch scheduling
										</li>
										<li>
											<i className="bi bi-check" /> Labor
											optimization and alerts
										</li>
										<li>
											<i className="bi bi-check" /> Time
											clocking with punch in / out
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Timesheets with payroll export
										</li>
										<li>
											<i className="bi bi-check" /> Shift
											swapping
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Payroll reconciliation reporting for
											multi-location staffing
										</li>
									</ul>
									<div className="text-center">
										<button
											onClick={() =>
												handleSubscription('Silver')
											}
											className="buy-btn"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>

							{/* Platinum Plan */}
							<div className="col-lg-4">
								<div className="pricing-item">
									<h3>Platinum Plan</h3>
									<div className="icon">
										<i className="bi bi-credit-card" />
									</div>
									<h4>
										<sup>$</sup>79
										<span> / month</span>
									</h4>
									<ul>
										<li>
											<i className="bi bi-check" />{' '}
											One-touch scheduling
										</li>
										<li>
											<i className="bi bi-check" /> Labor
											optimization and alerts
										</li>
										<li>
											<i className="bi bi-check" /> Time
											clocking with punch in / out
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Timesheets with payroll export
										</li>
										<li>
											<i className="bi bi-check" /> Shift
											swapping
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Payroll reconciliation reporting for
											multi-location staffing
										</li>
										<li>
											<i className="bi bi-check" />{' '}
											Multi-location dashboard and
											reporting
										</li>
									</ul>
									<div className="text-center">
										<button
											onClick={() =>
												handleSubscription('Platinum')
											}
											className="buy-btn"
										>
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="team" className="team">
					<div className="container">
						<div className="section-header">
							<h2>Our Team</h2>
							<p>
								Nulla dolorum nulla nesciunt rerum facere sed ut
								inventore quam porro nihil id ratione ea sunt
								quis dolorem dolore earum
							</p>
						</div>
						<div className="row gy-4">
							<div className="col-xl-3 col-md-6 d-flex">
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
							<div className="col-xl-3 col-md-6 d-flex">
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
							<div className="col-xl-3 col-md-6 d-flex">
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
							<div className="col-xl-3 col-md-6 d-flex">
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
			</main>
		</>
	)
}

export default home
