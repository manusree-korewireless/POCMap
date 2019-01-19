export interface ILocation
{
    iMEI: Number,
    location: ICoord[],
    direction: Number,
    speed: Number,
    fuel: Number
}

export interface ICoord{
    lat: Number,
    lon: Number
}