import React, { Component } from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/head/seo.js"

import F1PredictionGame from "../../components/f1-prediction-game"

class f1Predict2021 extends Component {
  componentDidMount() {
    document.querySelector("html").style.backgroundColor = "#242424"
  }
  componentWillUnmount() {
    document.querySelector("html").removeAttribute("style")
  }
  render() {
    return (
      <Layout footer={false} widthLimited={false}>
        <SEO
          title="F1 Prediction Game 2021"
          description="Game to predict predict the Formula 1 2021 Driver's and Constructor's standings as accurately as possible"
          bgColor="gray"
        />
        <div className="">
          <F1PredictionGame />
        </div>
      </Layout>
    )
  }
}

export default f1Predict2021
