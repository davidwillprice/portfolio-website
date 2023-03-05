import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    <li>
      *
      <a href="https://www.formula1.com/en/latest/article.f1-power-rankings-all-10-teams-ranked-after-2023-pre-season-testing.7144c6F6PdlxC07WLxZeEV.html">
        formula1.com
      </a>{" "}
      &{" "}
      <a href="https://twitter.com/wbuxtonofficial/status/1629768214283534336">
        Will Buxton
      </a>
      's predictions were trying to rank the teams at start of the season rather
      than guess the end of season standings.
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver: boolean) {
  return (
    <Fragment>
      <li>
        Nobody predicted Alonso, Norris, and Albon being beaten by their
        teammates;
      </li>
      <li>
        Jenny was the only person to predict Russell, Gasly, and Sainz beating
        their teammates;
      </li>
      <li>Will was the only person to predict Perez beating Verstappen;</li>
      <li>Tom was the only person to predict Zhou beating Bottas;</li>
      <li>
        Pete was the only person to predict Hulkenberg beating Magnussen, and
        the only person not to predict Red Bull will win the constructors
        (Opting for Mercedes);
      </li>
      <li>Jenny was the only person not to predict Williams finishing last.</li>
    </Fragment>
  )
}
