import React from "react"
import { container } from "../styles/component/logo-showcase.module.scss"

const LogoShowcase = props => (
  <div className={container} style={{ backgroundColor: props.bgColor }}>
    {props.children}
  </div>
)

export default LogoShowcase
