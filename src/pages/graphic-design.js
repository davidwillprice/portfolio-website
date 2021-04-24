import React from "react"
import { Link } from "gatsby"
import Button from "../components/button"
import ButtonCon from "../components/button-con"
import Layout from "../components/layout/layout"
import SEO from "../components/head/seo"
import SqBrushMask from "../components/sq-brush-mask"
import TitleBanner from "../components/layout/title-banner"

import brushConStyles from "../styles/component/brushcon.module.scss"
/*
import LypLeaflet from '../images/lyp/lyp-leaflet-mock-up.jpg';*/
import TeslaNowIcon from "../images/teslanow/teslanow-icon.jpg"
import AberLogo from "../images/aber-design/aber-inspired-logo-thumbnail.jpg"
import SpringholmLogo from "../images/freelance-logos/springholm-wells-farm-logo-thumbnail.jpg"

export default function GraphicDesign() {
  return (
    <Layout>
      <SEO
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
          img={TeslaNowIcon}
          imgAlt="TESLANOW icon"
          linkDesc="TESLANOW page"
          linkUrl="/graphic-design/teslanow/"
        >
          <h3>TESLANOW</h3>
          <p>Jun 2015</p>
          <p>
            Icon, app and website design for a company through freelancer.com.
          </p>
          <ButtonCon dirTxtRight={true}>
            <Link to={`/graphic-design/teslanow/`}>
              <Button btnText="Learn More" />
            </Link>
          </ButtonCon>
        </SqBrushMask>
        <SqBrushMask
          brush={"/svgs/brush-bg-3.svg"}
          img={AberLogo}
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
            <Link to={`/graphic-design/aberystwyth-university/`}>
              <Button btnText="Learn More" />
            </Link>
          </ButtonCon>
        </SqBrushMask>

        <SqBrushMask
          brush={"/svgs/brush-bg-4.svg"}
          img={SpringholmLogo}
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
          <ButtonCon dirTxtRight={true}>
            <Link to={`/graphic-design/freelance-logos/`}>
              <Button btnText="Learn More" />
            </Link>
          </ButtonCon>
        </SqBrushMask>
      </div>
    </Layout>
  )
}
