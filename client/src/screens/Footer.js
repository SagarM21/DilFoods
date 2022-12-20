import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className='text-center text-lg-start bg-transparent text-muted fixed-bottom '>
				<section className='d-flex justify-content-center p-2 border-bottom'>
					<div>
						<a
							href='https://www.linkedin.com/in/sagar-maheshwari-3330b6166/'
							className='me-4 link-secondary'
						>
							<i className='fab fa-linkedin'></i>
						</a>
						<a
							href='https://github.com/SagarM21'
							className='me-4 link-secondary'
						>
							<i className='fab fa-github'></i>
						</a>
					</div>
				</section>

				<div className='text-center p-2'>
					© 2022 {""}
					<a
						className='text-reset fw-bold'
						href='https://github.com/SagarM21'
						style={{ textDecoration: "none" }}
					>
						SagarM21
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
