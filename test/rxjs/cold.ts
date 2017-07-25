import {Subject, Observable} from "rxjs";
/**
 * Created by jianggk on 2016/12/29.
 */
// by default, observable is cold.
//   意思是说只有在 subscribe 出现了以后才会启动. ( 当第一个 subscribe 出现时, observable 就会立刻启动了哦 )


let sub = new Subject();
let obs = sub.map(v => {
  console.log("ajax call", v);
  return v;
});
obs.subscribe(v => {
  console.log("subscribe 1", v);
  return v;
});
//obs.subscribe(v => console.log("subscribe 2"));
sub.next("aaa");


// ajax 不会触发.
//
//   如果我们希望它在没有 subscribe 的情况下触发的话, 可以这样写.

let sub1 = new Subject();
let obs1 = sub1.map(v => {
  console.log("ajax call pub");
}).publish();
obs1.connect();
sub1.next("aaa");
//至于什么情况下使用哪一种，我还没有实战，以后再说.

// 多一个例子解释:
let obs2 = Observable.create(observer => {
  console.log("observer run");
  observer.next(Date.now());
}).share();
obs2.subscribe(v => console.log("1st subscriber: " + v));
obs2.subscribe(v => console.log("2nd subscriber: " + v));
// cold, 所以当第一个 subcribe 出现后 observer 立刻运行 -> .next 更新了 value -> 第一个 subcribe callback 被调用 -> 整个过程结束 -> 然后第2个 subcribe 注册 ..
// 由于是 share 所以 observer 没有载被触发. 第2个 subscribe callback 没有被调用.


// 延后触发的做法 :


let obs3 = Observable.create(observer => {
  console.log("obs3 observer run");
  observer.next(Date.now());
}).publish();
obs3.subscribe(v => console.log("obs3 1st subscriber: " + v));
obs3.subscribe(v => console.log("obs3 2nd subscriber: " + v));
obs3.connect();


// 可以看到 .publish() 之后, subscribe 不再能激活 observer 了，而必须手动调用 .connect() 才能激活 observer.
//
//   这几个例子只是为了让你了解它们的玩法.
//
//   小结:
//
// observer default is cold and not share.
//
//   cold 表示只有 subscribe 出现 observer 才会被激活.
//
//   not share 表示每一个 subscribe 都会激活 observer 链.
