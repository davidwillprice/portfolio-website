import React, { Component } from "react"
import LogoShowcaseStyles from "../styles/component/button.module.scss"

import GitHubIcon from "../svgs/footer/github-icon.svg"

class Button extends Component {
  icon = function () {
    if (this.props.btnIcon === "github") {
      return <GitHubIcon></GitHubIcon>
    }
  }
  render() {
    return (
      <button
        className={`${LogoShowcaseStyles.button} ${
          this.props.btnColor
            ? LogoShowcaseStyles[this.props.btnColor]
            : LogoShowcaseStyles.primary
        }`}
      >
        {this.props.btnText}
        {this.icon()}
      </button>
    )
  }
}
export default Button
