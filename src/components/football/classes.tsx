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
  number
  standings
  leaderboards: { player: Player; percentCorrect: Number; prevRdDiff: Number }[]
  entrantDiffTotals: { entrant: Entrant; diffTotal: number }[]
  constructor(number: string, standings: Entrant[]) {
    this.number = number
    this.standings = standings
    this.leaderboards = []
    this.entrantDiffTotals = []
  }
}

export interface Players {
  [key: string]: Player
}
