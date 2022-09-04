import { getPlayerGroups } from "../calc"
import { Player, GameWeek, Entrant, Players } from "../classes"

export const entrantData = {
  teams: {
    ars: new Entrant("Arsenal", "ars"),
    ast: new Entrant("Aston Villa", "ast"),
    bou: new Entrant("Bournemouth", "bou"),
    bre: new Entrant("Brentford", "bre"),
    bri: new Entrant("Brighton", "bri"),
    che: new Entrant("Chelsea", "che"),
    cry: new Entrant("Crystal Palace", "cry"),
    eve: new Entrant("Everton", "eve"),
    ful: new Entrant("Fulham", "ful"),
    not: new Entrant("Nottingham", "not"),
    lee: new Entrant("Leeds United", "lee"),
    lei: new Entrant("Leicester City", "lei"),
    liv: new Entrant("Liverpool", "liv"),
    mci: new Entrant("Man City", "mci"),
    mun: new Entrant("Man United", "mun"),
    nec: new Entrant("Newcastle", "nec"),
    sou: new Entrant("Southampton", "sou"),
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
  lee,
  lei,
  liv,
  mci,
  mun,
  nec,
  bou,
  sou,
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
      liv,
      mci,
      tot,
      che,
      ars,
      mun,
      whu,
      nec,
      bri,
      lei,
      ast,
      cry,
      bre,
      wol,
      eve,
      lee,
      sou,
      not,
      ful,
      bou,
    ]
  ),
  ewan: new Player(
    "Ewan",
    ["aberystwyth"],
    [
      mci,
      liv,
      che,
      tot,
      ars,
      mun,
      cry,
      lei,
      nec,
      ast,
      whu,
      bri,
      wol,
      eve,
      not,
      lee,
      bre,
      sou,
      ful,
      bou,
    ]
  ),
  glen: new Player(
    "Glen",
    ["john kyrle"],
    [
      mci,
      liv,
      ars,
      tot,
      che,
      mun,
      whu,
      nec,
      ast,
      lei,
      bre,
      cry,
      sou,
      wol,
      ful,
      eve,
      bri,
      lee,
      not,
      bou,
    ]
  ),
  jackGiles: new Player(
    "Jack G",
    ["john kyrle"],
    [
      mci,
      liv,
      tot,
      ars,
      mun,
      che,
      nec,
      whu,
      cry,
      bri,
      ast,
      lei,
      wol,
      eve,
      lee,
      sou,
      not,
      bre,
      bou,
      ful,
    ]
  ),
  jackHickling: new Player(
    "Jack H",
    ["aberystwyth"],
    [
      mci,
      liv,
      mun,
      che,
      tot,
      ars,
      nec,
      whu,
      ast,
      lei,
      wol,
      bri,
      cry,
      bre,
      sou,
      eve,
      ful,
      not,
      lee,
      bou,
    ]
  ),
  Jake: new Player(
    "Jake",
    ["john kyrle"],
    [
      mci,
      liv,
      tot,
      ars,
      che,
      whu,
      mun,
      nec,
      ast,
      wol,
      lei,
      eve,
      bre,
      cry,
      sou,
      not,
      lee,
      ful,
      bri,
      bou,
    ]
  ),
  Sam: new Player(
    "Sam",
    ["aberystwyth"],
    [
      liv,
      mci,
      ars,
      che,
      tot,
      nec,
      mun,
      whu,
      wol,
      lei,
      cry,
      sou,
      bri,
      ast,
      ful,
      bre,
      eve,
      lee,
      not,
      bou,
    ]
  ),
  will: new Player(
    "Will",
    ["aberystwyth"],
    [
      che,
      liv,
      mci,
      tot,
      ars,
      eve,
      mun,
      whu,
      bri,
      sou,
      nec,
      cry,
      bre,
      wol,
      lei,
      not,
      ast,
      lee,
      ful,
      bou,
    ]
  ),
  athletic: new Player(
    "The Athletic",
    ["misc"],
    [
      mci,
      liv,
      tot,
      ars,
      che,
      mun,
      whu,
      nec,
      ast,
      lei,
      bri,
      cry,
      wol,
      eve,
      lee,
      bre,
      not,
      sou,
      ful,
      bou,
    ]
  ),
  BBC: new Player(
    "BBC",
    ["misc"],
    [
      mci,
      liv,
      tot,
      che,
      ars,
      mun,
      whu,
      ast,
      nec,
      lei,
      bri,
      wol,
      cry,
      eve,
      bre,
      lee,
      sou,
      not,
      ful,
      bou,
    ]
  ),
  fiveThirtyEight: new Player(
    "FiveThirtyEight",
    ["misc"],
    [
      mci,
      liv,
      che,
      tot,
      ars,
      mun,
      ast,
      bri,
      lei,
      whu,
      cry,
      bre,
      nec,
      wol,
      eve,
      lee,
      sou,
      ful,
      bou,
      not,
    ]
  ),
  fourFourTwo: new Player(
    "FourFourTwo",
    ["misc"],
    [
      mci,
      liv,
      tot,
      ars,
      che,
      mun,
      nec,
      lei,
      whu,
      ast,
      bri,
      cry,
      wol,
      eve,
      sou,
      ful,
      lee,
      bre,
      not,
      bou,
    ]
  ),
  SBK: new Player(
    "SBK",
    ["misc"],
    [
      mci,
      liv,
      che,
      tot,
      mun,
      ars,
      nec,
      whu,
      lei,
      ast,
      bri,
      wol,
      eve,
      cry,
      sou,
      bre,
      lee,
      ful,
      not,
      bou,
    ]
  ),

  average: new Player("Average", ["misc"], []),
}
export const playerGroupsArr = getPlayerGroups(players)

//GameWeeks data
export let gameWeeks = [
  new GameWeek([
    tot,
    ars,
    bou,
    mci,
    nec,
    bri,
    lee,
    che,
    bre,
    ful,
    lei,
    liv,
    mun,
    wol,
    eve,
    ast,
    cry,
    not,
    whu,
    sou,
  ]),
  new GameWeek([
    mci,
    ars,
    bre,
    tot,
    nec,
    lee,
    che,
    bri,
    ast,
    not,
    bou,
    liv,
    ful,
    wol,
    lei,
    cry,
    sou,
    eve,
    whu,
    mun,
  ]),
  new GameWeek([
    ars,
    mci,
    lee,
    tot,
    bri,
    nec,
    ful,
    bre,
    cry,
    not,
    sou,
    che,
    ast,
    mun,
    bou,
    liv,
    eve,
    wol,
    lei,
    whu,
  ]),
  new GameWeek([
    ars,
    mci,
    tot,
    bri,
    lee,
    che,
    nec,
    mun,
    liv,
    bre,
    ful,
    cry,
    sou,
    not,
    ast,
    whu,
    bou,
    eve,
    wol,
    lei,
  ]),
  new GameWeek([
    ars,
    mci,
    tot,
    bri,
    mun,
    liv,
    lee,
    ful,
    sou,
    che,
    bre,
    nec,
    cry,
    whu,
    not,
    bou,
    eve,
    wol,
    ast,
    lei,
  ]),
  new GameWeek([
    ars,
    mci,
    tot,
    bri,
    mun,
    che,
    liv,
    bre,
    lee,
    ful,
    nec,
    sou,
    bou,
    wol,
    cry,
    eve,
    ast,
    whu,
    not,
    lei,
  ]),
]
