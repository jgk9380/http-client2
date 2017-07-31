import {WpCompleteComponent} from "./wp-complete/wp-complete.component";
import {WplistComponent} from "./wp-list/wplist.component";
import {WpAddComponent} from "./wp-add/wp-add.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {WpMainComponent} from "./wp-main/wp-main.component";
/**
 * Created by jianggk on 2017/7/30.
 */

export  const wpRoutes: Routes = [
  {
    path: '', component: WpMainComponent,
    children: [
          {path: '', redirectTo:" add",pathMatch:"full"},
          {path: 'add', component: WpAddComponent},
          {path: 'list', component: WplistComponent},
          {path: 'complete', component: WpCompleteComponent},
    ],
  }];


@NgModule({
  imports: [
    RouterModule.forChild(wpRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class WorkPlanRouteModule {

}

