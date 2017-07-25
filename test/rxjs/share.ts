import {Subject} from "rxjs";
/**
 * Created by jianggk on 2016/12/29.
 */
// 1. by default, observable is not share.
let sub = new Subject();
let obs = sub.map(v => {
  console.log("ajax call",v);
  return v;
});
obs.subscribe(v => console.log("subscribe 1",v));
obs.subscribe(v => console.log("subscribe 2" ,v));
sub.next("value");


// ajax 发了 2 次. angular2 的 Http 也是 not share 哦.
// 所以当我们有多个 subscribe 的时候要想一想是否我们需要 share

let obs1 = sub.map(v => {
  console.log("ajax call");
  return v;
}).share();
// 调用一个 share 方法就可以了，或者是
// let obs = sub.map(v => {
//   console.log("ajax call");
// }).publish().refCount();

obs1.subscribe(v => console.log("subscribe 1",v));
obs1.subscribe(v => console.log("subscribe 2" ,v));
sub.next("share value");
// let obs = sub.map(v => {
//   console.log("ajax call");
// }).publish().refCount();
