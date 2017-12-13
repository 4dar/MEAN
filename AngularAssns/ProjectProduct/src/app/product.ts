export class Product {
    constructor(
    public id: number = Math.floor(Math.random() * 99999) + 1,
    public title: string = "",
    public price: number = 0,
    ){}
}
