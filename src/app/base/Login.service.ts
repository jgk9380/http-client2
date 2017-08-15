import {Injectable, OnInit} from '@angular/core';
import {SystemUser} from "./system-user";
import {Router} from "@angular/router";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {GlobalService} from "./global-config.service";
import {AuthenticatedHttpService} from "./AuthenticatedHttpService";
import {errorHandler} from "@angular/platform-browser/src/browser";


@Injectable()
//全局服务，一个应用只有一个
export class LoginService {
  constructor() {

  }

  //loginUser: SystemUser; //如果不为空表示已登录，每次请求需附带登录信息
  authToken: string;//如果不为空表示已登录，每次请求需附带登录信息
  userId: string;       //保存登录用户名
  pwd: string;          //保存登录密码
  // prePath:string;//保存登录前地址用于导航
  info: string;
  rememberMe = true;
  showPopup = false;//用于frame显示登录对话框，非组件。
  realName: string;
  currentUserRoles: string[];

  initUserNameAndPwd() {
    this.userId = localStorage["userId"];
    this.pwd = localStorage["pwd"];
  }

  loginOut(): Promise < boolean > {
    //TODO 添加注销逻辑 ,注销成功过后
    //this.loginUser = null;
    this.authToken = null;
    //localStorage["userId"] = "";
    //localStorage["pwd"] = "";
    //this.pwd="";
    return Promise.resolve(true);
  }

  rememberCurrent() {
    localStorage["userId"] = this.userId;
    localStorage["pwd"] = this.pwd;
  }

  extraData(json: any) {
    if (this.rememberMe) {
      this.rememberCurrent();
    }
    this.authToken = json.token;
    this.realName = json.realName;
    this.currentUserRoles = json.roles;
    this.showPopup = false;
  }

  getRequestOptions(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'}); //其实不表明 json 也可以, ng 默认好像是 json
    //let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    options.headers.append("Access-Control-Allow-Credentials", "true");
    options.headers.append("Access-Control-Allow-Origin", "*");
    return options;
  }

  dispResult(response: any, router: Router):Promise<boolean> {
    let returnData = response.json();
    if (returnData.errorCode) {
      console.error("登录错误，返回："+JSON.stringify(returnData))
      this.info = returnData.errorInfo;
      return Promise.resolve(false);
    }
    console.log("登录成功" + JSON.stringify(response.json()));
    this.extraData(returnData);
    router.navigate(["frame"]);
    Promise.resolve(true);
  }

  handleError(error: any) {
    this.info="用户名或密码错误！！！"
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
    console.info("err.msg=" + msg); // log to console instead
    return Promise.reject(false);
  }
}
