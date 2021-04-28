import React, { Component } from "react"
import sqBrushStyles from "../styles/component/sqbrush.module.scss"

import { Link } from "gatsby"

class SqBrushMask extends Component {
  html = () => {
    const brushContent = (
      <div className={sqBrushStyles.brushPreviewCon}>
        <div className={sqBrushStyles.brushPreview}>
          <img
            alt={this.props.imgAlt}
            src={this.props.img}
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

export default SqBrushMask
