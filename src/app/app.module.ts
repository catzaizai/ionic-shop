import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { CategoryPage } from '../pages/category/category';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { CartPage } from "../pages/cart/cart";
import {PricerComponent} from "../components/pricer/pricer";
import {FormsModule} from "@angular/forms";
import {UserPage} from "../pages/user/user";
import {AddressPage} from "../pages/address/address";
import {DetailPage} from "../pages/detail/detail";
import {OrderPage} from "../pages/order/order";


@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    CategoryPage,
    HomePage,
    LoginPage,
    CartPage,
    UserPage,
    AddressPage,
    DetailPage,
    OrderPage,
    HeaderComponent,
    FooterComponent,
    PricerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回'
    }, {
      links: [
        { component: HomePage, name: 'home', segment: 'home' },
        { component: CategoryPage, name: 'category', segment: 'category' },
        { component: CartPage, name: 'cart', segment: 'cart' },
        { component: AccountPage, name: 'account', segment: 'account' },
        { component: UserPage, name: 'user', segment: 'user' },
        { component: AddressPage, name: 'address', segment: 'address' },
        { component: DetailPage, name: 'detail', segment: 'detail' },
        { component: OrderPage, name: 'order', segment: 'order' },
        { component: LoginPage, name: 'login', segment: 'login' }
      ]
    }),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    CategoryPage,
    HomePage,
    LoginPage,
    CartPage,
    UserPage,
    AddressPage,
    DetailPage,
    OrderPage,
    HeaderComponent,
    FooterComponent,
    PricerComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
