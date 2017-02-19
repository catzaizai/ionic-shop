import { Component } from '@angular/core'

import { NavController } from 'ionic-angular'
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userName: string;
  password: string;

  constructor(public navCtrl: NavController){

  }

  loginClick(){
    this.navCtrl.push(HomePage);
  }
}
