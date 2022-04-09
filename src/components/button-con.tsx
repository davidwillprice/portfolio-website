import React, { Component, ReactChild } from "react"

import * as buttonConStyles from "../styles/component/button-con.module.scss"

export default function ButtonCon({
  align,
  children,
}: {
  align: string
  children: ReactChild | ReactChild[]
}) {
  const alignment =
    align === "right"
      ? buttonConStyles.alignRight
      : align === "center"
      ? buttonConStyles.alignCenter
      : ""
  return <div className={`${buttonConStyles.con} ${alignment}`}>{children}</div>
}
