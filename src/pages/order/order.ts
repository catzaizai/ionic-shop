import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {OrderType} from "../../service/enums";
import {OrderDetailPage} from "./order-detail";

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

  orderTypeStr: string;
  orderList: any;
  orderType = OrderType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.orderTypeStr = 'paddingPay';
    this.orderList = [];
    this.getOrder();
  }

  deleteOrder(){
    var prompt = this.alertCtrl.create({
      title: '确认删除',
      message: "确认删除此订单信息吗？",
      buttons: [
        {
          text: '取消',
          handler: data =>{

          }
        },
        {
          text: '确认',
          handler: data =>{

          }
        }
      ]
    });
    prompt.present();
  }

  gotoDetail(){
    this.navCtrl.push(OrderDetailPage)
  }

  private getOrder(){
    for(let i=0; i< 10; i++) {
      this.orderList.push({
        productImgList: ['../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg'],
        totalAmount: 224.00,
        orderType: Math.floor(Math.random() * 4),
        createDate: new Date()
      })
    }
  }
}
