import React from "react"

import {
  tableRow,
  entrantBlock,
  position,
  divider,
  entrantName,
  fullName,
  shortName,
  tableContainer,
  tableHeader,
} from "../../../styles/component/football/table.module.scss"
import * as teamColours from "../../../styles/component/football/team-colours.module.scss"

import { GameWeek } from "../classes"

export default function ActualTable(props: {
  gameWeekNo: number
  gameWeekData: GameWeek[]
  year: string
}) {
  //All game week data
  const gameWeekData = props.gameWeekData
  //roundNo decides which game week data to use
  const gameWeekNo = props.gameWeekNo

  const listRows = gameWeekData[gameWeekNo].standings.map((entrant, index) => (
    //Create HTML for each table row using the data passed in as a prop

    <div className={tableRow} key={index + 1 + "-" + entrant.fName}>
      <div className={`${entrantBlock} ${teamColours[entrant.sName]}`}>
        <div className={position}>
          <span>{index + 1}</span>
        </div>
        <div className={divider}></div>
        <div className={entrantName}>
          <span className={fullName}>{entrant.fName}</span>
          <span className={shortName}>{entrant.sName}</span>
        </div>
      </div>
    </div>
  ))
  //A class that includes the years to set the correctly dated team colours
  const teamColoursSelector = "teams" + props.year.replace("-", "")
  return (
    <div className={`${tableContainer} ${teamColours[teamColoursSelector]}`}>
      <div className={tableHeader}>Standings</div>
      <div className="table">{listRows}</div>
    </div>
  )
}
