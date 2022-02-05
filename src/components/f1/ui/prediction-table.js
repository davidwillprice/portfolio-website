import React from "react"

import {
  tableRow,
  entrantBlock,
  position,
  divider,
  entrantName,
  fullName,
  shortName,
  posDiff,
} from "../../../styles/component/f1/table.module.scss"
import * as teamColours from "../../../styles/component/f1/team-colours.module.scss"

//Function to assign a class to the posDiff div depending on how high the posDiff is
function diffOpacity(posDiff, entrantType) {
  let diffOpacityClass
  if (entrantType === "driver") {
    if (posDiff > 0 && posDiff <= 3) {
      diffOpacityClass = "diffLow"
    } else if (posDiff === 0) {
      diffOpacityClass = "diffZero"
    } else if (posDiff > 3 && posDiff <= 6) {
      diffOpacityClass = "diffMed"
    } else {
      diffOpacityClass = "diffHigh"
    }
  } else {
    if (posDiff > 0 && posDiff <= 2) {
      diffOpacityClass = "diffLow"
    } else if (posDiff === 0) {
      diffOpacityClass = "diffZero"
    } else if (posDiff > 2 && posDiff <= 4) {
      diffOpacityClass = "diffMed"
    } else {
      diffOpacityClass = "diffHigh"
    }
  }
  return diffOpacityClass
}

//Component to render a particular prediction tables
export default function PredictionTables(props) {
  //Shortcut the table order
  const tableOrder = props.tableOrder
  //Kept entrant type for posDiff classes calc
  const entrantType = props.entrantType
  //Map through each table row
  const listRows = tableOrder.map((entrantData, index) => (
    //Create HTML for each table row using the data passed in as a prop
    <div className={tableRow} key={entrantData.entrant.fName}>
      <div
        className={`${entrantBlock} ${
          teamColours[entrantData.entrant.team ?? entrantData.entrant.sName]
        }`}
      >
        <div className={position}>
          <span>{index + 1}</span>
        </div>
        <div className={divider}></div>
        <div className={entrantName}>
          <span className={fullName}>{entrantData.entrant.fName}</span>
          <span className={shortName}>{entrantData.entrant.sName}</span>
        </div>
      </div>
      <div
        className={`${posDiff} ${diffOpacity(
          entrantData.posDiff,
          entrantType
        )}`}
      >
        <span>{entrantData.posDiff}</span>
      </div>
    </div>
  ))
  return <div className="table">{listRows}</div>
}
