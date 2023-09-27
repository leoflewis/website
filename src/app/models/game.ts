export interface GameMessage {
    prevDate: string
    currentDate: string
    nextDate: string
    gameWeek: GameWeek[]
    oddsPartners: OddsPartner[]
    games: Game[]
  }
  
  export interface GameWeek {
    date: string
    dayAbbrev: string
    numberOfGames: number
  }
  
  export interface OddsPartner {
    partnerId: number
    country: string
    name: string
    url: string
    bgColor: string
    textColor: string
    accentColor: string
  }
  
  export interface Game {
    id: number
    season: number
    gameType: number
    gameDate: string
    venue: string
    startTimeUTC: string
    easternUTCOffset: string
    venueUTCOffset: string
    tvBroadcasts: TvBroadcast[]
    gameState: string
    gameScheduleState: string
    awayTeam: AwayTeam
    homeTeam: HomeTeam
    gameCenterLink: string
    clock?: Clock
    period?: number
    situationCode?: string
    goals?: Goal[]
    ticketsLink?: string
    teamLeaders?: TeamLeader[]
  }
  
  export interface TvBroadcast {
    id: number
    market: string
    countryCode: string
    network: string
  }
  
  export interface AwayTeam {
    id: number
    name: string
    abbrev: string
    score?: number
    sog?: number
    logo: string
  }
  
  export interface HomeTeam {
    id: number
    name: string
    abbrev: string
    score?: number
    sog?: number
    logo: string
  }
  
  export interface Clock {
    timeRemaining: string
    secondsRemaining: number
    running: boolean
    inIntermission: boolean
  }
  
  export interface Goal {
    period: number
    timeInPeriod: string
    playerId: number
    name: string
    mugshot: string
    teamAbbrev: string
    goalsToDate: number
    awayScore: number
    homeScore: number
    strength: string
  }
  
  export interface TeamLeader {
    id: number
    name: string
    headshot: string
    teamAbbrev: string
    category: string
    value: number
  }
  