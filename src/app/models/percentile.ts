export interface SkaterPercentile {
    message: {
        data: SkaterPercentileData[]
    }
}

export interface SkaterPercentileData{
    AssistsPercentile: number,
    BlocksPercentile: number,
    GoalsPercentile: number,
    HitsPercentile: number,
    PPPoints: number,
    PlayerName: string,
    PointsPercentile: number,
    SHToi: number,
    Season: number,
    ShotsPercentile: number,
    playerid: number,
    xGPercentile: number
}