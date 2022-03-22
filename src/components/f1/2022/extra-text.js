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

export function statsNotes(isSeasonOver) {
  return (
    <Fragment>
      <li>
        Nobody predicted Verstappen, Hamilton, Vettel, Gasly, Magnussen, or
        Bottas would be beaten by their team mate;
      </li>
      <li>
        Pete & Sam were the only people to predict Ocon would beat Alonso;
      </li>
      <li>
        Jack & Will were the only people to predict Riccardo would beat Norris;
      </li>
      <li>
        Tom & Will were the only people to predict Latifi would beat Albon;
      </li>
      <li>
        Will was the only person to predict Russell would finish as low as 7th;
      </li>
      <li>
        Pete was the only person to predict a Ferrari in the top two of the
        drivers or constructors, predicting a Ferrari constructors and driver's
        title (Sainz);
      </li>
      <li>
        Richard was the only person to predict Haas would finish as high as 5th,
        and Aston Martin as low as 9th;
      </li>
      <li>
        Will was the only person to predict Aston Martin would finish as high as
        5th;
      </li>
      <li>Everyone but Richard predicted McLaren would finish in 4th (3rd).</li>
    </Fragment>
  )
}
