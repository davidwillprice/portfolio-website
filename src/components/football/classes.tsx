export class Entrant {
  fName: string
  sName: string
  avgPrePos?: number
  constructor(fName: string, sName: string, team?: string) {
    this.fName = fName
    this.sName = sName
  }
}

export class Player {
  name
  groups
  season: SeasonPerformance = {}
  table
  constructor(name: string, groups: string[], table: Entrant[]) {
    this.name = name
    this.groups = groups
    this.table = table
  }
}

interface SeasonPerformance {
  [key: string]: {
    diffTotal: number
    diffs: { entrant: Entrant; posDiff: number }[]
    diffCounts: number[]
  }
}

export class GameWeek {
  standings
  leaderboard: { player: Player; percentCorrect: number; prevRdDiff: number }[]
  entrantDiffTotals: { entrant: Entrant; diffTotal: number }[]
  constructor(standings: Entrant[]) {
    this.standings = standings
    this.leaderboard = []
    this.entrantDiffTotals = []
  }
}

export interface Players {
  [key: string]: Player
}
