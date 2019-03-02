import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {

  this.stocks=[
    new Stock('Test Stock Company', 'TSC', 85, 80);
    new Stock('Second Stock Company', 'TSC', 10, 12);
    new Stock('Last Stock Company', 'TSC', 73, 79);
    ];
}

 toggleFavourite(event, index) {
    console.log("We are toggling the favorite state for this stock", index, event);
    this.stocks[index].favourite = !this.stocks[index].favourite;
  }

}

//Angular gives us hooks into the lifecycle of a component to let us take certain actions
// when a component is initialized,
// when its view is rendered,
// when it is destroyed, and so on.

//OnInit: executed after the component is created + after all the data field are initialised
//ngOnInit: is a function in the component, which is where you write your initialization logic

//HTML attributes vs DOM properties: in Angular we bind to the DOM property, and not the HTML attribute
