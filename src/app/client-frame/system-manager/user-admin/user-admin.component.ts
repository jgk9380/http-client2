import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'http-client-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  luList:login_user[];
  constructor(public http:Http) { }

  ngOnInit() {

  }

}


class login_user{
  constructor(private name:string,private password:string,private emp_id:string,private isValid:boolean){

  }
}
