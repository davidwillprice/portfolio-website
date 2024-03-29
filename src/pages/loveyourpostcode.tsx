import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/head/seo"
import ColourPreview from "../components/colour-preview"
import FullWidthImage from "../components/full-width-img"
import StandardCentralText from "../components/standard-central-text"
import ColourPreviewCon from "../components/colour-preview-con"
import StampDutyCalc from "../components/stamp-duty-calc"

import * as LypDigStyles from "../styles/page/lypdig.module.scss"
import * as ShowcaseStyles from "../styles/page/showcasepage.module.scss"

import LypLogo from "../svgs/lyp-logo.svg"

import LypBirm from "../images/lyp/lyp-birmingham-banner.jpg"

import { IGatsbyImageData } from "gatsby-plugin-image"

export default function LypDigital({
  data,
}: {
  data: {
    factsTab: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  }
}) {
  const factsTab = data.factsTab.childImageSharp.gatsbyImageData
  return (
    <Layout marginTopDesktop={true}>
      <Seo
        title="Love Your Postcode"
        description="I worked for 'Love Your Postcode Estate Agents' full-time as a Web / Graphic Designer for three and a half years"
      />
      <div className={ShowcaseStyles.introCon}>
        <div className={ShowcaseStyles.logoCon + " " + LypDigStyles.logoCon}>
          <LypLogo className={ShowcaseStyles.logo + " " + LypDigStyles.logo} />
          <h3 className={LypDigStyles.logoSubheading}>Digital Design</h3>
        </div>
        <div className={ShowcaseStyles.introText}>
          <p>
            I worked for West Midlands based 'Love Your Postcode Estate Agents'
            full-time as a Web / Graphic Designer between August 2015 and
            February 2019.
          </p>
          <p>Duties included:</p>
          <ul>
            <li>
              Using{" "}
              <span className="ShowcaseStyles.highlight">
                HTML, CSS and JavaScript
              </span>{" "}
              to develop and manage the Love Your Postcode{" "}
              <span className="ShowcaseStyles.highlight">Wordpress</span>{" "}
              website;
            </li>
            <li>
              <span className="ShowcaseStyles.highlight">
                Coding marketing emails
              </span>{" "}
              with maximum compatibility;
            </li>
            <li>
              Monitoring user journeys and general website performance using{" "}
              <span className="ShowcaseStyles.highlight">Google Analytics</span>
              ;
            </li>
            <li>
              Managing{" "}
              <span className="ShowcaseStyles.highlight">Google Ads</span>{" "}
              search, display, video and app campaigns;
            </li>
          </ul>
        </div>
      </div>
      <ul className={ShowcaseStyles.introTextContin}>
        <li>
          Working as part of a team to improve website{" "}
          <span className="ShowcaseStyles.highlight">SEO</span>: Building
          backlinks, managing Google Search Console, keyword analysis, meta
          titles/descriptions, header structure and other on-page optimisation;
        </li>
        <li>
          <span className="ShowcaseStyles.highlight">Copywriting</span> website
          pages and blog content.
        </li>
      </ul>
      <div className={ShowcaseStyles.desktopScreenshotsCon}>
        <img
          className={ShowcaseStyles.desktopBg}
          src={LypBirm}
          alt="Birmingham landscape"
        />
        <div className={ShowcaseStyles.desktopScreenshots}>
          <div
            className={
              ShowcaseStyles.desktopScreenshot +
              " " +
              LypDigStyles.desktopScreenshot
            }
          ></div>
          <div
            className={
              ShowcaseStyles.desktopScreenshot +
              " " +
              LypDigStyles.desktopScreenshot
            }
          ></div>
          <div
            className={
              ShowcaseStyles.desktopScreenshot +
              " " +
              LypDigStyles.desktopScreenshot
            }
          ></div>
          <div
            className={
              ShowcaseStyles.desktopScreenshot +
              " " +
              LypDigStyles.desktopScreenshot
            }
          ></div>
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
        img={factsTab}
        imgAlt="Love Your Postcode's homepage facts and figures on tablet"
      />
      <StandardCentralText headerText="Clean but eye-catching design">
        <p>
          A perfect example of the approach I kept across all content on the
          website is the 'Facts & Figures' section.
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
      {/*
            <StandardCentralText headerText="Learning JavaScript">
                <p>Later on in the position, I set aside more time to learn JavaScript in my free time and was quickly able to bring this into my work. </p>
                <p>This stamp duty tax calculator was my first feature created from scratch, converting the mathematic formula I had previously written out into fully functional JavaScript.</p>
            </StandardCentralText>
            */}
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
      <StampDutyCalc></StampDutyCalc>
      <StandardCentralText headerText="My first JavaScript project">
        <p>
          In 2016, I was asked to create a calculator for the website that would
          allow users to input the cost of a property and return the amount of
          Stamp Duty Tax it would require to buy. This could change depending on
          if the user was a first-time buyer, buying a second property or
          neither.
        </p>
        <p>
          As I didn't know JavaScript at the time, I worked out the values for
          each taxband cell using mathematic formula and then my JavaScript/PHP
          developer colleague translated those workings into a finished
          calculator.
        </p>
        <p>
          As I started to learn JavaScript in October 2018, I challenged myself
          to re-code the calculator myself, using only my own formula.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    factsTab: file(relativePath: { eq: "lyp/lyp-facts-tablet.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
