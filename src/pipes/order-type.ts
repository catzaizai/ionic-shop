import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'orderType'
})
@Injectable()
export class OrderType {
  transform(value, args) {
    value = value + ''; // make sure it's a string
    let text = "";
    switch (value){
      case '0':
        text = "待支付";
            break;
      case '1':
        text = "待发货";
            break;
      case '2':
        text = "待收货";
            break;
      case '3':
        text = "待评价";
            break;
      case '4':
        text = "已完成";
            break;
      default:
        break;
    }
    return text;
  }
}
