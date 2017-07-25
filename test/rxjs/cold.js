"use strict";
var rxjs_1 = require("rxjs");
/**
 * Created by jianggk on 2016/12/29.
 */
// by default, observable is cold.
//
//   意思是说只有在 subscribe 出现了以后才会启动. ( 当第一个 subscribe 出现时, observable 就会立刻启动了哦 )
//
var sub = new rxjs_1.Subject();
var obs = sub.map(function (v) {
    console.log("ajax call");
});
sub.next("aaa");
obs.subscribe(function (v) { return console.log("subscribe 1"); });
//obs.subscribe(v => console.log("subscribe 2"));
