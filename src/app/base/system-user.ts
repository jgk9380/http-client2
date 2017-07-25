import {Employee} from "./employee";
//系统登录用户
export interface SystemUser {
  loginId?:string;
  loginPwd?:string;
  loginDate?:Date;
  loginEmp?:Employee;
}
