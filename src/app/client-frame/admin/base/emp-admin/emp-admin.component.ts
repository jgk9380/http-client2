import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

import {EmpService} from "./emp.service";
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {Message} from "primeng/components/common/api";
import {DataTable} from "primeng/components/datatable/datatable";
import {GlobalService, Option} from "../../../../base/global-config.service";
import {Employee} from "../../../../base/employee";

@Component({
  selector: 'http-client-emp-admin',
  templateUrl: './emp-admin.component.html',
  styleUrls: ['./emp-admin.component.css'],
  providers: [EmpService]
})
export class EmpAdminComponent implements OnInit {

  constructor(private es: EmpService, private  gc: GlobalService) {
  }

  emps: Employee[];
  currentPosition = 0;
  pageSize = 15;
  currentEmp: Employee;
  editMode: boolean = false;
  departOption: Option[];
  postionOption: Option[];


  ngOnInit() {
    this.es.getEmps().then(x => {
      this.emps = x;
    })
    this.initDepartOption();
    this.initPositionOption()
  };

  export(dt: DataTable) {
    dt.exportCSV();
  }

  initDepartOption() {
    this.gc.getOptionBySql("select id  value,name label from depart")
      .then(x => this.departOption = x)
      .catch(x => this.gc.handleError(x));
  }

  initPositionOption() {
    this.gc.getOptionBySql("select id  value,value label from code_deposit where type_name='gwlx'")
      .then(x => this.postionOption = x)
      .catch(x => this.gc.handleError(x));
  }

  getPositionName(posiId: number): string {
    if (!posiId)
      return null;
    // console.log("psid=" + JSON.stringify(posiId));
    if (!this.postionOption)
      return null;
    let options: Option[] = this.postionOption.filter(x => x.value == posiId)
    if (options)
      return options[0].label;
    else
      return "无";
  }

  style() {
    let styles = {
      // CSS property names
      'color': 'blue',  // italic
    };
    return styles;
  }

  onRowDblclick(event) {
     console.log("dblSelect:"+JSON.stringify(event.data));
     console.log("current="+JSON.stringify(this.currentEmp))
      this.editMode = true;
  }

  editSubmit() {
    this.editMode = false;
    //提交curretEmp
  }


  query(value: string) {
    if (!value) {
      this.gc.showInfoMsg("请输入查询条件,无条件则查询所有", "提醒", "warn");
      // return;
    }
    this.es.queryEmps(value).then(x => {
      this.emps = x;
      this.currentPosition = 0;
    })
  }

}
