import React from "react"
import * as morphStyles from "../styles/component/morph.module.scss"

const Morph = props => (
  <div className={morphStyles.container}>{props.children}</div>
)

export default Morph
