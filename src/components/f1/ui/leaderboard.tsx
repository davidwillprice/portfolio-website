import React from "react"
import { Round } from "../classes"

import {
  leaderboard,
  leaderboardPos,
  leaderboardPosDiff,
  posLeaderboardChg,
  negLeaderboardChg,
  noLeaderboardChg,
  leaderboardName,
  perfectPredictions,
} from "../../../styles/component/f1/leaderboard.module.scss"

function prevRdDiffUI(prevRdDiff: number) {
  return prevRdDiff > 0
    ? posLeaderboardChg
    : prevRdDiff < 0
    ? negLeaderboardChg
    : noLeaderboardChg
}

export default function Leaderboard(props: {
  roundData: Round[]
  entrantType: string
  roundNo: number
}) {
  //playerData is data of the players that will displayed
  const roundData = props.roundData
  //entrantType decides whether to generate a driver or team leaderboard
  const entrantType = props.entrantType
  //round decides which race data to show
  const roundNo = props.roundNo
  //Go to the leaderboards of the selected entrantType in the selected round and filter out any players which didn't make predictions for that entrant type
  const filteredRoundData = roundData[roundNo].leaderboards[
    entrantType as keyof Round["leaderboards"]
  ].filter(
    leaderboardStanding =>
      leaderboardStanding.player.tables[
        entrantType as keyof Round["leaderboards"]
      ].length > 0
  )
  const listRows = filteredRoundData.map((leaderboardStanding, index) => (
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
          leaderboardStanding.player.season["round" + roundNo][
            entrantType as keyof Round["leaderboards"]
          ].diffCounts[0]
        }
      </td>
    </tr>
  ))
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
