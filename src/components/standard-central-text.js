import React, { Component } from "react"
import * as StandCenTexStyles from "../styles/component/stand-cent-tex.module.scss"

class StandardCentralText extends Component {
  render() {
    let header
    if (this.props.headerText) {
      header = (
        <h3 className={StandCenTexStyles.textSubheader}>
          {this.props.headerText}
        </h3>
      )
    }
    return (
      <div className={StandCenTexStyles.standardTexCon}>
        {header}
        {this.props.children}
      </div>
    )
  }
}

export default StandardCentralText
