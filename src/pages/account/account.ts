import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {UserPage} from "../user/user";
import {OrderPage} from "../order/order";


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  user: any;

  gotoUser() {
    this.navCtrl.push(UserPage);
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
