import React, { ReactChild } from "react"
import { container } from "../styles/component/morph.module.scss"

const Morph = (props: { children: ReactChild | ReactChild[] }) => (
  <div className={container}>{props.children}</div>
)

export default Morph
