/**
 * Created by jianggk on 2017/1/24.
 */
import {Injectable} from '@angular/core';
import {Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {LoginService} from "./Login.service";
import {SystemUser} from "./system-user";
import {isType} from "@angular/core/src/type";
import {Router} from "@angular/router";


@Injectable()
export class AuthenticatedHttpService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions,public ls:LoginService,private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log(`url=${JSON.stringify(url)}`);
    let auth = 'Bearer ' + this.ls.authToken
    if (url instanceof Request) {
      //TODO 这个部分应该可以删除了
      if (this.ls.authToken) {
        let urlRequest = <Request> url;
        console.log("已登录");
        console.log(`auth=${auth}`);
        if (!urlRequest.headers)
          urlRequest.headers = new Headers({'Content-Type': 'application/json'});
        urlRequest.headers.append('Accept', "application/json");
        urlRequest.headers.append('Authorization', auth);
      }
    } else {
      if (this.ls.authToken) {
        if (!options)
          options = {};
        if (!options.headers) {
          options.headers = new Headers({'Content-Type': 'application/json'});
          options.headers.append('Accept', "application/json");
        }
          options.headers.append('Authorization', auth);
      }
    }

    return super.request(url, options).catch((error: Response) => {
      console.log('----------error----------------');
      if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
        console.log('----------The authentication session expires or the user is not authorised. Force refresh of the current page.--------');
        //TODO 保存原页面地址，并重定向到登录页面
        //console.log("/ at:"+window.location.pathname  );
        //let toSave=window.location.href.substring(window.location.href.indexOf("/"),window.location.href.length);
        this.ls.info="没有权限，请重新登录后操作！！！";
        console.info("---this.ls.info="+this.ls.info);
        this.ls.showPopup=true;
       //window.location.href = window.location.href + '?' + new Date().getMilliseconds();
      }
      return Observable.throw(error);
    });
  }
}
