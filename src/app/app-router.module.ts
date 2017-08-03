/**
 * Created by jianggk on 2017/1/10.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./client-frame/Stock/stock.component";
import {Test2Component} from "./client-frame/test2/test2.component";

import {LoginComponent} from "./login/login.component";
import {FrameComponent} from "./client-frame/frame/frame.component";
import {Test3Component} from "./client-frame/test3/test3.component";
import {WpMainComponent} from "./work-plan/wp-main/wp-main.component";
import {WpAddComponent} from "./work-plan/wp-add/wp-add.component";
import {WplistComponent} from "./work-plan/wp-list/wplist.component";
import {ClientFrameRouteModule} from "./client-frame/client-frame.route";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    ClientFrameRouteModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]

})

export class AppRouterModule {
}
