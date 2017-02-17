import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {ManagerPage} from "../manager/manager";
import {OrderPage} from "../order/order";


@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  user: any;

  gotoUser() {
    this.navCtrl.push(ManagerPage);
  }

  gotoOrder(){
    this.navCtrl.push(OrderPage);
  }

  constructor(public navCtrl: NavController) {
    this.user = {
      nickname: "猫爷爷",
      avatar: '../../assets/default-avatar.jpg'
    }
  }

}
