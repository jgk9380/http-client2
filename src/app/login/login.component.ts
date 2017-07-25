import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {LoginService} from "../base/Login.service";
import {Router} from "@angular/router";
import {GlobalService} from "../base/global-config.service";
import {Employee} from "../base/employee";

@Component({
  selector: 'http-client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userId: string;
  public pwd: string;
  public rememberMe=true;
  public opened = true;
  info:string;

  constructor(public ls: LoginService, public http: Http, private router: Router, private gc: GlobalService) {
  }

  ngOnInit() {
        this.ls.initUserNameAndPwd();
        this.userId = this.ls.userId
        this.pwd = this.ls.pwd
  }
  close(){
    this.router.navigate([this.ls.preLoginUrl||"frame/test1"]);
  }


  queryPwd(){
    // TODO 查询密码
    alert("暂无此功能");
    //return Promise.resolve(false);
    console.info("无此功能");
  }



  login(): Promise<boolean> {
   this.ls.userId=this.userId;
   this.ls.pwd=this.pwd;
   //let headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let login_url = this.gc.baseUrl + 'login';
    let body = "username=" + this.userId + "&passwd=" + this.pwd;
    //let body=JSON.stringify({username:this.userId,passwd:this.pwd})
    //console.log("body=" + body);
    return this.http.post(login_url, body, options)
      .toPromise().then(response => {
          console.log("登录成功" + response.json());
          if (this.rememberMe) {
            this.ls.rememberMe(this.userId,this.pwd)
          }
          this.ls.authToken=response.json().token;
          console.log("authToken12="+this.ls.authToken);
          //TODO 更新当前登录用户信息
          this.router.navigate([this.ls.preLoginUrl || "frame"]);
          return true;
        }
      ).catch((x: any) => {
        console.error("登录失败");
        this.gc.handleError(x);
        this.info="用户名或密码错误";
        return false;
      });

  }
}
