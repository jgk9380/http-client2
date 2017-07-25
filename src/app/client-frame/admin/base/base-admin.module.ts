/**
 * Created by jianggk on 2017/2/15.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EmpAdminComponent} from "./emp-admin/emp-admin.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BaseAdminRoutingModule} from "../base-admin-route.module";
import {SharedModule} from "primeng/components/common/shared";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {MessagesModule} from "primeng/components/messages/messages";
import {GrowlModule} from 'primeng/primeng';
import {DialogModule} from "primeng/components/dialog/dialog";
import {LoginUserAdminComponent} from './login-user-admin/login-user-admin.component';
@NgModule({
  imports: [CommonModule,
    FormsModule,
    BaseAdminRoutingModule,
    DataTableModule,
    GrowlModule,
    SharedModule,
    PaginatorModule,
    DialogModule,
  ],
  declarations: [EmpAdminComponent, LoginUserAdminComponent],
  exports: [EmpAdminComponent],
  providers: [],
})
export class BaseAdminModule {

}
