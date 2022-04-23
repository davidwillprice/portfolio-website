import React, { ReactChild } from "react"
import { Entrant, Round } from "../classes"

import { statsCon } from "../../../styles/component/f1/stats.module.scss"

export default function Stats(props: {
  children: ReactChild | ReactChild[]
  controDriverPredictions: {
    least: { playerNames: string[]; guessesFromAvg: number }
    most: { playerNames: string[]; guessesFromAvg: number }
  }
  controTeamPredictions: {
    least: { playerNames: string[]; guessesFromAvg: number }
    most: { playerNames: string[]; guessesFromAvg: number }
  }
  isSeasonOver: boolean
  noOfPredictions: { driver: number; team: number }
  roundData: Round[]
  selectedRound: number
}) {
  const roundDataDiffTotals =
    props.roundData[props.selectedRound].entrantDiffTotals
  const noOfDrivers = roundDataDiffTotals.driver.length
  const noOfTeams = roundDataDiffTotals.team.length
  const mostAccDriver = roundDataDiffTotals.driver[0]
  const leastAccDriver = roundDataDiffTotals.driver[noOfDrivers - 1]
  const mostAccTeam = roundDataDiffTotals.team[0]
  const leastAccTeam = roundDataDiffTotals.team[noOfTeams - 1]

  const controDriverPredicts = props.controDriverPredictions
  const controTeamPredicts = props.controTeamPredictions

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
          {mostAccDriver.entrant.fName} {props.isSeasonOver ? "was" : "is"} the
          most accurately predicted driver, with the average player only
          mispredicting him by{" "}
          {calcMisprediction(mostAccDriver, props.noOfPredictions.driver)}{" "}
          positions;
        </li>
        <li>
          {leastAccDriver.entrant.fName} {props.isSeasonOver ? "was" : "is"} the
          least accurately predicted driver, with the average player
          mispredicting him by{" "}
          {calcMisprediction(leastAccDriver, props.noOfPredictions.driver)}{" "}
          positions;
        </li>
        <li>
          {mostAccTeam.entrant.fName} {props.isSeasonOver ? "were" : "are"} the
          most accurately predicted team, with the average player only
          mispredicting them by{" "}
          {calcMisprediction(mostAccTeam, props.noOfPredictions.team)}{" "}
          positions;
        </li>
        <li>
          {leastAccTeam.entrant.fName} {props.isSeasonOver ? "were" : "are"} the
          least accurately predicted team, with the average player mispredicting
          them by {calcMisprediction(leastAccTeam, props.noOfPredictions.team)}{" "}
          positions.
        </li>
      </ul>
      <h2>Predictions Trivia</h2>
      <ul>
        <li>
          {controDriverPredicts.most.playerNames} had the most 'controversial'
          driver predictions, as they had the largest difference from the
          average prediction table ({controDriverPredicts.most.guessesFromAvg}{" "}
          position change
          {controDriverPredicts.most.guessesFromAvg !== 1 ? "s" : ""});
        </li>
        <li>
          {controDriverPredicts.least.playerNames} had the least 'controversial'
          driver predictions, as they had the smallest difference from the
          average prediction table ({controDriverPredicts.least.guessesFromAvg}{" "}
          position change
          {controDriverPredicts.least.guessesFromAvg !== 1 ? "s" : ""});
        </li>
        <li>
          {controTeamPredicts.most.playerNames} had the most 'controversial'
          team predictions, as they had the largest difference from the average
          prediction table ({controTeamPredicts.most.guessesFromAvg} position
          change
          {controTeamPredicts.most.guessesFromAvg !== 1 ? "s" : ""});
        </li>
        <li>
          {controTeamPredicts.least.playerNames} had the least 'controversial'
          team predictions, as they had the smallest difference from the average
          prediction table ({controTeamPredicts.least.guessesFromAvg} position
          change
          {controTeamPredicts.least.guessesFromAvg !== 1 ? "s" : ""}).
        </li>
        {props.children}
      </ul>
    </div>
  )
}
