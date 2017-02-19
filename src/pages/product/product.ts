import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ToastController} from 'ionic-angular';
import {AttrModalComponent} from "../../components/attr-modal/attr-modal";
import {CartPage} from "../cart/cart";

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
  commentList: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController) {
    this.segment = 'product';
    this.productInfo = {
      title: '华为荣耀WIFI穿墙宝 电力猫',
      summary: '超强电力宝，强力穿墙，即插即用',
      score: 4,
      price: 224.00,
      src: ['../../assets/product.jpg', '../../assets/product.jpg', '../../assets/product.jpg'],
      collect: false
    };
    this.commentList = [];
    for (let i = 0; i < 10; i++) {
      this.commentList.push({
        userName: '138***495',
        createDate: new Date(),
        score: 4,
        content: '测试，还不错下次再来',
        skuInfo: '黑色 单个',
        favorite: 3
      })
    }
  }

  showAttrModal() {
    this.productInfo.sku = this.sku;
    let attrModal = this.modalCtrl.create(AttrModalComponent, this.productInfo);
    attrModal.onDidDismiss(sku => {
      this.sku = sku;
    });
    attrModal.present();
  }

  gotoCart() {
    this.navCtrl.push(CartPage);
  }

  collectClick() {
    this.productInfo.collect = !this.productInfo.collect;
    let message = this.productInfo.collect ? '收藏成功' : '取消成功';
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
