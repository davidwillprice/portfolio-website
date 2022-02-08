import React, { useState } from "react"
import NavBar from "./ui/navBar"
import Help from "./ui/help"
import FooterSlider from "./ui/footer-slider"
import Leaderboard from "./ui/leaderboard"
import Standings from "./ui/standings"
import Options from "./ui/options"
import Stats from "./ui/stats"

import {
  f1Main,
  content,
} from "../../styles/component/f1/container.module.scss"

import {
  generateAverageTable,
  orderAverageTable,
  calcData,
  orderLeaderboards,
  calcLeaderboardRdDiffs,
  generateEntrantDiffTotals,
  orderEntrantDiffTotals,
  filteredPlayers,
  getControPlayers,
} from "./calc"

export default function F1Container(props) {
  //State
  const [entrantType, setEntrantType] = useState("driver")
  const [playerGroup, setPlayerGroup] = useState(props.playerGroupsArr[0])
  const [selectedRound, setSelectedRound] = useState(props.rounds.length - 1)
  const [mode, setMode] = useState("leaderboard")
  const [isSeasonOver, setIsSeasonOver] = useState(
    props.rounds.length === props.finalNoOfRaces
  )

  //Handlers
  function changeEntrantTypeHandler(event) {
    setEntrantType(event.target.value)
  }
  function changePlayerGroupHandler(event) {
    setPlayerGroup(event.target.value)
  }
  function changeRoundHandler(event) {
    setSelectedRound(+event.target.value)
    setIsSeasonOver(+event.target.value + 1 === props.finalNoOfRaces)
  }
  function changeModeHandler(event) {
    setMode(event.target.getAttribute("data-mode"))
  }

  const { teams, drivers, rounds, players } = props

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

  const controDriverPredictions = getControPlayers(players, "driver")
  const controTeamPredictions = getControPlayers(players, "team")

  return (
    <div className={f1Main}>
      <NavBar changeMode={changeModeHandler} activeMode={mode} />
      <div className={content}>
        <Options
          mode={mode}
          playerGroupsArr={props.playerGroupsArr}
          changePlayerGroup={changePlayerGroupHandler}
          changeEntrantType={changeEntrantTypeHandler}
        />
        {mode === "leaderboard" && (
          <Leaderboard
            entrantType={entrantType}
            roundNo={selectedRound}
            roundData={rounds}
          />
        )}
        {mode === "standings" && (
          <Standings
            year={props.year}
            roundData={rounds}
            entrantType={entrantType}
            playerGroup={playerGroup}
            roundNo={selectedRound}
            filteredPlayers={filteredPlayers(players, playerGroup, entrantType)}
          />
        )}
        {mode === "help" && <Help year={props.year}>{props.helpNotes}</Help>}
        {mode === "stats" && (
          <Stats
            roundData={rounds}
            selectedRound={selectedRound}
            isSeasonOver={isSeasonOver}
            controDriverPredictions={controDriverPredictions}
            controTeamPredictions={controTeamPredictions}
          >
            {props.statsNotes(isSeasonOver)}
          </Stats>
        )}
      </div>
      {
        //If not in help mode, display the footer slider
        mode !== "help" && (
          <FooterSlider
            selectedRound={selectedRound}
            noOfRounds={rounds.length}
            trackName={rounds[selectedRound].trackName}
            changeRound={changeRoundHandler}
          />
        )
      }
    </div>
  )
}
