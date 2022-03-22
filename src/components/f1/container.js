import React, { useMemo, useState } from "react"
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
  countPlayerEntries,
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

  const data = useMemo(() => {
    let { teams, drivers, rounds, players } = props
    //Populate players.average with prediction tables created by finding the mean positions of everyone else's predictions
    players = generateAverageTable(players, drivers, "driver")
    players = generateAverageTable(players, teams, "team")

    //Order the prediction tables in players.average
    players = orderAverageTable(players, "driver")
    players = orderAverageTable(players, "team")

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

    return { teams: teams, drivers: drivers, rounds: rounds, players: players }
  }, [props])

  const controDriverPredictions = getControPlayers(data.players, "driver")
  const controTeamPredictions = getControPlayers(data.players, "team")

  const noOfPredictions = {
    driver: countPlayerEntries(data.players, "driver"),
    team: countPlayerEntries(data.players, "team"),
  }
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
            roundData={data.rounds}
          />
        )}
        {mode === "standings" && (
          <Standings
            year={props.year}
            roundData={data.rounds}
            entrantType={entrantType}
            playerGroup={playerGroup}
            roundNo={selectedRound}
            filteredPlayers={filteredPlayers(
              data.players,
              playerGroup,
              entrantType
            )}
          />
        )}
        {mode === "help" && <Help year={props.year}>{props.helpNotes}</Help>}
        {mode === "stats" && (
          <Stats
            roundData={data.rounds}
            selectedRound={selectedRound}
            isSeasonOver={isSeasonOver}
            controDriverPredictions={controDriverPredictions}
            controTeamPredictions={controTeamPredictions}
            noOfPredictions={noOfPredictions}
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
            noOfRounds={data.rounds.length}
            trackName={data.rounds[selectedRound].trackName}
            changeRound={changeRoundHandler}
          />
        )
      }
    </div>
  )
}
