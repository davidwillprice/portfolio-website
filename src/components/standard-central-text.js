import React, { Component } from "react"
import { standardTexCon } from "../styles/component/stand-cent-tex.module.scss"

class StandardCentralText extends Component {
  render() {
    let header
    if (this.props.headerText) {
      header = <h3>{this.props.headerText}</h3>
    }
    return (
      <div className={standardTexCon}>
        {header}
        {this.props.children}
      </div>
    )
  }
}

export default StandardCentralText
