import React from "react"
import * as titleBannerStyles from "../../styles/component/layout/titlebanner.module.scss"

const TitleBanner = ({ children }) => (
  <div className={titleBannerStyles.titleBannerCon}>{children}</div>
)

export default TitleBanner
