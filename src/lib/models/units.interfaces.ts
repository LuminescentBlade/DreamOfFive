export interface IStats {
    [stat: string]: number
}

export interface IPlayableUnitStats{
    name: string,
    promotesTo?: string,
    bases?: IStats,
    growths?: IStats,
    level?: number,
    weapons?: IStats,
}