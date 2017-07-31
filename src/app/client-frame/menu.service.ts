import {Injectable} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";


@Injectable()
export class MenuService {
  nbiItems: NavBarItem[] = [];//横菜单
  lastNbi: NavBarItem[] = [];
  currentNbi: NavBarItem;//及左菜单
  lastMenuItem: MenuItem[] = [];
  currentMenuItem: MenuItem;

  constructor(private router: Router, private route:ActivatedRoute) {
    this.currentNbi = new NavBarItem("工作计划", "frame/wp")
    this.currentNbi.isSelected = true;
    this.nbiItems.push(this.currentNbi);
    this.nbiItems.push(new NavBarItem("报表查询", "frame/nofound"));
    this.nbiItems.push(new NavBarItem("系统管理", "frame/sysAdmin"));
  }

  getCurrentNavBarItem(): NavBarItem[] {
    return this.nbiItems;
  }

  expanded(mi: MenuItem) {
    mi.expanded = !mi.expanded;
  }

  click(mi: MenuItem) {
    if (this.currentMenuItem) {
      this.currentMenuItem.isSelected = false;
      this.lastMenuItem.push(this.currentMenuItem);
    }
    this.currentMenuItem = mi;
    mi.isSelected = true;

    if (mi.routerLink) {
      this.router.navigate([mi.routerLink]);
      console.log("menu:" + this.currentMenuItem.label + " isSelected and navigate  to link=" + this.currentMenuItem.routerLink);
    }
    else {
      console.log("menu:" + this.currentMenuItem.label + " isSelected and no  link=");
    }
    console.log("selected=" + mi.isSelected)
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

  goBack() {
    if (this.currentNbi)
      this.currentNbi.isSelected = false;
    this.currentNbi = this.lastNbi.pop();
    this.currentNbi.isSelected = true;
    this.router.navigate([this.currentNbi.link]);//退回到上一个barItem；
  }


}


export class NavBarItem {
  title: string;
  link: string;
  isSelected: boolean = false;
  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}

export class MenuItem {
  label: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  //eventEmitter?: EventEmitter<any>;
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
  isSelected?: boolean = false;
}
