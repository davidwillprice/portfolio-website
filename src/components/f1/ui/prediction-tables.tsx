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
} from "../../../styles/component/f1/table.module.scss"
import { calcPredictionsAcc } from "../calc"
import { Player } from "../classes"
import * as teamColours from "../../../styles/component/f1/team-colours.module.scss"

//Component to render all prediction tables
export default function PredictionTables(props: {
  entrantType: string
  playerData: Player[]
  roundNo: number
  year: number
}) {
  //playerData is data of the players that will displayed
  let playerData = props.playerData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //round decides which race data to show
  const round = "round" + props.roundNo

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
      <PredictionTable
        tableOrder={
          player.season[round][entrantType as keyof Player["tables"]].diffs
        }
      />
      <div className={accuracy}>
        Accuracy:{" "}
        {calcPredictionsAcc(
          entrantType,
          player.season[round][entrantType as keyof Player["tables"]].diffTotal
        )}
        %
      </div>
    </div>
  ))
  return (
    <div className={`${predictionTables} ${teamColours["teams" + props.year]}`}>
      {listTables}
    </div>
  )
}
