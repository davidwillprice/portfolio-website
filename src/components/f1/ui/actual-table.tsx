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
} from "../../../styles/component/f1/table.module.scss"
import * as teamColours from "../../../styles/component/f1/team-colours.module.scss"

export default function ActualTable(props: {
  roundNo: number
  roundData: []
  entrantType: string
  year: number
}) {
  //roundData is all the race results
  const roundData = props.roundData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //roundNo decides which race data to show
  const roundNo = props.roundNo

  const listRows = roundData[roundNo].standings[entrantType].map(
    (entrant, index) => (
      //Create HTML for each table row using the data passed in as a prop

      <div className={tableRow} key={index + 1 + "-" + entrant.fName}>
        <div
          className={`${entrantBlock} ${
            teamColours[entrant.team ?? entrant.sName]
          }`}
        >
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
    )
  )
  return (
    //Passes a class that includes the year to set the correct team colours like "teams2022"
    <div className={`${tableContainer} ${teamColours["teams" + props.year]}`}>
      <div className={tableHeader}>Standings</div>
      <div className="table">{listRows}</div>
    </div>
  )
}
