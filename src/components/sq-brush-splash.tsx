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
  nonDesktop?: boolean
}> {
  CalcModCon = () => {
    let classes =
      sqBrushStyles.workExampleCon + " " + sqBrushStyles.brushSplashCon
    if (this.props.dirTxtRight) {
      classes += " " + sqBrushStyles.workExampleConR
    }
    return classes
  }
  CalcBrushCon = () => {
    let classes = sqBrushStyles.brushPreviewCon
    if (this.props.nonDesktop) {
      classes += " " + sqBrushStyles.nonDesktop
    }
    return classes
  }
  html = () => {
    const brushContent = (
      <div className={this.CalcBrushCon()}>
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
      </div>
    )
    // If a link url and description is provided, add a link around the brushcontent
    if (this.props.linkUrl && this.props.linkDesc) {
      //If the link is external, wrap in an <a> tag instead of a <Link> component
      if (this.props.external) {
        return (
          <a
            className={sqBrushStyles.workExampleLink}
            aria-label={this.props.linkDesc}
            href={this.props.linkUrl}
          >
            {brushContent}
          </a>
        )
      } else {
        return (
          <Link
            className={sqBrushStyles.workExampleLink}
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
        <div className={sqBrushStyles.workExampleText}>
          {this.props.children}
        </div>
        {this.html()}
      </div>
    )
  }
}
