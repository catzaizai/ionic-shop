import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html'
})
export class OrderDetailPage{

  orderInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.orderInfo = {
      orderNo: '490210000',
      orderType: 1,
      address: {
        contact: '老王',
        phoneNo: '13803567896',
        addressInfo: '北京海淀区西街43号'
      },
      productList: [
        {  }
      ],
      totalAmount: 224.00,
      realPay: 224.00
    }
  }
}
