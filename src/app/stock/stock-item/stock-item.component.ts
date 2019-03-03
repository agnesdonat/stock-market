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
    new Stock('Test Stock Company', 'TSC', 85, 80),
    new Stock('Second Stock Company', 'TSC', 10, 12),
    new Stock('Last Stock Company', 'TSC', 73, 79),
    ];
}

 toggleFavourite(event, index) {
    console.log("We are toggling the favorite state for this stock", index, event);
    this.stocks[index].favourite = !this.stocks[index].favourite;
  }

  trackStockByCode(index, stock){
  return stock.code;
  }

}

