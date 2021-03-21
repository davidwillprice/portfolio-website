import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/head/seo.js"
import FullHeight from "../../components/layout/full-height"

import F1PredictionGame from "../../components/f1-prediction-game"

export default function f1Predict2021() {
  return (
    <Layout footer={false} widthLimited={false}>
      <SEO
        title="F1 Prediction Game 2021"
        description="Game to predict predict the Formula 1 2021 Driver's and Constructor's standings as accurately as possible"
        backgroundColour={"#242424"}
      />
      <div className="">
        <F1PredictionGame />
      </div>
    </Layout>
  )
}
