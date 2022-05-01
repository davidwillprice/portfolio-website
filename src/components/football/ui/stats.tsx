import React, { ReactChild } from "react"
import { Entrant, GameWeek } from "../classes"

import { statsCon } from "../../../styles/component/football/stats.module.scss"

export default function Stats(props: {
  children: ReactChild | ReactChild[]
  controPredictions: {
    least: { playerNames: string[]; guessesFromAvg: number }
    most: { playerNames: string[]; guessesFromAvg: number }
  }
  isSeasonOver: boolean
  noOfPredictions: number
  gameWeekData: GameWeek[]
  selectedGameWeek: number
}) {
  const gameWeekDataDiffTotals =
    props.gameWeekData[props.selectedGameWeek].entrantDiffTotals
  const noOfTeams = gameWeekDataDiffTotals.length
  const mostAccTeam = gameWeekDataDiffTotals[0]
  const leastAccTeam = gameWeekDataDiffTotals[noOfTeams - 1]

  const controPredicts = props.controPredictions

  //Get diff total, average it out by no of predictions and then round to one decimal place
  function calcMisprediction(
    entrant: { entrant: Entrant; diffTotal: number },
    noOfPredictions: number
  ) {
    return Math.round((entrant.diffTotal / noOfPredictions) * 10) / 10
  }
  return (
    <div className={statsCon}>
      <h2>Standings Stats</h2>
      <ul>
        <li>
          {mostAccTeam.entrant.fName} {props.isSeasonOver ? "were" : "are"} the
          most accurately predicted team, with the average player only
          mispredicting them by{" "}
          {calcMisprediction(mostAccTeam, props.noOfPredictions)} positions;
        </li>
        <li>
          {leastAccTeam.entrant.fName} {props.isSeasonOver ? "were" : "are"} the
          least accurately predicted team, with the average player mispredicting
          them by {calcMisprediction(leastAccTeam, props.noOfPredictions)}{" "}
          positions.
        </li>
      </ul>
      <h2>Predictions Trivia</h2>
      <ul>
        <li>
          {controPredicts.most.playerNames} had the most 'controversial'
          predictions, as they had the largest difference from the average
          prediction table ({controPredicts.most.guessesFromAvg} position change
          {controPredicts.most.guessesFromAvg !== 1 ? "s" : ""});
        </li>
        <li>
          {controPredicts.least.playerNames} had the least 'controversial'
          predictions, as they had the smallest difference from the average
          prediction table ({controPredicts.least.guessesFromAvg} position
          change
          {controPredicts.least.guessesFromAvg !== 1 ? "s" : ""}).
        </li>
        {props.children}
      </ul>
    </div>
  )
}
