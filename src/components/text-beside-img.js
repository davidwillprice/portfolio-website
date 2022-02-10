import React from "react"
import {
  container,
  textCon,
  textSubheader,
} from "../styles/component/text-beside-img.module.scss"

const TextBesideImg = props => (
  <div className={container}>
    <img src={props.img} alt={props.imgAlt} />
    <div className={textCon}>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  </div>
)

export default TextBesideImg
