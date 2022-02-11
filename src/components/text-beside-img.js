import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  con,
  textCon,
  imageCon,
} from "../styles/component/text-beside-img.module.scss"

const TextBesideImg = props => (
  <div className={con}>
    <div className={imageCon}>
      <GatsbyImage image={props.img} alt={props.imgAlt} />
    </div>

    <div className={textCon}>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  </div>
)

export default TextBesideImg
