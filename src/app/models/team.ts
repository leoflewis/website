import { Shot } from "./shot"

export interface NHLTeam{
    TeamId: number,
    TeamName: string
}

export interface NHLTeamMessage{
   message: {
    data: NHLTeam[]
   }
}

export interface Roster{
    forwards: RosterItem[],
    defensemen: RosterItem[],
    goalies: RosterItem[]
}

export interface RosterItem{
    id: number,
    headshot: string,
    firstName: string,
    lastName: string,
    sweaterNumber: number,
    positionCode: string,
    shootsCatches: string,
    heightInInches: number,
    weightInPounds: number,
    heightInCentimeters: number,
    weightInKilograms: number,
    birthDate: string,
    birthCity: string,
    birthCountry: string,
    birthStateProvince: string
}

export interface TeamMessage{
    message: {
        data: {
            shots: Shot[]
        }
    }
}

export interface TeamStatsMessage{
    message: {
        data: TeamStatData[]
    }
}

export interface TeamStatData{
    x: number, 
    y: number,
    name: string
}