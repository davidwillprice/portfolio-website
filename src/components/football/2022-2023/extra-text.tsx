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
      {isSeasonOver && (
        <li>
          David was the only person not to correctly perdict a single team's
          final standing;
        </li>
      )}
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Will was the only
        person to predict Chelsea would win the title,{" "}
        {isSeasonOver && <span className={cross}>✖</span>} and the only person
        to predict Everton finishing top 6;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Jack G was the only
        person to predict Bournemouth finishing higher than 20th,{" "}
        {isSeasonOver && <span className={cross}>✖</span>} and the only person
        to predict Brentford getting relegated;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Ewan was the only
        person to predict Southampton getting relegated;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Sam was the only
        person to predict Newcastle would reach the top 6;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Jack H was the only
        person to predict Manchester United would get Champions League;
      </li>
      <li>
        {" "}
        {isSeasonOver && <span className={tick}>✔</span>} Jack H and Sam were
        the only people to predict Tottenham wouldn't get Champions League;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Jake was the only
        person to predict West Ham would get top 6,{" "}
        {isSeasonOver && <span className={cross}>✖</span>} and the only person
        to predict Brighton would be relegated.
      </li>
    </Fragment>
  )
}
