import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {GlobalService} from "../../base/global-config.service";

@Component({
  selector: 'http-client-test2',
  templateUrl: 'test2.component.html',
  styleUrls: ['test2.component.css']
})
export class Test2Component implements OnInit {
name:string;
  constructor(public http: Http, private gc: GlobalService) {
  }

  ngOnInit() {

  }

  test1() {
    console.info("test1");
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let login_url = this.gc.baseUrl + 'testjwt1';
    //let body=JSON.stringify({username:this.userId,passwd:this.pwd})
    //console.log("body=" + body);
    return this.http.post(login_url, options)
      .toPromise().then(response => {
          console.log("testjwt1成功" + response.json());
          return true;
        }
      ).catch((x: any) => {
        console.error("testjwt1失败");
        this.gc.handleError(x);
        return false;
      });
  }

  test2() {
    console.info("test2");
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let login_url = this.gc.baseUrl + 'testjwt2';
    //let body=JSON.stringify({username:this.userId,passwd:this.pwd})
    //console.log("body=" + body);
    return this.http.post(login_url, options)
      .toPromise().then(response => {
          console.log("testjwt2成功" + response.json());
          return true;
        }
      ).catch((x: any) => {
        console.error("testjwt2失败");
        this.gc.handleError(x);
        return false;
      });
  }

}
