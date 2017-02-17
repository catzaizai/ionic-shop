import { Component } from '@angular/core';

/*
  Generated class for the Search component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  text: string;

  constructor() {
    console.log('Hello Search Component');
    this.text = 'Hello World';
  }

}
