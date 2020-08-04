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
					<a aria-label="Email button" href="mailto: davidwillprice@gmail.com">
						<div className={footerStyles.footerLinkItem} />
					</a>
					<a aria-label="LinkedIn button" href="https://www.linkedin.com/in/davidwillprice/">
						<div className={footerStyles.footerLinkItem} />
					</a>
					<a aria-label="GitHub button" href="https://github.com/davidwillprice/">
						<div className={footerStyles.footerLinkItem} />
					</a>
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
