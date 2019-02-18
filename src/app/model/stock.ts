// this gives encapsulation while working with sticks across the app
//creating a class with five properties: four on the constructor and one autoinitialised

export class Stock {
  favourite: boolean = false;

  constructor( public name: string,
  public code: string,
  public price: number,
  public previousPrice: number
  ) {}

  isPositiveChange(): boolean {
  return this.price >= this.previousPrice;
  }
}
