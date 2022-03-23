import { getPlayerGroups } from "../calc"
//All entrant starting (driver/team) data
export const entrantData = {
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
    mag: { fName: "Magnussen", sName: "mag", team: "has" },
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
  mag,
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
export const drivers = entrantData.drivers
export const teams = entrantData.teams

//Object constructors for players
function Player(name, groups, driverTable, teamTable) {
  this.name = name
  this.groups = groups
  this.driverTable = driverTable
  this.teamTable = teamTable
  this.season = {}
}
//Player data
export const players = {
  david: new Player(
    "David",
    ["aberystwyth", "brr", "herefordshire"],
    [
      ves,
      ham,
      lec,
      rus,
      sai,
      per,
      nor,
      ric,
      alo,
      gas,
      vet,
      oco,
      str,
      mag,
      tsu,
      sch,
      bot,
      alb,
      lat,
      zho,
    ],
    [mer, rbr, fer, mcl, alp, ast, alt, has, alf, wil]
  ),
  jack: new Player(
    "Jack",
    ["aberystwyth", "brr"],
    [
      ham,
      ves,
      lec,
      rus,
      sai,
      per,
      ric,
      nor,
      gas,
      vet,
      alo,
      str,
      oco,
      tsu,
      mag,
      sch,
      bot,
      alb,
      lat,
      zho,
    ],
    [mer, fer, rbr, mcl, alp, alt, ast, has, wil, alf]
  ),
  tom: new Player(
    "Tom",
    ["brr", "dyson", "herefordshire"],
    [
      ves,
      ham,
      rus,
      per,
      lec,
      sai,
      nor,
      ric,
      gas,
      alo,
      oco,
      vet,
      tsu,
      mag,
      sch,
      str,
      bot,
      zho,
      lat,
      alb,
    ],
    [rbr, mer, fer, mcl, alp, alt, ast, has, alf, wil]
  ),
  pete: new Player(
    "Pete",
    ["herefordshire"],
    [
      sai,
      ves,
      ham,
      lec,
      rus,
      nor,
      per,
      gas,
      ric,
      oco,
      alo,
      vet,
      str,
      tsu,
      mag,
      bot,
      sch,
      alb,
      zho,
      lat,
    ],
    [fer, rbr, mer, mcl, alt, alp, ast, has, wil, alf]
  ),
  will: new Player(
    "Will",
    ["aberystwyth"],
    [
      ves,
      ham,
      sai,
      per,
      lec,
      ric,
      rus,
      nor,
      vet,
      alo,
      gas,
      oco,
      str,
      bot,
      tsu,
      mag,
      sch,
      lat,
      zho,
      alb,
    ],
    [rbr, mer, fer, mcl, ast, alp, alt, has, alf, wil]
  ),
  sam: new Player(
    "Sam",
    ["dyson"],
    [
      ham,
      ves,
      lec,
      rus,
      per,
      sai,
      nor,
      oco,
      ric,
      gas,
      alo,
      vet,
      str,
      tsu,
      mag,
      alb,
      bot,
      sch,
      lat,
      zho,
    ],
    [mer, rbr, fer, mcl, alp, alt, ast, has, wil, alf]
  ),
  richard: new Player(
    "Richard",
    ["dyson"],
    [
      ham,
      ves,
      nor,
      rus,
      per,
      lec,
      gas,
      sai,
      ric,
      bot,
      alo,
      vet,
      oco,
      mag,
      sch,
      alb,
      tsu,
      lat,
      zho,
      str,
    ],
    [mer, rbr, mcl, fer, has, alp, alt, alf, ast, wil]
  ),
  jade: new Player(
    "Jade",
    ["dyson"],
    [
      ves,
      ham,
      rus,
      sai,
      per,
      nor,
      lec,
      ric,
      gas,
      alo,
      vet,
      tsu,
      oco,
      str,
      alb,
      bot,
      mag,
      sch,
      lat,
      zho,
    ],
    [mer, rbr, fer, mcl, alt, alp, has, ast, wil, alf]
  ),
  formula1: new Player(
    //https://www.formula1.com/en/latest/article.f1-power-rankings-all-10-teams-ranked-after-2022-pre-season-testing.ncp8QfiV2BXCohi2Hbh2F.html
    "formula1.com",
    ["misc"],
    [],
    [rbr, fer, mer, mcl, alp, ast, alt, has, alf, wil]
  ),
  buxton: new Player(
    //https://twitter.com/wbuxtonofficial/status/1502773974186479616?s=21
    "Will Buxton",
    ["misc"],
    [],
    [rbr, fer, mer, mcl, alf, has, alt, alp, ast, wil]
  ),
  average: new Player("Average", ["misc"], [], []),
  reddit: new Player(
    //https://www.reddit.com/r/formula1/comments/td5ynp/what_are_the_2022_drivers_standings_going_to_look/
    "Reddit Poll",
    ["misc"],
    [
      ves,
      lec,
      sai,
      ham,
      per,
      nor,
      rus,
      ric,
      gas,
      alo,
      vet,
      tsu,
      oco,
      mag,
      bot,
      str,
      alb,
      sch,
      lat,
      zho,
    ],
    []
  ),
}
export const playerGroupsArr = getPlayerGroups(players)
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
export let rounds = [
  new Round(
    "Bahrain GP",
    [
      lec,
      sai,
      ham,
      rus,
      mag,
      bot,
      oco,
      tsu,
      alo,
      zho,
      sch,
      str,
      alb,
      ric,
      nor,
      lat,
      per,
      gas,
      ves,
      vet,
    ],
    [fer, mer, has, alf, alp, alt, ast, wil, mcl, rbr]
  ),
]
