import React, { Component } from "react"
import { standardTexCon } from "../styles/component/stand-cent-tex.module.scss"

class StandardCentralText extends Component {
  render() {
    return (
      <div
        className={standardTexCon}
        style={this.props.width && { maxWidth: +this.props.width }}
      >
        {this.props.headerText && <h3>{this.props.headerText}</h3>}
        {this.props.children}
      </div>
    )
  }
}

export default StandardCentralText
