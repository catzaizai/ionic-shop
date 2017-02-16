import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  categoryList: any;
  productList: any;

  constructor(public navCtrl: NavController) {
    this.categoryList = [];
    this.productList = [];
    for(var i=0;i<20;i++){
      this.categoryList.push({ name: '类型'+i });
      this.productList.push({ title: '产品'+i, subtitle: '产品介绍可以详细一点的', price: 21.50, img: '../../assets/product.jpg', sale: 304 });
    }
  }

}
