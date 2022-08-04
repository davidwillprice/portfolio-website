import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <Fragment>
    <li>
      <a href="https://projects.fivethirtyeight.com/soccer-predictions/premier-league/">
        FiveThirtyEight Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://www.fourfourtwo.com/features/premier-league-2022-23-season-preview-and-prediction-how-your-club-will-fare-this-season">
        FourFourTwo Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://www.bbc.co.uk/sport/football/62391593">
        BBC Prediction Info;
      </a>
    </li>
    <li>
      <a href="https://www.thesun.co.uk/sport/football/18885031/supercomputer-premier-league-table-man-utd-arsenal-chelsea-fixtures/">
        Betting app SBK Super Computer.
      </a>
    </li>
  </Fragment>
)

export function statsNotes(isSeasonOver: boolean) {
  return (
    <Fragment>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Will was the only
        person to predict Chelsea would win the title,{" "}
        {isSeasonOver && <span className={cross}>✖</span>} and the only person
        to predict Everton finishing higher than 13th (6th);
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Jack G was the only
        person to predict Bournemouth finishing higher than 20th (19th),{" "}
        {isSeasonOver && <span className={cross}>✖</span>} and the only person
        to predict Brentford getting relegated;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Ewan was the only
        person to predict Southampton getting relegated;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Sam was the only
        person to predict Newcastle would reach the top 6;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Jack H was the only
        person to predict Manchester United would get Champions League;
      </li>
      <li>
        {" "}
        {isSeasonOver && <span className={cross}>✖</span>} Jack H and Sam were
        the only people to predict Tottenham wouldn't get Champions League;
      </li>
    </Fragment>
  )
}
