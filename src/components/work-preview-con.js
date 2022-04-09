import React from "react"
import Layout from "./layout/layout"
import BrushPreview from "../components/brush-preview"

import globalStyles from "../styles/global.module.css"
import * as brushPreviewStyles from "../styles/brushpreview.module.css"

import BrushOne from "../svg/brush-bg-1.svg"
import BrushTwo from "../svg/brush-bg-2.svg"

import HcHpDesktopImage from "../images/lyp-property-search-desktop.png"
import BmaHpMobImage from "../images/bma-hp-mob.png"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>David Price</h1>
        <h2>Web developer & designer</h2>
      </div>
      <div className={globalStyles.workExampleCon}>
        <div className={globalStyles.workExampleText}>
          <h3 className={globalStyles.workExampleHeader}>Love Your Postcode</h3>
          <p>Aug 2015 - Feb 2019</p>
          <p>
            Full time position at Birmingham estate agent Love Your Postcode.
          </p>
        </div>
        <BrushPreview image={HcHpDesktopImage} brush={<BrushOne />} />
      </div>
      <div className={globalStyles.workExampleCon}>
        <div className={globalStyles.workExampleText}>
          <h3 className={globalStyles.workExampleHeader}>
            Bristol Marketing Agency
          </h3>
          <p>Feb 2018</p>
          <p>
            Website redesign over a weekend as part of the job application
            process for a Bristol based marketing agency.
          </p>
        </div>
        <BrushPreview image={BmaHpMobImage} brush={<BrushTwo />} />
      </div>
    </Layout>
  )
}
