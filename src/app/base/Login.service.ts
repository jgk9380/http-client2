import {Injectable, OnInit} from '@angular/core';
import {SystemUser} from "./system-user";
import {Router} from "@angular/router";
import {Http, Headers, Response} from "@angular/http";
import {GlobalService} from "./global-config.service";
import {AuthenticatedHttpService} from "./AuthenticatedHttpService";
import {errorHandler} from "@angular/platform-browser/src/browser";


@Injectable()
//全局服务，一个应用只有一个
export class LoginService  {
  constructor( ) {

  }
   loginUser: SystemUser; //如果不为空表示已登录，每次请求需附带登录信息
   authToken:string;
   preLoginUrl:string;  //保存登录前地址用于导航
   userId:string;       //保存登录用户名
   pwd:string;          //保存登录密码
  initUserNameAndPwd() {
      this.userId = localStorage["userId"];
      this.pwd = localStorage["pwd"];
  }
  loginOut(): Promise < boolean > {
    //TODO 添加注销逻辑 ,注销成功过后
    this.loginUser=null;
    this.authToken=null;
    localStorage["userId"] = "";
    localStorage["pwd"] = "";
    return Promise.resolve(true);
  }

  rememberMe(userId:string,pwd:string){
    localStorage["userId"] = userId;
    localStorage["pwd"] = pwd;
  }






}
