import React, { Component } from "react"
import * as sqBrushStyles from "../styles/component/sqbrush.module.scss"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

export default class SqBrushMask extends Component<{
  imgAlt: string
  img: IGatsbyImageData
  external?: boolean
  linkUrl?: string
  size?: string
  linkDesc?: string
  dirTxtRight?: boolean
  brush: string
}> {
  html = () => {
    const brushContent = (
      <div className={sqBrushStyles.brushPreviewCon}>
        <div className={sqBrushStyles.brushPreview}>
          <GatsbyImage
            alt={this.props.imgAlt}
            image={this.props.img}
            className={sqBrushStyles.image}
            style={{
              maskImage: "url(" + this.props.brush + ")",
              maskSize: "100%",
              WebkitMaskImage: "url(" + this.props.brush + ")",
            }}
          />
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
      <div
        className={`${
          this.props.dirTxtRight ? sqBrushStyles.workExampleConR : ""
        } ${this.props.size ? sqBrushStyles.small : ""} ${
          sqBrushStyles.workExampleCon
        } ${sqBrushStyles.brushMaskCon}`}
      >
        <div className={sqBrushStyles.workExampleText}>
          {this.props.children}
        </div>
        {this.html()}
      </div>
    )
  }
}
