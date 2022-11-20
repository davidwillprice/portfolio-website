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
        Nobody predicted Verstappen
        {isSeasonOver && <span className={tick}> ✔</span>}, Hamilton
        {isSeasonOver && <span className={cross}> ✖</span>}, Vettel
        {isSeasonOver && <span className={tick}> ✔</span>}, Gasly
        {isSeasonOver && <span className={tick}> ✔</span>}, Magnussen
        {isSeasonOver && <span className={tick}> ✔</span>}, or Bottas
        {isSeasonOver && <span className={tick}> ✔</span>} would be beaten by
        their team mate;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔ </span>}Pete & Sam were the
        only people to predict Ocon would beat Alonso;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖ </span>}Jack & Will were the
        only people to predict Riccardo would beat Norris;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖ </span>}Tom & Will were the
        only people to predict Latifi would beat Albon;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖ </span>}Will was the only
        person to predict Russell would finish lower than 5th (7th);
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔ </span>}Pete was the only
        person to predict a Ferrari in the top two of the drivers or
        constructors, predicting a Ferrari constructors{" "}
        {isSeasonOver && <span className={cross}>✖ </span>}and driver's title
        (Sainz)
        {isSeasonOver ? <span className={cross}> ✖</span> : ";"}
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔ </span>}Pete was also the only
        person to predict Mercedes finishing lower than 2nd (3rd);
      </li>
      <li>
        Richard was the only person to predict Haas would finish higher than 7th
        (5th){isSeasonOver && <span className={cross}> ✖</span>}, and the only
        person to predict Aston Martin lower than 8th (9th)
        {isSeasonOver && <span className={cross}> ✖</span>};
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖ </span>}Will was the only
        person to predict Aston Martin would finish higher than 6th (5th);
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖ </span>}Everyone but Richard
        predicted McLaren would finish in 4th (3rd).
      </li>
    </Fragment>
  )
}
