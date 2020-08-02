import React, { Component } from 'react';
import { Link } from 'gatsby';
import footerStyles from '../styles/footer.module.css';

class Footer extends Component {
	render() {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();

		return (
			<div className={footerStyles.footerCon}>
				<div className={footerStyles.footerLinks}>
					<Link
						aria-label="Email button"
						className={footerStyles.footerLinkItem}
						to={`mailto: davidwillprice@gmail.com`}
					/>
					<Link
						aria-label="LinkedIn button"
						className={footerStyles.footerLinkItem}
						to={`https://www.linkedin.com/in/davidwillprice/`}
					/>
					<Link
						aria-label="GitHub button"
						className={footerStyles.footerLinkItem}
						to={`https://github.com/davidwillprice/`}
					/>
				</div>
				<div className={footerStyles.footerSmallPrint}>
					<p>
						David Price © {currentYear} -{' '}
						<Link className={footerStyles.privPolLink} to={`/privacy-policy/`} aria-label="Privacy Policy">
							Privacy policy
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
