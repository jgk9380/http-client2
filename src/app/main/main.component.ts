import { Component, OnInit } from '@angular/core';
import {LoginService} from "../base/Login.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'http-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public ls: LoginService, public http: Http, private router: Router ) {}
  ngOnInit() {
    if(!this.ls.authToken)
      this.router.navigate(["login"])
    else{

    }
  }

}
