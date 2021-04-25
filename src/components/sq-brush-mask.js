import React, { Component } from "react"
import sqBrushStyles from "../styles/component/sqbrush.module.scss"

import { Link } from "gatsby"

class SqBrushMask extends Component {
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
        <Link
          className={sqBrushStyles.workExampleLink}
          aria-label={this.props.linkDesc}
          to={this.props.linkUrl}
        >
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
        </Link>
      </div>
    )
  }
}

export default SqBrushMask
