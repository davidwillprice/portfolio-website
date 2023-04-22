import React, { Component, ReactElement } from "react"
import * as sqBrushStyles from "../styles/component/sqbrush.module.scss"

import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export default class SqBrushSplash extends Component<{
  dirTxtRight?: boolean
  external?: boolean
  brush: ReactElement
  imgAlt: string
  img: IGatsbyImageData
  linkDesc?: string
  linkUrl?: string
  extraMobBotPadding?: boolean
}> {
  CalcModCon = () => {
    let classes =
      sqBrushStyles.workExampleCon + " " + sqBrushStyles.brushSplashCon
    if (this.props.dirTxtRight) {
      classes += " " + sqBrushStyles.workExampleConR
    }
    return classes
  }
  html = () => {
    const brushContent = (
      <div className={sqBrushStyles.brushPreview}>
        <GatsbyImage
          alt={this.props.imgAlt}
          image={this.props.img}
          className={sqBrushStyles.image}
        />
        {React.cloneElement(this.props.brush, {
          className: sqBrushStyles.brushBg,
        })}
      </div>
    )
    // If a link url and description is provided, add a link around the brushcontent
    if (this.props.linkUrl && this.props.linkDesc) {
      //If the link is external, wrap in an <a> tag instead of a <Link> component
      if (this.props.external) {
        return (
          <a
            className={sqBrushStyles.link}
            aria-label={this.props.linkDesc}
            href={this.props.linkUrl}
          >
            {brushContent}
          </a>
        )
      } else {
        return (
          <Link
            className={sqBrushStyles.link}
            aria-label={this.props.linkDesc}
            to={this.props.linkUrl}
          >
            {brushContent}
          </Link>
        )
      }
    } else {
      return brushContent
    }
  }

  render() {
    return (
      <div className={this.CalcModCon()}>
        <div className={sqBrushStyles.text}>{this.props.children}</div>
        <div
          className={`${sqBrushStyles.brushImgCon} ${
            this.props.extraMobBotPadding
              ? sqBrushStyles.extraMobBotPadding
              : ""
          }`}
        >
          {this.html()}
        </div>
      </div>
    )
  }
}
