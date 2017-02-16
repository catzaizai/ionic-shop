import { Component, Input } from '@angular/core';
import {NavController} from "ionic-angular";

/*
  Generated class for the Header component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  title: string;

  @Input()
  set setTitle(text: string){
    this.title = text;
  }

  goBack(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController) {

  }

}
