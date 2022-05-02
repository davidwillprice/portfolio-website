import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    <li>
      <a href="https://news.paddypower.com/football/2021/08/10/premier-league-predictions-21-22-table-predicted-paddy-power-odds/">
        Paddy Power Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://projects.fivethirtyeight.com/soccer-predictions/premier-league/">
        FiveThirtyEight Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://www.dailystar.co.uk/sport/football/premier-league-supercomputer-table-2022-24542705">
        SportingIndex Super Computer Prediction Info.
      </a>
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver: boolean) {
  return (
    <Fragment>
      <li>
        Ewan was the only person who didn't predict that Manchester City would
        win the title, opting for Liverpool;
      </li>
      <li>
        Jack was the only person to predict Manchester United would finish as
        high as second;
      </li>
      <li>
        Sam was the only person to predict Chelsea would finish as low as
        fourth;
      </li>
      <li>
        Everyone predicted the top 4 would include Liverpool, Manchester City,
        Manchester United, and Chelsea;
      </li>
    </Fragment>
  )
}
