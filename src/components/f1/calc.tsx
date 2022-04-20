import { Player, Round, Players } from "./classes"

export function generateAverageTable(
  players: Players,
  entrantData: any,
  entrantType: string
) {
  console.log(players)
  //Delete the average table if it exists from a previous render
  if (players.average.tables[entrantType as keyof Player["tables"]]) {
    players.average.tables[entrantType as keyof Player["tables"]] = []
  }
  //Loop over each entrant, finding their index in each player's prediction table and totalling them in a new avgPrePos property
  for (const entrant of Object.values(entrantData)) {
    let predictionPosTotal = 0
    let noOfPlayers = 0
    for (const player of Object.values(players)) {
      //Checking player does actually predict entrant
      if (
        player.tables[entrantType as keyof Player["tables"]].indexOf(
          entrant
        ) !== -1
      ) {
        predictionPosTotal +=
          player.tables[entrantType as keyof Player["tables"]].indexOf(
            entrant
          ) + 1
        noOfPlayers++
      }
    }
    entrant.avgPrePos = predictionPosTotal / noOfPlayers
    players.average.tables[entrantType as keyof Player["tables"]].push(entrant)
  }
  return players
}

export function orderAverageTable(players, entrantType: string) {
  //Sort the players by their percentage correct, highest first
  players.average.tables[entrantType].sort((a, b) =>
    a.avgPrePos > b.avgPrePos ? 1 : -1
  )
  return players
}

export function calcData(players, rounds: Round[]) {
  //Loop through each round
  for (const [roundNo, round] of Object.entries(rounds)) {
    //Delete the leaderboards if they exist from a previous render
    if (round.leaderboards) {
      round.leaderboards.driver = []
      round.leaderboards.team = []
    }
    //Loop through each player to generate their team and driver differences
    for (const player of Object.values(players)) {
      //Create blank properties ready for the player's performance in this round
      player.season["round" + roundNo] = {
        driver: { diffTotal: 0, diffs: [], diffCounts: [] },
        team: { diffTotal: 0, diffs: [], diffCounts: [] },
      }
      for (let i = 0; i < 20; i++) {
        player.season["round" + roundNo].driver.diffCounts.push(0)
        player.season["round" + roundNo].team.diffCounts.push(0)
      }
      //Loop the player's predictions, each driver and their pos difference from that round's standings
      function calcRoundPerformance(entrantType, player) {
        if (player.tables[entrantType].length > 0) {
          for (const [predictedPos, entrant] of Object.entries(
            player.tables[entrantType]
          )) {
            //Find the position the player predicted that entrant would come in the standings
            const actualPos = round.standings[entrantType].indexOf(entrant)
            //Work out how many positions the player is off
            const posDiff = actualPos - predictedPos
            player.season["round" + roundNo][entrantType].diffCounts[
              Math.abs(posDiff)
            ]++
            //Add the posDiff to their total for this round
            player.season["round" + roundNo][entrantType].diffTotal += Math.abs(
              posDiff
            )
            //Add the entrant and their posDiff to the Player's data
            player.season["round" + roundNo][entrantType].diffs.push({
              entrant: entrant,
              posDiff,
            })
          }
        }
      }
      calcRoundPerformance("driver", player)
      calcRoundPerformance("team", player)
      //Populate leaderboard for selected player within selected round
      function calcLeaderboard(entrantType, player) {
        round.leaderboards[entrantType].push({
          player: player,
          //The % a table is to correct is difference of 200 and the diffTotal as a percentage of 200
          percentCorrect: calcPredictionsAcc(
            entrantType,
            player.season["round" + roundNo][entrantType].diffTotal
          ),
          prevRdDiff: 0,
        })
      }
      calcLeaderboard("driver", player)
      calcLeaderboard("team", player)
    }
  }
}

export function calcLeaderboardRdDiffs(rounds, entrantType) {
  //Loop over the rounds to calculate each of their leaderboard round changes
  for (const [roundNo, round] of Object.entries(rounds)) {
    //Don't calculate the leaderboard changes of the first round
    if (roundNo > 0) {
      //Loop over each player in order of the looped round's leaderboard
      for (const [currentLbPos, currentPlayerData] of Object.entries(
        round.leaderboards[entrantType]
      )) {
        //Find that player's position in the leaderboard of the round previous to the looped round
        const previousLbPos = rounds[roundNo - 1].leaderboards[
          entrantType
        ].findIndex(
          entrant => entrant.player.name === currentPlayerData.player.name
        )
        //Attach the player's leaderboard position change from the previous round to their data for the looped round
        currentPlayerData.prevRdDiff = previousLbPos - currentLbPos
      }
    }
  }
}

export function orderLeaderboards(rounds, entrantType) {
  //Loop through each round
  for (const [roundNo, round] of Object.entries(rounds)) {
    round.leaderboards[entrantType].sort(function (a, b) {
      let order
      //If their percentage correct is the same, sort by perfect predictions
      if (a.percentCorrect === b.percentCorrect) {
        //Loop from 0 to 19
        //If a has bigger diffCount than b return 1
        for (let i = 0; i < 20; i++) {
          if (
            a.player.season["round" + roundNo][entrantType].diffCounts[i] <
            b.player.season["round" + roundNo][entrantType].diffCounts[i]
          ) {
            order = 1
            break
          } else if (
            //If b has bigger diffCount than a return -1
            a.player.season["round" + roundNo][entrantType].diffCounts[i] >
            b.player.season["round" + roundNo][entrantType].diffCounts[i]
          ) {
            order = -1
            break
          } else {
            //If they have the same diffCount, continue the loop and compare a lower level of diffCount
            continue
          }
        }
      } else {
        //Else sort by percentage correct, highest first
        return a.percentCorrect < b.percentCorrect ? (order = 1) : (order = -1)
      }
      return order
    })
  }
}

export function generateEntrantDiffTotals(
  rounds,
  players,
  entrantType,
  entrantData
) {
  //Loop over rounds to generate the EntrantDiffTotals for each round
  for (const roundNo of Object.keys(rounds)) {
    //Loop over players to get their diffs for each entrant
    for (const player of Object.values(players)) {
      //Loop over entrants to add each entrant's diffs to each total before moving onto the next player
      for (const entrant of Object.values(entrantData)) {
        //Find if the entrantDiffTotals doesn't already contain an object for the entrant, push {entrant:[entrant], diffTotal:0}
        if (
          !rounds[roundNo].entrantDiffTotals[entrantType].find(
            x => x.entrant === entrant
          )
        ) {
          rounds[roundNo].entrantDiffTotals[entrantType].push({
            entrant: entrant,
            diffTotal: 0,
          })
        }
        //Checking if the player made predictions for that entrantType
        if (player.season["round" + roundNo][entrantType].diffs.length > 0) {
          //Find entrant in player's predictions for the round
          const entrantStanding = player.season["round" + roundNo][
            entrantType
          ].diffs.find(element => element.entrant.sName === entrant.sName)
          //Find entrantDiff total
          let entrantTotal = rounds[roundNo].entrantDiffTotals[
            entrantType
          ].find(element => element.entrant === entrant)
          //Add entrantStanding.posDiff to entrant's diff total
          entrantTotal.diffTotal += Math.abs(entrantStanding.posDiff)
        }
      }
    }
  }
}

export function orderEntrantDiffTotals(rounds, entrantType) {
  //Loop over rounds
  for (const round of Object.values(rounds)) {
    //Sort the players by their percentage correct, highest first
    round.entrantDiffTotals[entrantType].sort((a, b) =>
      a.diffTotal > b.diffTotal ? 1 : -1
    )
  }
}

//Populate filteredPlayers with the players that match the selected playerGroup and have predictions for the slected entrantType
export function filteredPlayers(players, playerGroup, entrantType) {
  const obj = {}
  for (const key of Object.keys(players)) {
    if (
      players[key].groups.includes(playerGroup) &&
      players[key].tables[entrantType].length > 0
    ) {
      obj[key] = players[key]
    }
  }
  return obj
}

export function getPlayerGroups(players) {
  let playerGroups = new Set()
  for (const player in players) {
    for (const group of players[player].groups) {
      playerGroups.add(group)
    }
  }
  return [...playerGroups]
}

export function getControPlayers(players, entrantType) {
  let mostControPlayers = { playerNames: [], guessesFromAvg: "" }
  let leastControPlayers = { playerNames: [], guessesFromAvg: "" }
  //Loop through each player
  for (const player of Object.values(players)) {
    //If the player is "average" or doesn't have predictions for that entrant type, skip them
    if (player.name === "Average" || player.tables[entrantType].length === 0) {
      continue
    }
    let totalGuessesfromAverage = 0
    //Loop over their entrants, adding their difference from average to total
    for (const [predictedPos, entrant] of Object.entries(
      player.tables[entrantType]
    )) {
      const avgPredictedPos = players.average.tables[entrantType].indexOf(
        entrant
      )
      const posDiffs = Math.abs(predictedPos - avgPredictedPos)
      totalGuessesfromAverage += posDiffs
    }
    // If the player's guesses were further from the average than the previous highest, change them to the most contro player
    if (totalGuessesfromAverage > mostControPlayers.guessesFromAvg) {
      mostControPlayers = {
        playerNames: [player.name],
        guessesFromAvg: totalGuessesfromAverage,
      }
    } else if (totalGuessesfromAverage === mostControPlayers.guessesFromAvg) {
      mostControPlayers.playerNames.push(player.name)
    }
    // If the player's guesses were less from the average than the previous lowest, change them to the least contro player
    if (
      (totalGuessesfromAverage < leastControPlayers.guessesFromAvg) |
      !leastControPlayers.guessesFromAvg
    ) {
      leastControPlayers = {
        playerNames: [player.name],
        guessesFromAvg: totalGuessesfromAverage,
      }
    } else if (totalGuessesfromAverage === leastControPlayers.guessesFromAvg) {
      leastControPlayers.playerNames.push(player.name)
    }
  }
  mostControPlayers.playerNames = formatArrayIntoList(
    mostControPlayers.playerNames
  )
  leastControPlayers.playerNames = formatArrayIntoList(
    leastControPlayers.playerNames
  )
  return { most: mostControPlayers, least: leastControPlayers }
}

//Take an array, if it is more than 1 in length then add "& " at start of the last element and then add ", " between every element to make it into a list
function formatArrayIntoList(arr) {
  if (arr.length === 1) {
    return arr
  }
  arr[arr.length - 1] = "& " + arr[arr.length - 1]
  if (arr.length === 2) {
    arr = arr.join(" ")
  } else {
    arr = arr.join(", ")
  }
  return arr
}

export function countPlayerEntries(players: Player[], entrantType) {
  let count = 0
  for (const player in players) {
    if (players[player].tables[entrantType].length) {
      count++
    }
  }
  return count
}

export function calcPredictionsAcc(entrantType, penaltyPoints) {
  const maxDiff = entrantType === "driver" ? 200 : 50

  return Math.round(((maxDiff - penaltyPoints) / maxDiff) * 100)
}
