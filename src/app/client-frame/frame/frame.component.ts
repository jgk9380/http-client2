import {Component, OnInit} from '@angular/core';

import {Http, Headers, Response} from "@angular/http";
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
  showEditPwd = false;
  loginName: string;

  constructor(public ls: LoginService, public http: Http, private router: Router, private gc: GlobalService) {
  }

  ngOnInit() {
    let headers = new Headers({'Content-Type': 'application/json'});
    //let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    headers.append('Accept', "application/json");
    //headers.append("Access-Control-Allow-Origin", "*");
    let query_url = this.gc.baseUrl + 'realLoginUser';
    this.http.get(query_url, {headers: headers})
      .toPromise().then(response => {
      console.info("return=" + response.json());
      this.loginName = response.json().employee.name;
    }).catch((x: any) => {
      this.gc.handleError(x);
    });
  }

  showEdit() {
    console.info("show edit...")
    this.showEditPwd = true;
    this.info = "";
  }

  menuToggle() {
    console.log("toggle menu");
    this.menuShow = !this.menuShow;
  }

  loginOut():void {
    console.log("loginOut1")
    this.info = null;
    this.ls.loginOut()
    this.router.navigate(["/login"])
  }




  editPwd():any{
    if (!this.newPwd1 || !this.newPwd2 ) {
      this.info = "请填写密码";
      return false;
    }
    if (!(this.newPwd1 == this.newPwd2)) {
      this.info = "密码不一致,请确认修改的密码";
      return false;
    }
      //let headers = new Headers({'Content-Type': 'application/json'});
      let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      headers.append('Accept', "application/json");
      let editPwdUrl = this.gc.baseUrl + "editPasswd";
      let body="passwd="+this.newPwd1;
      this.http.post(editPwdUrl, body,{headers: headers}).toPromise()
        .then(response => {
          this.info = response.json().msg + ",请重新登录！";
          //setTimeout(this.ls.setLoginUser(null),3000);
          // this.ls.authToken=null;
          this.info="密码修改成功，请重新登录"
          //this.router.navigate(["login"])
        }).catch( (x: any) =>{
            this.info="密码修改不成功！";
            this.gc.handleError(x)
          }
      );
    }



}
