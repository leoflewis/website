export interface PlayerBio{
    copyright: string,
    people: Person[]
}

export interface Person{
    id: number,
    fullName: string,
    link: string,
    firstName: string,
    lastName: string,
    primaryNumber: string,
    birthDate: string,
    currentAge: number,
    birthCity: string,
    birthStateProvince: string,
    birthCountry: string,
    nationality: string,
    height: string,
    weight: number,
    active: boolean,
    alternateCaptain: boolean,
    captain: boolean,
    rookie: boolean,
    shootsCatches: string,
    rosterStatus: string,
    currentTeam: Team,
    primaryPosition: Position
}

export interface Team{
    id: number,
    name: string,
    link: string
}

export interface Position{
    code: string,
    name: string,
    type: string,
    abbreviation: string
}