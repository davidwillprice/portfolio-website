import React, { ReactChild } from "react"
import * as titleBannerStyles from "../../styles/component/layout/titlebanner.module.scss"

export default function TitleBanner({
  children,
}: {
  children: ReactChild | ReactChild[]
}) {
  return <div className={titleBannerStyles.titleBannerCon}>{children}</div>
}
