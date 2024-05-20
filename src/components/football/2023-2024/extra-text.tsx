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
        2nd {isSeasonOver && <span className={cross}>✖</span>};
      </li>
      <li>
        Everyone predicted Manchester City{" "}
        {isSeasonOver && <span className={tick}>✔</span>}, Manchester United{" "}
        {isSeasonOver && <span className={cross}>✖</span>}, and Arsenal{" "}
        {isSeasonOver && <span className={tick}>✔</span>} would get top four;
      </li>
      <li>
        Everyone predicted Sheffield United finishing within the bottom two{" "}
        <span className={tick}>✔</span>;
      </li>
      <li>
        Ewan, Glen, and Jack G were the only people to predict Sheffield United
        finishing bottom <span className={tick}>✔</span>;
      </li>
      <li>
        Ewan and Jake were the only people to predict Brentford getting top ten{" "}
        {isSeasonOver && <span className={cross}>✖</span>};
      </li>
      <li>
        Will was the only person to predict Liverpool finishing outside of
        CPL/EPL (Lower than 6th){" "}
        {isSeasonOver && <span className={cross}>✖</span>}, Aston Villa
        finishing in the top four{" "}
        {isSeasonOver && <span className={tick}>✔</span>}, Luton surviving{" "}
        {isSeasonOver && <span className={cross}>✖</span>}, Wolves finishing
        last {isSeasonOver && <span className={cross}>✖</span>}, and Bournemouth
        getting relegated {isSeasonOver && <span className={cross}>✖</span>};
      </li>
      <li>
        Glen was the only person to predict Newcastle finishing outside of
        Europe (Lower than 7th){" "}
        {isSeasonOver && <span className={cross}>✖</span>};
      </li>
      <li>
        Matt was the only person to predict Wolves surviving{" "}
        {isSeasonOver && <span className={tick}>✔</span>} and Burnley getting
        relegated {isSeasonOver && <span className={tick}>✔</span>};
      </li>
      <li>
        David was the only person to predict Fulham getting top ten{" "}
        {isSeasonOver && <span className={cross}>✖</span>}.
      </li>
    </Fragment>
  )
}
