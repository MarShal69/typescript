import Buyable from "./Buyable";

export default class Movie {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly yearOfCration: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly time: string,
    ) { }
}