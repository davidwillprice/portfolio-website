import React, { Component } from "react"
import * as LogoShowcaseStyles from "../styles/component/button.module.scss"
import { Link } from "gatsby"

import GitHubIcon from "../svgs/footer/github-icon.svg"

export default class Button extends Component<{
  btnIcon?: string
  linkDesc?: string
  btnColor?: string
  btnText: string
  external?: boolean
  url: string
}> {
  render() {
    const { btnIcon, linkDesc, btnColor, btnText, external, url } = this.props
    function icon() {
      if (btnIcon === "github") {
        return <GitHubIcon></GitHubIcon>
      }
    }
    function genHTML() {
      if (external) {
        return (
          <a
            aria-label={linkDesc ? linkDesc : btnText}
            href={url}
            className={`${LogoShowcaseStyles.button} ${
              btnColor
                ? LogoShowcaseStyles[btnColor]
                : LogoShowcaseStyles.primary
            }`}
          >
            {btnText}
            {icon()}
          </a>
        )
      } else {
        return (
          <Link
            aria-label={linkDesc ? linkDesc : btnText}
            to={url}
            className={`${LogoShowcaseStyles.button} ${
              btnColor
                ? LogoShowcaseStyles[btnColor]
                : LogoShowcaseStyles.primary
            }`}
          >
            {btnText}
            {icon()}
          </Link>
        )
      }
    }

    return genHTML()
  }
}
