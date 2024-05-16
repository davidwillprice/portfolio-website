import { getPlayerGroups } from "../calc"
import { Player, GameWeek, Entrant, Players } from "../classes"

export const entrantData = {
  teams: {
    ars: new Entrant("Arsenal", "ars"),
    ast: new Entrant("Aston Villa", "ast"),
    bou: new Entrant("Bournemouth", "bou"),
    bre: new Entrant("Brentford", "bre"),
    bri: new Entrant("Brighton", "bri"),
    bur: new Entrant("Burnley", "bur"),
    che: new Entrant("Chelsea", "che"),
    cry: new Entrant("Crystal Palace", "cry"),
    eve: new Entrant("Everton", "eve"),
    ful: new Entrant("Fulham", "ful"),
    not: new Entrant("Nottingham", "not"),
    she: new Entrant("Sheffield Utd", "she"),
    liv: new Entrant("Liverpool", "liv"),
    lut: new Entrant("Luton", "lut"),
    mci: new Entrant("Man City", "mci"),
    mun: new Entrant("Man United", "mun"),
    nec: new Entrant("Newcastle", "nec"),
    tot: new Entrant("Tottenham", "tot"),
    whu: new Entrant("West Ham", "whu"),
    wol: new Entrant("Wolves", "wol"),
  },
}
const {
  ars,
  ast,
  bre,
  bri,
  ful,
  che,
  cry,
  eve,
  not,
  she,
  lut,
  liv,
  mci,
  mun,
  nec,
  bou,
  bur,
  tot,
  whu,
  wol,
} = entrantData.teams
export const teams = entrantData.teams

//Player data
export const players: Players = {
  david: new Player(
    "David",
    ["aberystwyth", "john kyrle"],
    [
      mci,
      ars,
      mun,
      liv,
      nec,
      che,
      ast,
      bri,
      tot,
      ful,
      bre,
      whu,
      cry,
      eve,
      bur,
      bou,
      not,
      wol,
      she,
      lut,
    ]
  ),

  ewan: new Player(
    "Ewan",
    ["aberystwyth"],
    [
      mci,
      ars,
      liv,
      mun,
      che,
      nec,
      ast,
      bri,
      bre,
      tot,
      cry,
      not,
      bur,
      bou,
      whu,
      eve,
      ful,
      wol,
      lut,
      she,
    ]
  ),
  glen: new Player(
    "Glen",
    ["john kyrle"],
    [
      ars,
      mci,
      liv,
      mun,
      ast,
      che,
      tot,
      nec,
      bri,
      whu,
      eve,
      bre,
      ful,
      cry,
      bur,
      not,
      bou,
      lut,
      wol,
      she,
    ]
  ),
  richard: new Player(
    "Richard",
    ["john kyrle"],
    [
      mci,
      ars,
      che,
      mun,
      liv,
      nec,
      tot,
      ast,
      bri,
      whu,
      cry,
      eve,
      ful,
      bur,
      bou,
      bre,
      not,
      wol,
      she,
      lut,
    ]
  ),
  pete: new Player(
    "Pete",
    ["john kyrle"],
    [
      ars,
      che,
      mci,
      mun,
      liv,
      nec,
      tot,
      ast,
      bou,
      bri,
      whu,
      not,
      eve,
      ful,
      cry,
      bre,
      bur,
      wol,
      she,
      lut,
    ]
  ),
  matt: new Player(
    "Matt",
    ["john kyrle"],
    [
      mci,
      ars,
      mun,
      che,
      liv,
      nec,
      tot,
      ast,
      bri,
      whu,
      cry,
      ful,
      bou,
      bre,
      not,
      eve,
      wol,
      bur,
      she,
      lut,
    ]
  ),
  jackGiles: new Player(
    "Jack G",
    ["john kyrle"],
    [
      ars,
      mci,
      liv,
      mun,
      che,
      ast,
      nec,
      bri,
      tot,
      bou,
      bre,
      not,
      ful,
      eve,
      cry,
      whu,
      bur,
      wol,
      lut,
      she,
    ]
  ),
  jackHickling: new Player(
    "Jack H",
    ["aberystwyth"],
    [
      mci,
      mun,
      liv,
      ars,
      nec,
      che,
      tot,
      ast,
      bri,
      whu,
      cry,
      bre,
      ful,
      not,
      eve,
      bou,
      bur,
      wol,
      she,
      lut,
    ]
  ),
  Jake: new Player(
    "Jake",
    ["john kyrle"],
    [
      mci,
      ars,
      liv,
      mun,
      nec,
      che,
      ast,
      tot,
      whu,
      bre,
      bri,
      ful,
      cry,
      bur,
      bou,
      eve,
      not,
      wol,
      she,
      lut,
    ]
  ),
  will: new Player(
    "Will",
    ["aberystwyth"],
    [
      ars,
      mci,
      mun,
      ast,
      nec,
      che,
      liv,
      bri,
      whu,
      tot,
      cry,
      not,
      bre,
      ful,
      eve,
      bur,
      lut,
      bou,
      she,
      wol,
    ]
  ),
  athletic: new Player(
    "Opta",
    ["misc"],
    [
      mci,
      ars,
      liv,
      mun,
      nec,
      che,
      bri,
      tot,
      ast,
      bre,
      whu,
      cry,
      ful,
      wol,
      bur,
      not,
      eve,
      bou,
      she,
      lut,
    ]
  ),
  BBC: new Player(
    "BBC",
    ["misc"],
    [
      mci,
      liv,
      ars,
      mun,
      ast,
      che,
      nec,
      tot,
      bri,
      bre,
      whu,
      cry,
      ful,
      not,
      bou,
      eve,
      bur,
      wol,
      she,
      lut,
    ]
  ),
  mOwen: new Player(
    "Michael Owen",
    ["misc"],
    [
      mci,
      ars,
      liv,
      mun,
      che,
      ast,
      nec,
      bri,
      tot,
      bre,
      whu,
      eve,
      not,
      ful,
      cry,
      bur,
      bou,
      wol,
      she,
      lut,
    ]
  ),
  /*  fourFourTwo: new Player(
    "FourFourTwo",
    ["misc"],
    [
      mci,
      mun,
      ars,
      liv,
      che,
      nec,
      tot,
      ast,
      bri,
      whu,
      cry,
      ful,
      bur,
      bre,
      wol,
      bou,
      not,
      eve,
      she,
      lut,
    ]
  ),kingCasino: new Player(
    "King Casino",
    ["misc"],
    [
      mci,
      liv,
      ars,
      mun,
      nec,
      che,
      tot,
      bri,
      ast,
      whu,
      bre,
      cry,
      wol,
      ful,
      eve,
      not,
      bur,
      bou,
      she,
      lut,
    ]
  ),*/
  average: new Player("Average", ["misc"], []),
}
export const playerGroupsArr = getPlayerGroups(players)

//GameWeeks data
export let gameWeeks = [
  new GameWeek([
    nec,
    bri,
    mci,
    ars,
    cry,
    ful,
    mun,
    bre,
    tot,
    bou,
    che,
    liv,
    whu,
    not,
    eve,
    she,
    wol,
    lut,
    bur,
    ast,
  ]),
  new GameWeek([
    bri,
    mci,
    ars,
    bre,
    liv,
    tot,
    whu,
    nec,
    ast,
    not,
    cry,
    mun,
    bur,
    ful,
    bou,
    che,
    she,
    lut,
    wol,
    eve,
  ]),
  new GameWeek([
    mci,
    whu,
    tot,
    liv,
    ars,
    bri,
    ast,
    mun,
    bre,
    che,
    cry,
    ful,
    nec,
    not,
    wol,
    bur,
    bou,
    she,
    eve,
    lut,
  ]),
  new GameWeek([
    mci,
    tot,
    liv,
    whu,
    ars,
    bri,
    cry,
    bre,
    not,
    ast,
    mun,
    che,
    ful,
    nec,
    wol,
    bur,
    bou,
    she,
    eve,
    lut,
  ]),
  new GameWeek([
    mci,
    tot,
    liv,
    ars,
    bri,
    whu,
    ast,
    not,
    cry,
    ful,
    bre,
    nec,
    mun,
    che,
    bur,
    bou,
    wol,
    she,
    eve,
    lut,
  ]),
  new GameWeek([
    mci,
    liv,
    bri,
    tot,
    ars,
    ast,
    whu,
    nec,
    mun,
    cry,
    ful,
    not,
    bre,
    che,
    eve,
    wol,
    bur,
    bou,
    lut,
    she,
  ]),
  new GameWeek([
    mci,
    tot,
    ars,
    liv,
    ast,
    bri,
    whu,
    nec,
    cry,
    mun,
    che,
    not,
    ful,
    bre,
    wol,
    eve,
    lut,
    bur,
    bou,
    she,
  ]),
  new GameWeek([
    tot,
    ars,
    mci,
    liv,
    ast,
    bri,
    whu,
    nec,
    cry,
    mun,
    che,
    ful,
    not,
    wol,
    bre,
    eve,
    lut,
    bur,
    bou,
    she,
  ]),
  new GameWeek([
    tot,
    mci,
    ars,
    liv,
    ast,
    nec,
    bri,
    mun,
    whu,
    che,
    cry,
    wol,
    ful,
    bre,
    not,
    eve,
    lut,
    bur,
    bou,
    she,
  ]),
  new GameWeek([
    tot,
    ars,
    mci,
    liv,
    ast,
    nec,
    bri,
    mun,
    whu,
    bre,
    che,
    wol,
    cry,
    ful,
    eve,
    not,
    bou,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    tot,
    liv,
    ars,
    ast,
    nec,
    bri,
    mun,
    bre,
    che,
    cry,
    whu,
    not,
    wol,
    ful,
    eve,
    lut,
    bou,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    liv,
    ars,
    tot,
    ast,
    mun,
    nec,
    bri,
    whu,
    che,
    bre,
    wol,
    cry,
    ful,
    not,
    bou,
    eve,
    lut,
    she,
    bur,
  ]),
  new GameWeek([
    ars,
    mci,
    liv,
    ast,
    tot,
    mun,
    nec,
    bri,
    whu,
    che,
    bre,
    wol,
    cry,
    ful,
    bou,
    not,
    lut,
    eve,
    she,
    bur,
  ]),
  new GameWeek([
    ars,
    liv,
    mci,
    ast,
    tot,
    nec,
    mun,
    bri,
    whu,
    che,
    bre,
    cry,
    wol,
    ful,
    bou,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    liv,
    ast,
    mci,
    tot,
    mun,
    nec,
    bri,
    whu,
    che,
    bre,
    ful,
    wol,
    cry,
    bou,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    ars,
    ast,
    mci,
    tot,
    mun,
    nec,
    bri,
    whu,
    ful,
    bre,
    che,
    wol,
    bou,
    eve,
    cry,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    liv,
    ast,
    mci,
    tot,
    nec,
    mun,
    whu,
    bri,
    che,
    bou,
    ful,
    eve,
    bre,
    wol,
    cry,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    liv,
    ast,
    mci,
    tot,
    whu,
    nec,
    mun,
    bri,
    bou,
    che,
    wol,
    ful,
    eve,
    bre,
    cry,
    lut,
    bur,
    not,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    ast,
    tot,
    whu,
    mun,
    bri,
    nec,
    bou,
    che,
    wol,
    ful,
    eve,
    bre,
    cry,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ast,
    ars,
    tot,
    whu,
    bri,
    mun,
    nec,
    che,
    wol,
    bou,
    ful,
    cry,
    eve,
    bre,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    ast,
    tot,
    whu,
    bri,
    mun,
    che,
    nec,
    wol,
    bou,
    ful,
    bre,
    eve,
    cry,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    tot,
    ast,
    whu,
    mun,
    nec,
    bri,
    che,
    wol,
    bou,
    ful,
    cry,
    eve,
    bre,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    liv,
    ars,
    ast,
    tot,
    mun,
    whu,
    bri,
    nec,
    wol,
    che,
    bou,
    ful,
    cry,
    eve,
    bre,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    liv,
    ars,
    tot,
    ast,
    mun,
    nec,
    whu,
    bri,
    che,
    wol,
    bou,
    ful,
    bre,
    cry,
    eve,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    ast,
    tot,
    mun,
    bri,
    nec,
    whu,
    che,
    wol,
    bou,
    ful,
    bre,
    cry,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    ast,
    tot,
    mun,
    bri,
    whu,
    che,
    wol,
    nec,
    ful,
    bou,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    liv,
    mci,
    ars,
    ast,
    tot,
    mun,
    whu,
    nec,
    bri,
    che,
    wol,
    ful,
    bou,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    liv,
    mci,
    ast,
    tot,
    mun,
    whu,
    bri,
    che,
    wol,
    nec,
    ful,
    bou,
    cry,
    bre,
    eve,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    mci,
    liv,
    ast,
    tot,
    mun,
    whu,
    bri,
    che,
    wol,
    nec,
    ful,
    bou,
    cry,
    eve,
    bre,
    lut,
    not,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    mci,
    liv,
    ast,
    tot,
    mun,
    whu,
    nec,
    che,
    bri,
    wol,
    bou,
    ful,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    mci,
    liv,
    ast,
    tot,
    mun,
    che,
    whu,
    nec,
    bou,
    bri,
    wol,
    ful,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    ars,
    mci,
    liv,
    tot,
    ast,
    mun,
    whu,
    nec,
    che,
    bou,
    bri,
    wol,
    ful,
    cry,
    eve,
    bre,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    ars,
    liv,
    ast,
    tot,
    mun,
    nec,
    che,
    whu,
    bou,
    bri,
    wol,
    ful,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    ars,
    liv,
    ast,
    tot,
    mun,
    che,
    nec,
    whu,
    bou,
    bri,
    wol,
    ful,
    cry,
    bre,
    eve,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    ars,
    liv,
    ast,
    tot,
    mun,
    che,
    nec,
    whu,
    bou,
    wol,
    bri,
    ful,
    cry,
    eve,
    bre,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    ars,
    liv,
    ast,
    tot,
    che,
    mun,
    nec,
    whu,
    bou,
    bri,
    wol,
    ful,
    cry,
    eve,
    bre,
    not,
    lut,
    bur,
    she,
  ]),
  new GameWeek([
    mci,
    ars,
    liv,
    ast,
    tot,
    che,
    nec,
    mun,
    whu,
    bri,
    bou,
    cry,
    wol,
    ful,
    eve,
    bre,
    not,
    lut,
    bur,
    she,
  ]),
]
