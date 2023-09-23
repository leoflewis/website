export interface PlayerBio {
    playerId: number
    currentTeamId: number
    currentTeamAbbrev: string
    fullTeamName: string
    firstName: string
    lastName: string
    teamLogo: string
    sweaterNumber: number
    position: string
    headshot: string
    heroImage: string
    heightInInches: number
    heightInCentimeters: number
    weightInPounds: number
    weightInKilograms: number
    birthDate: string
    birthCity: string
    birthCountry: string
    shootsCatches: string
    draftDetails: DraftDetails
    playerSlug: string
    inTop100AllTime: number
    inHHOF: number
    featuredStats: FeaturedStats
    careerTotals: CareerTotals
    shopLink: string
    twitterLink: string
    watchLink: string
    last5Games: Last5Game[]
    seasonTotals: SeasonTotal[]
    awards: Award[]
    currentTeamRoster: CurrentTeamRoster[]
}
  
export interface DraftDetails {
    year: number
    teamAbbrev: string
    round: number
    pickInRound: number
    overallPick: number
}

export interface FeaturedStats {
    season: number
    regularSeason: RegularSeason
    playoffs: Playoffs
}

export interface RegularSeason {
    subSeason: SubSeason
    career: Career
}

export interface SubSeason {
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    pim: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    shorhandedPoints: number
    shorthandedGoals: number
    powerPlayGoals: number
    powerPlayPoints: number
}

export interface Career {
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    pim: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    shorhandedPoints: number
    shorthandedGoals: number
    powerPlayGoals: number
    powerPlayPoints: number
}

export interface Playoffs {
    subSeason: SubSeason2
    career: Career2
}

export interface SubSeason2 {
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    pim: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    shorhandedPoints: number
    shorthandedGoals: number
    powerPlayGoals: number
    powerPlayPoints: number
}

export interface Career2 {
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    pim: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    shorhandedPoints: number
    shorthandedGoals: number
    powerPlayGoals: number
    powerPlayPoints: number
}

export interface CareerTotals {
    regularSeason: RegularSeason2
    playoffs: Playoffs2
}

export interface RegularSeason2 {
    gamesPlayed: number
    goals: number
    assists: number
    pim: number
    points: number
    plusMinus: number
    powerPlayGoals: number
    powerPlayPoints: number
    shorthandedPoints: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    faceoffWinningPctg: number
    avgToi: string
    shorthandedGoals: number
}

export interface Playoffs2 {
    gamesPlayed: number
    goals: number
    assists: number
    pim: number
    points: number
    plusMinus: number
    powerPlayGoals: number
    powerPlayPoints: number
    shorthandedPoints: number
    gameWinningGoals: number
    otGoals: number
    shots: number
    shootingPctg: number
    faceoffWinningPctg: number
    avgToi: string
    shorthandedGoals: number
}

export interface Last5Game {
    gameId: number
    gameTypeId: number
    teamAbbrev: string
    homeRoadFlag: string
    gameDate: string
    goals: number
    assists: number
    points: number
    plusMinus: number
    powerPlayGoals: number
    shots: number
    shifts: number
    shorthandedGoals: number
    pim: number
    opponentAbbrev: string
    toi: string
}

export interface SeasonTotal {
    season: number
    gameTypeId: number
    leagueAbbrev: string
    teamName: string
    sequence: number
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    pim: number
    plusMinus?: number
    powerPlayGoals?: number
    gameWinningGoals?: number
    shots?: number
    shorthandedGoals?: number
    powerPlayPoints?: number
    shorthandedPoints?: number
    otGoals?: number
    shootingPctg?: number
    faceoffWinningPctg?: number
    avgToi?: string
}

export interface Award {
    trophy: string
    seasons: Season[]
}

export interface Season {
    seasonId: number
    gamesPlayed: number
    gameTypeId: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    hits: number
    blockedShots: number
    pim: number
}

export interface CurrentTeamRoster {
    playerId: number
    lastName: string
    firstName: string
    playerSlug: string
}
