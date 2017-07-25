import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WplistComponent } from './wplist/wplist.component';
import { WpAddComponent } from './wp-add/wp-add.component';
import { WpCompleteComponent } from './wp-complete/wp-complete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WplistComponent,
    WpAddComponent,
    WpCompleteComponent
  ]
})
export class WorkplanModule { }
