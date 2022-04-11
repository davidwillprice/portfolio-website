import React from "react"
import { graphql } from "gatsby"
import ButtonCon from "../components/button-con"
import Button from "../components/button"
import Layout from "../components/layout/layout"
import FullHeight from "../components/layout/full-height"
import Seo from "../components/head/seo"
import SqBrushMask from "../components/sq-brush-mask"
import TitleBanner from "../components/layout/title-banner"

import * as brushConStyles from "../styles/component/brushcon.module.scss"
import { IGatsbyImageData } from "gatsby-plugin-image"

export default function Art({
  data,
}: {
  data: {
    file: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData }
    }
  }
}) {
  const solargraphy = data.file.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Seo
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
            img={solargraphy}
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
              <Button
                url="/art/solargraphy/"
                btnText="Learn More"
                linkDesc="Solargraphy page"
              />
            </ButtonCon>
          </SqBrushMask>
        </div>
      </FullHeight>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    file(
      relativePath: { eq: "solargraphy/solargraph-image-34-thumbnail.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
