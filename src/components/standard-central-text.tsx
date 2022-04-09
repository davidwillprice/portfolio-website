import React, { Component, ReactChild } from "react"
import { standardTexCon } from "../styles/component/stand-cent-tex.module.scss"

export default class StandardCentralText extends Component<{
  width?: string
  headerText?: string
  children: ReactChild | ReactChild[]
}> {
  render() {
    const { width, headerText, children } = this.props
    return (
      <div className={standardTexCon} style={width ? { maxWidth: +width } : {}}>
        {headerText && <h3>{headerText}</h3>}
        {children}
      </div>
    )
  }
}
