import React, { Component } from "react"
import LogoShowcaseStyles from "../styles/component/button.module.scss"
import { Link } from "gatsby"

import GitHubIcon from "../svgs/footer/github-icon.svg"

class Button extends Component {
  icon = function () {
    if (this.props.btnIcon === "github") {
      return <GitHubIcon></GitHubIcon>
    }
  }
  html = function () {
    if (this.props.type === "ext") {
      return (
        <a
          href={this.props.url}
          className={`${LogoShowcaseStyles.button} ${
            this.props.btnColor
              ? LogoShowcaseStyles[this.props.btnColor]
              : LogoShowcaseStyles.primary
          }`}
        >
          {this.props.btnText}
          {this.icon()}
        </a>
      )
    } else {
      return (
        <Link
          to={this.props.url}
          className={`${LogoShowcaseStyles.button} ${
            this.props.btnColor
              ? LogoShowcaseStyles[this.props.btnColor]
              : LogoShowcaseStyles.primary
          }`}
        >
          {this.props.btnText}
          {this.icon()}
        </Link>
      )
    }
  }

  render() {
    return this.html()
  }
}
export default Button
