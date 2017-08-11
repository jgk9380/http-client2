/**
 * Created by jianggk on 2017/7/31.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysMainComponent } from './main/sys-main.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserListComponent } from './user-list/user-list.component';
import {Routes, RouterModule} from "@angular/router";
import {DepartAdminComponent} from "./depart-admin/depart-admin.component";

const sysRoutes: Routes = [
  { path: '', component: SysMainComponent,
    children: [
      {path: '',redirectTo:"list",pathMatch:"full"},
      {path: 'userAdmin', component: UserAdminComponent},
      {path: 'list', component: UserListComponent},
      {path: 'departAdmin', component: DepartAdminComponent},
      // {path: '**', component:NotFoundComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sysRoutes),
  ],
  exports:[
    RouterModule,
  ],
})
export class SystemManagerRouterModule { }
