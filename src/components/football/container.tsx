import React, { useMemo, useState } from "react"
import NavBar from "./ui/navBar"
import Help from "./ui/help"
import FooterSlider from "./ui/footer-slider"
import Leaderboard from "./ui/leaderboard"
import Standings from "./ui/standings"
import Options from "./ui/options"
import Stats from "./ui/stats"

import {
  footballMain,
  content,
} from "../../styles/component/football/container.module.scss"

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
import { Entrant, Players, GameWeek } from "./classes"
export default function FootballContainer(props: {
  helpNotes: JSX.Element
  playerGroupsArr: string[]
  players: Players
  gameWeeks: GameWeek[]
  statsNotes: (isSeasonOver: boolean) => JSX.Element
  teams: { [key: string]: Entrant }
  year: string
}) {
  //State
  const [playerGroup, setPlayerGroup] = useState(props.playerGroupsArr[0])
  const [selectedGameWeek, setSelectedGameWeek] = useState(
    props.gameWeeks.length - 1
  )
  const [mode, setMode] = useState("leaderboard")
  const [isSeasonOver, setIsSeasonOver] = useState(
    props.gameWeeks.length === 38
  )
  //Handlers
  function changePlayerGroupHandler(playerGroup: string) {
    setPlayerGroup(playerGroup)
  }
  function changeGameWeekHandler(newGameWeekNo: number) {
    setSelectedGameWeek(newGameWeekNo)
    setIsSeasonOver(newGameWeekNo + 1 === 38)
  }
  function changeModeHandler(newMode: string) {
    setMode(newMode)
  }

  const data = useMemo(() => {
    let { teams, gameWeeks, players } = props
    //Populate players.average with prediction tables created by finding the mean positions of everyone else's predictions
    players = generateAverageTable(players, teams)

    //Order the prediction tables in players.average
    players = orderAverageTable(players)

    //Based on the player predictions and round data, calculate the differences in entrant predictions for each player, their diff totals and their count of each diffs
    calcData(players, gameWeeks)

    //The leadboards have been generated, but aren't in the correct order so this function will order players based on performance
    orderLeaderboards(gameWeeks)

    //Calculate how players have moved on the leaderboards compared to the previous round
    calcLeaderboardRdDiffs(gameWeeks)

    //Tally up how accurate each player has been

    generateEntrantDiffTotals(gameWeeks, players, teams)

    //Order the players in each round by their percentage correct, highest first
    orderEntrantDiffTotals(gameWeeks)

    return { teams: teams, gameWeeks: gameWeeks, players: players }
  }, [props])

  const controPredictions = getControPlayers(data.players)

  return (
    <div className={footballMain}>
      <NavBar changeMode={changeModeHandler} activeMode={mode} />
      <div className={content}>
        {mode === "leaderboard" || mode === "standings" ? (
          <Options
            mode={mode}
            playerGroupsArr={props.playerGroupsArr}
            changePlayerGroup={changePlayerGroupHandler}
          />
        ) : (
          ""
        )}
        {mode === "leaderboard" && (
          <Leaderboard
            gameWeekNo={selectedGameWeek}
            gameWeekData={data.gameWeeks}
          />
        )}
        {mode === "standings" && (
          <Standings
            year={props.year}
            gameWeekData={data.gameWeeks}
            gameWeekNo={selectedGameWeek}
            filteredPlayers={filteredPlayers(data.players, playerGroup)}
          />
        )}
        {mode === "help" && <Help year={props.year}>{props.helpNotes}</Help>}
        {mode === "stats" && (
          <Stats
            gameWeekData={data.gameWeeks}
            selectedGameWeek={selectedGameWeek}
            isSeasonOver={isSeasonOver}
            controPredictions={controPredictions}
            noOfPredictions={Object.keys(data.players).length}
          >
            {props.statsNotes(isSeasonOver)}
          </Stats>
        )}
      </div>
      {
        //If not in help mode, display the footer slider
        mode !== "help" && (
          <FooterSlider
            selectedGameWeek={selectedGameWeek}
            noOfGameWeeks={data.gameWeeks.length}
            changeGameWeek={changeGameWeekHandler}
          />
        )
      }
    </div>
  )
}
