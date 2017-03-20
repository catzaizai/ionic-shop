import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {

  addressList: any;
  currentDefaultAddress: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addressList = [];
    for(let i=0;i<5;i++){
      this.addressList.push({
        name: '张三',
        phone: '13882923495',
        address: '四川省成都市武侯区贵溪街道剑南大道南段58号',
        isDefault: false,
      });
    }
    this.addressList[0].isDefault = true;
    this.currentDefaultAddress = this.addressList[0];
  }
}
