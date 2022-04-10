import React, { ReactChild } from "react"

import { helpCon } from "../../../styles/component/f1/help.module.scss"

export default function Help(props: {
  year: string
  children: ReactChild | ReactChild[]
}) {
  return (
    <div className={helpCon}>
      <h1>F1 Prediction Game&nbsp;{props.year}</h1>
      <h2>Rules</h2>
      <ol>
        <li>
          One penalty point is awarded for every position that a driver/team is
          from their actual standing - These are shown to the right of each
          predicted table row;
        </li>
        <li>
          If the player has made a perfect prediction, a green tick shows
          instead of the penalty points;
        </li>
        {/*<div className={f1PredictCSS.preview}>
        <div className={f1PredictCSS.tableRow}>
          <div className={`${f1PredictCSS.entrantBlock} ${f1PredictCSS.rbr}`}>
            <div className={f1PredictCSS.position}>
              <span>2</span>
            </div>
            <div className={f1PredictCSS.divider}></div>
            <div className={f1PredictCSS.entrantName}>
              <span className={f1PredictCSS.fullName}>Verstappen</span>
            </div>
          </div>
          <div className={`${f1PredictCSS.posDiff} ${f1PredictCSS.diffMed}`}>
            <span>5</span>
          </div>
        </div>
        <p>
          Verstappen was predicted to finish 2nd, but is actually 5 positions
          away from that in the current standings.
        </p>
</div>*/}
        <li>
          The total penalty points for each player is shown at the bottom of
          their prediction tables;
        </li>
        <li>
          Each players' accuracy rating in the leaderboard shows how close they
          are to a perfectly predicted table;
        </li>
        <li>
          The player(s) with the most accurate driver and constructor tables at
          the end of the season win.
        </li>
      </ol>
      <h2>Additional Info</h2>
      <ul>
        <li>
          If players have equal accuracy ratings, the player with the more
          perfect predictions will be ranked higher. If they are still even, the
          player who was only 1 position off with more of their predictions will
          be ranked higher. If they are still even, the player who was only 2
          positions off with more of their predictions will be ranked higher and
          so on.
        </li>
        <li>
          The 'Average' prediction tables were worked out by calculating the
          mean position of each driver/team across the other player's prediction
          tables;
        </li>
        <li>Stand-in drivers won't be added to the driver standings;</li>
        <li>
          Other than that, the game's standings will be ordered as they are in
          real life;
        </li>
        {props.children}
      </ul>
    </div>
  )
}
