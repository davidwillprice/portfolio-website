import Link from "next/link";

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
      <div className={styles.links}>
        <a
          aria-label="Download David Price's CV"
          href="/2026_david-price-cv.pdf"
          download>
          <svg
            height={35}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            viewBox="0 0 3e3 3e3"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.link}>
            <g transform="matrix(2.4876 0 0 2.4876 -5078.1 -1550.4)">
              <path
                d="m2867.9 629.12h-618.88c-15.59 0-28.24 12.655-28.24 28.243v1137.8c0 15.59 12.65 28.25 28.24 28.25h790.58c15.58 0 28.24-12.66 28.24-28.25v-966.06h-150.87c-27.08 0-49.07-21.99-49.07-49.076v-150.87zm-539.15 1044.9h315.56c11.5 0 20.83-9.34 20.83-20.84s-9.33-20.83-20.83-20.83h-315.56c-11.5 0-20.83 9.33-20.83 20.83s9.33 20.84 20.83 20.84zm0-100.11h473.23c11.5 0 20.83-9.33 20.83-20.83s-9.33-20.83-20.83-20.83h-473.23c-11.5 0-20.83 9.33-20.83 20.83s9.33 20.83 20.83 20.83zm0-101.13h627.5c11.5 0 20.83-9.34 20.83-20.83 0-11.5-9.33-20.84-20.83-20.84h-627.5c-11.5 0-20.83 9.34-20.83 20.84 0 11.49 9.33 20.83 20.83 20.83zm0-101.13h627.5c11.5 0 20.83-9.34 20.83-20.84 0-11.49-9.33-20.83-20.83-20.83h-627.5c-11.5 0-20.83 9.34-20.83 20.83 0 11.5 9.33 20.84 20.83 20.84zm277.16-254.05 6 67.2c-16.8 6.93-37.87 10.4-63.2 10.4s-45.67-2.67-61-8c-15.33-5.34-27.4-13.74-36.2-25.2-8.8-11.47-14.93-24.94-18.4-40.4-3.47-15.47-5.2-34.54-5.2-57.2 0-22.67 1.73-41.8 5.2-57.4 3.47-15.602 9.6-29.136 18.4-40.602 17.07-22.134 48.4-33.2 94-33.2 10.13 0 22.07 1 35.8 3s23.93 4.466 30.6 7.4l-12 61.202c-17.33-3.74-33.2-5.602-47.6-5.602s-24.4 1.332-30 4.002c-5.6 2.66-8.4 8-8.4 16v104.8c10.4 2.13 20.93 3.2 31.6 3.2 22.67 0 42.8-3.2 60.4-9.6zm170.4-178.4h84.4l-62 250h-116.8l-62-250h84.4l34 158.8h3.6l34.4-158.8zm241.91-151.81h-101.25c-4.09 0-7.41-3.321-7.41-7.41v-101.38c31.88 31.596 77.34 77.166 108.66 108.79v1e-3z"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
        <a
          aria-label="Email David Price"
          href="mailto: davidwillprice@gmail.com">
          <svg
            viewBox="0 0 24 18"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            className={styles.link}
            height={35}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}>
            <g id="Artboard1" transform="matrix(1,0,0,1,0,-3)">
              <rect
                x={0}
                y={3}
                width={24}
                height={18}
                style={{
                  fill: "none",
                }}
              />
              <path
                d="M0,3L0,21L24,21L24,3L0,3ZM22,19L15.474,12.382L12.029,15.865L8.611,12.34L2,19L7.051,11L2,5L12.029,12.446L22,5L17.002,11.01L22,19Z"
                style={{
                  fillRule: "nonzero",
                }}
              />
            </g>
          </svg>
        </a>
        <a
          aria-label="David Price LinkedIn"
          href="https://www.linkedin.com/in/davidwillprice/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={35}
            viewBox="0 0 24 24"
            className={styles.link}>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          aria-label="David Price GitHub"
          href="https://github.com/davidwillprice/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.link}
            height={35}
            viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
