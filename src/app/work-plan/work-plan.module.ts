import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WplistComponent } from './wp-list/wplist.component';
import { WpAddComponent } from './wp-add/wp-add.component';
import { WpCompleteComponent } from './wp-complete/wp-complete.component';
import { WpMainComponent } from './wp-main/wp-main.component';
import { Routes, RouterModule} from "@angular/router";
import {WorkPlanRouteModule} from "./work-plan.route";



@NgModule({
  imports: [
    CommonModule,
    WorkPlanRouteModule
  ],
  declarations: [
    WplistComponent,
    WpAddComponent,
    WpCompleteComponent,
    WpMainComponent
  ],
  exports:[
    WpMainComponent,
  ]
})

export class WorkPlanModule { }
