import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SysMainComponent} from './main/sys-main.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {UserListComponent} from './user-list/user-list.component';
import {Routes, RouterModule} from "@angular/router";
import {SystemManagerRouterModule} from "./system-manager.route";
import {DepartAdminComponent} from './depart-admin/depart-admin.component';

@NgModule({
  imports: [
    CommonModule,
    SystemManagerRouterModule
  ],
  declarations: [SysMainComponent, UserAdminComponent, UserListComponent, DepartAdminComponent],
  exports: [
    SysMainComponent,
  ],
})
export class SystemManagerModule {
}
