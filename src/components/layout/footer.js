import React from "react"
import { Link } from "gatsby"
import footerStyles from "../../styles/component/layout/footer.module.scss"

import EmailIcon from "../../svgs/footer/email-icon.svg"
import LinkedInIcon from "../../svgs/footer/linkedin-icon.svg"
import GitHubIcon from "../../svgs/footer/github-icon.svg"
import CVIcon from "../../svgs/footer/cv-icon.svg"

import CV from "../../documents/2021_david-price-cv.pdf"

const Footer = props => (
  //const currentDate = new Date();
  //const currentYear = currentDate.getFullYear();

  <footer className={footerStyles.footerCon}>
    <div className={footerStyles.footer} id="contact">
      <div className={footerStyles.smallPrint}>
        <p>
          David Price - Built with Gatsby -{" "}
          <Link
            className={footerStyles.privPolLink}
            to={`/privacy-policy/`}
            aria-label="Privacy Policy"
          >
            Privacy&nbsp;policy
          </Link>
        </p>
      </div>
      <div className={footerStyles.links}>
        <a aria-label="Download CV button" href={CV} download>
          <CVIcon className={footerStyles.footerLinkItem} />
        </a>
        <a aria-label="Email button" href="mailto: davidwillprice@gmail.com">
          <EmailIcon className={footerStyles.footerLinkItem} />
        </a>
        <a
          aria-label="LinkedIn button"
          href="https://www.linkedin.com/in/davidwillprice/"
        >
          <LinkedInIcon className={footerStyles.footerLinkItem} />
        </a>
        <a aria-label="GitHub button" href="https://github.com/davidwillprice/">
          <GitHubIcon className={footerStyles.footerLinkItem} />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
