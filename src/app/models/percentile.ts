export interface SkaterPercentile {
    message: {
        data: SkaterPercentileData[]
    }
}

export interface SkaterPercentileData{
    AssistsPercentile: number,
    GoalsPercentile: number,
    PPPoints: number,
    PlayerName: string,
    PointsPercentile: number,
    Season: number,
    ShotsPercentile: number,
    playerid: number,
    xGPercentile: number,
    TeamName: string
}