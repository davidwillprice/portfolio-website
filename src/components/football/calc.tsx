import { Player, GameWeek, Players, Entrant } from "./classes"

export function generateAverageTable(
  players: Players,
  entrantData: { [key: string]: Entrant }
) {
  //Delete the average table if it exists from a previous render
  if (players.average.table) {
    players.average.table = []
  }
  //Loop over each entrant, finding their index in each player's prediction table and totalling them in a new avgPrePos property
  for (const entrant of Object.values(entrantData)) {
    let predictionPosTotal = 0
    let noOfPlayers = 0
    for (const player of Object.values(players)) {
      //Checking player does actually predict entrant
      if (player.table.indexOf(entrant) !== -1) {
        predictionPosTotal += player.table.indexOf(entrant) + 1
        noOfPlayers++
      }
    }
    entrant.avgPrePos = predictionPosTotal / noOfPlayers
    players.average.table.push(entrant)
  }
  return players
}

export function orderAverageTable(players: Players) {
  //Sort the players by their percentage correct, highest first
  players.average.table.sort((a, b) => (a.avgPrePos! > b.avgPrePos! ? 1 : -1))
  return players
}

export function calcData(players: Players, gameWeeks: GameWeek[]) {
  //Loop through each round
  for (const [gameWeekNo, gameWeek] of Object.entries(gameWeeks)) {
    //Delete the leaderboards if they exist from a previous render
    if (gameWeek.leaderboard) {
      gameWeek.leaderboard = []
    }
    const currentGameWeek = "gameWeek" + gameWeekNo
    //Loop through each player to generate their table differences
    for (const player of Object.values(players)) {
      //Create blank properties ready for the player's performance in this round
      player.season[currentGameWeek as keyof Player["season"]] = {
        diffTotal: 0,
        diffs: [],
        diffCounts: [],
      }
      for (let i = 0; i < 20; i++) {
        player.season[
          currentGameWeek as keyof Player["season"]
        ].diffCounts.push(0)
      }
      //Loop the player's predictions, each driver and their pos difference from that round's standings
      calcRoundPerformance(currentGameWeek, gameWeek, player)
      //Populate leaderboard for selected player within selected round
      calcLeaderboard(currentGameWeek, gameWeek, player)
    }
  }
}

function calcRoundPerformance(
  currentGameWeek: string,
  gameWeek: GameWeek,
  player: Player
) {
  if (player.table.length > 0) {
    for (const [predictedPos, entrant] of Object.entries(player.table)) {
      //Find the position the player predicted that entrant would come in the standings
      const actualPos = gameWeek.standings.indexOf(entrant)
      //Work out how many positions the player is off
      const posDiff = actualPos - +predictedPos
      player.season[currentGameWeek as keyof Player["season"]].diffCounts[
        Math.abs(posDiff)
      ]++
      //Add the posDiff to their total for this round
      player.season[
        currentGameWeek as keyof Player["season"]
      ].diffTotal += Math.abs(posDiff)
      //Add the entrant and their posDiff to the Player's data
      player.season[currentGameWeek as keyof Player["season"]].diffs.push({
        entrant: entrant,
        posDiff,
      })
    }
  }
}

function calcLeaderboard(
  currentGameWeek: string,
  gameWeek: GameWeek,
  player: Player
) {
  gameWeek.leaderboard.push({
    player: player,
    //The % a table is to correct is difference of 200 and the diffTotal as a percentage of 200
    percentCorrect: calcPredictionsAcc(
      player.season[currentGameWeek as keyof Player["season"]].diffTotal
    ),
    prevRdDiff: 0,
  })
}

export function calcLeaderboardRdDiffs(gameWeeks: GameWeek[]) {
  //Loop over the rounds to calculate each of their leaderboard round changes
  for (const [gameWeekNo, gameWeek] of Object.entries(gameWeeks)) {
    //Don't calculate the leaderboard changes of the first round
    if (+gameWeekNo > 0) {
      //Loop over each player in order of the looped round's leaderboard
      for (const [currentLbPos, currentPlayerData] of Object.entries(
        gameWeek.leaderboard
      )) {
        //Find that player's position in the leaderboard of the round previous to the looped round
        const previousLbPos = gameWeeks[+gameWeekNo - 1].leaderboard.findIndex(
          entrant => entrant.player.name === currentPlayerData.player.name
        )
        //Attach the player's leaderboard position change from the previous round to their data for the looped round
        currentPlayerData.prevRdDiff = previousLbPos - +currentLbPos
      }
    }
  }
}

export function orderLeaderboards(gameWeeks: GameWeek[]) {
  //Loop through each gameWeek
  for (const [gameWeekNo, gameWeek] of Object.entries(gameWeeks)) {
    gameWeek.leaderboard.sort(function (a, b) {
      let order
      //If their percentage correct is the same, sort by perfect predictions
      if (a.percentCorrect === b.percentCorrect) {
        //Loop from 0 to 19
        //If a has bigger diffCount than b return 1
        for (let i = 0; i < 20; i++) {
          if (
            a.player.season["gameWeek" + gameWeekNo].diffCounts[i] <
            b.player.season["gameWeek" + gameWeekNo].diffCounts[i]
          ) {
            order = 1
            break
          } else if (
            //If b has bigger diffCount than a return -1
            a.player.season["gameWeek" + gameWeekNo].diffCounts[i] >
            b.player.season["gameWeek" + gameWeekNo].diffCounts[i]
          ) {
            order = -1
            break
          } else {
            //If they have the same diffCount, continue the loop and compare a lower level of diffCount
            continue
          }
        }
        if (!order) {
          order = 1
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
  gameWeeks: GameWeek[],
  players: Players,
  entrantData: { [key: string]: Entrant }
) {
  //Loop over gameWeeks to generate the EntrantDiffTotals for each round
  for (const gameWeekNo of Object.keys(gameWeeks)) {
    //Loop over players to get their diffs for each entrant
    for (const player of Object.values(players)) {
      //Loop over entrants to add each entrant's diffs to each total before moving onto the next player
      for (const entrant of Object.values(entrantData)) {
        //Find if the entrantDiffTotals doesn't already contain an object for the entrant, push {entrant:[entrant], diffTotal:0}
        if (
          !gameWeeks[+gameWeekNo].entrantDiffTotals.find(
            x => x.entrant === entrant
          )
        ) {
          gameWeeks[+gameWeekNo].entrantDiffTotals.push({
            entrant: entrant,
            diffTotal: 0,
          })
        }
        const selectedGameWeekNo = "gameWeek" + gameWeekNo
        //Checking if the player made predictions for that entrantType
        if (
          player.season[selectedGameWeekNo as keyof Player["season"]].diffs
            .length > 0
        ) {
          //Find entrant in player's predictions for the round
          const entrantStanding = player.season[
            selectedGameWeekNo as keyof Player["season"]
          ].diffs.find(element => element.entrant.sName === entrant.sName)!
          //Find entrantDiff total
          let entrantTotal = gameWeeks[+gameWeekNo].entrantDiffTotals.find(
            element => element.entrant === entrant
          )!
          //Add entrantStanding.posDiff to entrant's diff total
          entrantTotal.diffTotal += Math.abs(entrantStanding.posDiff)
        }
      }
    }
  }
}

export function orderEntrantDiffTotals(gameWeeks: GameWeek[]) {
  //Loop over rounds
  for (const gameWeek of Object.values(gameWeeks)) {
    //Sort the players by their percentage correct, highest first
    gameWeek.entrantDiffTotals.sort((a, b) =>
      a.diffTotal > b.diffTotal ? 1 : -1
    )
  }
}

//Populate filteredPlayers object to only include players that match the selected playerGroup
export function filteredPlayers(players: Players, playerGroup: string) {
  //Turn object to array
  const playerArr = Object.values(players)
  //Filter array so it is only those who have the player group
  const filteredPlayerArr = playerArr.filter(value => {
    return value.groups.includes(playerGroup)
  })
  return filteredPlayerArr
}

export function getPlayerGroups(players: Players): string[] {
  let playerGroups = new Set()
  for (const player in players) {
    for (const group of players[player].groups) {
      playerGroups.add(group)
    }
  }
  const arr = [...playerGroups] as string[]
  return arr
}

export function getControPlayers(players: Players) {
  let mostControPlayers = { playerNames: [""], guessesFromAvg: 0 }
  let leastControPlayers = { playerNames: [""], guessesFromAvg: 0 }
  //Loop through each player
  for (const player of Object.values(players)) {
    //If the player is "average" or doesn't have predictions for that entrant type, skip them
    if (player.name === "Average" || player.table.length === 0) {
      continue
    }
    let totalGuessesfromAverage = 0
    //Loop over their entrants, adding their difference from average to total
    for (const [predictedPos, entrant] of Object.entries(player.table)) {
      const avgPredictedPos = players.average.table.indexOf(entrant)
      const posDiffs = Math.abs(+predictedPos - avgPredictedPos)
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
      totalGuessesfromAverage < leastControPlayers.guessesFromAvg ||
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
function formatArrayIntoList(arr: string[]) {
  const list: string[] | string = arr
  if (arr.length === 1) {
    return arr
  }
  arr[arr.length - 1] = "& " + arr[arr.length - 1]
  if (arr.length === 2) {
    arr = [arr.join(" ")]
  } else {
    arr = [arr.join(", ")]
  }
  return arr
}

export function calcPredictionsAcc(penaltyPoints: number) {
  const maxDiff = 200

  return Math.round(((maxDiff - penaltyPoints) / maxDiff) * 100)
}
