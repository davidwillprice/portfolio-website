import Link from "next/link";

import ContactIcons from "./contact-icons";

import styles from "@components/footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__inner} id="contact">
      <div className={styles.text}>
        <p>
          David Price - Built with Next.js -{" "}
          <Link href="/privacy-policy/" aria-label="Privacy Policy">
            Privacy&nbsp;Policy
          </Link>
        </p>
      </div>
      <ContactIcons />
    </div>
  </footer>
);

export default Footer;
