import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, BrowserXhr, Http} from '@angular/http';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {LoginService} from "./base/Login.service";
import {MenuModule,PanelMenuModule} from 'primeng/primeng';
import {MenuService} from "./client-frame/menu.service";
import {DialogModule} from 'primeng/primeng';
import {GlobalService} from "./base/global-config.service";
import {AuthenticatedHttpService} from "./base/AuthenticatedHttpService";
import {CorsBrowserXhr} from "./base/cors-browser-xhr.service";
import {BaseAdminModule} from "./client-frame/admin/base/base-admin.module";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {Routes, RouterModule} from "@angular/router";
import {ClientFrameModule} from "./client-frame/client-frame.module";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'frame', loadChildren: 'app/client-frame/client-frame.module#ClientFrameModule'  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    MessagesModule,
    GrowlModule,
    //AppRoutingModule,
    RouterModule.forRoot(routes),
    MenuModule,
    PanelMenuModule,
    DialogModule,
    BaseAdminModule,
    ClientFrameModule
  ],
  declarations: [
    LoginComponent,
    MainComponent,
  ],
  providers: [
             { provide: BrowserXhr, useClass:CorsBrowserXhr },
             { provide: Http, useClass:AuthenticatedHttpService},
                LoginService,
                MenuService,
                GlobalService
              ],
  bootstrap: [MainComponent]
})

export class AppModule { }



