import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {GlobalService} from "../../../../base/global-config.service";


@Component({
  selector: 'http-client-login-user-admin',
  templateUrl: 'login-user-admin.component.html',
  styleUrls: ['login-user-admin.component.css']
})
export class LoginUserAdminComponent implements OnInit {
  loginUsers: any[];

  constructor(private  http: Http, private  gc: GlobalService) {
  }

  ngOnInit() {
    let user_url = this.gc.RestBaseUrl + "users/";
    return this.http.get(user_url, {headers: this.gc.getJsonHeade()})
      .toPromise().then(response => {
        this.loginUsers = response.json() as any[];
        return response.json() as any[];
      }).catch(this.gc.handleError)
  }

}
