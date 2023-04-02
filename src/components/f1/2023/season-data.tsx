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
    alo: new Entrant("Alonso", "alo", "ast"),
    oco: new Entrant("Ocon", "oco", "alp"),
    hul: new Entrant("Hulkenberg", "hul", "has"),
    mag: new Entrant("Magnussen", "mag", "has"),
    nor: new Entrant("Norris", "nor", "mcl"),
    pia: new Entrant("Piastri", "Pia", "mcl"),
    str: new Entrant("Stroll", "str", "ast"),
    bot: new Entrant("Bottas", "bot", "alf"),
    zho: new Entrant("Zhou", "zho", "alf"),
    tsu: new Entrant("Tsunoda", "tsu", "alt"),
    gas: new Entrant("Gasly", "gas", "alp"),
    alb: new Entrant("Albon", "alb", "wil"),
    dev: new Entrant("de Vries", "dev", "alt"),
    sar: new Entrant("Sargeant", "sar", "wil"),
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
  hul,
  mag,
  nor,
  pia,
  dev,
  str,
  zho,
  alb,
  tsu,
  gas,
  sar,
  rus,
} = entrantData.drivers
const { mer, fer, rbr, mcl, alp, alt, ast, has, alf, wil } = entrantData.teams
export const drivers = entrantData.drivers
export const teams = entrantData.teams

//Player data
export const players: Players = {
  david: new Player(
    "David",
    ["aberystwyth", "brr", "bristol"],
    [
      ves,
      per,
      lec,
      ham,
      rus,
      sai,
      alo,
      gas,
      oco,
      bot,
      str,
      zho,
      mag,
      nor,
      hul,
      pia,
      dev,
      alb,
      tsu,
      sar,
    ],
    [rbr, fer, mer, alp, ast, alf, has, mcl, alt, wil]
  ),
  jack: new Player(
    "Jack",
    ["aberystwyth", "brr"],
    [
      ves,
      ham,
      lec,
      rus,
      per,
      sai,
      alo,
      gas,
      oco,
      str,
      bot,
      nor,
      tsu,
      pia,
      zho,
      alb,
      dev,
      mag,
      hul,
      sar,
    ],
    [rbr, mer, fer, ast, alt, alp, mcl, alf, has, wil]
  ),
  tom: new Player(
    "Tom",
    ["brr", "bristol"],
    [
      ves,
      per,
      ham,
      rus,
      lec,
      sai,
      alo,
      gas,
      str,
      oco,
      nor,
      zho,
      pia,
      bot,
      mag,
      hul,
      dev,
      alb,
      tsu,
      sar,
    ],
    [rbr, mer, fer, ast, alp, mcl, alf, has, alt, wil]
  ),
  pete: new Player(
    "Pete",
    ["bristol"],
    [
      ham,
      ves,
      rus,
      lec,
      per,
      sai,
      alo,
      gas,
      oco,
      str,
      nor,
      bot,
      dev,
      zho,
      hul,
      mag,
      tsu,
      pia,
      alb,
      sar,
    ],
    [mer, rbr, fer, alp, ast, mcl, alf, has, alt, wil]
  ),
  will: new Player(
    "Will",
    ["aberystwyth"],
    [
      per,
      ves,
      lec,
      sai,
      ham,
      rus,
      alo,
      gas,
      oco,
      bot,
      nor,
      str,
      zho,
      tsu,
      pia,
      dev,
      mag,
      alb,
      hul,
      sar,
    ],
    [rbr, fer, mer, alp, ast, alf, mcl, alt, has, wil]
  ),
  jenny: new Player(
    "Jenny",
    ["bristol"],
    [
      ves,
      per,
      sai,
      lec,
      rus,
      alo,
      ham,
      str,
      oco,
      nor,
      gas,
      alb,
      bot,
      zho,
      pia,
      tsu,
      sar,
      dev,
      mag,
      hul,
    ],
    [rbr, fer, mer, ast, alp, mcl, alf, wil, alt, has]
  ),
  wild: new Player(
    //Redditor Predictions https://www.reddit.com/r/formula1/comments/11dhzs5/formula_1_prediction_template_2023_season/
    "WildInfernos",
    ["redditors"],
    [
      ves,
      lec,
      sai,
      per,
      ham,
      rus,
      alo,
      oco,
      gas,
      str,
      bot,
      nor,
      zho,
      pia,
      mag,
      hul,
      tsu,
      alb,
      dev,
      sar,
    ],
    [rbr, fer, mer, ast, alp, alf, mcl, has, alt, wil]
  ),
  bsismyinitials: new Player(
    "bsismyinitials",
    ["redditors"],
    [],
    [rbr, fer, mer, alp, ast, mcl, has, alf, wil, alt]
  ),
  arkham19: new Player(
    "Arkham19",
    ["redditors"],
    [
      ves,
      lec,
      per,
      ham,
      sai,
      rus,
      alo,
      oco,
      nor,
      gas,
      str,
      bot,
      mag,
      pia,
      hul,
      zho,
      dev,
      alb,
      tsu,
      sar,
    ],
    [rbr, fer, mer, ast, alp, mcl, alf, has, alt, wil]
  ),
  holeshotloss: new Player(
    "holeshotloss",
    ["redditors"],
    [
      ves,
      lec,
      sai,
      alo,
      per,
      ham,

      rus,
      gas,
      oco,
      str,
      bot,
      nor,
      zho,
      pia,
      mag,
      hul,
      tsu,
      alb,
      dev,
      sar,
    ],
    [rbr, fer, mer, ast, alp, alf, mcl, has, wil, alt]
  ),
  formula1: new Player(
    //https://www.formula1.com/en/latest/article.f1-power-rankings-all-10-teams-ranked-after-2023-pre-season-testing.7144c6F6PdlxC07WLxZeEV.html
    "formula1.com*",
    ["misc"],
    [],
    [rbr, fer, mer, ast, alp, alf, mcl, alt, has, wil]
  ),
  buxton: new Player(
    //https://twitter.com/wbuxtonofficial/status/1629768214283534336
    "Will Buxton*",
    ["misc"],
    [],
    [rbr, fer, ast, mer, alp, alf, has, alt, wil, mcl]
  ),
  average: new Player("Average", ["misc"], [], []),
}
export const playerGroupsArr = getPlayerGroups(players)

//Round data
export let rounds = [
  new Round(
    "Bahrain GP",
    [
      ves,
      per,
      alo,
      sai,
      ham,
      str,
      rus,
      bot,
      gas,
      alb,
      tsu,
      sar,
      mag,
      dev,
      hul,
      zho,
      nor,
      oco,
      lec,
      pia,
    ],
    [rbr, ast, mer, fer, alf, alp, wil, alt, has, mcl]
  ),
  new Round(
    "Saudi GP",
    [
      ves,
      per,
      alo,
      sai,
      ham,
      rus,
      str,
      lec,
      bot,
      oco,
      gas,
      mag,
      alb,
      tsu,
      hul,
      sar,
      zho,
      dev,
      pia,
      nor,
    ],
    [rbr, ast, mer, fer, alp, alf, has, wil, alt, mcl]
  ),
  new Round(
    "Australian GP",
    [
      ves,
      per,
      alo,
      ham,
      sai,
      str,
      rus,
      nor,
      hul,
      lec,
      bot,
      oco,
      pia,
      gas,
      zho,
      tsu,
      mag,
      alb,
      sar,
      dev,
    ],
    [rbr, ast, mer, fer, mcl, alp, has, alf, alt, wil]
  ),
]
