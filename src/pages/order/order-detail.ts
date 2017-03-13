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
        {
          title: '华为荣耀WIFI穿墙宝 电力猫',
          summary: '超强电力宝，强力穿墙，即插即用',
          score: 4,
          price: 224.00,
          src: '../../assets/product.jpg',
          skuInfo: '黑色 单个',
          num: 3
        },
        {
          title: '华为荣耀WIFI穿墙宝 电力猫',
          summary: '超强电力宝，强力穿墙，即插即用',
          score: 4,
          price: 224.00,
          src: '../../assets/product.jpg',
          skuInfo: '黑色 单个',
          num: 3
        }
      ],
      totalAmount: 224.00,
      realPay: 224.00,
      freight: 0.00
    }
  }
}
