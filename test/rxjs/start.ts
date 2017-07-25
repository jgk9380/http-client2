/**
 * Created by jianggk on 2016/12/29.
 */
// 常见的链接操作符：concat、merge、combineLates等
//
//
// 投影操作：map、flatMap，flatMap需要重点介绍
//
//
// 过滤：filter、distinctUltilChanges、
//
//
// 操作符分类：Operators by Categories
//
//
// 错误处理：catch、retry、finally
//
//
// 减压：debounce、throttle、sample、pausable
//
//
// 减少：buffer、bufferWithCount、bufferWithTime



// 常用操作符的理解：
//
//
// Observable.range：发射一定数量值得序列。
//
//
// Observable.toArray: 在序列完成时将所有发射值转换为一个数组。
//
//
// Observable.flatMap: 将原始序列流中的元素转化为一个新的序列流，并将这个新的序列流merge到原来的序列中元素的位置。
//
//
// Observable.startWith: 它会设置Observable序列的第一个值
//
//
// Observable.combineLatest: 类似于promiseAll，在所有序列有结果后才会执行
//
//
// Observable.scan: 将序列中每次发射的值可以做聚合，与reduce类似，reduce会将整个序列的值聚合起来，在序列完成时发送一个最终值
//
//
// Observable.sample: 从持续的序列中取得一定的样品
//
//
// Observable.merge：将多个序列合并成一个，可以做OR来使用
//
//
// Observable.timestamp: 能够得到每个发射值的发射时的时间
//
//
// Observable.distinctUntilChanged(compare, selector): selector取出用来比较的key，compare用来比较两个key
//
//
// Observable.takeWhile() 当参数为false时停止发射数据
