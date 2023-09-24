import { Shot } from "./shot"

export interface NHLTeam{
    id: number,
    name: string,
    link: string,
    venue: {
        name: string,
        link: string,
        city: string,
        timeZone: {
            id:string,
            offset: number,
            tz: string
        }
    },
    abbreviation: string,
    teamName: string,
    locationName: string,
    firstYearOfPlay: string,
    division: {
        id: string,
        name: string,
        nameShort: string,
        link: string,
        abbreviation: string
    },
    conference: {
        id: number,
        name: string,
        link: string
    },
    franchise: {
        franchiseId: number,
        teamName: string,
        link: string
    },
    shortName: string,
    officialSiteUrl: string,
    franchiseId: number,
    active: boolean,
    roster?: Roster
}

export interface NHLTeamMessage{
    copyright: string,
    teams: NHLTeam[]
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