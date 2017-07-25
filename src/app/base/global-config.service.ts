import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Message} from "primeng/components/common/api";
@Injectable()
export class GlobalService {
  public baseUrl: string = "http://127.0.0.1:1274/";
  msgs: Message[] = [];
  constructor(public http:Http) {

  }
  showInfoMsg(msg:string,summary:string,severity:string) {
    this.msgs.push({severity:severity, summary:summary, detail:msg});
  }

  getJsonHeade():Headers{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', "application/json");
    return headers;
  }

  getOptionBySql(sql:string):Promise<Option[]>{
    let emp_query_url = this.baseUrl + "option/bySql/" + sql;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', "application/json");
    return this.http.get(emp_query_url, {headers: headers})
      .toPromise().then(response => response.json() as Option[]).catch(this.handleError);

  }

  handleError(error: any) {
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
    console.error("err.msg=" + msg); // log to console instead
    return Promise.reject(false);
  }

}


export  class  Option{
  label:string;
  value:any;
}
