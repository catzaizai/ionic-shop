import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MePage } from '../pages/me/me';
import { CategoryPage } from '../pages/category/category';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { CartPage } from "../pages/cart/cart";
import {PricerComponent} from "../components/pricer/pricer";
import {FormsModule} from "@angular/forms";
import {ManagerPage} from "../pages/manager/manager";
import {AddressPage} from "../pages/address/address";
import {ProductPage} from "../pages/product/product";
import {OrderPage} from "../pages/order/order";
import {UserInfoPage} from "../pages/user-info/user-info";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {SystemPage} from "../pages/system/system";
import {PopOverComponent} from "../components/pop-over/pop-over";
import {AttrModalComponent} from "../components/attr-modal/attr-modal";
import {StarBarComponent} from "../components/star-bar/star-bar";
import {OrderDetailPage} from "../pages/order/order-detail";
import {OrderType} from "../pipes/order-type";


@NgModule({
  declarations: [
    MyApp,
    MePage,
    CategoryPage,
    HomePage,
    LoginPage,
    CartPage,
    ManagerPage,
    AddressPage,
    ProductPage,
    OrderPage,
    UserInfoPage,
    ChangePasswordPage,
    SystemPage,
    OrderDetailPage,
    HeaderComponent,
    FooterComponent,
    PricerComponent,
    PopOverComponent,
    AttrModalComponent,
    StarBarComponent,
    OrderType
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }, {
      links: [
        { component: HomePage, name: 'home', segment: 'home' },
        { component: CategoryPage, name: 'category', segment: 'category' },
        { component: CartPage, name: 'cart', segment: 'cart' },
        { component: MePage, name: 'me', segment: 'me' },
        { component: ManagerPage, name: 'manager', segment: 'manager' },
        { component: AddressPage, name: 'address', segment: 'address' },
        { component: ProductPage, name: 'product', segment: 'product' },
        { component: OrderPage, name: 'order', segment: 'order' },
        { component: LoginPage, name: 'login', segment: 'login' },
        { component: UserInfoPage, name: 'userInfo', segment: 'userInfo' },
        { component: ChangePasswordPage, name: 'changePassword', segment: 'changePassword' },
        { component: SystemPage, name: 'system', segment: 'system' },
        { component: OrderDetailPage, name: 'orderDetail', segment: 'orderDetail' }
      ]
    }),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    CategoryPage,
    HomePage,
    LoginPage,
    CartPage,
    ManagerPage,
    AddressPage,
    ProductPage,
    OrderPage,
    UserInfoPage,
    ChangePasswordPage,
    SystemPage,
    OrderDetailPage,
    HeaderComponent,
    FooterComponent,
    PricerComponent,
    PopOverComponent,
    AttrModalComponent,
    StarBarComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
