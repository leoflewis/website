
export interface Player {
    PlayerName: string;
    PlayerId: number
}
  
export interface PlayerData{
    copyright: string,
    stats: Stats[]
}
  
export interface Stats {
    type: type,
    splits: split[]
}

export interface type {
    displayName: string,
    gameType: gameType
}

export interface gameType {
    id: string,
    description: string,
    postseason: boolean    
}

export interface split {
    season: string,
    stat: stat
}

export interface stat {
    timeOnIce: string,
    assists: number,
    goals: number,
    pim: number,
    shots: number,
    games: number,
    hits: number,
    powerPlayGoals: number,
    powerPlayPoints: number,
    powerPlayTimeOnIce: string,
    evenTimeOnIce: string,
    penaltyMinutes: string,
    faceOffPct: number,
    shotPct: number,
    gameWinningGoals: number,
    overTimeGoals: number,
    shortHandedGoals: number,
    shortHandedPoints: number,
    shortHandedTimeOnIce: string,
    blocked: number,
    plusMinus: number,
    points: number,
    shifts: number,
    timeOnIcePerGame: string,
    evenTimeOnIcePerGame: string,
    shortHandedTimeOnIcePerGame: string,
    powerPlayTimeOnIcePerGame: string
}