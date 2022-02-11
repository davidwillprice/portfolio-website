import React from "react"
import { graphql } from "gatsby"
import Button from "../components/button"
import ButtonCon from "../components/button-con"
import Layout from "../components/layout/layout"
import Seo from "../components/head/seo"
import SqBrushMask from "../components/sq-brush-mask"
import TitleBanner from "../components/layout/title-banner"

import * as brushConStyles from "../styles/component/brushcon.module.scss"
/*
import LypLeaflet from '../images/lyp/lyp-leaflet-mock-up.jpg';*/

export default function GraphicDesign({ data }) {
  const teslaNowIcon = data.teslaNowIcon.childImageSharp.gatsbyImageData
  const aberLogo = data.aberLogo.childImageSharp.gatsbyImageData
  const springholmLogo = data.springholmLogo.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Seo
        title="Graphic design"
        description="Showcase of the graphic design different projects I have worked on"
      />
      <TitleBanner>
        <h1>Graphic design</h1>
      </TitleBanner>
      <div className={brushConStyles.workBrushCon}>
        {/*
				<SqBrushMask
					brush={'/svgs/brush-bg-2.svg'}
					img={LypLeaflet}
					imgAlt="Love Your Postcode leaflet mock up"
					linkDesc="Love Your Postcode graphic design"
				>
					<h3>Love Your Postcode</h3>
					<p>Aug 2015 - Feb 2019</p>
					<p>Full time position at Birmingham estate agent Love Your Postcode.</p>
				</SqBrushMask>*/}
        <SqBrushMask
          brush={"/svgs/brush-bg-1.svg"}
          dirTxtRight={true}
          img={teslaNowIcon}
          imgAlt="TESLANOW icon"
          linkDesc="TESLANOW page"
          linkUrl="/graphic-design/teslanow/"
        >
          <h3>TESLANOW</h3>
          <p>Jun 2015</p>
          <p>
            Icon, app and website design for a company through freelancer.com.
          </p>
          <ButtonCon align={"right"}>
            <Button
              url="/graphic-design/teslanow/"
              linkDesc="TESLANOW page"
              btnText="Learn More"
            />
          </ButtonCon>
        </SqBrushMask>
        <SqBrushMask
          brush={"/svgs/brush-bg-3.svg"}
          img={aberLogo}
          imgAlt="Aberystwyth Inspired logo"
          linkDesc="Aberystwyth university graphic design"
          linkUrl="/graphic-design/aberystwyth-university/"
        >
          <h3>Aberystwyth University</h3>
          <p>Jan 2015 - Feb 2015</p>
          <p>
            Logos, posters and a mural that I designed while working at
            Aberystwyth University.
          </p>
          <ButtonCon>
            <Button
              linkDesc="Aberystwyth university graphic design"
              url="/graphic-design/aberystwyth-university/"
              btnText="Learn More"
            />
          </ButtonCon>
        </SqBrushMask>

        <SqBrushMask
          brush={"/svgs/brush-bg-4.svg"}
          img={springholmLogo}
          imgAlt="Logo for an Australian summer retreat camp"
          linkDesc="Freelance logos"
          linkUrl="/graphic-design/freelance-logos/"
          dirTxtRight={true}
        >
          <h3>Freelance logos</h3>
          <p>Feb 2015 - Aug 2015</p>
          <p>
            Commissioned and practice logos created before I got my first
            full-time job in the industry.
          </p>
          <ButtonCon align={"right"}>
            <Button
              linkDesc="Freelance logos"
              url="/graphic-design/freelance-logos/"
              btnText="Learn More"
            />
          </ButtonCon>
        </SqBrushMask>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    teslaNowIcon: file(relativePath: { eq: "teslanow/teslanow-icon.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    aberLogo: file(
      relativePath: { eq: "aber-design/aber-inspired-logo-thumbnail.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    springholmLogo: file(
      relativePath: {
        eq: "freelance-logos/springholm-wells-farm-logo-thumbnail.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
