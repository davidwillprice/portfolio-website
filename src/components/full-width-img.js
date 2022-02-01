import React from "react"
import * as FullWidthImgStyles from "../styles/component/full-width-img.module.scss"

const FullWidthImage = props => (
  <div className={FullWidthImgStyles.container}>
    <img src={props.img} alt={props.imgAlt} />
  </div>
)

export default FullWidthImage
