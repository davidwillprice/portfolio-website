import React from "react"

import ActualTable from "./actual-table"
import PredictionTables from "./prediction-tables"
import { Player, Round } from "../classes"

import {
  tablesOverview,
  playerNumbers5,
  playerNumbers4,
  playerNumbers3,
  playerNumbers2,
  playerNumbers1,
} from "../../../styles/component/f1/table.module.scss"

export default function Standings(props: {
  roundNo: number
  entrantType: string
  filteredPlayers: Player[]
  roundData: Round[]
  year: number
}) {
  console.log(props.roundData)
  const numberOfPlayers = Object.keys(props.filteredPlayers).length
  let noOfPlayersClass =
    numberOfPlayers === 1
      ? playerNumbers1
      : numberOfPlayers === 2
      ? playerNumbers2
      : numberOfPlayers === 3
      ? playerNumbers3
      : numberOfPlayers === 4
      ? playerNumbers4
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
