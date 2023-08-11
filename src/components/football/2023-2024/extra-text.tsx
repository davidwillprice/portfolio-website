import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    <li>
      <a href="https://www.bbc.co.uk/sport/football/66437506">
        BBC Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://talksport.com/football/1522233/michael-owen-premier-league-table-predictions-newcastle-tottenham/">
        Michael Owen prediction info;
      </a>
    </li>
    <li>
      <a href="https://www.fourfourtwo.com/news/opta-supercomputer-predicts-manchester-city-to-win-premier-league-202324-title-by-16-points">
        Opta prediction info;
      </a>
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver: boolean) {
  return (
    <Fragment>
      {" "}
      <li>
        Pete was the only person to predict Manchester City finishing lower than
        2nd;
      </li>
      <li>
        Everyone predicted Manchester City, Manchester United, and Arsenal would
        get top four;
      </li>
      <li>
        Everyone predicted Sheffield United finishing within the bottom two;
      </li>
      <li>
        Ewan, Glen, and Jack G were the only people to predict Sheffield United
        finishing bottom;
      </li>
      <li>
        Ewan and Jake were the only people to predict Brentford getting top ten;
      </li>
      <li>
        Will was the only person to predict Liverpool finishing outside of
        CPL/EPL (Lower than 6th), Aston Villa finishing in the top four, Luton
        surviving, Wolves finishing last, and Bournemouth getting relegated;
      </li>
      <li>
        Glen was the only person to predict Newcastle finishing outside of
        Europe (Lower than 7th);
      </li>
      <li>
        Matt was the only person to predict Wolves surviving and Burnley getting
        relegated;
      </li>
      <li>David was the only person to predict Fulham getting top ten.</li>
    </Fragment>
  )
}
