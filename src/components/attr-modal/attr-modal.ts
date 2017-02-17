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

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.productAttach = navParams.data;
    this.productAttach.count = 1;
    this.attrs = [
      {code: '01', name: '颜色', attr: [{code: '0101', value: '白色'}, {code: '0102', value: '黑色'}]},
      {code: '02', name: '套餐', attr: [{code: '0201', value: '单个'}, {code: '0202', value: '一对'}]}
    ];
    this.sku = [
      { code: '01010201', price: 124 },
      { code: '01010202', price: 224 },
      { code: '01020201', price: 124 },
      { code: '01020202', price: 224 }
    ]
  }

  choseAttr(){

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
