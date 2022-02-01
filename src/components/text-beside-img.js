import React from "react"
import * as textBesideImgStyles from "../styles/component/text-beside-img.module.scss"

const TextBesideImg = props => (
  <div className={textBesideImgStyles.container}>
    <img src={props.img} alt={props.imgAlt} />
    <div className={textBesideImgStyles.textCon}>
      <h3 className={textBesideImgStyles.textSubheader}>{props.headerText}</h3>
      {props.children}
    </div>
  </div>
)

export default TextBesideImg
