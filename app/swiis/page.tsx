import { Metadata } from "next";

import TitleBanner from "@/src/components/title-banner";

import styles from "@styles/showcasepage.module.scss";
import swiisLogoStyles from "@components/swiis-logos.module.scss";

import SwiisLogos from "@components/swiis-logos";

export const metadata: Metadata = {
  title: "Swiis International | David Price",
  description:
    "I worked in a full-time position as a Web Developer & Designer at Swiis International",
};

export default function SwiisDigital() {
  return (
    <>
      <TitleBanner>
        <h1>Swiis International</h1>
      </TitleBanner>
      <section>
        <div className={styles.intro_con}>
          <div className={`${styles.logo_con} ${swiisLogoStyles.svg}`}>
            <SwiisLogos />
          </div>
          <div className={styles.intro_text}>
            <p>
              I worked in a full-time position as a Web Developer & Designer at{" "}
              <a href="https://www.swiis.com">Swiis International</a>, the
              parent company of{" "}
              <a href="https://www.swiisfostercare.com">Swiis Foster Care</a>,{" "}
              <a href="https://www.swiisfostercarescotland.com">
                Swiis Foster Care Scotland
              </a>{" "}
              and <a href="https://www.swiishealthcare.com">Swiis Healthcare</a>
              .
            </p>
            <p>My duties included:</p>
            <ul>
              <li>
                Using <span>HTML, CSS and JavaScript</span> to develop and
                manage 7 different <span>WordPress</span> websites;
              </li>
              <li>
                Designing, developing, and managing two web portals allowing
                over 450 foster carers & independent members to login (via a
                unique account number) and view exclusive resources, events and
                documents;
              </li>
              <li>
                Monitoring user journeys and general website performance using{" "}
                <span>Google Analytics</span> and{" "}
                <span>Google Tag Manager</span>;
              </li>
              <li>
                Designing and showcasing new layouts and designs via Adobe{" "}
                <span>XD</span>;
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles.intro_textContin}>
          <li>
            Managing and optimising <span>Google Ads</span> and{" "}
            <span>Bing Ads</span> search campaigns;
          </li>
          <li>
            Improving website <span>SEO</span>: Keyword analysis, building
            backlinks, on-page optimisation, and monitoring changes via{" "}
            <span>Google Search Console</span> and <span>Semrush</span>;
          </li>
          <li>
            Creating automated solutions to admin tasks using JavaScript and{" "}
            <span>Google Data Studio</span> that include:
            <ul>
              <li>Digitalising previously print forms;</li>
              <li>
                Sending automated monthly website and monthly spend reports;
              </li>
              <li>
                Parsing emails and inputting results directly into Google Sheets
                via <span>Zapier</span>.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h3>Automating training feedback</h3>
        <p>
          Foster carers regularly receive training to ensure they are best
          equipped for the challenges they may face.
        </p>
        <p>
          Previously, collecting feedback for these sessions would involve
          handing out sheets for carers to fillout, collecting them back, then
          sending them to the training team who would then manually input the
          results into an Excel spreadsheet.
        </p>
        <p>
          To streamline this, I recreated the forms on our website using the
          plugin <span>Contact Form 7</span>. When users submit these forms,
          they are emailed to Zapier where I set up parsing of the information,
          allowing Zapier to input the feedback directly into Google Sheets
          within seconds of the form being sent.
        </p>
      </section>
    </>
  );
}
