import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryPage} from "../../pages/category/category";
import {HomePage} from "../../pages/home/home";
import {CartPage} from "../../pages/cart/cart";
import {MePage} from "../../pages/me/me";
import {Input} from "@angular/core/src/metadata/directives";

/*
  Generated class for the Footer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {
  @Input()
  pageName: string;
  gotoPage(pageName){
    if(this.pageName == pageName){ return; }
    switch (pageName){
      case 'home':
        this.navCtrl.push(HomePage);
            break;
      case 'category':
        this.navCtrl.push(CategoryPage);
            break;
      case 'cart':
        this.navCtrl.push(CartPage);
            break;
      case 'me':
        this.navCtrl.push(MePage);
            break;
    }
  }
  constructor(public navCtrl: NavController) {
  }

}
