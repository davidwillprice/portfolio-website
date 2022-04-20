export class Entrant {
  fName: string
  sName: string
  team?: string
  avgPrePos?: number
  constructor(fName: string, sName: string, team?: string) {
    this.fName = fName
    this.sName = sName
    this.team = team
  }
}

export class Player {
  name
  groups
  season: SeasonPerformance = {}
  tables
  constructor(
    name: string,
    groups: string[],
    driverTable: Entrant[],
    teamTable: Entrant[]
  ) {
    this.name = name
    this.groups = groups
    this.tables = { driver: driverTable, team: teamTable }
  }
}

interface SeasonPerformance {
  [key: string]: {
    driver: {
      diffTotal: number
      diffs: { entrant: Entrant; posDiff: number }[]
      diffCounts: number[]
    }
    team: {
      diffTotal: number
      diffs: { entrant: Entrant; posDiff: number }[]
      diffCounts: number[]
    }
  }
}

export class Round {
  trackName
  standings
  leaderboards: Leaderboards
  entrantDiffTotals: EntrantDiffTotals
  constructor(
    trackName: string,
    driverStandings: Entrant[],
    teamStandings: Entrant[]
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

interface EntrantDiffTotals {
  driver: { entrant: Entrant; diffTotal: number }[]
  team: { entrant: Entrant; diffTotal: number }[]
}

interface Leaderboards {
  driver: { player: Player; percentCorrect: Number; prevRdDiff: number }[]
  team: { player: Player; percentCorrect: Number; prevRdDiff: number }[]
}

export interface Players {
  [key: string]: Player
  //average: Player
}
