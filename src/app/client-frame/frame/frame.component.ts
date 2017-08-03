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

  get showLoginPopup(): boolean {
    return this.ls.showPopup;
  }

  set showLoginPopup(value: boolean) {
    this._showLoginPopup = value;
  }

  menuShow: boolean = true;
  adsShow: boolean = false;
  rememberMe: boolean = false;
  info: string;
  newPwd1: string;
  newPwd2: string;
  showEditPwdPopup = false;
  loginName: string;
  private _showLoginPopup:boolean

  constructor(public ls: LoginService, public http: Http, private router: Router, private gc: GlobalService) {
  }

  ngOnInit() {
  this.setLoginName();
  }

  setLoginName(){
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
    this.showEditPwdPopup = true;
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

  login(): Promise<boolean> {
    //this.ls.userId=this.userId;
    // this.ls.pwd=this.pwd;
    //let headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let login_url = this.gc.baseUrl + 'login';
    let body = "username=" + this.ls.userId + "&passwd=" + this.ls.pwd;
    //let body=JSON.stringify({username:this.userId,passwd:this.pwd})
    //console.log("body=" + body);
    return this.http.post(login_url, body, options)
      .toPromise().then(response => {
          console.log("登录成功" + response.json());
          if (this.ls.rememberMe) {
            this.ls.rememberCurrent();
          }
          this.ls.authToken=response.json().token;
          console.log("authToken12="+this.ls.authToken);
          //TODO 更新当前登录用户信息
          //this.router.navigate(["frame"]);
          this.ls.showPopup=false;
          this.setLoginName();
          return true;

        }
      ).catch((x: any) => {
        console.error("登录失败");
        this.gc.handleError(x);
        this.ls.info="用户名或密码错误";
        return false;
      });
  }

}
