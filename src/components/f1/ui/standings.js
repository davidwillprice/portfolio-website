import React from "react"

import ActualTable from "./actual-table"
import PredictionTables from "./prediction-tables"

import {
  tablesOverview,
  playerNumbers3,
  playerNumbers5,
  playerNumbers1,
} from "../../../styles/component/f1/table.module.scss"

export default function Standings(props) {
  const numberOfPlayers = Object.keys(props.filteredPlayers).length
  let noOfPlayersClass =
    numberOfPlayers === 1
      ? playerNumbers1
      : numberOfPlayers === 3
      ? playerNumbers3
      : numberOfPlayers === 5
      ? playerNumbers5
      : ""

  return (
    <div className={`${tablesOverview} ${noOfPlayersClass}`}>
      <ActualTable
        year={props.year}
        roundData={props.roundData}
        entrantType={props.entrantType}
        roundNo={props.roundNo}
      />
      <PredictionTables
        year={props.year}
        playerData={props.filteredPlayers}
        entrantType={props.entrantType}
        roundNo={props.roundNo}
      />
    </div>
  )
}
