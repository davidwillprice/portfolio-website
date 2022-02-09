import React, { Component } from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/head/seo.js"

import F1Container from "../../components/f1/container"

import { helpNotes, statsNotes } from "../../components/f1/2021/extra-text"

import {
  teams,
  drivers,
  rounds,
  players,
  playerGroupsArr,
} from "../../components/f1/2021/season-data"

export default class f1Predict2021 extends Component {
  componentDidMount() {
    document.querySelector("html").style.backgroundColor = "#242424"
  }
  componentWillUnmount() {
    document.querySelector("html").removeAttribute("style")
  }
  render() {
    return (
      <Layout footer={false} widthLimited={false}>
        <Seo
          title="F1 Prediction Game 2021"
          description="Game to predict predict the Formula 1 2021 Driver's and Constructor's standings as accurately as possible"
          bgColor="gray"
        />
        <div>
          <F1Container
            teams={teams}
            drivers={drivers}
            rounds={rounds}
            players={players}
            year={2021}
            finalNoOfRaces={22}
            helpNotes={helpNotes}
            statsNotes={statsNotes}
            playerGroupsArr={playerGroupsArr}
          />
        </div>
      </Layout>
    )
  }
}
