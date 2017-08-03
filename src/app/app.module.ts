import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BrowserXhr, Http} from '@angular/http';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {LoginService} from "./base/Login.service";
import {MenuModule, PanelMenuModule} from 'primeng/primeng';
import {NavBarService} from "./client-frame/NavBar.service";
import {DialogModule} from 'primeng/primeng';
import {GlobalService} from "./base/global-config.service";
import {AuthenticatedHttpService} from "./base/AuthenticatedHttpService";
import {CorsBrowserXhr} from "./base/cors-browser-xhr.service";
import {BaseAdminModule} from "./client-frame/admin/base/base-admin.module";
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {Routes, RouterModule} from "@angular/router";
import {ClientFrameModule} from "./client-frame/client-frame.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from './not-found/not-found.component';
import {FrameComponent} from "./client-frame/frame/frame.component";
import {Test2Component} from "./client-frame/test2/test2.component";
import {Test3Component} from "./client-frame/test3/test3.component";
import {WpAddComponent} from "./work-plan/wp-add/wp-add.component";
import {WplistComponent} from "./work-plan/wp-list/wplist.component";
import {WpMainComponent} from "./work-plan/wp-main/wp-main.component";
import {WpCompleteComponent} from "./work-plan/wp-complete/wp-complete.component";
import {ClientFrameRouteModule} from "./client-frame/client-frame.route";
import {WorkPlanModule} from "./work-plan/work-plan.module";
import {WorkPlanRouteModule} from "./work-plan/work-plan.route";
import {AppRouterModule} from "./app-router.module";
import {SystemManagerModule} from "./client-frame/system-manager/system-manager.module";



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    DialogModule,
    BaseAdminModule,
    ClientFrameModule,
    WorkPlanModule,
    SystemManagerModule,
    AppRouterModule
  ],
  declarations: [
    LoginComponent,
    MainComponent,
    NotFoundComponent,
  ],
  providers: [
    {provide: BrowserXhr, useClass: CorsBrowserXhr},
    {provide: Http, useClass: AuthenticatedHttpService},
    LoginService,
    NavBarService,
    GlobalService
  ],
  bootstrap: [MainComponent]
})

export class AppModule {
}



