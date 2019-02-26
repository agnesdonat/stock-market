//this component renders the template associated with it
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit { //OnInit interface gives us a hook to when a component is initialised

  public stock: Stock; //replaced all the individual member variables with one variable of type Stock
  public stockClasses;
  constructor() { }

  ngOnInit() {

  this.stock= new Stock('Test Stock Company', 'TSC', 85, 80);

  let difference = (this.stock.price / this.stock.previousPrice) -1;
  let largeChange = Math.abs(difference) > 0.01;

  this.stockClasses = {
    "positive": this.stock.isPositiveChange(),
    "negative": !this.stock.isPositiveChange(),
    "large-change": largeChange,
    "small-change": !largeChange
    };
  }

  toggleFavourite(event) {
    console.log("We are toggling the favorite state for this stock", event);
    this.stock.favourite = !this.stock.favourite;
  }

}

//Angular gives us hooks into the lifecycle of a component to let us take certain actions
// when a component is initialized,
// when its view is rendered,
// when it is destroyed, and so on.

//OnInit: executed after the component is created + after all the data field are initialised
//ngOnInit: is a function in the component, which is where you write your initialization logic

//HTML attributes vs DOM properties: in Angular we bind to the DOM property, and not the HTML attribute
