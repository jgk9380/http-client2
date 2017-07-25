/**
 * Created by jianggk on 2017/2/17.
 */
export  class Report{
   sql:string;
   fields:ReportField[];
   params:Param[];
   isExport:boolean;
   chart:Chart;
   value:Map<string,any>[];
   query(){}
  exportCsv(){}
  child:Report;
  parent:Report;
  getChildren():Report{ return this.child;}
  childrenReportParam:{fieldName:string,paraName:string};//参数值的字段名，参数名
  //如果是子报表，指向上层报表，用于返回。
  getParent():Report{
    return this.parent;
  };

}

export class Param{
  name:string;
  label:string;
  type:string;//number,string.
  optionUrl:string;//优先
  optionSql:string;
  //getOptions():Map{  return null;  }
}

export class ReportField{
    header:string;
    fieldName:string;
    footer:string;//sum,count,formula,const
    rank:{red:number,blue:number};//是否安排名标红标红绿，负数表示倒排。
}

export class Chart{

}
