import React from "react"
import * as FullWidthImgStyles from "../styles/component/full-width-img.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

const FullWidthImage = (props: { img: IGatsbyImageData; imgAlt: string }) => (
  <div className={FullWidthImgStyles.container}>
    <GatsbyImage image={props.img} alt={props.imgAlt} />
  </div>
)

export default FullWidthImage
