import React, { ReactChild } from "react"
import * as colourPreviewConStyles from "../styles/component/colour-preview-con.module.scss"

const ColourPreviewCon = (props: { children: ReactChild | ReactChild[] }) => (
  <div className={colourPreviewConStyles.container}>{props.children}</div>
)

export default ColourPreviewCon
