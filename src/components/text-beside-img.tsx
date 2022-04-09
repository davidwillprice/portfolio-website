import React, { ReactChild } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  con,
  textCon,
  imageCon,
} from "../styles/component/text-beside-img.module.scss"

import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

const TextBesideImg = (props: {
  children: ReactChild | ReactChild[]
  headerText: string
  imgAlt: string
  img: IGatsbyImageData
}) => (
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
