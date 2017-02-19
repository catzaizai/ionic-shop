import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  orderType: string;
  orderList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orderType = 'paddingPay';
    this.orderList = [];
    this.getOrder();
  }

  deleteOrder(index){

  }

  private getOrder(){
    for(let i=0; i< 10; i++) {
      this.orderList.push({
        productImgList: ['../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg'],
        totalAmount: 224.00,
        orderType: Math.floor(Math.random() * 100),
        createDate: new Date()
      })
    }
  }
}
