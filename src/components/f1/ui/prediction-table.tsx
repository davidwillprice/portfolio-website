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
import { Entrant } from "../classes"

function posDiffText(posDiff: number) {
  return posDiff === 0 ? (
    <span>
      <span className={tick}>✔</span>
    </span>
  ) : posDiff > 0 ? (
    <Fragment>
      {posDiff}
      <div className={`${posDiffIcon} ${up}`}>
        <i></i>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {Math.abs(posDiff)}
      <div className={`${posDiffIcon} ${down}`}>
        <i></i>
      </div>
    </Fragment>
  )
}
//Component to render a particular prediction tables
export default function PredictionTable(props: {
  tableOrder: { entrant: Entrant; posDiff: number }[]
}) {
  //Shortcut the table order
  const tableOrder = props.tableOrder
  //Map through each table row
  const listRows = tableOrder.map((entrantData, index) => {
    const { fName, sName, team } = entrantData.entrant
    return (
      //Create HTML for each table row using the data passed in as a prop
      <div className={tableRow} key={fName}>
        <div className={`${entrantBlock} ${teamColours[team ?? sName]}`}>
          <div className={position}>
            <span>{index + 1}</span>
          </div>
          <div className={divider}></div>
          <div className={entrantName}>
            <span className={fullName}>{fName}</span>
            <span className={shortName}>{sName}</span>
          </div>
        </div>
        <div className={posDiff}>{posDiffText(entrantData.posDiff)}</div>
      </div>
    )
  })
  return <div className="table">{listRows}</div>
}
