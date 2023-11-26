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
        Nobody predicted Alonso
        {isSeasonOver && <span className={tick}> (✔)</span>}, Norris
        {isSeasonOver && <span className={tick}> (✔)</span>}, and Albon
        {isSeasonOver && <span className={tick}> (✔)</span>} being beaten by
        their teammates;
      </li>
      <li>
        Jenny was the only person to predict Russell
        {isSeasonOver && <span className={cross}> (✖)</span>}, Gasly
        {isSeasonOver && <span className={tick}> (✔)</span>}, and Sainz
        {isSeasonOver && <span className={cross}> (✖)</span>} beating their
        teammates;
      </li>
      <li>
        Will was the only person to predict Perez beating Verstappen
        {isSeasonOver && <span className={cross}> (✖)</span>};
      </li>
      <li>
        Tom was the only person to predict Zhou beating Bottas
        {isSeasonOver && <span className={cross}> (✖)</span>};
      </li>
      <li>
        Pete was the only person to predict Hulkenberg beating Magnussen
        {isSeasonOver && <span className={tick}> (✔)</span>}, and the only
        person not to predict Red Bull will win the constructors (Opting for
        Mercedes)
        {isSeasonOver && <span className={cross}> (✖)</span>};
      </li>
      <li>
        Jenny was the only person not to predict Williams finishing last
        {isSeasonOver && <span className={tick}> (✔)</span>}, predicting Haas to
        be last instead
        {isSeasonOver && <span className={tick}> (✔)</span>}.
      </li>
    </Fragment>
  )
}
