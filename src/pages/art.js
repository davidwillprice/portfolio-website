import React from "react"
import ButtonCon from "../components/button-con"
import Button from "../components/button"
import Layout from "../components/layout/layout"
import FullHeight from "../components/layout/full-height"
import SEO from "../components/head/seo"
import SqBrushMask from "../components/sq-brush-mask"
import TitleBanner from "../components/layout/title-banner"

import brushConStyles from "../styles/component/brushcon.module.scss"

import Solargraphy from "../images/solargraphy/solargraph-image-34-thumbnail.jpg"

export default function Art() {
  return (
    <Layout>
      <SEO
        title="Art"
        description="Pinhole photography aimed at the sky to capture the path of the sun each day."
      />
      <FullHeight>
        <TitleBanner>
          <h1>Art</h1>
        </TitleBanner>
        <div className={brushConStyles.workBrushCon}>
          <SqBrushMask
            brush={"/svgs/brush-bg-5.svg"}
            img={Solargraphy}
            imgAlt="Solargraphy image"
            linkDesc="Solargraphy page"
            linkUrl="/art/solargraphy/"
          >
            <h3>Solargraphy</h3>
            <p>Apr 2012 - Jun 2014</p>
            <p>
              Pinhole photography aimed at the sky to capture the path of the
              sun each day.
            </p>
            <ButtonCon>
              <Button url="/art/solargraphy/" btnText="Learn More" />
            </ButtonCon>
          </SqBrushMask>
        </div>
      </FullHeight>
    </Layout>
  )
}
