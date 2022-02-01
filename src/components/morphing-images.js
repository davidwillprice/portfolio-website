import React from "react"
import { container } from "../styles/component/morph.module.scss"

const Morph = props => <div className={container}>{props.children}</div>

export default Morph
