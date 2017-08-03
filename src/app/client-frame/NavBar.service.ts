import {Injectable} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {LoginService} from "../base/Login.service";


@Injectable()
export class NavBarService {
  nbiItems: NavBarItem[] = [];//横菜单
  lastNbi: NavBarItem[] = [];
  currentNbi: NavBarItem;

  constructor(private router: Router, private route: ActivatedRoute, private ls: LoginService) {
    //TODO根据展示
    this.currentNbi = new NavBarItem("工作计划", "frame/wp", null)
    this.currentNbi.isSelected = true;
    this.nbiItems.push(this.currentNbi);
    this.nbiItems.push(new NavBarItem("报表查询", "frame/test2", null));
    this.nbiItems.push(new NavBarItem("系统管理", "frame/sysAdmin", ['ROLE_SYSTEM_ADMIN']));
  }

  getCurrentNavBarItem(): NavBarItem[] {
    return this.nbiItems;
  }

  clickBarItem(nbi: NavBarItem) {
    console.log("click on navBar:" + nbi.title + "  links = " + nbi.link)
    if (this.currentNbi) {
      this.currentNbi.isSelected = false;
      this.lastNbi.push(this.currentNbi);
      //this.lastMenuItem. 清除
    }
    nbi.isSelected = true;
    this.currentNbi = nbi;
    this.router.navigate([nbi.link]);
  }
}


export class NavBarItem {
  title: string;
  link: string;
  isSelected: boolean = false;
  //用户具有其中一个权限就显示，为空表示无需权限。
  requireRroles: string[];

  constructor(title: string, link: string, roles: string[]) {
    //todo 角色
    this.title = title;
    this.link = link;
    this.requireRroles = roles;
  }

  isShow(roles: string[]): boolean {
    //console.log("roles="+roles+"  this.requireRroles="+this.requireRroles);
    if (!this.requireRroles)
      return true;
    for( let seq1 in roles) {
       for(let seq2 in this.requireRroles){
         if(roles[seq1]==this.requireRroles[seq2]) {
           return true;
         }
       }
    }
    return false;
  }
}

// export class MenuItem{
//   label: string;
//   icon?: string;
//   command?: (event?: any) => void;
//   url?: string;
//   routerLink?: any;
//   //eventEmitter?: EventEmitter<any>;
//   items?: MenuItem[];
//   expanded?: boolean;
//   disabled?: boolean;
//   isSelected?: boolean = false;
// }
