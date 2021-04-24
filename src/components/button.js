import React from "react"
import LogoShowcaseStyles from "../styles/component/button.module.scss"

const Button = props => (
  <button
    className={`${LogoShowcaseStyles.button} ${
      props.btnColor
        ? LogoShowcaseStyles[props.btnColor]
        : LogoShowcaseStyles.primary
    }`}
  >
    {props.btnText}
  </button>
)
export default Button
