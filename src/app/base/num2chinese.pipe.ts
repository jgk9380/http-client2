import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num2chinese'
})
export class Num2chinesePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let reslut:string[]=["一","二","三","四","五","六","七","八","九","十"];
    return reslut[value]|| value;
  }
}
