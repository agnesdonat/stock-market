# StockMarket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


####################################################################################################################################################################
Notes on Chapter 3: Directives and Components
directive: to attach some custom functionality to elements in your HTML
component: a directive that provides both functionality and UI logic; an element that encapsulates its behavior and rendering logic
non-component directives: work on and modify existing elements
              attribute directives: change the look and feel, or the behavior, of an existing element or component (NgClass, NgStyles;  alternatives for the class and style bindings)
              structural directives: change the DOM layout by adding or removing elements from the view (NgIf, NgFor)  
AD
NgClass: allows us to apply or remove multiple CSS classes simultaneously from an element in our HTML
        takes a JavaScript object as input;
NgStyle: lower-level equivalent of the NgClass directive  
         it takes a JSON object and applies it based on the values of the key
         works at a CSS style/properties level

SD        
ngIf: to conditionally hide or show elements in your UI 
      it simply expects the expression provided to it to evaluate to a truthy value     
ngFor: creating multiple elements, usually one for each instance of some or the other object in an array


Remove vs Hide elements: Removing the element from the DOM is a good way to ensure that it reduces any impact on performance

trackBy: it will use the return value of the function to decide how to identify individual elements
         ensures that Angular calls the function to figure out how to identify individual items, instead of using the object reference
         whenever you know that you are going to reload the list (for example, loading it from an observable that makes a server call)

NgSwitch: attribute directive
          NgSwitchCase: structural directive - add elements based on type
          NgSwitchDefault: structural directive - display default elements
          
ngFor and and ngIf can't run on the same template; it is recommended to just use wrapping elements so that you can be explicit about the order in which these structural directives are executed          
