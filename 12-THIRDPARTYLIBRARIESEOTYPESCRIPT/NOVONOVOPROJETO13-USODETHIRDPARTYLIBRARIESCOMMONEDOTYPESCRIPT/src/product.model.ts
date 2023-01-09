import { isNotEmpty, isNumber, isPositive } from 'class-validator';  ////package EXCLUSIVA AO TYPESCRIPT, que nos ajuda com a VALIDATION de propriedades nas nossas classes.... (melhor do que construir esses decorators MANUALMENTE0...)





export class Product {
    @isNotEmpty()
  title: string;
  @isNumber()
  @isPositive()
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getInformation(): [string, number] {
    return [this.title, +`${this.price}`];
  }
}
