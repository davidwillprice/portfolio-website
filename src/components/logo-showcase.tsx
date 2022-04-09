import React, { ReactChild } from "react"
import { container } from "../styles/component/logo-showcase.module.scss"

const LogoShowcase = (props: {
  bgColor: string
  children: ReactChild | ReactChild[]
}) => (
  <div className={container} style={{ backgroundColor: props.bgColor }}>
    {props.children}
  </div>
)

export default LogoShowcase
