import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {LoginService} from "../base/Login.service";
import {Router} from "@angular/router";
import {GlobalService} from "../base/global-config.service";
import {Employee} from "../base/employee";
import {request} from "http";

@Component({
  selector: 'http-client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public authCode: string;
  public authCodePath: string;
  //public pwd: string;
  //public rememberMe=true;
  // public opened = true;


  constructor(public ls: LoginService, public http: Http, private router: Router, private gc: GlobalService) {
  }

  ngOnInit() {
    this.ls.initUserNameAndPwd();
    this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?time="+new Date().getTime();
  }

  queryPwd() {
    // TODO 查询密码
    alert("暂无此功能");
    //return Promise.resolve(false);
    console.info("无此功能");
  }
getAuthCodePath():string{
  //this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?"+new Date();
  return this.authCodePath;
}
  changeAuthCodePath(){
    this.authCodePath = this.gc.RestBaseUrl + "authCode"+"?time="+new Date().getTime();
  }

  login(): Promise<boolean> {
  if(!this.ls.userId){
    this.ls.info = "请输入用户名！";
    return Promise.resolve(false);
  }
    if(!this.ls.pwd){
      this.ls.info = "请输入密码！";
      return Promise.resolve(false);
    }
    if(!this.authCode){
      this.ls.info = "请输入验证码！";
      return Promise.resolve(false);
    }
    let options = this.ls.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'login';
    let body = JSON.stringify({username: this.ls.userId, passwd: this.ls.pwd, authCode: this.authCode});
    console.log("body=" + body);
    return this.http.post(login_url, body, options)
      .toPromise().then(response => this.ls.dispResult(response,this.router)
      ).catch((x: any) => {
        return this.ls.handleError(x);
      });
  }
}
