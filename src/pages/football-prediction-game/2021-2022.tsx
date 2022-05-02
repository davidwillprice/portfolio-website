import React, { Component } from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/head/seo"

import FootballContainer from "../../components/football/container"

import {
  helpNotes,
  statsNotes,
} from "../../components/football/2021-2022/extra-text"

import {
  teams,
  gameWeeks,
  players,
  playerGroupsArr,
} from "../../components/football/2021-2022/season-data"

export default class footballPredict2021 extends Component {
  componentDidMount() {
    document.querySelector("html")!.style.backgroundColor = "#242424"
  }
  componentWillUnmount() {
    document.querySelector("html")?.removeAttribute("style")
  }
  render() {
    return (
      <Layout footer={false} widthLimited={false}>
        <Seo
          title="Premier League Prediction Game 2021"
          description="Game to predict predict the Premier League's 2021 final table as accurately as possible"
          bgColor="gray"
        />
        <div>
          <FootballContainer
            teams={teams}
            gameWeeks={gameWeeks}
            players={players}
            year={"2021-2022"}
            helpNotes={helpNotes}
            statsNotes={statsNotes}
            playerGroupsArr={playerGroupsArr}
          />
        </div>
      </Layout>
    )
  }
}
