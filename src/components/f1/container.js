import React, { Component } from "react"
import NavBar from "./navBar"
import Help from "./help"
import FooterSlider from "./footer-slider"
import Leaderboard from "./leaderboard"
import Standings from "./standings"

import * as f1PredictCSS from "../../styles/component/f1-prediction-game.module.scss"

const year = 2022

//All entrant starting (driver/team) data
const entrantData = {
  drivers: {
    ham: { fName: "Hamilton", sName: "ham", team: "mer" },
    rus: { fName: "Russell", sName: "rus", team: "mer" },
    lec: { fName: "Leclerc", sName: "lec", team: "fer" },
    sai: { fName: "Sainz", sName: "sai", team: "fer" },
    ves: { fName: "Verstappen", sName: "ves", team: "rbr" },
    per: { fName: "Perez", sName: "per", team: "rbr" },
    alo: { fName: "Alonso", sName: "alo", team: "alp" },
    oco: { fName: "Ocon", sName: "oco", team: "alp" },
    sch: { fName: "Schumacher", sName: "sch", team: "has" },
    maz: { fName: "Mazepin", sName: "maz", team: "has" },
    nor: { fName: "Norris", sName: "nor", team: "mcl" },
    ric: { fName: "Ricciardo", sName: "ric", team: "mcl" },
    vet: { fName: "Vettel", sName: "vet", team: "ast" },
    str: { fName: "Stroll", sName: "str", team: "ast" },
    bot: { fName: "Bottas", sName: "bot", team: "alf" },
    zho: { fName: "Zhou", sName: "zho", team: "alf" },
    tsu: { fName: "Tsunoda", sName: "tsu", team: "alt" },
    gas: { fName: "Gasly", sName: "gas", team: "alt" },
    lat: { fName: "Latifi", sName: "lat", team: "wil" },
    alb: { fName: "Albon", sName: "alb", team: "wil" },
  },
  teams: {
    mer: { fName: "Mercedes", sName: "mer" },
    fer: { fName: "Ferrari", sName: "fer" },
    rbr: { fName: "Red Bull", sName: "rbr" },
    mcl: { fName: "McLaren", sName: "mcl" },
    alp: { fName: "Alpine", sName: "alp" },
    alt: { fName: "Alpha Tauri", sName: "alt" },
    ast: { fName: "Aston Martin", sName: "ast" },
    has: { fName: "Haas", sName: "has" },
    alf: { fName: "Alfa Romeo", sName: "alf" },
    wil: { fName: "Williams", sName: "wil" },
  },
}
const drivers = entrantData.drivers
const teams = entrantData.teams
const {
  ham,
  bot,
  lec,
  sai,
  ves,
  per,
  alo,
  oco,
  sch,
  maz,
  nor,
  ric,
  vet,
  str,
  zho,
  alb,
  tsu,
  gas,
  lat,
  rus,
} = entrantData.drivers
const { mer, fer, rbr, mcl, alp, alt, ast, has, alf, wil } = entrantData.teams
//Object constructors for players
function Player(name, groups, driverTable, teamTable) {
  this.name = name
  this.groups = groups
  this.driverTable = driverTable
  this.teamTable = teamTable
  this.season = {}
}
//Player data
let players = {
  david: new Player(
    "david",
    ["aberystwyth", "brr", "herefordshire"],
    [
      ham,
      bot,
      ves,
      per,
      lec,
      vet,
      sai,
      str,
      ric,
      nor,
      alo,
      gas,
      oco,
      tsu,
      zho,
      alb,
      rus,
      sch,
      lat,
      maz,
    ],
    [mer, rbr, fer, ast, mcl, alp, alt, alf, wil, has]
    //Post pre season testing predictions
    //[ham,ves,bot,per,ric,nor,vet,lec,str,alo,sai,gas,ocon,tsu,zho,alb,rus,sch,lat,maz]
    //[mer, rbr, mcl, ast, fer, alp, alt, alf, wil, has]
  ),
  jack: new Player(
    "jack",
    ["aberystwyth", "brr"],
    [
      ham,
      ves,
      bot,
      per,
      vet,
      ric,
      lec,
      str,
      sai,
      alo,
      nor,
      oco,
      gas,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, ast, fer, mcl, alp, alt, alf, wil, has]
  ),
  tom: new Player(
    "tom",
    ["brr", "dyson", "herefordshire"],
    [
      ham,
      ves,
      bot,
      per,
      ric,
      vet,
      nor,
      lec,
      str,
      alo,
      sai,
      oco,
      gas,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, mcl, ast, fer, alp, alt, alf, wil, has]
  ),
  pete: new Player(
    "pete",
    ["herefordshire"],
    [
      ham,
      per,
      ves,
      bot,
      ric,
      vet,
      nor,
      str,
      alo,
      lec,
      sai,
      gas,
      tsu,
      oco,
      zho,
      alb,
      sch,
      maz,
      rus,
      lat,
    ],
    [rbr, mer, mcl, ast, fer, alp, alt, alf, has, wil]
  ),
  will: new Player(
    "will",
    ["aberystwyth"],
    [
      ves,
      ham,
      ric,
      per,
      bot,
      vet,
      alo,
      lec,
      nor,
      sai,
      str,
      gas,
      oco,
      tsu,
      zho,
      alb,
      sch,
      rus,
      maz,
      lat,
    ],
    [rbr, mer, mcl, ast, alp, fer, alt, alf, has, wil]
  ),
  annie: new Player(
    "annie",
    ["dyson"],
    [
      ham,
      ves,
      bot,
      per,
      vet,
      ric,
      lec,
      str,
      nor,
      sai,
      gas,
      oco,
      alo,
      tsu,
      zho,
      rus,
      alb,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, ast, mcl, fer, alp, alt, alf, has, wil]
  ),
  james: new Player(
    "james",
    ["dyson"],
    [
      ham,
      ves,
      bot,
      ric,
      nor,
      per,
      lec,
      str,
      vet,
      sai,
      alo,
      gas,
      oco,
      tsu,
      sch,
      zho,
      maz,
      rus,
      alb,
      lat,
    ],
    [mer, rbr, mcl, ast, fer, alp, alt, has, alf, wil]
  ),
  jacopo: new Player(
    "jacopo",
    ["dyson"],
    [
      ham,
      bot,
      ves,
      ric,
      per,
      vet,
      lec,
      alo,
      sai,
      str,
      nor,
      gas,
      oco,
      zho,
      alb,
      sch,
      rus,
      tsu,
      maz,
      lat,
    ],
    [mer, rbr, mcl, fer, ast, alp, alt, alf, has, wil]
  ),
  alex: new Player(
    "alex",
    ["dyson"],
    [
      ham,
      ves,
      bot,
      lec,
      nor,
      ric,
      vet,
      alo,
      sai,
      per,
      str,
      oco,
      gas,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, mcl, fer, ast, alp, alt, alf, wil, has]
  ),
  formula1: new Player(
    //https://www.formula1.com/en/latest/article.f1-power-rankings-weve-ranked-the-teams-from-10-to-1-after-pre-season.6DKunC8CA9nHHu6MkuiIQQ.html
    "formula1.com",
    ["misc"],
    [],
    [rbr, mer, mcl, alp, fer, alt, ast, alf, wil, has]
  ),
  average: new Player("average", ["misc"], [], []),
  karun: new Player(
    //https://twitter.com/karunchandhok/status/1371374740217159680
    "Karun Sky F1",
    ["misc"],
    [],
    [rbr, mer, alt, mcl, alp, fer, ast, alf, wil, has]
  ),
}
//Object constructors for rounds
class Round {
  constructor(trackName, driverStandings, teamStandings) {
    this.trackName = trackName
    this.standings = {
      driver: driverStandings,
      team: teamStandings,
    }
    this.leaderboards = {
      //{Player:{playerName}, diffTotal:{diffTotal}] - Ordered in least points
      driver: [],
      team: [],
    }
    this.entrantDiffTotals = {
      driver: [],
      team: [],
    }
  }
}
//Round data
let rounds = [
  new Round(
    "Bahrain GP",
    [
      ham,
      ves,
      bot,
      nor,
      per,
      lec,
      ric,
      sai,
      tsu,
      str,
      zho,
      alb,
      oco,
      rus,
      vet,
      sch,
      gas,
      lat,
      alo,
      maz,
    ],
    [mer, rbr, mcl, fer, alt, ast, alf, alp, wil, has]
  ),
  new Round(
    "Imola GP",
    [
      ham,
      ves,
      nor,
      lec,
      bot,
      sai,
      ric,
      per,
      str,
      gas,
      tsu,
      oco,
      alo,
      zho,
      alb,
      rus,
      vet,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, mcl, fer, alt, ast, alp, alf, wil, has]
  ),
  new Round(
    "Portuguese GP",
    [
      ham,
      ves,
      nor,
      bot,
      lec,
      per,
      ric,
      sai,
      oco,
      gas,
      str,
      alo,
      tsu,
      zho,
      alb,
      vet,
      rus,
      sch,
      maz,
      lat,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, alf, wil, has]
  ),
  new Round(
    "Spanish GP",
    [
      ham,
      ves,
      bot,
      nor,
      lec,
      per,
      ric,
      sai,
      oco,
      gas,
      str,
      alo,
      tsu,
      zho,
      alb,
      vet,
      rus,
      sch,
      lat,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, alf, wil, has]
  ),
  new Round(
    "Monaco GP",
    [
      ves,
      ham,
      nor,
      bot,
      per,
      lec,
      sai,
      ric,
      gas,
      oco,
      vet,
      str,
      alo,
      tsu,
      alb,
      zho,
      rus,
      lat,
      sch,
      maz,
    ],
    [rbr, mer, mcl, fer, ast, alt, alp, alf, wil, has]
  ),
  new Round(
    "Azerbaijan GP",
    [
      ves,
      ham,
      per,
      nor,
      lec,
      bot,
      sai,
      gas,
      vet,
      ric,
      alo,
      oco,
      str,
      tsu,
      zho,
      alb,
      sch,
      rus,
      maz,
      lat,
    ],
    [rbr, mer, fer, mcl, alt, ast, alp, alf, has, wil]
  ),
  new Round(
    "French GP",
    [
      ves,
      ham,
      per,
      nor,
      bot,
      lec,
      sai,
      gas,
      ric,
      vet,
      alo,
      oco,
      str,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [rbr, mer, mcl, fer, alt, ast, alp, alf, wil, has]
  ),
  new Round(
    "Styrian GP",
    [
      ves,
      ham,
      per,
      nor,
      bot,
      lec,
      sai,
      gas,
      ric,
      vet,
      alo,
      str,
      oco,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [rbr, mer, mcl, fer, alt, ast, alp, alf, wil, has]
  ),
  new Round(
    "Austrian GP",
    [
      ves,
      ham,
      per,
      nor,
      bot,
      lec,
      sai,
      ric,
      gas,
      vet,
      alo,
      str,
      oco,
      tsu,
      zho,
      alb,
      rus,
      sch,
      maz,
      lat,
    ],
    [rbr, mer, mcl, fer, alt, ast, alp, alf, wil, has]
  ),
  new Round(
    "Hungarian GP",
    [
      ham,
      ves,
      nor,
      bot,
      per,
      lec,
      sai,
      ric,
      vet,
      gas,
      oco,
      alo,
      str,
      tsu,
      lat,
      rus,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, ast, alt, wil, alf, has]
  ),
  new Round(
    "Belgium GP",
    [
      ham,
      ves,
      nor,
      bot,
      per,
      sai,
      lec,
      ric,
      gas,
      oco,
      alo,
      vet,
      tsu,
      str,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [rbr, mer, mcl, fer, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Dutch GP",
    [
      ves,
      ham,
      bot,
      nor,
      per,
      lec,
      sai,
      gas,
      ric,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Italian GP",
    [
      ves,
      ham,
      bot,
      nor,
      per,
      lec,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Russian GP",
    [
      ham,
      ves,
      bot,
      nor,
      per,
      sai,
      lec,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Turkish GP",
    [
      ves,
      ham,
      bot,
      nor,
      per,
      sai,
      lec,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "American GP",
    [
      ves,
      ham,
      bot,
      per,
      nor,
      lec,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      lat,
      zho,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, mcl, fer, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Mexico GP",
    [
      ves,
      ham,
      bot,
      per,
      nor,
      lec,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      zho,
      lat,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Brazilian GP",
    [
      ves,
      ham,
      bot,
      per,
      nor,
      lec,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      zho,
      lat,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Qatarian GP",
    [
      ves,
      ham,
      bot,
      per,
      nor,
      lec,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      zho,
      lat,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Saudi Arabian GP",
    [
      ves,
      ham,
      bot,
      per,
      lec,
      nor,
      sai,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      zho,
      lat,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
  new Round(
    "Abu Dhabi GP",
    [
      ves,
      ham,
      bot,
      per,
      sai,
      nor,
      lec,
      ric,
      gas,
      alo,
      oco,
      vet,
      str,
      tsu,
      rus,
      zho,
      lat,
      alb,
      sch,
      maz,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, wil, alf, has]
  ),
]
function generateAverageTables(entrantData, entrantType) {
  //Loop over each entrant, finding their index in each player's prediction table and totalling them in a new avgPrePos property
  for (const entrant of Object.values(entrantData)) {
    let predictionPosTotal = 0
    let noOfPlayers = 0
    for (const player of Object.values(players)) {
      //Checking player does actually predict entrant
      if (player[entrantType + "Table"].indexOf(entrant) !== -1) {
        predictionPosTotal += player[entrantType + "Table"].indexOf(entrant) + 1
        noOfPlayers++
      }
    }
    entrant.avgPrePos = predictionPosTotal / noOfPlayers
    players.average[entrantType + "Table"].push(entrant)
  }
}
generateAverageTables(drivers, "driver")
generateAverageTables(teams, "team")
function orderAverageTables(entrantType) {
  //Sort the players by their percentage correct, highest first
  players.average[entrantType + "Table"].sort((a, b) =>
    a.avgPrePos > b.avgPrePos ? 1 : -1
  )
}
orderAverageTables("driver")
orderAverageTables("team")
//Based on the player predictions and round data, calculate the differences in entrant predictions for each player, their total diff totals and their count of each diffs
function calcData() {
  //Loop through each round
  for (const [roundNo, round] of Object.entries(rounds)) {
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
        if (player[entrantType + "Table"].length > 0) {
          for (const [predictedPos, entrant] of Object.entries(
            player[entrantType + "Table"]
          )) {
            //Find the position the player predicted that entrant would come in the standings
            const actualPos = round.standings[entrantType].indexOf(entrant)
            //Work out how many positions the player is off
            const posDiff = Math.abs(predictedPos - actualPos)
            player.season["round" + roundNo][entrantType].diffCounts[posDiff]++
            //Add the posDiff to their total for this round
            player.season["round" + roundNo][entrantType].diffTotal += posDiff
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
        const maxDiff = entrantType === "driver" ? 200 : 50
        round.leaderboards[entrantType].push({
          player: player,
          //The % a table is to correct is difference of 200 and the diffTotal as a percentage of 200
          percentCorrect: Math.round(
            ((maxDiff -
              player.season["round" + roundNo][entrantType].diffTotal) /
              maxDiff) *
              100
          ),
          prevRdDiff: 0,
        })
      }
      calcLeaderboard("driver", player)
      calcLeaderboard("team", player)
    }
  }
}
//
function calcLeaderboardRdDiffs(entrantType) {
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
//The leadboards have been generated, but aren't in the correct order
function orderLeaderboards(entrantType) {
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
calcData()
orderLeaderboards("driver")
orderLeaderboards("team")
calcLeaderboardRdDiffs("driver")
calcLeaderboardRdDiffs("team")

function generateEntrantDiffTotals(entrantType, entrantData) {
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
          entrantTotal.diffTotal += entrantStanding.posDiff
        }
      }
    }
  }
}
generateEntrantDiffTotals("driver", drivers)
generateEntrantDiffTotals("team", teams)
function orderEntrantDiffTotals(entrantType) {
  //Loop over rounds
  for (const round of Object.values(rounds)) {
    //Sort the players by their percentage correct, highest first
    round.entrantDiffTotals[entrantType].sort((a, b) =>
      a.diffTotal > b.diffTotal ? 1 : -1
    )
  }
}
orderEntrantDiffTotals("driver")
orderEntrantDiffTotals("team")

//Populate filteredPlayers with the players that match the selected playerGroup and have predictions for the slected entrantType
const filteredPlayers = function (playerGroup, entrantType) {
  const obj = {}
  for (const key of Object.keys(players)) {
    if (
      players[key].groups.includes(playerGroup) &&
      players[key][entrantType + "Table"].length > 0
    ) {
      obj[key] = players[key]
    }
  }
  return obj
}

////Data requires from UI
//selected entrantType
//Selected playerGroup
//Selected round
//Selected mode

////UI requires from data
//Number of rounds
//filtered player data using the selected playerGroup and entrantType

export default class F1Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entrantType: "driver",
      playerGroup: "aberystwyth",
      selectedRound: rounds.length - 1,
      mode: "leaderboard",
      seasonOver: rounds.length === 21,
    }
    //Binding 'this' to the UI methods
    this.changeEntrantType = this.changeEntrantType.bind(this)
    this.changePlayerGroup = this.changePlayerGroup.bind(this)
    this.changeRound = this.changeRound.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }
  changeEntrantType(event) {
    this.setState({ entrantType: event.target.value })
  }
  changePlayerGroup(event) {
    this.setState({ playerGroup: event.target.value })
  }
  changeRound(event) {
    this.setState({
      selectedRound: +event.target.value,
      seasonOver: +event.target.value + 1 === 21,
    })
  }
  changeMode(event) {
    this.setState({ mode: event.target.getAttribute("data-mode") })
  }
  render() {
    return (
      <div
        className={`${f1PredictCSS.f1Main} ${
          f1PredictCSS[this.state.entrantType + "Tables"]
        } ${f1PredictCSS[this.state.mode + "Mode"]}`}
      >
        <NavBar changeMode={this.changeMode} activeMode={this.state.mode} />
        <div className={f1PredictCSS.content}>
          <div className={f1PredictCSS.opening}>
            <div className={f1PredictCSS.introOptions}>
              <div className={f1PredictCSS.options}>
                {
                  //If in standings mode, allow the player to pick which player group to show
                  this.state.mode === "standings" && (
                    <select
                      aria-label="Select player group to display"
                      name="playerGroup"
                      id="playerGroup"
                      onBlur={event => this.changePlayerGroup(event)}
                      onChange={event => this.changePlayerGroup(event)}
                    >
                      <option value="aberystwyth" hidden>
                        Player group
                      </option>
                      <option value="aberystwyth">Aberystwyth</option>
                      <option value="brr">BRR</option>
                      <option value="dyson">Dyson</option>
                      <option value="herefordshire">Herefordshire</option>
                      <option value="misc">Miscellaneous</option>
                    </select>
                  )
                }
                {
                  //If in the leaderboard or standings section, allow the user to pick whether they want to see the driver or constructor standings/leaderboard
                  this.state.mode !== "help" && this.state.mode !== "stats" && (
                    <select
                      aria-label="Select championship type"
                      name="entrantType"
                      id="entrantType"
                      onBlur={event => this.changeEntrantType(event)}
                      onChange={event => this.changeEntrantType(event)}
                    >
                      <option value="driver">Driver Standings</option>
                      <option value="team">Constructor Standings</option>
                    </select>
                  )
                }
              </div>
            </div>
          </div>
          {this.state.mode === "leaderboard" && (
            <Leaderboard
              playerData={filteredPlayers(
                this.state.playerGroup,
                this.state.entrantType
              )}
              entrantType={this.state.entrantType}
              roundNo={this.state.selectedRound}
              roundData={rounds}
            />
          )}
          {this.state.mode === "standings" && (
            <Standings
              year={year}
              roundData={rounds}
              entrantType={this.state.entrantType}
              playerGroup={this.state.playerGroup}
              roundNo={this.state.selectedRound}
              filteredPlayers={filteredPlayers(
                this.state.playerGroup,
                this.state.entrantType
              )}
            />
          )}
          {this.state.mode === "help" && (
            <Help year="2022">
              <li>
                <a href="https://www.formula1.com/en/latest/article.f1-power-rankings-weve-ranked-the-teams-from-10-to-1-after-pre-season.6DKunC8CA9nHHu6MkuiIQQ.html">
                  formula1.com
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/karunchandhok/status/1371374740217159680">
                  Sky F1 Analyst Karun Chandok
                </a>{" "}
                made their predictions after preseason testing so had an
                advantage.
              </li>
            </Help>
          )}
          {this.state.mode === "stats" && (
            <div className={f1PredictCSS.statsCon}>
              <h2>Standings Stats</h2>
              <ul>
                <li>
                  {
                    rounds[this.state.selectedRound].entrantDiffTotals.driver[0]
                      .entrant.fName
                  }{" "}
                  {this.state.seasonOver ? "was" : "is"} the most accurately
                  predicted driver, with the average player only mispredicting
                  him by{" "}
                  {
                    //Get diff total, average it out by no of players and then round to one decimal place
                    Math.round(
                      (rounds[this.state.selectedRound].entrantDiffTotals
                        .driver[0].diffTotal /
                        10) *
                        10
                    ) / 10
                  }{" "}
                  positions;
                </li>
                <li>
                  {
                    rounds[this.state.selectedRound].entrantDiffTotals
                      .driver[19].entrant.fName
                  }{" "}
                  {this.state.seasonOver ? "was" : "is"} the least accurately
                  predicted driver, with the average player mispredicting him by{" "}
                  {Math.round(
                    (rounds[this.state.selectedRound].entrantDiffTotals
                      .driver[19].diffTotal /
                      10) *
                      10
                  ) / 10}{" "}
                  positions;
                </li>
                <li>
                  {
                    rounds[this.state.selectedRound].entrantDiffTotals.team[0]
                      .entrant.fName
                  }{" "}
                  {this.state.seasonOver ? "were" : "are"} the most accurately
                  predicted team, with the average player only mispredicting
                  them by{" "}
                  {Math.round(
                    (rounds[this.state.selectedRound].entrantDiffTotals.team[0]
                      .diffTotal /
                      10) *
                      10
                  ) / 10}{" "}
                  positions;
                </li>
                <li>
                  {
                    rounds[this.state.selectedRound].entrantDiffTotals.team[9]
                      .entrant.fName
                  }{" "}
                  {this.state.seasonOver ? "were" : "are"} the least accurately
                  predicted team, with the average player mispredicting them by{" "}
                  {Math.round(
                    (rounds[this.state.selectedRound].entrantDiffTotals.team[9]
                      .diffTotal /
                      12) *
                      10
                  ) / 10}{" "}
                  positions.
                </li>
              </ul>
              <h2>Predictions Triva</h2>
              <ul>
                <li>
                  Alex had the most 'controversial' driver predictions, as they
                  had the largest difference from the average prediction table
                  (24 position changes);
                </li>
                <li>
                  Tom had the least 'controversial' driver predictions, as they
                  had the smallest difference from the average prediction table
                  (8 position changes);
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Will was the only person who didn't predict that Hamilton
                  would win the drivers title, opting for Verstappen;
                </li>
                <li>
                  {
                    (console.log(this.state.selectedRound),
                    console.log(this.state.seasonOver),
                    console.log(this.state.seasonOver && "✔"))
                  }
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  Will and Pete were the only people who didn't predict that
                  Mercedes would win the constructors title, opting for Red
                  Bull;
                </li>
                <li>
                  Nobody predicted{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Hamilton,{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  Leclerc,{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Gasly,{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Raikkonen,{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Schumacher or{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Russell would be beaten by their team mate;
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  Pete was the only person to predict that Perez would beat
                  Verstappen, while{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  Alex was the only person to predict Perez wouldn't finish in
                  the top 6 (10th).
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  David was the only person to predict that Ferrari would finish
                  as high as 3rd;
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  Alex was the only person to predict that Norris would beat
                  Riccardo;
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  James was the only person to predict that Stroll would beat
                  Vettel;
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  Annie was the only person to predict that Ocon would beat
                  Alonso;
                </li>
                <li>
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.tick}>✔</span>
                  )}{" "}
                  James was the only person to predict that Alfa Romeo wouldn't
                  come 8th (9th) and the{" "}
                  {this.state.seasonOver && (
                    <span className={f1PredictCSS.cross}>✖</span>
                  )}{" "}
                  only person to put Haas as high as 8th.
                </li>
              </ul>
            </div>
          )}
        </div>
        {
          //If not in help mode, display the footer slider
          this.state.mode !== "help" && (
            <FooterSlider
              selectedRound={this.state.selectedRound}
              noOfRounds={rounds.length}
              trackName={rounds[this.state.selectedRound].trackName}
              changeRound={this.changeRound}
            />
          )
        }
      </div>
    )
  }
}
