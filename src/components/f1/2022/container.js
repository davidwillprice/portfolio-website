import React, { Component } from "react"
import NavBar from "../ui/navBar"
import Help from "../ui/help"
import FooterSlider from "../ui/footer-slider"
import Leaderboard from "../ui/leaderboard"
import Standings from "../ui/standings"
import Options from "../ui/options"
import Stats from "../ui/stats"

import * as f1PredictCSS from "../../../styles/component/f1-prediction-game.module.scss"

import { teams, drivers, rounds, players } from "./season-data"

import {
  generateAverageTable,
  orderAverageTable,
  calcData,
  orderLeaderboards,
  calcLeaderboardRdDiffs,
  generateEntrantDiffTotals,
  orderEntrantDiffTotals,
  filteredPlayers,
  getPlayerGroups,
} from "../calc"

const year = 2022
const finalNoOfRaces = 22

//Populate players.average with prediction tables created by finding the mean positions of everyone else's predictions
generateAverageTable(players, drivers, "driver")
generateAverageTable(players, teams, "team")

//Order the prediction tables in players.average
orderAverageTable(players, "driver")
orderAverageTable(players, "team")

//Based on the player predictions and round data, calculate the differences in entrant predictions for each player, their diff totals and their count of each diffs
calcData(players, rounds)

//The leadboards have been generated, but aren't in the correct order so this function will order players based on performance
orderLeaderboards(rounds, "driver")
orderLeaderboards(rounds, "team")

//Calculate how players have moved on the leaderboards compared to the previous round
calcLeaderboardRdDiffs(rounds, "driver")
calcLeaderboardRdDiffs(rounds, "team")

//Tally up how accurate each player has been
generateEntrantDiffTotals(rounds, players, "driver", drivers)
generateEntrantDiffTotals(rounds, players, "team", teams)

//Order the players in each round by their percentage correct, highest first
orderEntrantDiffTotals(rounds, "driver")
orderEntrantDiffTotals(rounds, "team")

//Get player groups for the options menu
const playerGroupsArr = getPlayerGroups(players)

////UI requires from data
//Players with most/least 'controversial' driver predictions based on how much they differed from the average prediction table

export default class F1Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entrantType: "driver",
      playerGroup: "aberystwyth",
      selectedRound: rounds.length - 1,
      mode: "leaderboard",
      seasonOver: rounds.length === finalNoOfRaces + 1,
    }
    //Binding 'this' to the UI methods
    this.changeEntrantType = this.changeEntrantType.bind(this)
    this.changePlayerGroup = this.changePlayerGroup.bind(this)
    this.changeRound = this.changeRound.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }
  changeEntrantType(event) {
    this.setState({ entrantType: event.target.value })
  }
  changePlayerGroup(event) {
    this.setState({ playerGroup: event.target.value })
  }
  changeRound(event) {
    this.setState({
      selectedRound: +event.target.value,
      seasonOver: +event.target.value + 1 === finalNoOfRaces,
    })
  }
  changeMode(event) {
    this.setState({ mode: event.target.getAttribute("data-mode") })
  }
  render() {
    return (
      <div
        className={`${f1PredictCSS.f1Main} ${
          f1PredictCSS[this.state.entrantType + "Tables"]
        } ${f1PredictCSS[this.state.mode + "Mode"]}`}
      >
        <NavBar changeMode={this.changeMode} activeMode={this.state.mode} />
        <div className={f1PredictCSS.content}>
          <Options
            mode={this.state.mode}
            playerGroupsArr={playerGroupsArr}
            changePlayerGroup={this.changePlayerGroup}
            changeEntrantType={this.changeEntrantType}
          />
          {this.state.mode === "leaderboard" && (
            <Leaderboard
              entrantType={this.state.entrantType}
              roundNo={this.state.selectedRound}
              roundData={rounds}
            />
          )}
          {this.state.mode === "standings" && (
            <Standings
              year={year}
              roundData={rounds}
              entrantType={this.state.entrantType}
              playerGroup={this.state.playerGroup}
              roundNo={this.state.selectedRound}
              filteredPlayers={filteredPlayers(
                players,
                this.state.playerGroup,
                this.state.entrantType
              )}
            />
          )}
          {this.state.mode === "help" && (
            <Help year={year}>
              <li>
                <a href="https://www.formula1.com/en/latest/article.f1-power-rankings-weve-ranked-the-teams-from-10-to-1-after-pre-season.6DKunC8CA9nHHu6MkuiIQQ.html">
                  formula1.com
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/karunchandhok/status/1371374740217159680">
                  Sky F1 Analyst Karun Chandok
                </a>{" "}
                made their predictions after preseason testing so had an
                advantage.
              </li>
            </Help>
          )}
          {this.state.mode === "stats" && (
            <Stats
              roundData={rounds}
              selectedRound={this.state.selectedRound}
              isSeasonOver={this.state.seasonOver}
            >
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Will was the only person who didn't predict that Hamilton would
                win the drivers title, opting for Verstappen;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                Will and Pete were the only people who didn't predict that
                Mercedes would win the constructors title, opting for Red Bull;
              </li>
              <li>
                Nobody predicted{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Hamilton,{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                Leclerc,{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Gasly,{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Raikkonen,{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Schumacher or{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Russell would be beaten by their team mate;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                Pete was the only person to predict that Perez would beat
                Verstappen, while{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                Alex was the only person to predict Perez wouldn't finish in the
                top 6 (10th).
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                David was the only person to predict that Ferrari would finish
                as high as 3rd;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                Alex was the only person to predict that Norris would beat
                Riccardo;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                James was the only person to predict that Stroll would beat
                Vettel;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                Annie was the only person to predict that Ocon would beat
                Alonso;
              </li>
              <li>
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.tick}>✔</span>
                )}{" "}
                James was the only person to predict that Alfa Romeo wouldn't
                come 8th (9th) and the{" "}
                {this.state.seasonOver && (
                  <span className={f1PredictCSS.cross}>✖</span>
                )}{" "}
                only person to put Haas as high as 8th.
              </li>
            </Stats>
          )}
        </div>
        {
          //If not in help mode, display the footer slider
          this.state.mode !== "help" && (
            <FooterSlider
              selectedRound={this.state.selectedRound}
              noOfRounds={rounds.length}
              trackName={rounds[this.state.selectedRound].trackName}
              changeRound={this.changeRound}
            />
          )
        }
      </div>
    )
  }
}
