import React from "react"
import StandCenTexStyles from "../styles/component/stand-cent-tex.module.scss"

const StandardCentralText = props => (
  <div className={StandCenTexStyles.standardTexCon}>
    <h3 className={StandCenTexStyles.textSubheader}>{props.headerText}</h3>
    {props.children}
  </div>
)

export default StandardCentralText
