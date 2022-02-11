import React from "react"
import * as FullWidthImgStyles from "../styles/component/full-width-img.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const FullWidthImage = props => (
  <div className={FullWidthImgStyles.container}>
    <GatsbyImage image={props.img} alt={props.imgAlt} />
  </div>
)

export default FullWidthImage
