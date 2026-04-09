import Link from "next/link";

import ButtonCon from "@components/button-con.module";

import btnStyles from "@styles/button.module.scss";

export default function NotFound() {
  return (
    <section className="full_page_section">
      <h1>Page not found</h1>
      <p>
        Sorry, I&apos;m afraid the page you are looking for could not be found.
      </p>
      <ButtonCon align="center">
        <Link
          href="/"
          className={`${btnStyles.button} ${btnStyles.primary}`}
          style={{ marginTop: "16px" }}>
          Return to the Homepage
        </Link>
      </ButtonCon>
    </section>
  );
}
