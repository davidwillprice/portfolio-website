import React, { Component } from "react"

import * as buttonConStyles from "../styles/component/button-con.module.scss"

class ButtonCon extends Component {
  render() {
    return (
      <div
        className={`${buttonConStyles.con} ${
          this.props.dirTxtRight ? buttonConStyles.alignRight : ""
        }`}
      >
        {this.props.children}
      </div>
    )
  }
}
export default ButtonCon
