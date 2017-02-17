import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AddressPage} from "../address/address";
import {UserInfoPage} from "../user-info/user-info";
import {ChangePasswordPage} from "../change-password/change-password";
import {SystemPage} from "../system/system";

/*
 Generated class for the User page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {

  gotoAddress() {
    this.navCtrl.push(AddressPage);
  }

  gotoUserInfo() {
    this.navCtrl.push(UserInfoPage);
  }

  gotoChangePassword() {
    this.navCtrl.push(ChangePasswordPage);
  }

  gotoSystem() {
    this.navCtrl.push(SystemPage);
  }

  logOut(){

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
