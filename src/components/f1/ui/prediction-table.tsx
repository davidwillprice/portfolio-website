import React, { Fragment } from "react"

import { tick } from "../../../styles/component/f1/stats.module.scss"

import {
  tableRow,
  entrantBlock,
  position,
  divider,
  entrantName,
  fullName,
  shortName,
  posDiff,
  posDiffIcon,
  up,
  down,
} from "../../../styles/component/f1/table.module.scss"
import * as teamColours from "../../../styles/component/f1/team-colours.module.scss"

function posDiffText(entrantData) {
  return entrantData.posDiff === 0 ? (
    <span>
      <span className={tick}>✔</span>
    </span>
  ) : entrantData.posDiff > 0 ? (
    <Fragment>
      {entrantData.posDiff}
      <div className={`${posDiffIcon} ${up}`}>
        <i></i>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {Math.abs(entrantData.posDiff)}
      <div className={`${posDiffIcon} ${down}`}>
        <i></i>
      </div>
    </Fragment>
  )
}
//Component to render a particular prediction tables
export default function PredictionTable(props) {
  //Shortcut the table order
  const tableOrder = props.tableOrder
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
      <div className={posDiff}>{posDiffText(entrantData)}</div>
    </div>
  ))
  return <div className="table">{listRows}</div>
}
