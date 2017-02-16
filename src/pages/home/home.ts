import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;

  constructor(public navCtrl: NavController) {
    this.title = "首页";
  }

  openPage(){
    this.navCtrl.push(LoginPage);
  }

}
