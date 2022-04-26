import React from "react"
import { Link } from "gatsby"
import {
  footerCon,
  footer,
  smallPrint,
  links,
  link,
} from "../../styles/component/layout/footer.module.scss"

import EmailIcon from "../../svgs/footer/email-icon.svg"
import LinkedInIcon from "../../svgs/footer/linkedin-icon.svg"
import GitHubIcon from "../../svgs/footer/github-icon.svg"
import CVIcon from "../../svgs/footer/cv-icon.svg"

import CV from "../../documents/2022_david-price-cv.pdf"

export default function Footer() {
  return (
    <footer className={footerCon}>
      <div className={footer} id="contact">
        <div className={smallPrint}>
          <p>
            David Price - Built with Gatsby -{" "}
            <Link to={`/privacy-policy/`} aria-label="Privacy Policy">
              Privacy&nbsp;Policy
            </Link>
          </p>
        </div>
        <div className={links}>
          <a aria-label="Download CV button" href={CV} download>
            <CVIcon className={link} />
          </a>
          <a aria-label="Email button" href="mailto: davidwillprice@gmail.com">
            <EmailIcon className={link} />
          </a>
          <a
            aria-label="LinkedIn button"
            href="https://www.linkedin.com/in/davidwillprice/"
          >
            <LinkedInIcon className={link} />
          </a>
          <a
            aria-label="GitHub button"
            href="https://github.com/davidwillprice/"
          >
            <GitHubIcon className={link} />
          </a>
        </div>
      </div>
    </footer>
  )
}
