import { getPlayerGroups } from "../calc"
import { Player, Round, Entrant, Players } from "../classes"

//All entrant starting (driver/team) data
export const entrantData = {
  drivers: {
    ham: new Entrant("Hamilton", "ham", "mer"),
    rus: new Entrant("Russell", "rus", "mer"),
    lec: new Entrant("Leclerc", "lec", "fer"),
    sai: new Entrant("Sainz", "sai", "fer"),
    ves: new Entrant("Verstappen", "ves", "rbr"),
    per: new Entrant("Perez", "per", "rbr"),
    alo: new Entrant("Alonso", "alo", "alp"),
    oco: new Entrant("Ocon", "oco", "alp"),
    sch: new Entrant("Schumacher", "sch", "has"),
    mag: new Entrant("Magnussen", "mag", "has"),
    nor: new Entrant("Norris", "nor", "mcl"),
    ric: new Entrant("Ricciardo", "ric", "mcl"),
    vet: new Entrant("Vettel", "vet", "ast"),
    str: new Entrant("Stroll", "str", "ast"),
    bot: new Entrant("Bottas", "bot", "alf"),
    zho: new Entrant("Zhou", "zho", "alf"),
    tsu: new Entrant("Tsunoda", "tsu", "alt"),
    gas: new Entrant("Gasly", "gas", "alt"),
    lat: new Entrant("Latifi", "lat", "wil"),
    alb: new Entrant("Albon", "alb", "wil"),
  },
  teams: {
    mer: new Entrant("Mercedes", "mer"),
    fer: new Entrant("Ferrari", "fer"),
    rbr: new Entrant("Red Bull", "rbr"),
    mcl: new Entrant("McLaren", "mcl"),
    alp: new Entrant("Alpine", "alp"),
    alt: new Entrant("Alpha Tauri", "alt"),
    ast: new Entrant("Aston Martin", "ast"),
    has: new Entrant("Haas", "has"),
    alf: new Entrant("Alfa Romeo", "alf"),
    wil: new Entrant("Williams", "wil"),
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

//Player data
export const players: Players = {
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
  new Round(
    "Saudi Arabian GP",
    [
      lec,
      sai,
      ves,
      rus,
      ham,
      oco,
      per,
      mag,
      bot,
      nor,
      tsu,
      gas,
      alo,
      zho,
      sch,
      str,
      alb,
      ric,
      lat,
      vet,
    ],
    [fer, mer, rbr, alp, has, alf, alt, mcl, ast, wil]
  ),
  new Round(
    "Australian GP",
    [
      lec,
      rus,
      sai,
      per,
      ham,
      ves,
      oco,
      nor,
      mag,
      bot,
      ric,
      gas,
      tsu,
      alo,
      zho,
      alb,
      sch,
      str,
      lat,
      vet,
    ],
    [fer, mer, rbr, mcl, alp, alf, has, alt, wil, ast]
  ),
  new Round(
    "Imola GP",
    [
      lec,
      ves,
      per,
      rus,
      sai,
      nor,
      ham,
      bot,
      oco,
      mag,
      ric,
      tsu,
      gas,
      vet,
      alo,
      zho,
      alb,
      str,
      sch,
      lat,
    ],
    [fer, rbr, mer, mcl, alf, alp, alt, has, ast, wil]
  ),
  new Round(
    "Miami GP",
    [
      lec,
      ves,
      per,
      rus,
      sai,
      ham,
      nor,
      bot,
      oco,
      mag,
      ric,
      tsu,
      gas,
      vet,
      alb,
      alo,
      str,
      zho,
      sch,
      lat,
    ],
    [fer, rbr, mer, mcl, alf, alp, alt, has, ast, wil]
  ),
  new Round(
    "Catalan GP",
    [
      ves,
      lec,
      per,
      rus,
      sai,
      ham,
      nor,
      bot,
      oco,
      mag,
      ric,
      tsu,
      gas,
      vet,
      alo,
      alb,
      str,
      zho,
      sch,
      lat,
    ],
    [rbr, fer, mer, mcl, alf, alp, alt, has, ast, wil]
  ),
  new Round(
    "Monaco GP",
    [
      ves,
      lec,
      per,
      rus,
      sai,
      ham,
      nor,
      bot,
      oco,
      mag,
      ric,
      tsu,
      alo,
      gas,
      vet,
      alb,
      str,
      zho,
      sch,
      lat,
    ],
    [rbr, fer, mer, mcl, alf, alp, alt, has, ast, wil]
  ),
  new Round(
    "Azerbaijan GP",
    [
      ves,
      per,
      lec,
      rus,
      sai,
      ham,
      nor,
      bot,
      oco,
      gas,
      alo,
      mag,
      ric,
      vet,
      tsu,
      alb,
      str,
      zho,
      sch,
      lat,
    ],
    [rbr, fer, mer, mcl, alp, alf, alt, has, ast, wil]
  ),
  new Round(
    "Canadian GP",
    [
      ves,
      per,
      lec,
      rus,
      sai,
      ham,
      nor,
      bot,
      oco,
      alo,
      gas,
      mag,
      ric,
      vet,
      tsu,
      zho,
      alb,
      str,
      sch,
      lat,
    ],
    [rbr, fer, mer, mcl, alp, alf, alt, ast, has, wil]
  ),
]
