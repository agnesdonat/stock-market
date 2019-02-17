//this component renders the template associated with it
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit { //OnInit interface gives us a hook to when a component is initialised

  public name: string;                              //definitions of fields we want to access from the HTML
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favourite: boolean;

  constructor() { }

  ngOnInit() {                                    //function triggered when a component is initialised
  this.name = 'Test Stock Company';               // initialising the values for each of the components
  this.code = 'TSC';
  this.price = 78;
  this.previousPrice = 80;
  this.positiveChange = this.price >= this.previousPrice;
  this.favourite = false;
  }

  toggleFavourite(event) {
    console.log("We are toggling the favorite state for this stock", event);
    this.favourite = !this.favourite;
  }

}

//Angular gives us hooks into the lifecycle of a component to let us take certain actions
// when a component is initialized,
// when its view is rendered,
// when it is destroyed, and so on.

//OnInit: executed after the component is created + after all the data field are initialised
//ngOnInit: is a function in the component, which is where you write your initialization logic

//HTML attributes vs DOM properties: in Angular we bind to the DOM property, and not the HTML attribute
