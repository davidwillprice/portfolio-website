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
  //Map through each player
  console.log(playerData)

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
    console.log(event)
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
    }
    let playersSelect
    if (this.state.mode !== "leaderboard") {
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
            {/*<a
            data-mode="help"
            className={`${f1PredictCSS.navItem} ${f1PredictCSS.helpBtn}`}
            onClick={event => this.changeMode(event)}
          >
            Help
          </a>*/}
          </nav>
        </div>
        <div className={f1PredictCSS.content}>
          <div className={f1PredictCSS.opening}>
            <div className={f1PredictCSS.introOptions}>
              {/*<p className={f1PredictCSS.subHeading}>
              One point for every position a driver/team is from their actual
              standing - The lower the points, the more accurate the predicted
              table
            </p> */}
              <div className={f1PredictCSS.options}>
                {playersSelect}
                <select
                  name="entrantType"
                  id="entrantType"
                  onChange={event => this.changeEntrantType(event)}
                >
                  <option value="driver">Driver Standings</option>
                  <option value="team">Constructor Standings</option>
                </select>
              </div>
            </div>
          </div>
          {display}
        </div>
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
      </div>
    )
  }
}

export default F1PredictionGame
