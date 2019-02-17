import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //identifies how Ag finds this particular component in any HTML page
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //A componenet in Ag is just a TS class decorated with some attributes and meta-data
  title = 'stock-market';
}
