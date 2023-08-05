import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    {/*<li>
      <a href="https://projects.fivethirtyeight.com/soccer-predictions/premier-league/">
        FiveThirtyEight Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://www.bbc.co.uk/sport/football/62391593">
        BBC Prediction Info;
      </a>
    </li>
    */}
    <li>
      <a href="https://www.examinerlive.co.uk/sport/football/news/fourfourtwo-sheffield-united-premier-league-27429775">
        FourFourTwo prediction info;
      </a>
    </li>
    <li>
      <a href="https://talksport.com/football/1522233/michael-owen-premier-league-table-predictions-newcastle-tottenham/">
        Michael Owen prediction info;
      </a>
    </li>
    <li>
      <a href="https://www.mirror.co.uk/sport/football/news/premier-league-table-fixtures-2024-30240951">
        'King Casino Bonus' 'supercomputer' prediction info.
      </a>
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver: boolean) {
  return <Fragment></Fragment>
}
