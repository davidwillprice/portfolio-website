import React from "react"
import { GameWeek } from "../classes"

import {
  leaderboard,
  leaderboardPos,
  leaderboardPosDiff,
  posLeaderboardChg,
  negLeaderboardChg,
  noLeaderboardChg,
  leaderboardName,
  perfectPredictions,
} from "../../../styles/component/football/leaderboard.module.scss"

function prevRdDiffUI(prevRdDiff: number) {
  return prevRdDiff > 0
    ? posLeaderboardChg
    : prevRdDiff < 0
    ? negLeaderboardChg
    : noLeaderboardChg
}

export default function Leaderboard(props: {
  gameWeekData: GameWeek[]
  gameWeekNo: number
}) {
  //Game week data to show
  const gameWeekNo = props.gameWeekNo
  //playerData is data of the players that will displayed
  const gameWeekData = props.gameWeekData[gameWeekNo]

  const listRows = gameWeekData.leaderboard.map(
    (leaderboardStanding, index) => (
      <tr
        //className={leaderboardRow}
        key={index + 1 + leaderboardStanding.player.name}
      >
        <td className={leaderboardPos}>{index + 1}</td>
        <td
          //Assign the position change an icon depending on whether they moved up or down compared to the last round
          className={`${leaderboardPosDiff} ${prevRdDiffUI(
            leaderboardStanding.prevRdDiff
          )}`}
        >
          <i></i>
        </td>
        <td className={leaderboardName}>{leaderboardStanding.player.name}</td>
        <td>{leaderboardStanding.percentCorrect}%</td>
        <td className={perfectPredictions}>
          {
            leaderboardStanding.player.season["gameWeek" + gameWeekNo]
              .diffCounts[0]
          }
        </td>
      </tr>
    )
  )
  return (
    <table className={leaderboard}>
      <thead>
        <tr>
          <th>Pos</th>
          <th aria-label="Position change header"></th>
          <th>Name</th>
          <th>Accuracy</th>
          <th className={perfectPredictions}>Perfect Predictions</th>
        </tr>
      </thead>
      <tbody>{listRows}</tbody>
    </table>
  )
}
