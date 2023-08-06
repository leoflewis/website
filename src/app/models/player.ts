import { Shot } from "./shot";

export interface Player {
    PlayerName: string;
    PlayerId: number
}

export interface PlayersResponse{
    data: Player[]
}
  
export interface PlayerData{
    message: Message
}

export interface Message{
    data: ZData,
    shots: Shot[]
}

export interface GoalieMessage{
    message: GoalieMessage
}


export interface GoalieMessage{
    GA: number,
    xG: number,
    shots: Shot[]
}
export interface ZData{
    PM: number,
    Assists: number,
    Blocks: number,
    EVTOI: number,
    GWG: number,
    Games: number,
    Goals: number,
    Hits: number,
    OTG: number,
    PIMs: number,
    Points: number,
    PPGoals: number,
    PPPoints: number,
    PPTOI: number,
    Spct: number,
    SHG: number,
    SHP: number,
    SHTOI: number,
    SUM: number,
    Shifts: number,
    Shots: number
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