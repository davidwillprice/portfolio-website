import React from "react"
import * as FullHeightStyles from "../../styles/component/layout/full-height.module.scss"

const FullHeight = ({ children }) => (
  <div className={FullHeightStyles.fullHeightCon}>
    <div className={FullHeightStyles.fullHeight}>{children}</div>
  </div>
)

export default FullHeight
