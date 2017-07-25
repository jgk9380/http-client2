import {Observable, Subject} from "rxjs";
/**
 * Created by jianggk on 2016/12/29.
 */

// BehaviorSubject 可以填入初始值
Observable.of<string>("123").subscribe(v => console.log(v));

// 我们通过 new Subject 来创建流. 也可以使用 new EventEmitter 或者 BehaviorSubject. 这些都继承了 Subject

 let text: Subject<number> = new Subject<number>();

  text.bufferCount(2) .subscribe(v => console.log(v)); //[v1,v2] 存够 count 了就发布

  text.bufferTime(2000).subscribe(v => console.log(v)); //[v1,v2,...]把 2 秒内的所有 next value 放进来
