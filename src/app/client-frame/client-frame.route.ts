import {RouterModule, Routes, Route} from "@angular/router";
import {Test2Component} from "./test2/test2.component";
import {FrameComponent} from "./frame/frame.component";
import {Test3Component} from "./test3/test3.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {NgModule} from "@angular/core";

import {WpMainComponent} from "../work-plan/wp-main/wp-main.component";
import {WorkPlanRouteModule, wpRoutes} from "../work-plan/work-plan.route";

import {WpCompleteComponent} from "../work-plan/wp-complete/wp-complete.component";
import {WplistComponent} from "../work-plan/wp-list/wplist.component";
import {WpAddComponent} from "../work-plan/wp-add/wp-add.component";
/**
 * Created by jianggk on 2017/7/30.
 */

const cfRoutes: Routes = [
  { path: 'frame', component: FrameComponent,
    children: [
      {path: '',redirectTo:"test3",pathMatch:"full"},
      //{path: 'wp', component:WpMainComponent},
      {path: 'test2', component: Test2Component},
      {path: 'test3', component: Test3Component},
      {path: 'wp', loadChildren: 'app/work-plan/work-plan.module#WorkPlanModule'},

      //wpRoutes[0],
      //{path: 'sysAdmin', component:  SysMainComponent},
     {path: 'sysAdmin', loadChildren: 'app/client-frame/system-manager/system-manager.module#SystemManagerModule'},
      {path: '**', component:NotFoundComponent},
    ]
  },
];



@NgModule({
  imports: [
    RouterModule.forChild(cfRoutes),
    WorkPlanRouteModule
  ],
  exports: [
    RouterModule,
    WorkPlanRouteModule
  ],
})


export class ClientFrameRouteModule{

}
