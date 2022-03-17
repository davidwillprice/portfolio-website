import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    <li>
      <a href="https://www.formula1.com/en/latest/article.f1-power-rankings-all-10-teams-ranked-after-2022-pre-season-testing.ncp8QfiV2BXCohi2Hbh2F.html">
        formula1.com
      </a>{" "}
      &{" "}
      <a href="https://twitter.com/wbuxtonofficial/status/1502773974186479616?s=21">
        Will Bruxton
      </a>
      's predictions were trying to rank the teams at start of the season rather
      than guess the end of season standings.
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver) {
  return <Fragment></Fragment>
}
