import React, { Component } from "react"
import sqBrushStyles from "../styles/component/sqbrush.module.scss"

import { Link } from "gatsby"

class SqBrushSplash extends Component {
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

  render() {
    let ModConClasses = this.CalcModCon()
    let brushConClasses = this.CalcBrushCon()
    return (
      <div className={ModConClasses}>
        <div className={sqBrushStyles.workExampleText}>
          {this.props.children}
        </div>
        <Link
          className={sqBrushStyles.workExampleLink}
          aria-label={this.props.linkDesc}
          to={this.props.linkUrl}
        >
          <div className={brushConClasses}>
            <div className={sqBrushStyles.brushPreview}>
              <img
                alt={this.props.imgAlt}
                src={this.props.img}
                className={sqBrushStyles.image}
              />
              {React.cloneElement(this.props.brush, {
                className: sqBrushStyles.brushBg,
              })}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SqBrushSplash
