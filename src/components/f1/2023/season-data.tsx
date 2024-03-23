import { getPlayerGroups } from "../calc"
import { Player, Round, Entrant, Players } from "../classes"

//All entrant starting (driver/team) data
export const entrantData = {
  drivers: {
    ham: new Entrant("Hamilton", "ham", "mer"),
    rus: new Entrant("Russell", "rus", "mer"),
    lec: new Entrant("Leclerc", "lec", "fer"),
    sai: new Entrant("Sainz", "sai", "fer"),
    ver: new Entrant("Verstappen", "ver", "rbr"),
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
  ver,
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
      ver,
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
      ver,
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
      ver,
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
      ver,
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
      ver,
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
      ver,
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
  reddit: new Player(
    //Redditor Predictions https://www.reddit.com/r/formula1/comments/11dhzs5/formula_1_prediction_template_2023_season/
    //Combined average for the predictions of WildInfernos, bsismyinitialsc, Arkham19, and holeshotloss
    "Reddit",
    ["misc"],
    [
      ver,
      lec,
      sai,
      per,
      ham,
      alo,
      rus,
      oco,
      gas,
      str,
      nor,
      bot,
      pia,
      zho,
      mag,
      hul,
      tsu,
      alb,
      dev,
      sar,
    ],
    [rbr, fer, mer, ast, alp, mcl, alf, has, alt, wil]
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
      ver,
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
      ver,
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
      ver,
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
  new Round(
    "Azerbaijan GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      lec,
      rus,
      str,
      nor,
      hul,
      pia,
      bot,
      oco,
      gas,
      zho,
      tsu,
      alb,
      mag,
      sar,
      dev,
    ],
    [rbr, ast, mer, fer, mcl, alp, has, alf, alt, wil]
  ),
  new Round(
    "Miami GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      rus,
      lec,
      str,
      nor,
      gas,
      hul,
      oco,
      bot,
      pia,
      zho,
      tsu,
      mag,
      alb,
      sar,
      dev,
    ],
    [rbr, ast, mer, fer, mcl, alp, has, alf, alt, wil]
  ),
  new Round(
    "Monaco GP",
    [
      ver,
      per,
      alo,
      ham,
      rus,
      sai,
      lec,
      str,
      oco,
      gas,
      nor,
      hul,
      pia,
      bot,
      zho,
      tsu,
      mag,
      alb,
      dev,
      sar,
    ],
    [rbr, ast, mer, fer, alp, mcl, has, alf, alt, wil]
  ),
  new Round(
    "Spainish GP",
    [
      ver,
      per,
      alo,
      ham,
      rus,
      sai,
      lec,
      str,
      oco,
      gas,
      nor,
      hul,
      pia,
      bot,
      zho,
      tsu,
      mag,
      alb,
      dev,
      sar,
    ],
    [rbr, mer, ast, fer, alp, mcl, has, alf, alt, wil]
  ),
  new Round(
    "Candian GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      rus,
      lec,
      str,
      oco,
      gas,
      nor,
      alb,
      hul,
      pia,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, alp, mcl, alf, has, wil, alt]
  ),
  new Round(
    "Austrian GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      lec,
      rus,
      str,
      oco,
      nor,
      gas,
      hul,
      alb,
      pia,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, alp, mcl, has, alf, wil, alt]
  ),
  new Round(
    "British GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      rus,
      lec,
      str,
      nor,
      oco,
      pia,
      gas,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Hungarian GP",
    [
      ver,
      per,
      alo,
      ham,
      rus,
      sai,
      lec,
      nor,
      str,
      oco,
      pia,
      gas,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Belgian GP",
    [
      ver,
      per,
      alo,
      ham,
      lec,
      rus,
      sai,
      nor,
      str,
      oco,
      pia,
      gas,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Dutch GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      rus,
      lec,
      nor,
      str,
      gas,
      oco,
      pia,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, ast, fer, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Italian GP",
    [
      ver,
      per,
      alo,
      ham,
      sai,
      lec,
      rus,
      nor,
      str,
      gas,
      oco,
      pia,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, ast, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Singaporean GP",
    [
      ver,
      per,
      ham,
      alo,
      sai,
      lec,
      rus,
      nor,
      str,
      gas,
      pia,
      oco,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, ast, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Japanese GP",
    [
      ver,
      per,
      ham,
      alo,
      sai,
      lec,
      nor,
      rus,
      pia,
      str,
      gas,
      oco,
      alb,
      hul,
      bot,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, ast, mcl, alp, wil, has, alf, alt]
  ),
  new Round(
    "Qatarian GP",
    [
      ver,
      per,
      ham,
      alo,
      sai,
      lec,
      nor,
      rus,
      pia,
      str,
      gas,
      oco,
      alb,
      bot,
      hul,
      zho,
      tsu,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, ast, mcl, alp, wil, alf, has, alt]
  ),
  new Round(
    "United States GP",
    [
      ver,
      per,
      ham,
      alo,
      sai,
      nor,
      lec,
      rus,
      pia,
      gas,
      str,
      oco,
      alb,
      bot,
      hul,
      tsu,
      zho,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, mcl, ast, alp, wil, alf, has, alt]
  ),
  new Round(
    "Mexican GP",
    [
      ver,
      per,
      ham,
      sai,
      alo,
      nor,
      lec,
      rus,
      pia,
      gas,
      str,
      oco,
      alb,
      bot,
      hul,
      tsu,
      zho,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, mcl, ast, alp, wil, alt, alf, has]
  ),
  new Round(
    "Brazilian GP",
    [
      ver,
      per,
      ham,
      alo,
      nor,
      sai,
      lec,
      rus,
      pia,
      str,
      gas,
      oco,
      alb,
      tsu,
      bot,
      hul,
      zho,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, mcl, ast, alp, wil, alt, alf, has]
  ),
  new Round(
    "Las Vegas GP",
    [
      ver,
      per,
      ham,
      sai,
      alo,
      nor,
      lec,
      rus,
      pia,
      str,
      gas,
      oco,
      alb,
      tsu,
      bot,
      hul,
      zho,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, mcl, ast, alp, wil, alt, alf, has]
  ),
  new Round(
    "Abu Dhabi GP",
    [
      ver,
      per,
      ham,
      alo,
      lec,
      nor,
      sai,
      rus,
      pia,
      str,
      gas,
      oco,
      alb,
      tsu,
      bot,
      hul,
      zho,
      mag,
      sar,
      dev,
    ],
    [rbr, mer, fer, mcl, ast, alp, wil, alt, alf, has]
  ),
]
