import {Component, EventEmitter, Output, Input} from '@angular/core';

/*
  Generated class for the Checkbox component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'checkbox',
  templateUrl: 'checkbox.html'
})
export class CheckboxComponent {

  icon: string;
  _checked: boolean;

  @Output()
  checkChange = new EventEmitter<any>();

  constructor() {
    this.icon = "md-checkbox";
    this.checked = false;
  }

  public checkClick(){
     this.checked = !this.checked;
  }

  @Input()
  set checked(value){
    if(this._checked == value) return;
    this._checked = value;
    if(!this._checked){
      this.icon = "md-square-outline";
    }else{
      this.icon = "md-checkbox";
    }
    this.checkChange.emit({checked: this._checked});
  }

  get checked(){
    return this._checked;
  }
}
