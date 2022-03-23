import React from "react"

import PredictionTable from "./prediction-table"

import {
  tableContainer,
  tableHeader,
  swipeIconCon,
  swipeIconRight,
  swipeIconLeft,
  predictionTables,
  totalDiff,
} from "../../../styles/component/f1/table.module.scss"
import * as teamColours from "../../../styles/component/f1/team-colours.module.scss"

//Component to render all prediction tables
export default function PredictionTables(props) {
  //playerData is data of the players that will displayed
  let playerData = props.playerData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //round decides which race data to show
  const round = "round" + props.roundNo

  const listTables = Object.keys(playerData).map((player, i) => (
    //Create a HTML around each table, calling the PredictionTable component (With the table data passed in) to create the table itself
    <div
      id={playerData[player].name + "-table"}
      className={tableContainer}
      key={playerData[player].name}
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
        {playerData[player].name}
      </div>
      <PredictionTable
        tableOrder={playerData[player].season[round][entrantType].diffs}
      />
      <div className={totalDiff}>
        Total: {playerData[player].season[round][entrantType].diffTotal}
      </div>
    </div>
  ))
  return (
    <div className={`${predictionTables} ${teamColours["teams" + props.year]}`}>
      {listTables}
    </div>
  )
}
