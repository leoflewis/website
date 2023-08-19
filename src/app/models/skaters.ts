export interface Skater{
    PM: number,
    Apples: number,
    Blocks: number,
    EVTOI: number,
    FOPCT: number,
    GP: number,
    GWG: number,
    Genos: number,
    Hits: number,
    OTG: number,
    PPG: number,
    PPP: number,
    PPTOI: number,
    PenM: number,
    PlayerName: string,
    Points: number,
    SHG: number,
    SHP: number,
    SHTOI: number,
    SPct: number,
    Shots: number,
    TOI: number,
    shifts: number,
    xG: number
}

export interface SkaterMessage{
    message: SkaterData
}

export interface SkaterData{
    data: Skater[]
}