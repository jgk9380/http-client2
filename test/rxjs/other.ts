/**
 * Created by jianggk on 2016/12/29.
 */
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import {Headers} from "@angular/http";

  // 1. finally 的使用


import 'rxjs/add/operator/finally';
import {BehaviorSubject} from "rxjs";

this.http.get(
  "http://localhost:58186/api/products",
  { headers: new Headers({ "Accept": "application/json" })}
).finally(() => {
  console.log("finally"); //不管 success or error 最后都会跑这个
}).subscribe(response => {
  console.log("success");
}, response => {
  console.log("fail");
}, () => {
  console.log("success final");
});
//result :
//success -> success final -> finally
//fail -> finally



// 2. 错误处理 throw catch

this.http.get(
  "http://localhost:58186/api/products",
  {
    headers: new Headers({ "Accept": "application/json" })
  })
  .map(r => r.json())
  .catch((r) => {
    if ("1" == "1") {
      //do something ...
      return null; //catch 了在返回真确
    }
    else {
      return Observable.throw("error"); //catch 了继续返回错误
    }
  })
  .subscribe(
    r => console.log(r),
    r => { console.log("fail") }
  );


// 3. previous / current value

// 用 .pairwise()


let userSubject = new BehaviorSubject<string>("default value");
let user$ = userSubject.asObservable().pairwise();
user$.subscribe(([before, after]) => { console.log(before), console.log(after); });
userSubject.next("super");
userSubject.next("ttc");
//result :
//["default value","super"]
//["super","ttc"]
