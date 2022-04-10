import React from "react"
import Layout from "../components/layout/layout"
import FullHeight from "../components/layout/full-height"
import ButtonCon from "../components/button-con"
import Button from "../components/button"

import * as MissingStyles from "../styles/page/missing-page.module.scss"

export default function FourZeroFour() {
  return (
    <Layout>
      <FullHeight>
        <h1 style={{ textAlign: "center" }}>Page not found</h1>
        <div className={MissingStyles.container}>
          <p>
            Sorry, I'm afraid the page you are looking for could not be found.
          </p>
          <br></br>
          <ButtonCon align="center">
            <Button url="/" btnText="Return to the Homepage" />
          </ButtonCon>
        </div>
      </FullHeight>
    </Layout>
  )
}
