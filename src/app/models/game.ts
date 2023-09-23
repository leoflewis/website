export interface GameMessage {
    nextStartDate: string,
    previousStartDate: string,
    gameWeek: GameWeek[],
    preSeasonStartDate: string,
    regularSeasonStartDate: string,
    regularSeasonEndDate: string,
    playoffEndDate: string,
    numberOfGames: number
}

export interface GameWeek{
    date: string,
    dayAbbrev: string,
    numberOfGames: number,
    games: Game[]
}

export interface Game{
    id: number,
    season: number,
    gameType: number,
    venue: string,
    neutralSite: boolean,
    startTimeUTC: Date,
    easternUTCOffset: string,
    venueUTCOffset: string,
    venueTimezone: string,
    gameState: string,
    gameScheduleState: string,
    tvBroadcasts: [
        {
            id: number,
            market: string,
            countryCode: string,
            network: string
        },
        {
            id: number,
            market: string,
            countryCode: string,
            network: string
        },
        {
            id: number,
            market: string,
            countryCode: string,
            network: string
        }
    ],
    awayTeam: {
        id: number,
        city: string,
        abbrev: string,
        logo: string,
        awaySplitSquad: true,
        score?: number
        prediction?:string
    },
    homeTeam: {
        id: number,
        city: string,
        abbrev: string,
        logo: string,
        homeSplitSquad: true,
        score?: number
        prediction?:string
    },
    gameOutcome: {
        lastPeriodType: string
    },
    winningGoalie?: {
        playerId: number,
        firstInitial: string,
        lastName: string
    },
    winningGoalScorer?: {
        playerId: number,
        firstInitial: string,
        lastName: string
    },
    specialEvent?: string,
    gameCenterLink: string
}
