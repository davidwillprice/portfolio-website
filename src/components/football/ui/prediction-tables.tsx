import React from "react"

import PredictionTable from "./prediction-table"

import {
  tableContainer,
  tableHeader,
  swipeIconCon,
  swipeIconRight,
  swipeIconLeft,
  predictionTables,
  accuracy,
} from "../../../styles/component/football/table.module.scss"
import { calcPredictionsAcc } from "../calc"
import { Player } from "../classes"
import * as teamColours from "../../../styles/component/football/team-colours.module.scss"

//Component to render all prediction tables
export default function PredictionTables(props: {
  playerData: Player[]
  gameWeekNo: number
  year: string
}) {
  //playerData is data of the players that will displayed
  let playerData = props.playerData
  //gameWeek decides which data to show
  const gameWeek = "gameWeek" + props.gameWeekNo

  const listTables = Object.values(playerData).map(player => (
    //Create a HTML around each table, calling the PredictionTable component (With the table data passed in) to create the table itself
    <div
      id={player.name + "-table"}
      className={tableContainer}
      key={player.name}
    >
      <div className={tableHeader}>
        <div className={`${swipeIconCon} ${swipeIconRight}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className={`${swipeIconCon} ${swipeIconLeft}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
        {player.name}
      </div>
      <PredictionTable tableOrder={player.season[gameWeek].diffs} />
      <div className={accuracy}>
        Accuracy: {calcPredictionsAcc(player.season[gameWeek].diffTotal)}%
      </div>
    </div>
  ))
  const teamColoursSelector = "teams" + props.year.replace("-", "")
  return (
    <div className={`${predictionTables} ${teamColours[teamColoursSelector]}`}>
      {listTables}
    </div>
  )
}
