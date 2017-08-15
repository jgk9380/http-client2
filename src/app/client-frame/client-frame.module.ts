///<reference path="../../../node_modules/@angular/router/src/router_module.d.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {MenuComponent} from "../menu/Menu.component";
import {NavBar} from "./menu-bar/MenuBar.component";
import {StockComponent} from "./Stock/stock.component";
import {FormsModule} from "@angular/forms";
import {FrameComponent} from "./frame/frame.component";
import {ButtonModule} from "primeng/components/button/button";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {GrowlModule} from "primeng/components/growl/growl";
import {MessagesModule} from "primeng/components/messages/messages";
import {MenuModule} from "primeng/components/menu/menu";
import {PanelMenuModule} from "primeng/components/panelmenu/panelmenu";
import {DialogModule} from "primeng/components/dialog/dialog";
import {Num2chinesePipe} from "../base/num2chinese.pipe";
import {Test2Component} from "./test2/test2.component";
import {Test3Component } from './test3/test3.component';
import {WorkPlanModule} from "../work-plan/work-plan.module";
import {SystemManagerModule} from "./system-manager/system-manager.module";
import {ClientFrameRouteModule} from "./client-frame.route";
@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ButtonModule,
    DataTableModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    DialogModule,
    ClientFrameRouteModule,

    SystemManagerModule,
    WorkPlanModule
  ],
  declarations: [
    NavBar,
    Num2chinesePipe,
    FrameComponent,
    StockComponent,
    Test2Component,
    Test3Component,
    MenuComponent,
  ],
  exports: [
    FrameComponent,
    ClientFrameRouteModule
  ],
})

export class ClientFrameModule{
  constructor(){
    console.log("cfm init");
  }
}
