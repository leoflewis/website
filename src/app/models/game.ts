export interface Game {
    hometeam: string,
    awayteam: string
}

export interface GameMessage{
    copyright: string,
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalMatches: number,
    metaData: {
        timeStamp: string
    },
    wait: number,
    dates: Dates[]
}

export interface Dates{
    date: Date,
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalMatches: number,
    games: Games[]
}

export interface Games{
    gamePk: number,
    link: string,
    gameType: string,
    season: string,
    gameDate: Date,
    status:{
        abstractGameState:string,
        codedGameState: number,
        detailedState: string,
        statusCode: string,
        startTimeTBD: boolean
    },
    teams: {
        away: {
            leagueRecord: {
                wins: number,
                losses: number,
                ot: number,
                type: string
            },
            score: 0,
            team: {
                id: number,
                name: string,
                link: string
            },
            prediction: string
        },
        home: {
            leagueRecord: {
                wins: number,
                losses: number,
                ot: number,
                type: string
            },
            score: 0,
            team: {
                id: number,
                name: string,
                link: string
            },
            prediction: string
        }
    },
    venue: {
        number: 5017,
        name: string,
        link: string
    },
    content: {
        link: string
    }
}