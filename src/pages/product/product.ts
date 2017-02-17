import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {AttrModalComponent} from "../../components/attr-modal/attr-modal";

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  segment: string;
  productInfo: any;
  attrs: any;
  sku: any;

  showAttrModal(){
    let attrModal = this.modalCtrl.create(AttrModalComponent, this.productInfo);
    attrModal.present();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.segment = 'product';
    this.productInfo = {
      title: '华为荣耀WIFI穿墙宝 电力猫',
      summary: '超强电力宝，强力穿墙，即插即用',
      price: 224.00,
      src: ['../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg']
    };
  }

}
