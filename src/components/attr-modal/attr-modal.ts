import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

/*
 Generated class for the AttrModal component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'attr-modal',
  templateUrl: 'attr-modal.html'
})
export class AttrModalComponent {

  productAttach: any;
  attrs: any;
  sku: any;
  selectedAttr: any;
  selecteSku: any;

  private skuCodeArray: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.productAttach = navParams.data;
    this.selecteSku = navParams.data.sku;
    this.productAttach.count = 1;
    this.selectedAttr = {};

    this.attrs = [
      {code: '01', name: '颜色', attr: [{code: '0101', value: '白色'}, {code: '0102', value: '黑色'}]},
      {code: '02', name: '套餐', attr: [{code: '0201', value: '单个'}, {code: '0202', value: '一对'}]}
    ];
    this.sku = [
      {code: '0101-0201', price: 124, info: '白色 单个'},
      {code: '0101-0202', price: 224, info: '白色 一对'},
      {code: '0102-0201', price: 124, info: '黑色 单个'},
      {code: '0102-0202', price: 224, info: '黑色 一对'}
    ];

    this.initAttr();
  }

  attrClick(attrCode, valueCode) {
    this.selectedAttr[attrCode] = valueCode;
    this.calculatePrice();
  }

  private calculatePrice() {

    for (let i = 0; i < this.sku.length; i++) {
      let isFind = true;
      this.selecteSku = null;
      for (let pro in this.selectedAttr) {
        if (this.sku[i].code.indexOf(this.selectedAttr[pro]) < 0) {
          isFind = false;
        }
      }
      if (isFind) {
        this.selecteSku = this.sku[i];
        break;
      }
    }
  }

  private initAttr() {
    if (this.selecteSku) {
      var attrs = this.selecteSku.code.split('-');
      for(let i=0;i<attrs.length;i++) {
        this.selectedAttr[attrs[i].substr(0, 2)] = attrs[i];
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss(this.selecteSku);
  }
}
