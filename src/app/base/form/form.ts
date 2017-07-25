/**
 * Created by jianggk on 2017/2/17.
 */
export class Form{
  title:string;
  submitUrl:string;
  formField:FormField[];
  //提交按钮，取消按钮。
}
export class FormField{
  label:string;
  name:string;
  type:string;//number,string,date;
  validFormula:string;
  //isArray:boolean;暂不支持数组；
}
