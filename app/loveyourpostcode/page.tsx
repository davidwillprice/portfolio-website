import { Metadata } from "next";
import Image from "next/image";

import ColourPreview from "@/src/components/colour-preview";
import FullWidthImage from "@/src/components/full-width-img";
import StandardCentralText from "@/src/components/standard-central-text";
import ColourPreviewCon from "@/src/components/colour-preview-con";

import styles from "@styles/lypdig.module.scss";
import showcaseStyles from "@styles/showcasepage.module.scss";

import LypBirm from "@images/lyp/lyp-birmingham-banner.jpg";
import LypFactsTablet from "@images/lyp/lyp-facts-tablet.jpg";
import StampDutyCalculator from "@images/lyp/stamp-duty-calculator.png";

export const metadata: Metadata = {
  title: "Love Your Postcode | David Price",
  description:
    "I worked for 'Love Your Postcode Estate Agents' full-time as a Web / Graphic Designer for three and a half years",
};

export default function LypDigital() {
  return (
    <>
      <div className={showcaseStyles.intro_con}>
        <div className={showcaseStyles.logo_con + " " + styles.logo_con}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 699 263"
            style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
            <g
              id="XMLID_80_"
              transform="translate(-88.594 -71.364)scale(1.39518)">
              <g id="XMLID_102_">
                <path
                  id="XMLID_120_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M63.5 237.2v-66.5h15.4c5.2 0 9.4.4 12.5 1.1s5.8 2 8.2 3.6q3.6 2.7 5.7 6.6c1.4 2.6 2.1 5.4 2.1 8.3 0 6.5-2.4 11.6-7.3 15.4-4.8 3.7-11.5 5.6-20.1 5.6h-5v25.9zM75 201.4h5.3c5 0 8.9-.9 11.5-2.7s4-4.4 4-7.9-1.3-6.1-4-7.7-6.8-2.5-12.5-2.5H75z"></path>
                <path
                  id="XMLID_117_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M113.4 203.9c0-4.1.6-8 1.7-11.7s2.8-7 5.1-10.2c3.1-4.3 7-7.6 11.6-10s9.5-3.5 14.6-3.5c4.4 0 8.6.9 12.7 2.6 4.1 1.8 7.6 4.3 10.7 7.5q4.65 5.1 7.2 11.4c1.6 4.3 2.5 8.9 2.5 13.8s-.8 9.5-2.5 13.8c-1.6 4.3-4 8-7.2 11.3q-4.65 4.95-10.8 7.5-6 2.7-12.6 2.7c-4.4 0-8.6-.9-12.6-2.6s-7.6-4.2-10.7-7.5c-3.2-3.4-5.6-7.2-7.3-11.4-1.6-4.2-2.4-8.7-2.4-13.7m12 0c0 6.9 2 12.6 6.1 17.2 4 4.6 9 6.9 14.9 6.9s11-2.3 15-6.9c4.1-4.6 6.1-10.3 6.1-17.2s-2-12.6-6-17.2-9.1-6.9-15.1-6.9q-9 0-15 6.9c-4 4.6-6 10.3-6 17.2"></path>
                <path
                  id="XMLID_115_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M187.5 222.4q5.4 3.45 9.9 5.1c3 1.1 5.8 1.6 8.5 1.6 3.5 0 6.3-.9 8.5-2.6s3.2-4 3.2-6.7c0-2.3-.7-4.3-2.2-6.2-1.4-1.8-4-3.8-7.6-5.9l-5-3c-5.1-3-8.7-5.9-10.8-8.8s-3.2-6.2-3.2-9.9c0-5.2 1.9-9.4 5.6-12.7 3.7-3.2 8.6-4.9 14.6-4.9 2.9 0 5.7.3 8.4 1s5.5 1.7 8.3 3l-.4 10.6c-3.3-1.8-6.2-3.1-8.7-4-2.5-.8-4.8-1.3-6.7-1.3-3.1 0-5.5.7-7.2 2-1.8 1.4-2.6 3.2-2.6 5.6 0 1.8.6 3.5 1.9 5s3.7 3.3 7.1 5.3l4.8 2.8c5.6 3.3 9.5 6.6 11.9 9.8 2.3 3.2 3.5 7 3.5 11.2 0 5.9-2.1 10.7-6.2 14.3-4.2 3.6-9.7 5.4-16.6 5.4-3.2 0-6.3-.3-9.3-1s-5.9-1.6-8.6-2.9z"></path>
                <path
                  id="XMLID_113_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M268.2 180.8V237h-11.7v-56.2h-22.4v-10.1h56.4v10.1z"></path>
                <path
                  id="XMLID_111_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M344.6 232.8c-3 2.1-6.1 3.7-9.5 4.8s-6.9 1.6-10.4 1.6c-3.8 0-7.4-.6-11-1.9-3.5-1.2-6.8-3-9.7-5.4-4.1-3.3-7.3-7.4-9.5-12.2q-3.3-7.2-3.3-15.9c0-10.2 3.2-18.6 9.6-25.3s14.4-10.1 24.1-10.1c3.5 0 6.9.5 10.1 1.6 3.2 1 6.4 2.6 9.4 4.7l-1.2 13c-2.7-2.8-5.4-5-8.3-6.4s-6-2.1-9.2-2.1q-9.9 0-16.2 6.9t-6.3 17.7c0 7 2 12.7 6.2 17.3 4.1 4.5 9.3 6.8 15.7 6.8 3.6 0 7-.8 10.3-2.4q4.95-2.4 9.9-7.5z"></path>
                <path
                  id="XMLID_108_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M352.1 203.9c0-4.1.6-8 1.7-11.7s2.8-7 5.1-10.2c3.1-4.3 7-7.6 11.6-10s9.5-3.5 14.6-3.5c4.4 0 8.6.9 12.7 2.6 4.1 1.8 7.6 4.3 10.7 7.5q4.65 5.1 7.2 11.4c1.6 4.3 2.5 8.9 2.5 13.8s-.8 9.5-2.5 13.8c-1.6 4.3-4 8-7.2 11.3q-4.65 4.95-10.8 7.5-6 2.7-12.6 2.7c-4.4 0-8.6-.9-12.6-2.6s-7.6-4.2-10.7-7.5c-3.2-3.4-5.6-7.2-7.3-11.4-1.6-4.2-2.4-8.7-2.4-13.7m12 0c0 6.9 2 12.6 6.1 17.2 4 4.6 9 6.9 14.9 6.9s11-2.3 15-6.9c4.1-4.6 6.1-10.3 6.1-17.2s-2-12.6-6-17.2-9-6.9-15.1-6.9q-9 0-15 6.9c-4 4.6-6 10.3-6 17.2"></path>
                <path
                  id="XMLID_105_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M430 237.1v-66.4h16c12.4 0 22.1 3 29.2 8.9s10.6 14 10.6 24.3c0 6.2-1.4 11.6-4.2 16.4s-6.9 8.7-12.2 11.8c-3 1.8-6.3 3-9.9 3.8s-8.1 1.2-13.4 1.2zm11.5-10.6h6c8.3 0 14.7-2 19.4-6 4.6-4 7-9.5 7-16.6s-2.3-12.6-7-16.6-11.1-6-19.4-6h-6z"></path>
                <path
                  id="XMLID_103_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M497.7 237.1v-66.4h38.6v10.2H509v16.3h23.4v10.1H509v19.4h27.7V237h-39z"></path>
              </g>
              <g id="XMLID_91_">
                <path
                  id="XMLID_100_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M312.2 146.5v-28.1l-25.1-37h9l20.2 29.9 21.8-29.9h8.5l-26.7 36.4v28.7z"></path>
                <path
                  id="XMLID_97_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M345 113.9c0-4.8.8-9.4 2.4-13.5 1.6-4.2 3.9-7.9 7-11.3 3-3.1 6.4-5.6 10.3-7.3s8-2.6 12.2-2.6 8.3.9 12.2 2.6 7.3 4.2 10.3 7.4c3.1 3.3 5.4 7 7 11.2q2.4 6.3 2.4 13.5c0 4.1-.5 7.9-1.6 11.5s-2.7 6.9-4.9 9.8c-3 4.2-6.8 7.5-11.2 9.8-4.5 2.4-9.2 3.5-14.1 3.5-4.2 0-8.3-.9-12.2-2.6s-7.4-4.2-10.3-7.3c-3.1-3.3-5.5-7.1-7-11.2-1.7-4.2-2.5-8.7-2.5-13.5m7.8 0c0 7.8 2.3 14.3 7 19.6 4.6 5.2 10.4 7.9 17.1 7.9q10.2 0 17.1-7.8c4.6-5.2 6.9-11.8 6.9-19.6 0-7.9-2.3-14.4-6.9-19.6q-6.9-7.8-17.1-7.8c-6.8 0-12.5 2.6-17.2 7.9-4.6 5-6.9 11.5-6.9 19.4"></path>
                <path
                  id="XMLID_95_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M428.3 81.3v38.1c0 7.2 1.5 12.7 4.6 16.4s7.6 5.5 13.7 5.5c5.9 0 10.5-1.9 13.5-5.6 3.1-3.7 4.6-9.3 4.6-16.6V81.3h7v39c0 8.8-2.2 15.7-6.7 20.7s-10.6 7.5-18.4 7.5c-8.3 0-14.7-2.4-19.2-7.3-4.5-4.8-6.8-11.7-6.8-20.6V81.3z"></path>
                <path
                  id="XMLID_92_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M488.4 146.4V81.3h13.8q13.65 0 20.7 4.8c4.7 3.2 7.1 7.9 7.1 14.1 0 4.7-1.5 8.7-4.6 12.1s-7.2 5.5-12.4 6.3l23.6 27.7h-9.7l-22.7-26.7H496v26.7h-7.6zm7.6-32.7h6.6c6.4 0 11.3-1.1 14.6-3.4 3.4-2.3 5-5.5 5-9.8 0-4.4-1.7-7.7-5-9.7-3.3-2.1-8.7-3.1-16-3.1H496z"></path>
              </g>
              <g id="XMLID_81_">
                <path
                  id="XMLID_89_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M63.6 146.4V81.3H75v54.9h28v10.2z"></path>
                <path
                  id="XMLID_86_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M103.7 113.9c0-4 .6-7.8 1.7-11.4s2.8-6.9 5-10c3.1-4.2 6.8-7.4 11.3-9.8 4.5-2.3 9.3-3.5 14.3-3.5 4.3 0 8.5.9 12.4 2.6 4 1.7 7.5 4.2 10.5 7.3 3.1 3.3 5.4 7 7 11.2q2.4 6.3 2.4 13.5t-2.4 13.5c-1.6 4.2-4 7.9-7 11.1-3.1 3.2-6.6 5.7-10.5 7.4s-8.1 2.6-12.3 2.6c-4.3 0-8.4-.9-12.3-2.6s-7.4-4.2-10.5-7.4c-3.1-3.3-5.5-7-7.1-11.2-1.7-4-2.5-8.5-2.5-13.3m11.8 0c0 6.7 2 12.3 5.9 16.9 4 4.5 8.8 6.8 14.7 6.8 5.8 0 10.7-2.3 14.7-6.8s6-10.1 6-16.9-2-12.4-5.9-16.9c-4-4.5-8.9-6.7-14.8-6.7s-10.8 2.2-14.7 6.7-5.9 10.1-5.9 16.9"></path>
                <path
                  id="XMLID_84_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M199.5 149.1h-.9l-29.5-67.7h12.2l18.2 42.7 18.2-42.7h11.5z"></path>
                <path
                  id="XMLID_82_"
                  fill="#fff"
                  fillRule="nonzero"
                  d="M235.9 146.4V81.3h37.9v10h-26.7v16h23v9.9h-23v19h27.2v10.1h-38.4z"></path>
              </g>
              <g id="XMLID_73_">
                <path
                  id="XMLID_77_"
                  fill="#fff"
                  d="M549.7 81.3c-8.2.2-14.9-6-15.5-13.9-.7-8.9 6.1-15.6 13.8-16.2 8.8-.7 16 6.1 16.3 14.4.3 8.5-6.1 15.4-14.6 15.7m11.7-15c0-6.7-5.4-12.2-12.1-12.2s-12.2 5.5-12.2 12.2 5.4 12.1 12.1 12.1 12.2-5.4 12.2-12.1"></path>
                <path
                  id="XMLID_74_"
                  fill="#fff"
                  d="M544.3 58.6c1.4-.1 2.7-.2 4.1-.2 1.1 0 2.2.1 3.2.4 1.8.5 3.1 1.6 3.5 3.5q.6 3.15-2.1 5.1c-.1.1-.2.2-.3.2v.1c1.1 1.9 2.3 3.7 3.5 5.7h-3.4c-.5 0-.7-.2-.8-.5-.7-1.3-1.4-2.6-2.1-4-.1-.3-.3-.4-.7-.4-.4.1-.9 0-1.4 0v4.8h-3.5zm3.5 5.1v1.7c0 .1.1.3.2.3.8.1 1.7.1 2.4-.3.8-.4 1.2-1.2 1.1-2.1s-.5-1.5-1.5-1.6c-.6-.1-1.3-.1-2-.1-.3 0-.4.1-.4.4.2.6.2 1.1.2 1.7"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className={showcaseStyles.intro_text}>
          <p>
            I worked for West Midlands based &apos;Love Your Postcode Estate
            Agents&apos; full-time as a Web / Graphic Designer between August
            2015 and February 2019.
          </p>
          <p>Duties included:</p>
          <ul>
            <li>
              Using{" "}
              <span className="showcaseStyles.highlight">
                HTML, CSS and JavaScript
              </span>{" "}
              to develop and manage the Love Your Postcode{" "}
              <span className="showcaseStyles.highlight">Wordpress</span>{" "}
              website;
            </li>
            <li>
              <span className="showcaseStyles.highlight">
                Coding marketing emails
              </span>{" "}
              with maximum compatibility;
            </li>
            <li>
              Monitoring user journeys and general website performance using{" "}
              <span className="showcaseStyles.highlight">Google Analytics</span>
              ;
            </li>
            <li>
              Managing{" "}
              <span className="showcaseStyles.highlight">Google Ads</span>{" "}
              search, display, video and app campaigns;
            </li>
          </ul>
        </div>
      </div>
      <ul className={showcaseStyles.intro_text_contin}>
        <li>
          Working as part of a team to improve website{" "}
          <span className="showcaseStyles.highlight">SEO</span>: Building
          backlinks, managing Google Search Console, keyword analysis, meta
          titles/descriptions, header structure and other on-page optimisation;
        </li>
        <li>
          <span className="showcaseStyles.highlight">Copywriting</span> website
          pages and blog content.
        </li>
      </ul>
      <div className={showcaseStyles.desktop_screenshots_con}>
        <Image
          className={showcaseStyles.desktop_bg}
          src={LypBirm}
          alt="Birmingham landscape"
        />
        <div className={showcaseStyles.desktop_screenshots}>
          <div
            className={
              showcaseStyles.desktop_screenshot +
              " " +
              styles.desktop_screenshot
            }></div>
          <div
            className={
              showcaseStyles.desktop_screenshot +
              " " +
              styles.desktop_screenshot
            }></div>
          <div
            className={
              showcaseStyles.desktop_screenshot +
              " " +
              styles.desktop_screenshot
            }></div>
          <div
            className={
              showcaseStyles.desktop_screenshot +
              " " +
              styles.desktop_screenshot
            }></div>
        </div>
      </div>
      <StandardCentralText headerText="A responsive & content rich website">
        <p>
          The Love Your Postcode website had a lot of features so the main
          challenge was designing the content as clean as possible and avoiding
          an end result that comes across as extravagant or excessive.
        </p>
      </StandardCentralText>
      <FullWidthImage
        img={LypFactsTablet}
        imgAlt="Love Your Postcode's homepage facts and figures on tablet"
      />
      <StandardCentralText headerText="Clean but eye-catching design">
        <p>
          A perfect example of the approach I kept across all content on the
          website is the &apos;Facts & Figures&apos; section.
        </p>
        <p>
          The writing is as minimal as possible to give the words that are there
          more punch.
        </p>
        <p>
          On devices larger than mobile, I gave the icons a shadow to help them
          pop and continue the contemporary aesthetic across the website.
        </p>
      </StandardCentralText>
      <ColourPreviewCon>
        <ColourPreview
          hexColour="#1D859B"
          rgbColour="29, 133, 155"
          textColour="white"
        />
        <ColourPreview
          hexColour="#185363"
          rgbColour="24, 83, 99"
          textColour="white"
        />
        <ColourPreview
          hexColour="#EC1868"
          rgbColour="236, 24, 104"
          textColour="white"
        />
        <ColourPreview
          hexColour="#505050"
          rgbColour="80, 80, 80"
          textColour="white"
        />
      </ColourPreviewCon>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#EEF1EE",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}>
        <Image
          style={{
            maxWidth: "700px",
            width: "100%",
            height: "auto",
          }}
          src={StampDutyCalculator}
          alt="Screenshot of a stamp duty calculator"
        />
      </div>
      <StandardCentralText headerText="My first JavaScript project">
        <p>
          In 2016, I was asked to create a calculator for the website that would
          allow users to input the cost of a property and return the amount of
          Stamp Duty Tax it would require to buy. This could change depending on
          if the user was a first-time buyer, buying a second property or
          neither.
        </p>
        <p>
          As I didn&apos;t know JavaScript at the time, I worked out the values
          for each taxband cell using mathematic formula and then my
          JavaScript/PHP developer colleague translated those workings into a
          finished calculator.
        </p>
        <p>
          As I started to learn JavaScript in October 2018, I challenged myself
          to re-code the calculator myself, using only my own formula.
        </p>
      </StandardCentralText>
    </>
  );
}
