import { getPlayerGroups } from "../calc"
import { Player, GameWeek, Entrant, Players } from "../classes"

export const entrantData = {
  teams: {
    ars: new Entrant("Arsenal", "ars"),
    ast: new Entrant("Aston Villa", "ast"),
    bre: new Entrant("Brentford", "bre"),
    bri: new Entrant("Brighton", "bri"),
    bur: new Entrant("Burnley", "bur"),
    che: new Entrant("Chelsea", "che"),
    cry: new Entrant("Crystal Palace", "cry"),
    eve: new Entrant("Everton", "eve"),
    wat: new Entrant("Watford", "wat"),
    lee: new Entrant("Leeds United", "lee"),
    lei: new Entrant("Leicester City", "lei"),
    liv: new Entrant("Liverpool", "liv"),
    mci: new Entrant("Man City", "mci"),
    mun: new Entrant("Man United", "mun"),
    nec: new Entrant("Newcastle", "nec"),
    nor: new Entrant("Norwich", "nor"),
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
  bur,
  che,
  cry,
  eve,
  wat,
  lee,
  lei,
  liv,
  mci,
  mun,
  nec,
  nor,
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
    ["aberystwyth"],
    [
      mci,
      che,
      mun,
      liv,
      lei,
      tot,
      ars,
      eve,
      lee,
      ast,
      whu,
      wol,
      sou,
      bri,
      bur,
      nec,
      bre,
      cry,
      nor,
      wat,
    ]
  ),
  jack: new Player(
    "Jack",
    ["aberystwyth"],
    [
      mci,
      mun,
      che,
      liv,
      lei,
      ars,
      tot,
      eve,
      whu,
      ast,
      lee,
      wol,
      bri,
      nec,
      sou,
      bur,
      wat,
      cry,
      bre,
      nor,
    ]
  ),
  ewan: new Player(
    "Ewan",
    ["aberystwyth"],
    [
      liv,
      mci,
      che,
      mun,
      lei,
      tot,
      ast,
      ars,
      lee,
      eve,
      whu,
      bri,
      wol,
      nec,
      cry,
      sou,
      bre,
      bur,
      nor,
      wat,
    ]
  ),
  sam: new Player(
    "Sam",
    ["aberystwyth"],
    [
      mci,
      liv,
      mun,
      che,
      lei,
      whu,
      tot,
      lee,
      ars,
      ast,
      eve,
      bur,
      wol,
      bri,
      cry,
      bre,
      nec,
      nor,
      sou,
      wat,
    ]
  ),
  will: new Player(
    "Will",
    ["aberystwyth"],
    [
      mci,
      che,
      liv,
      mun,
      lei,
      eve,
      ars,
      tot,
      lee,
      whu,
      sou,
      wol,
      ast,
      cry,
      nec,
      wat,
      bur,
      bri,
      nor,
      bre,
    ]
  ),
  sportingIndex: new Player(
    "SportingIndex",
    ["misc"],
    [
      mci,
      liv,
      che,
      mun,
      ars,
      tot,
      lei,
      eve,
      lee,
      whu,
      ast,
      bri,
      wol,
      sou,
      nec,
      bur,
      nor,
      cry,
      bre,
      wat,
    ]
  ),
  paddyPower: new Player(
    "Paddy Power",
    ["misc"],
    [
      mci,
      che,
      liv,
      mun,
      lei,
      ars,
      tot,
      eve,
      whu,
      lee,
      ast,
      bri,
      wol,
      sou,
      nec,
      bur,
      cry,
      bre,
      nor,
      wat,
    ]
  ),
  fiveThirtyEight: new Player(
    "FiveThirtyEight",
    ["misc"],
    [
      mci,
      liv,
      che,
      mun,
      ars,
      tot,
      lei,
      whu,
      bri,
      ast,
      lee,
      eve,
      wol,
      nec,
      sou,
      bur,
      bre,
      cry,
      nor,
      wat,
    ]
  ),
  average: new Player("Average", ["misc"], []),
}
export const playerGroupsArr = getPlayerGroups(players)

//GameWeeks data
export let gameWeeks = [
  new GameWeek([
    mun,
    che,
    liv,
    whu,
    eve,
    bre,
    wat,
    bri,
    lei,
    tot,
    ast,
    bur,
    mci,
    wol,
    nec,
    sou,
    ars,
    cry,
    nor,
    lee,
  ]),
  new GameWeek([
    whu,
    che,
    liv,
    bri,
    tot,
    mun,
    eve,
    bre,
    mci,
    ast,
    wat,
    lei,
    sou,
    cry,
    lee,
    wol,
    bur,
    nec,
    ars,
    nor,
  ]),
  new GameWeek([
    tot,
    whu,
    mun,
    che,
    liv,
    eve,
    mci,
    bri,
    lei,
    bre,
    ast,
    wat,
    sou,
    cry,
    lee,
    bur,
    nec,
    wol,
    nor,
    ars,
  ]),
  new GameWeek([
    mun,
    che,
    liv,
    eve,
    mci,
    bri,
    tot,
    whu,
    lei,
    bre,
    cry,
    ast,
    wol,
    sou,
    wat,
    ars,
    lee,
    bur,
    nec,
    nor,
  ]),
  new GameWeek([
    che,
    liv,
    mun,
    bri,
    mci,
    eve,
    tot,
    whu,
    bre,
    ast,
    wat,
    lei,
    ars,
    cry,
    sou,
    wol,
    lee,
    nec,
    bur,
    nor,
  ]),
  new GameWeek([
    liv,
    mci,
    che,
    mun,
    eve,
    bri,
    whu,
    ast,
    bre,
    ars,
    tot,
    wat,
    lei,
    wol,
    cry,
    sou,
    nec,
    lee,
    bur,
    nor,
  ]),
  new GameWeek([
    che,
    mci,
    whu,
    liv,
    ars,
    mun,
    bri,
    wol,
    tot,
    cry,
    eve,
    lei,
    sou,
    bre,
    lee,
    ast,
    wat,
    bur,
    nec,
    nor,
  ]),
  new GameWeek([
    mci,
    liv,
    che,
    whu,
    mun,
    ars,
    tot,
    lei,
    wol,
    bre,
    bri,
    cry,
    ast,
    eve,
    lee,
    sou,
    wat,
    bur,
    nec,
    nor,
  ]),
]
