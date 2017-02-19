import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {ProductPage} from "../product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  hotProducts: any;

  constructor(public navCtrl: NavController) {
    this.title = "首页";
    this.hotProducts = [];
    for (var i = 0; i < 10; i++) {
      this.hotProducts.push({
        title: "耐克",
        img: '../../assets/product.jpg',
        price: 22.50
      })
    }
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  gotoProduct() {
    this.navCtrl.push(ProductPage);
  }

}
