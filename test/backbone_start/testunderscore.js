/**
 * Created by jianggk on 2016/12/28.
 */
var _ = require('underscore');
_.each([1, 2, 3], function(x){console.log(x);});
// _.each({one: 1, two: 2, three: 3}, alert);


function  show(  s ) {
  console.log(s);
}

var x=_.map([1, 2, 3], function(num){ return num * 3;});
show(x);


var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
 show(flat);
