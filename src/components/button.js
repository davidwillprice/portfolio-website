import React from "react"
import LogoShowcaseStyles from "../styles/component/button.module.scss"

const Button = props => (
  <button className={LogoShowcaseStyles.button}>{props.btnText}</button>
)
export default Button
