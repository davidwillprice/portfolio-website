import React from "react"
import Layout from "../components/layout/layout"
import FullHeight from "../components/layout/full-height"

import MissingStyles from "../styles/page/missing-page.module.scss"

export default function PrivacyPolicy() {
  return (
    <Layout>
      <FullHeight>
        <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>
        <div className={MissingStyles.container}>
          <p>
            This website doesn't collect or store any of your personal data.
            Period.
          </p>
        </div>
      </FullHeight>
    </Layout>
  )
}
