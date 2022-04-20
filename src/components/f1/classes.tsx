export interface Entrant {
  fName: string
  sName: string
  team?: string
  avgPrePos?: number
}

export class Player {
  name
  groups
  season = {}
  tables = { team: [{}], driver: [{}] }
  constructor(
    name: string,
    groups: string[],
    driverTable: object[],
    teamTable: object[]
  ) {
    this.name = name
    this.groups = groups
    this.tables.driver = driverTable
    this.tables.team = teamTable
  }
}

export class Round {
  trackName
  standings
  leaderboards
  entrantDiffTotals
  constructor(
    trackName: string,
    driverStandings: object[],
    teamStandings: object[]
  ) {
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

export interface Players {
  [key: string]: Player
  //average: Player
}
