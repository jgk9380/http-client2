/**
 * Created by jianggk on 2017/1/11.
 */
import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {MenuItem} from "primeng/components/common/api";

import {NavBarItem, NavBarService} from "../NavBar.service";
import {LoginService} from "../../base/Login.service";
import {GlobalService} from "../../base/global-config.service";
import {Http, Headers, RequestOptions} from "@angular/http";

@Component({
  moduleId: 'module.id',
  selector: 'hc-menu-bar',
  templateUrl: 'MenuBar.component.html',
  styleUrls: ['MenuBar.component.css']
})

export class NavBar implements OnInit {
  // menuShow: boolean;
  authCodePath: string;
  newPwd1:string;
  newPwd2:string;
  showEditPwdPopup:boolean;
  authCode:string;

  constructor(private router: Router, public ls:LoginService, public  ms:NavBarService,private gc: GlobalService,public http: Http) {
  }

  ngOnInit() {
    this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?time="+new Date().getTime();
    // console.log("items.len="+this.items.length);
  }
  loginOut():void {
    console.log("loginOut1")
    this.ls.info=null;
    //this.ls.pwd="";
    this.ls.loginOut()
    this.router.navigate(["/login"])
  }

  showEdit() {
    console.info("show edit...")
    this.showEditPwdPopup = true;
    this.ls.info = "";
  }

  editPwd():any{
    if (!this.newPwd1 || !this.newPwd2 ) {
      this.ls.info = "请填写密码";
      return false;
    }
    if (!(this.newPwd1 == this.newPwd2)) {
      this.ls.info = "密码不一致,请确认修改的密码";
      return false;
    }
    //let headers = new Headers({'Content-Type': 'application/json'});
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    headers.append('Accept', "application/json");
    let editPwdUrl = this.gc.RestBaseUrl + "editPasswd";
    let body="passwd="+this.newPwd1;
    this.http.post(editPwdUrl, body,{headers: headers}).toPromise()
      .then(response => {
        this.ls.info = response.json().msg + ",请重新登录！";
        //setTimeout(this.ls.setLoginUser(null),3000);
        // this.ls.authToken=null;
        this.ls.info="密码修改成功，请重新登录"
        //this.router.navigate(["login"])
      }).catch( (x: any) =>{
        this.ls.info="密码修改不成功！";
        this.gc.handleError(x)
      }
    );
  }

  login(): Promise<boolean> {
    //this.ls.userId=this.userId;
    // this.ls.pwd=this.pwd;
    let options = this.ls.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'login';
    //let body = "username=" + this.ls.userId + "&passwd=" + this.ls.pwd;
    let body=JSON.stringify({username:this.ls.userId,passwd:this.ls.pwd,authCode:this.authCode})
    //console.log("body=" + body);
    return this.http.post(login_url, body, options)
      .toPromise().then(response => {
        let returnData = response.json();
        if (returnData.errorCode) {
          this.ls.info = returnData.errorInfo;
          return false;
        }
          console.log("登录成功" + response.json());
          this.ls.extraData(response.json());
          this.ls.showPopup=false;
          return true;
        }
      ).catch((x: any) => {
        console.error("登录失败");
        this.gc.handleError(x);
        this.ls.info="用户名或密码错误";
        return false;
      });
  }

  getAuthCodePath():string{
    //this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?"+new Date();
    return this.authCodePath;
  }
  changeAuthCodePath(){
    this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?time="+new Date().getTime();
  }
}

