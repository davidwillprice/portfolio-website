import React from "react"
import Layout from "../components/layout/layout"
import StandardCentralText from "../components/standard-central-text"
import Seo from "../components/head/seo"

import { textLink } from "../styles/global.module.scss"
import * as ShowcaseStyles from "../styles/page/showcasepage.module.scss"
/* eslint-disable */ import SwiisLogosCSS from "../styles/component/svg/swiis-logos.scss" /* eslint-enable */

import SwiisLogos from "../svgs/swiis-logos.svg"

export default function SwiisDigital() {
  return (
    <Layout marginTopDesktop={true}>
      <Seo
        title="Swiis International"
        description="I worked in a full-time position as a Web Developer & Designer at Swiis International"
      />
      <div className={ShowcaseStyles.introCon}>
        <div className={ShowcaseStyles.logoCon + " SwiisLogos"}>
          <SwiisLogos className={ShowcaseStyles.logo} />
        </div>
        <div className={ShowcaseStyles.introText}>
          <p>
            I worked in a full-time position as a Web Developer & Designer at{" "}
            <a className={textLink} href="https://www.swiis.com">
              Swiis International
            </a>
            , the parent company of{" "}
            <a className={textLink} href="https://www.swiisfostercare.com">
              Swiis Foster Care
            </a>
            ,{" "}
            <a
              className={textLink}
              href="https://www.swiisfostercarescotland.com"
            >
              Swiis Foster Care Scotland
            </a>{" "}
            and{" "}
            <a className={textLink} href="https://www.swiishealthcare.com">
              Swiis Healthcare
            </a>
            .
          </p>
          <p>My duties included:</p>
          <ul>
            <li>
              Using{" "}
              <span className="ShowcaseStyles.highlight">
                HTML, CSS and JavaScript
              </span>{" "}
              to develop and manage 7 different{" "}
              <span className="ShowcaseStyles.highlight">WordPress</span>{" "}
              websites;
            </li>
            <li>
              Designing, developing, and managing two web portals allowing over
              450 foster carers & independent members to login (via a unique
              account number) and view exclusive resources, events and
              documents;
            </li>
            <li>
              Monitoring user journeys and general website performance using{" "}
              <span className="ShowcaseStyles.highlight">Google Analytics</span>{" "}
              and{" "}
              <span className="ShowcaseStyles.highlight">
                Google Tag Manager
              </span>
              ;
            </li>
            <li>
              Designing and showcasing new layouts and designs via Adobe{" "}
              <span className="ShowcaseStyles.highlight">XD</span>;
            </li>
          </ul>
        </div>
      </div>
      <ul className={ShowcaseStyles.introTextContin}>
        <li>
          Managing and optimising{" "}
          <span className="ShowcaseStyles.highlight">Google Ads</span> and{" "}
          <span className="ShowcaseStyles.highlight">Bing Ads</span> search
          campaigns;
        </li>
        <li>
          Improving website{" "}
          <span className="ShowcaseStyles.highlight">SEO</span>: Keyword
          analysis, building backlinks, on-page optimisation, and monitoring
          changes via{" "}
          <span className="ShowcaseStyles.highlight">
            Google Search Console
          </span>{" "}
          and <span className="ShowcaseStyles.highlight">Semrush</span>;
        </li>
        <li>
          Creating automated solutions to admin tasks using JavaScript and{" "}
          <span className="ShowcaseStyles.highlight">Google Data Studio</span>{" "}
          that include:
          <ul>
            <li>Digitalising previously print forms;</li>
            <li>
              Sending automated monthly website and monthly spend reports;
            </li>
            <li>
              Parsing emails and inputting results directly into Google Sheets
              via <span className="ShowcaseStyles.highlight">Zapier</span>.
            </li>
          </ul>
        </li>
      </ul>

      <StandardCentralText headerText="Automating training feedback">
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
          plugin{" "}
          <span className="ShowcaseStyles.highlight">Contact Form 7</span>. When
          users submit these forms, they are emailed to Zapier where I set up
          parsing of the information, allowing Zapier to input the feedback
          directly into Google Sheets within seconds of the form being sent.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
