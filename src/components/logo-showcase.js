import React from "react"
import LogoShowcaseStyles from "../styles/component/logo-showcase.module.scss"

const LogoShowcase = props => (
  <div
    className={LogoShowcaseStyles.container}
    style={{ backgroundColor: props.bgColor }}
  >
    {props.children}
  </div>
)

export default LogoShowcase
