/**
 * Created by jianggk on 2017/1/10.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./client-frame/Stock/stock.component";
import {Test2Component} from "./client-frame/test2/test2.component";
import {NotFoundComponent} from "./client-frame/nofound/not-found.component";
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
  //{path: 'frame', loadChildren: 'app/client-frame/client-frame-route.module#ClientFrameRouteModule'},
  // {
  //   path: 'frame', component: FrameComponent, children: [
  //   {path: '', redirectTo: "test3", pathMatch: "full"},
  //   //{path: 'wp', component:WpMainComponent},
  //   {path: 'test2', component: Test2Component},
  //   {path: 'test3', component: Test3Component},
  //   {
  //     path: 'wp', component: WpMainComponent,
  //     children: [
  //       {path: '', redirectTo: "add", pathMatch: "full"},
  //       {path: 'add', component: WpAddComponent},
  //       {path: 'list', component: WplistComponent},
  //       {path: 'complete', component: WpCompleteComponent},
  //     ]
  //   },
  //   //{path: 'sysAdmin', component:  SysMainComponent},
  //   {path: 'sysAdmin', loadChildren: 'app/client-frame/system-manager/system-manager.module#SystemManagerModule'},
  //   {path: '**', component: NotFoundComponent},
  // ]
  // },
  {path: '**', component: NotFoundComponent}
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
