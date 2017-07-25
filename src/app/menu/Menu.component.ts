/**
 * Created by jianggk on 2017/1/11.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  moduleId: 'module.id',
  selector: 'hc-menu-pad',
  templateUrl: 'Menu.component.html',
  styleUrls: ['Menu.component.css']
})

export class MenuComponent implements OnInit {
  // menuShow: boolean;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }
}

