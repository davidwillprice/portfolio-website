import React from "react"
/*import { Link } from 'gatsby';*/
import Layout from "../components/layout/layout"
import SEO from "../components/head/seo.js"
import StandardCentralText from "../components/standard-central-text"
import TextBesideImg from "../components/text-beside-img"
import ColourPreview from "../components/colour-preview"
import FullWidthImage from "../components/full-width-img"
import FontShowcase from "../components/font-showcase.js"
import ColourPreviewCon from "../components/colour-preview-con"

import BrisAgencyStyles from "../styles/page/bristolagency.module.scss"
/* eslint-disable */ import IconsSVGStyles from "../styles/component/svg/bma-icons.scss" /* eslint-enable */

import BristolLandscapeSVG from "../svgs/bristol-landscape.svg"
import BristolAgencyLogoSVG from "../svgs/bristol-marketing-agency-logo.svg"
import IconsSVG from "../svgs/bma-icons.svg"
import BlankMobile from "../svgs/blank-mobile.svg"

import ConceptBoard from "../images/bma/concept-board.jpg"
import ThreeDeviceHp from "../images/bma/homepage-multiple-devices.jpg"
import MobileMenu from "../images/bma/bma-mobile-menu-full.png"

import mobileMenuGif from "../images/bma/bma-mob-menu.gif"

export default function bristolAgency() {
  return (
    <Layout marginTopDesktop={true}>
      <SEO
        title="Bristol marketing agency"
        description="As part of a job application, I was tasked with redesigning the website of a Bristol based marketing agency"
      />
      <div className={BrisAgencyStyles.logoCon}>
        <BristolLandscapeSVG className={BrisAgencyStyles.bristolLandscape} />
        <BristolAgencyLogoSVG className={BrisAgencyStyles.bristolAgencyLogo} />
      </div>
      <StandardCentralText headerText="Website design for a Bristol based marketing agency">
        <p>
          As part of a job application, I was tasked with redesigning the
          website of a Bristol based marketing agency.
        </p>
        <p>
          The brief stated that the website needed to showcase work to clients,
          demonstrate their methodology, stand apart from other websites and be
          reflective of their brand.{" "}
        </p>
      </StandardCentralText>
      <TextBesideImg
        headerText="An earthy, clean and natural colour scheme"
        img={ConceptBoard}
        imgAlt="Earthy concept board"
      >
        <p>
          I was given a concept board that included these images as a guideline
          for the colours and feel that the website could showcase.
        </p>
        <p>
          I decided my first step should be to choose a colour scheme and using
          the concept board as a guide, I settled on the below four colours in
          addition to a heavy use of white.
        </p>
        <p>
          I chose colours which I felt matched well with the company brand
          values included in the brief: Authentic - Engaged - Accountable.
        </p>
      </TextBesideImg>
      <ColourPreviewCon>
        <ColourPreview
          hexColour="#48616e"
          rgbColour="72, 97, 110"
          textColour="white"
        />
        <ColourPreview
          hexColour="#949887"
          rgbColour="148, 152, 135"
          textColour="white"
        />
        <ColourPreview
          hexColour="#dfe0d2"
          rgbColour="223, 224, 210"
          textColour="#48616e"
        />
        <ColourPreview
          hexColour="#e2dedf"
          rgbColour="226, 222, 223"
          textColour="#48616e"
        />
      </ColourPreviewCon>
      <FullWidthImage
        img={ThreeDeviceHp}
        imgAlt="Homepage design previews on desktop, tablet and mobile"
      />

      <StandardCentralText headerText="A simple but striking homepage">
        <p>
          I wanted the logo to be at the forefront of the homepage layout and I
          felt the company icon was an easy fit as a navigation link in the
          header.
        </p>
        <p>
          I created the vector background using a friend's photo of the Bristol
          skyline, chosing a vector instead of a photo to keep the file size
          small.
        </p>
        <p>
          The landscape isn't identifiable as Bristol's skyline so doesn't
          narrow a national company down to one area, while keeping the charm of
          the Bristolian scenery.
        </p>
      </StandardCentralText>

      <div className={BrisAgencyStyles.iconsCon}>
        <div className={BrisAgencyStyles.bmaIconsSvg}>
          <div className="bmaIcons">
            <IconsSVG />
          </div>
        </div>
        <div className={BrisAgencyStyles.bmaIconsText}>
          <h3 className={BrisAgencyStyles.heading}>
            Minimalist icons & typefaces
          </h3>
          <p>
            I kept the icons as simple as possible to match the simple colour
            scheme.
          </p>
          <p>
            The light stroke icons were designed for use in the footer and
            mobile menu.
          </p>
          <p>
            The dark fill icons were for a hover effect and the back-to-top
            button.
          </p>
          <p>
            Finally, the dark stroke icons were for use on dark backgrounds.
          </p>
        </div>
      </div>
      <div class={BrisAgencyStyles.egServicesBg}>
        <div class={BrisAgencyStyles.egServicesCon}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <StandardCentralText headerText="Portfolio showcase">
        <p>
          As requested in the brief, I wanted to make sure the website's
          portfolio showcase was particularly striking.
        </p>
        <p>
          The diamond shape of the images are consistent with the shape of the
          icons.
        </p>
      </StandardCentralText>
      <div class={BrisAgencyStyles.mobMenuCon}>
        <div class={BrisAgencyStyles.mobMenuDesigns}>
          <img src={MobileMenu} alt="Mobile menu design" />
          <div class={BrisAgencyStyles.mobMenuGifCon}>
            <BlankMobile />
            <img
              src={mobileMenuGif}
              className={BrisAgencyStyles.mobMenuVideo}
              alt="GIF of the mobile menu in action"
            />
          </div>
        </div>
        <div class={BrisAgencyStyles.mobMenuText}>
          <h3 className={BrisAgencyStyles.heading}>Seemless mobile menu</h3>
          <p>
            I created a mock up GIF showcasing tapping the mobile menu button.
          </p>
          <p>
            A couple of call-to-action buttons at the bottom of the mobile menu
            make contacting the agency simple.
          </p>
        </div>
      </div>
      <FontShowcase
        bgColor="white"
        color="#48616e"
        fontName="Adamina Regular"
        fontFamily="Adamina"
      ></FontShowcase>
      <StandardCentralText>
        <p>
          For the primary font, I chose Adamina Regular as I think it best
          reflected the elegence, mood and feel of the images provided in the
          concept board.
        </p>
        <p>
          I felt it was also important to me to pick a font that could be easily
          implemented through Google Fonts.
        </p>
      </StandardCentralText>
      <FontShowcase
        bgColor="white"
        color="#48616e"
        fontName="Source Sans Pro&nbsp;Light"
        fontFamily="Source Sans Pro Light"
      ></FontShowcase>
      <StandardCentralText>
        <p>
          I felt Source Pro Light would be a strong choice as a font for all UI
          aspects and some headers.
        </p>
        <p>
          While being clearly readable, its light weight helps it avoid clashing
          with the serif font Adamina.
        </p>
      </StandardCentralText>
      <FontShowcase
        className={BrisAgencyStyles.test}
        bgColor="white"
        color="#48616e"
        fontName="Source Sans Pro Semibold"
        fontFamily="Source Sans Pro Semibold"
      ></FontShowcase>
      <StandardCentralText>
        <p>
          Source Sans Pro Semibold was the typeface I was least sure about being
          the right fit for the project, but I envisioned it being used
          sparingly and only on Call to action buttons.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
