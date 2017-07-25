/**
 * Created by jianggk on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import {GlobalService} from "../../../../base/global-config.service";
import {Employee} from "../../../../base/employee";



@Injectable()
export class EmpService {
  constructor(private http: Http, private  gc: GlobalService) {
  };

  getEmps(): Promise<Employee[]> {
    let emp_url = this.gc.baseUrl + "emps/";
    // let headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Accept', "application/json");
    return this.http.get(emp_url, {headers: this.gc.getJsonHeade()})
      .toPromise().then(response => response.json() as Employee[]).catch(this.gc.handleError)
  }

  queryEmps(where:string): Promise<Employee[]> {
    if(where) {
      let emp_query_url = this.gc.baseUrl + "emps/query/" + where;
      let headers = new Headers({'Content-Type': 'application/json'});
      headers.append('Accept', "application/json");
      return this.http.get(emp_query_url, {headers: headers})
        .toPromise().then(response => response.json() as Employee[]).catch(this.gc.handleError)
    }else{
      return this.getEmps();
    }
  }

}

