//This is where app specific src code starts from
//Core configuration of the app: loading all the dependecies, declaring which components will be used within your app

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';


//Decorators(annotations): to decorate classes with properties
@NgModule({                 //to mark this class definition as an Angular module
  declarations: [           //which components and directives can be used in the scope of the HTML module
    AppComponent, StockItemComponent
  ],
  imports: [                //other modules importing functionality
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //the entry point component for starting the app
})
export class AppModule { }
