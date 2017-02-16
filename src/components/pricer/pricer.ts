import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pricer',
  templateUrl: 'pricer.html'
})
export class PricerComponent {

  @Input()
  num: number;

  @Output()
  numChange = new EventEmitter();

  plusClick(){
    this.reSite(+1);
  }

  minusClick(){
    if(this.num > 0){
      this.reSite(-1);
    }
  }

  private reSite(delta: number){
    this.num = this.num + delta;
    this.numChange.emit(this.num);
  }

  constructor() {

  }

}
