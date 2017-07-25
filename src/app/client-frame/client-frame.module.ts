import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {Test1Component} from "./test1/test1.component";
import {Test2Component} from "./test2/test2.component";
import {MenuComponent} from "../menu/Menu.component";
import {NavBar} from "./frame/menu-bar/MenuBar.component";
import {StockComponent} from "./Stock/stock.component";
import {FormsModule} from "@angular/forms";
import {FrameComponent} from "./frame/frame.component";
import {ButtonModule} from "primeng/components/button/button";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {GrowlModule} from "primeng/components/growl/growl";
import {MessagesModule} from "primeng/components/messages/messages";
import {SharedModule} from "primeng/components/common/shared";
import {MenuModule} from "primeng/components/menu/menu";
import {PanelMenuModule} from "primeng/components/panelmenu/panelmenu";
import {DialogModule} from "primeng/components/dialog/dialog";
import {Num2chinesePipe} from "../base/num2chinese.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Test3Component } from './test3/test3.component';
const routes: Routes = [
  { path: 'frame', component: FrameComponent,
    children: [
          {path: '',redirectTo:"test3",pathMatch:"full"},
          {path: 'test1', component: Test1Component},
          {path: 'test2', component: Test2Component},
          {path: 'test3', component: Test3Component},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Num2chinesePipe,
    FrameComponent,
    StockComponent,
    NavBar,
    Test1Component,
    Test2Component,
    MenuComponent,
    Test3Component,
  ],
  exports: [FrameComponent],
})


export class ClientFrameModule {
  constructor(){
    console.log("cfm init")
  }
}
