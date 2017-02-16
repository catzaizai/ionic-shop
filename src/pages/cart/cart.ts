import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  productList: any;
  allChecked: boolean;
  totalCount: number;
  totalAmount: number;
  isEdit: boolean;

  checkClick(product) {
    product.checked = !product.checked;
    this.calculateTotalAmount();
  }

  editClick(){
    this.isEdit = !this.isEdit;
  }

  deleteClick(){
    for(var i=0; i<this.productList.length;i++){
      if(this.productList[i].checked){
        this.productList.splice(i, 1);
        i--;
      }
    }
    this.calculateTotalAmount();
  }

  checkAllClick() {
    this.allChecked = !this.allChecked;
    for (var i = 0; i < this.productList.length; i++) {
      this.productList[i].checked = this.allChecked;
    }
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = 0;
    this.totalCount = 0;
    if(this.productList.length == 0){
      this.allChecked = false;
      return;
    }
    this.allChecked = true;
    for (var i = 0; i < this.productList.length; i++) {
      let product = this.productList[i];
      if(product.checked){
        this.totalCount += product.count;
        this.totalAmount += product.price * product.count;
      } else {
        this.allChecked = false;
      }
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productList = [];
    this.totalAmount = 0.00;
    this.totalCount = 0;
    for (var i = 0; i < 10; i++) {
      this.productList.push({
        title: '产品1' + i,
        subtitle: '产品副标题',
        img: '../../assets/product.jpg',
        price: 22.50,
        count: 3,
        attributes: ['42码'],
        checked: false
      });
    }
  }

}
