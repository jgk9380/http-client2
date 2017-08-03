import {Component, OnInit} from '@angular/core';

import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

import {getResponseURL} from "@angular/http/src/http_utils";
import {LoginService} from "../../base/Login.service";
import {GlobalService} from "../../base/global-config.service";


@Component({
  selector: 'hc-frame',
  templateUrl: 'frame.component.html',
  styleUrls: ['frame.component.css']
})
export class FrameComponent implements OnInit {



  menuShow: boolean = true;
  adsShow: boolean = false;
  rememberMe: boolean = false;
  info: string;
  newPwd1: string;
  newPwd2: string;

  constructor(public ls: LoginService, public http: Http, private router: Router, private gc: GlobalService) {
  }

  ngOnInit() {

  }



  menuToggle() {
    console.log("toggle menu");
    this.menuShow = !this.menuShow;
  }



}
