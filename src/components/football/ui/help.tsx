import React, { ReactChild } from "react"

import { helpCon } from "../../../styles/component/football/help.module.scss"

export default function Help(props: {
  year: string
  children: ReactChild | ReactChild[]
}) {
  return (
    <div className={helpCon}>
      <h1>Premier League Prediction Game&nbsp;{props.year}</h1>
      <h2>Rules</h2>
      <ol>
        <li>
          Each players' accuracy rating shows how close they are to a perfectly
          predicted table;
        </li>
        <li>
          How far a specific team prediction is from their actual ranking is
          shown to the right of each predicted table row;
        </li>
        <li>
          If the player has made a perfect prediction, a green tick is shown
          next to the team;
        </li>
        <li>
          If players have equal accuracy ratings, the player with more perfect
          predictions will be ranked higher. If they are still even, the player
          who was only 1 position off with more of their predictions will be
          ranked higher. If they are still even, the player who was only 2
          positions off with more of their predictions will be ranked higher and
          so on.
        </li>
      </ol>
      <h2>Additional Info</h2>
      <ul>
        <li>
          The 'Average' prediction table was calculated via the mean position of
          each team across the other players' prediction tables;
        </li>
        {props.children}
      </ul>
    </div>
  )
}
