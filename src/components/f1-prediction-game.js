import React, { Component } from "react"
import f1PredictCSS from "../styles/component/f1-prediction-game.module.scss"

const drivers = {
  ham: { fName: "Hamilton", sName: "ham", team: "mer" },
  bot: { fName: "Bottas", sName: "bot", team: "mer" },
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
  rai: { fName: "Raikkonen", sName: "rai", team: "alf" },
  gio: { fName: "Giovinazzi", sName: "gio", team: "alf" },
  tsu: { fName: "Tsunoda", sName: "tsu", team: "alt" },
  gas: { fName: "Gasly", sName: "gas", team: "alt" },
  lat: { fName: "Latifi", sName: "lat", team: "wil" },
  rus: { fName: "Russell", sName: "rus", team: "wil" },
}
var teams = {
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
}
const ham = drivers.ham
const bot = drivers.bot
const vet = drivers.vet
const lec = drivers.lec
const ves = drivers.ves
const gas = drivers.gas
const ric = drivers.ric
const oco = drivers.oco
const sch = drivers.sch
const maz = drivers.maz
const nor = drivers.nor
const sai = drivers.sai
const per = drivers.per
const str = drivers.str
const rai = drivers.rai
const gio = drivers.gio
const tsu = drivers.tsu
const alo = drivers.alo
const lat = drivers.lat
const rus = drivers.rus

const mer = teams.mer
const fer = teams.fer
const rbr = teams.rbr
const mcl = teams.mcl
const alp = teams.alp
const alt = teams.alt
const ast = teams.ast
const has = teams.has
const alf = teams.alf
const wil = teams.wil

function Player(name, groups, driverTable, teamTable) {
  this.name = name
  this.groups = groups
  this.driverTable = driverTable
  this.teamTable = teamTable
  this.season = {}
}
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
      rai,
      gio,
      rus,
      sch,
      lat,
      maz,
    ],
    [mer, rbr, fer, ast, mcl, alp, alt, alf, wil, has]
    //Post pre season testing predictions
    //[ham,ves,bot,per,ric,nor,vet,lec,str,alo,sai,gas,ocon,tsu,rai,gio,rus,sch,lat,maz]
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
      rai,
      gio,
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
      rai,
      gio,
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
      rai,
      gio,
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
      rai,
      gio,
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
      rai,
      rus,
      gio,
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
      rai,
      maz,
      rus,
      gio,
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
      rai,
      gio,
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
      rai,
      gio,
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
let rounds = [
  new Round(
    "Bahrain GP",
    [
      ham,
      bot,
      rus,
      lat,
      gas,
      tsu,
      ves,
      per,
      rai,
      gio,
      vet,
      str,
      lec,
      sai,
      oco,
      alo,
      ric,
      nor,
      sch,
      maz,
    ],
    [mer, wil, alt, rbr, alf, ast, fer, alp, mcl, has]
  ),
]
function calcData() {
  //Loop through each round
  for (const [roundNo, round] of Object.entries(rounds)) {
    //Loop through each player to generate their team and driver differences
    for (const player of Object.values(players)) {
      //Create blank properties ready for the player's performance in this round
      player.season["round" + roundNo] = {
        driver: { diffTotal: 0, diffs: [] },
        team: { diffTotal: 0, diffs: [] },
      }
      //Loop the player's predictions, each driver and their pos difference from that round's standings
      function calcRoundPerformance(entrantType, player) {
        // console.log("entrantType")
        // console.log(entrantType)
        if (player[entrantType + "Table"].length > 0) {
          for (const [predictedPos, entrant] of Object.entries(
            player[entrantType + "Table"]
          )) {
            //Find the position the player predicted that entrant would come in the standings
            const actualPos = round.standings[entrantType].indexOf(entrant)
            //Work out how many positions the player is off
            const posDiff = Math.abs(predictedPos - actualPos)
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
  for (const [roundNo, round] of Object.entries(rounds)) {
    //Making sure it doesn't try and calc a nonexistent round
    if (roundNo + 1 < rounds.length) {
      //Loop over the order of the leaderboard
      for (const [prevPos, prevRdPlayerData] of Object.entries(
        round.leaderboards[entrantType]
      )) {
        //Set the current round and make sure it is a number
        const curRoundNo = parseFloat(roundNo) + 1
        //Find player's location in the next round to find 'currentPos'
        for (const [curPos, curRdPlayerData] of Object.entries(
          rounds[curRoundNo].leaderboards[entrantType]
        )) {
          if (curRdPlayerData.player.name === prevRdPlayerData.player.name) {
            const rdDiff = prevPos - curPos
            //Update prevRdDiff for that player in current round
            curRdPlayerData.prevRdDiff = rdDiff
          }
        }
      }
    }
  }
}
//The leadboards have been generated, but aren't in the correct order
function orderLeaderboards(entrantType) {
  //Loop through each round
  for (const round of Object.values(rounds)) {
    //Sort the players by their percentage correct, highest first
    round.leaderboards[entrantType].sort((a, b) =>
      a.percentCorrect < b.percentCorrect ? 1 : -1
    )
  }
}
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
console.log("players")
console.log(players)
console.log("rounds")
console.log(rounds)

//Component to render a particular prediction tables
function PredictionTable(props) {
  //Shortcut the table order
  const tableOrder = props.tableOrder
  //Kept entrant type for posDiff classes calc
  const entrantType = props.entrantType
  //Map through each table row
  const listRows = tableOrder.map((entrantData, index) => (
    //Create HTML for each table row using the data passed in as a prop
    <div className={f1PredictCSS.tableRow} key={entrantData.entrant.fName}>
      <div
        className={`${f1PredictCSS.entrantBlock} ${
          f1PredictCSS[entrantData.entrant.team ?? entrantData.entrant.sName]
        }`}
      >
        <div className={f1PredictCSS.position}>
          <span>{index + 1}</span>
        </div>
        <div className={f1PredictCSS.divider}></div>
        <div className={f1PredictCSS.entrantName}>
          <span className={f1PredictCSS.fullName}>
            {entrantData.entrant.fName}
          </span>
          <span className={f1PredictCSS.shortName}>
            {entrantData.entrant.sName}
          </span>
        </div>
      </div>
      <div
        className={`${f1PredictCSS.posDiff} ${
          f1PredictCSS[diffOpacity(entrantData.posDiff, entrantType)]
        }`}
      >
        <span>{entrantData.posDiff}</span>
      </div>
    </div>
  ))
  return <div className="table">{listRows}</div>
}

//Function to assign a class to the posDiff div depending on how high the posDiff is
function diffOpacity(posDiff, entrantType) {
  let diffOpacityClass
  if (entrantType === "driver") {
    if (posDiff > 0 && posDiff <= 3) {
      diffOpacityClass = "diffLow"
    } else if (posDiff === 0) {
      diffOpacityClass = "diffZero"
    } else if (posDiff > 3 && posDiff <= 6) {
      diffOpacityClass = "diffMed"
    } else {
      diffOpacityClass = "diffHigh"
    }
  } else {
    if (posDiff > 0 && posDiff <= 2) {
      diffOpacityClass = "diffLow"
    } else if (posDiff === 0) {
      diffOpacityClass = "diffZero"
    } else if (posDiff > 2 && posDiff <= 4) {
      diffOpacityClass = "diffMed"
    } else {
      diffOpacityClass = "diffHigh"
    }
  }
  return diffOpacityClass
}

//Component to render all prediction tables
function PredictionTables(props) {
  //playerData is data of the players that will displayed
  let playerData = props.playerData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //round decides which race data to show
  const round = "round" + props.roundNo

  const listTables = Object.keys(playerData).map((player, i) => (
    //Create a HTML around each table, calling the PredictionTable component (With the table data passed in) to create the table itself
    <div
      id={playerData[player].name + "-table"}
      className={f1PredictCSS.tableContainer}
      key={playerData[player].name}
    >
      <div className={f1PredictCSS.tableHeader}>
        <div
          className={`${f1PredictCSS.swipeIconCon} ${f1PredictCSS.swipeIconRight}`}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div
          className={`${f1PredictCSS.swipeIconCon} ${f1PredictCSS.swipeIconLeft}`}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
        {playerData[player].name}
      </div>
      <PredictionTable
        tableOrder={playerData[player].season[round][entrantType].diffs}
        entrantType={entrantType}
      />
      <div className={f1PredictCSS.totalDiff}>
        Total: {playerData[player].season[round][entrantType].diffTotal}
      </div>
    </div>
  ))
  return <div className={f1PredictCSS.predictionTables}>{listTables}</div>
}

function prevRdDiffUI(prevRdDiff) {
  return prevRdDiff > 0
    ? "posLeaderboardChg"
    : prevRdDiff < 0
    ? "negLeaderboardChg"
    : "noLeaderboardChg"
}

function Leaderboard(props) {
  //playerData is data of the players that will displayed
  const roundData = props.roundData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //round decides which race data to show
  const roundNo = props.roundNo
  //Go to the leaderboards of the selected entrantType in the selected round and filter out any players which didn't make predictions for that entrant type
  const filteredRoundData = roundData[roundNo].leaderboards[entrantType].filter(
    leaderboardStanding =>
      leaderboardStanding.player[entrantType + "Table"].length > 0
  )
  const listRows = filteredRoundData.map((leaderboardStanding, index) => (
    <tr
      className={f1PredictCSS.leaderboardRow}
      key={index + 1 + leaderboardStanding.player.name}
    >
      <td className={f1PredictCSS.leaderboardPos}>{index + 1}</td>
      <td
        className={`${f1PredictCSS.leaderboardPosDiff} ${
          f1PredictCSS[prevRdDiffUI(leaderboardStanding.prevRdDiff)]
        }`}
      >
        <i></i>
      </td>
      <td className={f1PredictCSS.leaderboardName}>
        {leaderboardStanding.player.name}
      </td>
      <td>{leaderboardStanding.percentCorrect}%</td>
    </tr>
  ))
  return (
    <table className={f1PredictCSS.leaderboard}>
      <thead>
        <tr>
          <th>Pos</th>
          <th></th>
          <th>Name</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>{listRows}</tbody>
    </table>
  )
}

//Component to render the actual standings of a given round and entrant type
function ActualTable(props) {
  //roundData is all the race results
  const roundData = props.roundData
  //entrantType decides whether to generate a driver or team table
  const entrantType = props.entrantType
  //roundNo decides which race data to show
  const roundNo = props.roundNo
  const listRows = roundData[roundNo].standings[entrantType].map(
    (entrant, index) => (
      //Create HTML for each table row using the data passed in as a prop

      <div
        className={f1PredictCSS.tableRow}
        key={index + 1 + "-" + entrant.fName}
      >
        <div
          className={`${f1PredictCSS.entrantBlock} ${
            f1PredictCSS[entrant.team ?? entrant.sName]
          }`}
        >
          <div className={f1PredictCSS.position}>
            <span>{index + 1}</span>
          </div>
          <div className={f1PredictCSS.divider}></div>
          <div className={f1PredictCSS.entrantName}>
            <span className={f1PredictCSS.fullName}>{entrant.fName}</span>
            <span className={f1PredictCSS.shortName}>{entrant.sName}</span>
          </div>
        </div>
      </div>
    )
  )
  return (
    <div className={f1PredictCSS.tableContainer}>
      <div className={f1PredictCSS.tableHeader}>Standings</div>
      <div className="table">{listRows}</div>
    </div>
  )
}

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

class F1PredictionGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entrantType: "driver",
      playerGroup: "aberystwyth",
      selectedRound: rounds.length - 1,
      mode: "leaderboard",
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
    this.setState({ selectedRound: event.target.value })
  }
  changeMode(event) {
    this.setState({ mode: event.target.getAttribute("data-mode") })
  }
  render() {
    /*Change what is displayed depending on what mode is selected*/
    let display
    if (this.state.mode === "standings") {
      display = (
        <div
          className={`${f1PredictCSS.tablesOverview} ${
            f1PredictCSS[
              "playerNumbers" +
                Object.keys(
                  filteredPlayers(
                    this.state.playerGroup,
                    this.state.entrantType
                  )
                ).length
            ]
          }`}
        >
          <ActualTable
            roundData={rounds}
            entrantType={this.state.entrantType}
            roundNo={this.state.selectedRound}
          />
          <PredictionTables
            playerData={filteredPlayers(
              this.state.playerGroup,
              this.state.entrantType
            )}
            entrantType={this.state.entrantType}
            playerGroup={this.state.playerGroup}
            roundNo={this.state.selectedRound}
          />
        </div>
      )
    } else if (this.state.mode === "leaderboard") {
      display = (
        <Leaderboard
          playerData={filteredPlayers(
            this.state.playerGroup,
            this.state.entrantType
          )}
          entrantType={this.state.entrantType}
          playerGroup={this.state.playerGroup}
          roundNo={this.state.selectedRound}
          roundData={rounds}
        />
      )
    } else if (this.state.mode === "help") {
      display = (
        <div className={f1PredictCSS.helpCon}>
          <h1>F1 Prediction Game&nbsp;2021</h1>
          <h2>Rules</h2>
          <ol>
            <li>
              One penalty point is awarded for every position that a driver/team
              is from their actual standing - These are shown to the right of
              each predicted table row;
            </li>
            <div className={f1PredictCSS.preview}>
              <div className={f1PredictCSS.tableRow}>
                <div
                  className={`${f1PredictCSS.entrantBlock} ${f1PredictCSS.rbr}`}
                >
                  <div className={f1PredictCSS.position}>
                    <span>2</span>
                  </div>
                  <div className={f1PredictCSS.divider}></div>
                  <div className={f1PredictCSS.entrantName}>
                    <span className={f1PredictCSS.fullName}>Verstappen</span>
                  </div>
                </div>
                <div
                  className={`${f1PredictCSS.posDiff} ${f1PredictCSS.diffMed}`}
                >
                  <span>5</span>
                </div>
              </div>
              <p>
                Verstappen was predicted to finish 2nd, but is actually 5
                positions away from that in the current standings.
              </p>
            </div>
            <li>
              The total penalty points for each player is shown at the bottom of
              their prediction tables;
            </li>
            <li>
              Each players' accuracy rating in the leaderboard shows how close
              they are to a prefectly predicted table;
            </li>
            <li>
              The player(s) with the most accurate driver and constructor tables
              at the end of the season win.
            </li>
          </ol>
          <h2>Additional Info</h2>
          <ul>
            <li>
              Stand-in drivers won't be added to the driver standings
              (Hulkenberg didn't join the game's driver standings last year);
            </li>
            <li>
              Other than that, the game's standings will be ordered as they are
              in real life;
            </li>
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
          </ul>
        </div>
      )
    } else if (this.state.mode === "stats") {
      display = (
        <div className={f1PredictCSS.statsCon}>
          <h2>Current Result Stats</h2>
          <ul>
            <li>
              {
                rounds[this.state.selectedRound].entrantDiffTotals.driver[0]
                  .entrant.fName
              }{" "}
              is the most accurately predicted driver;
            </li>
            <li>
              {
                rounds[this.state.selectedRound].entrantDiffTotals.driver[19]
                  .entrant.fName
              }{" "}
              is the least accurately predicted driver;
            </li>
            <li>
              {
                rounds[this.state.selectedRound].entrantDiffTotals.team[0]
                  .entrant.fName
              }{" "}
              is the most accurately predicted team;
            </li>
            <li>
              {
                rounds[this.state.selectedRound].entrantDiffTotals.team[9]
                  .entrant.fName
              }{" "}
              is the least accurately predicted team.
            </li>
          </ul>
          <h2>Initial Prediction Notes</h2>
          <ul>
            <li>
              Alex has the most 'controversial' driver predictions, as they have
              the largest difference from the average prediction table (24
              position changes);
            </li>
            <li>
              Tom has the least 'controversial' driver predictions, as they have
              the smallest difference from the average prediction table (8
              position changes);
            </li>
            <li>
              Will was the only person who didn't predict that Hamilton would
              win the drivers title, opting for Verstappen;
            </li>
            <li>
              Will and Pete were the only people who didn't predict that
              Mercedes would win the drivers title, opting for Red Bull;
            </li>
            <li>
              Nobody predicted Hamilton, Leclerc, Gasly, Raikkonen, Schumacher
              or Russell would be beaten by their team mate;
            </li>
            <li>
              Pete was the only person to predict that Perez would beat
              Verstappen, while Alex was the only person to predict Perez
              wouldn't finish in the top 6 (10th).
            </li>
            <li>
              David was the only person to predict that Ferrari would finish as
              high as 3rd;
            </li>
            <li>
              Alex was the only person to predict that Norris would beat
              Riccardo;
            </li>
            <li>
              James was the only person to predict that Stroll would beat
              Vettel;
            </li>
            <li>
              Annie was the only person to predict that Ocon would beat Alonso;
            </li>
            <li>
              James was the only person to predict that Alfa Romeo wouldn't come
              8th (9th) and the only person to put Haas as high as 8th.
            </li>
          </ul>
        </div>
      )
    }
    let playersSelect
    if (this.state.mode === "standings") {
      playersSelect = (
        <select
          name="playerGroup"
          id="playerGroup"
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
    let entrantTypeSelect
    let sliderFooter
    if (this.state.mode !== "help" && this.state.mode !== "stats") {
      entrantTypeSelect = (
        <select
          name="entrantType"
          id="entrantType"
          onChange={event => this.changeEntrantType(event)}
        >
          <option value="driver">Driver Standings</option>
          <option value="team">Constructor Standings</option>
        </select>
      )
    }
    if (this.state.mode !== "help") {
      sliderFooter = (
        <div className={f1PredictCSS.sliderFooter}>
          <div className={f1PredictCSS.sliderCon}>
            Round {parseInt(this.state.selectedRound) + 1} :
            <span id="track-name">
              {" " + rounds[this.state.selectedRound].trackName}
            </span>
            {rounds.length > 1 && (
              <input
                onChange={event => this.changeRound(event)}
                aria-label="Grand Prix race slider"
                type="range"
                min="0"
                max={rounds.length - 1}
                className={f1PredictCSS.slider}
              />
            )}
          </div>
        </div>
      )
    }
    return (
      <div
        className={`${f1PredictCSS.f1Main} ${
          f1PredictCSS[this.state.entrantType + "Tables"]
        } ${f1PredictCSS[this.state.mode + "Mode"]}`}
      >
        <div className={f1PredictCSS.navCon}>
          <nav className={f1PredictCSS.navBar}>
            <button
              data-mode="leaderboard"
              className={`${f1PredictCSS.navItem} ${f1PredictCSS.leaderboardBtn}`}
              onClick={event => this.changeMode(event)}
            >
              Leaderboard
            </button>
            <button
              data-mode="standings"
              className={`${f1PredictCSS.navItem} ${f1PredictCSS.standingsBtn}`}
              onClick={event => this.changeMode(event)}
            >
              Full standings
            </button>
            <button
              data-mode="help"
              className={`${f1PredictCSS.navItem} ${f1PredictCSS.helpBtn}`}
              onClick={event => this.changeMode(event)}
            >
              Help
            </button>
            <button
              data-mode="stats"
              className={`${f1PredictCSS.navItem} ${f1PredictCSS.statsBtn}`}
              onClick={event => this.changeMode(event)}
            >
              Stats
            </button>
          </nav>
        </div>
        <div className={f1PredictCSS.content}>
          <div className={f1PredictCSS.opening}>
            <div className={f1PredictCSS.introOptions}>
              <div className={f1PredictCSS.options}>
                {playersSelect}
                {entrantTypeSelect}
              </div>
            </div>
          </div>
          {display}
        </div>
        {sliderFooter}
      </div>
    )
  }
}

export default F1PredictionGame
