import React from "react"
import { graphql } from "gatsby"
import FullWidthImage from "../../components/full-width-img"
import Layout from "../../components/layout/layout"
import LogoShowcase from "../../components/logo-showcase"
import Seo from "../../components/head/seo"
import StandardCentralText from "../../components/standard-central-text"
import TitleBanner from "../../components/layout/title-banner"

import * as TeslaStyles from "../../styles/page/teslanow.module.scss"

import Logo from "../../images/teslanow/teslanow-logo.png"
import InCarMockup from "../../images/teslanow/in-car-mock-up.jpg"

export default function Teslanow({ data }) {
  const icons = data.icons.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Seo
        title="Teslanow"
        description="Icon, app and website design for a company through freelancer.com."
      />
      <TitleBanner>
        <h1>Teslanow</h1>
      </TitleBanner>
      <LogoShowcase bgColor="#EDEDED">
        <img src={Logo} alt="TESLANOW logo" />
      </LogoShowcase>
      <StandardCentralText headerText="TESLANOW app, icon and&nbsp;website">
        <p>
          This project was the winning submission to a contest on{" "}
          <a href="freelancer.com" rel="nofollow">
            freelancer.com
          </a>{" "}
          to design an icon, app and website for an application called
          'TESLANOW'.
        </p>
      </StandardCentralText>
      <div className={TeslaStyles.inCarMockupCon}>
        <img
          className={TeslaStyles.inCarMockup}
          src={InCarMockup}
          alt="Tesla interior"
        />
        <div className={TeslaStyles.appSpritesheet}></div>
      </div>
      <StandardCentralText>
        <p>
          My app designs would be fleshed out to work inside a Tesla's web
          browser. My website mock up would be created in HTML and CSS with the
          aim of driving sign ups to the project.
        </p>
      </StandardCentralText>
      <FullWidthImage
        img={icons}
        imgAlt="Showcase of the different icons I made for the TeslaNow project"
      />
      <StandardCentralText headerText="Clean tailor-made&nbsp;icons">
        <p>
          Once I had the colour scheme and logo sorted, the icons and other
          assets came easily.
        </p>
        <p>
          The flat shadow design was popular at the time and helps make the
          icons pop.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    icons: file(relativePath: { eq: "teslanow/icon-showcase.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
