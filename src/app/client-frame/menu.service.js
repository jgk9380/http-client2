"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.nbiItems = []; //横菜单
        this.lastNbi = [];
        this.lastMenuItem = [];
        this.currentNbi = this.getLoginNbiItem();
        this.currentNbi.isSelected = true;
        this.nbiItems.push(this.currentNbi);
        this.nbiItems.push(this.getStockNbiItem());
        this.nbiItems.push(this.getReportNbiItem());
    }
    MenuService.prototype.getCurrentNavBarItem = function () {
        return this.nbiItems;
    };
    MenuService.prototype.expanded = function (mi) {
        mi.expanded = !mi.expanded;
    };
    MenuService.prototype.click = function (mi) {
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
        console.log("selected=" + mi.isSelected);
    };
    MenuService.prototype.clickBarItem = function (nbi) {
        console.log("click on navBar:" + nbi.title + "  links = " + nbi.link);
        if (this.currentNbi) {
            this.currentNbi.isSelected = false;
            this.lastNbi.push(this.currentNbi);
        }
        nbi.isSelected = true;
        this.currentNbi = nbi;
        this.router.navigate([nbi.link]);
    };
    MenuService.prototype.goBack = function () {
        if (this.currentNbi)
            this.currentNbi.isSelected = false;
        this.currentNbi = this.lastNbi.pop();
        this.currentNbi.isSelected = true;
        this.router.navigate([this.currentNbi.link]); //退回到上一个barItem；
    };
    MenuService.prototype.getLoginNbiItem = function () {
        var loginBarItem = new NavBarItem("系统管理", "/login");
        var items = [{
                label: '工号管理',
                expanded: true,
                items: [
                    { label: '员工管理', icon: 'fa-plus' },
                    { label: '密码管理', icon: 'fa-download' },
                    { label: '权限管理', icon: 'fa-download' }
                ]
            },
            {
                label: '报表管理',
                items: [
                    { label: '报表配置', icon: 'fa-refresh', disabled: true },
                    { label: '报表权限', icon: 'fa-repeat', disabled: true },
                    { label: 'New', icon: 'fa-plus', disabled: true },
                ]
            },
            {
                label: '指标管理', routerLink: "/test2",
                items: [
                    { label: '报表配置', icon: 'fa-refresh', disabled: true },
                    { label: '报表配置', icon: 'fa-refresh', disabled: true },
                ]
            },
        ];
        loginBarItem.childMenu = items;
        return loginBarItem;
    };
    MenuService.prototype.getStockNbiItem = function () {
        var stockBarItem = new NavBarItem("存量报表", "/stock");
        var items = [{
                //是不是要重新命名一个新的？
                label: 'File1',
                expanded: true,
                items: [
                    { label: 'New1', icon: 'fa-plus' },
                    { label: 'Open1', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit1',
                items: [
                    { label: 'Undo1', icon: 'fa-refresh', disabled: true },
                    { label: 'Redo1', icon: 'fa-repeat', disabled: true },
                    { label: 'New1', icon: 'fa-plus', disabled: true },
                ]
            },
            { label: 'save1', routerLink: "/test2" },
        ];
        stockBarItem.childMenu = items;
        return stockBarItem;
    };
    MenuService.prototype.getReportNbiItem = function () {
        var reportBarItem = new NavBarItem("存量任务", "/test1");
        var items = [{
                //是不是要重新命名一个新的？
                label: 'File11',
                expanded: true,
                items: [
                    { label: 'New11', icon: 'fa-plus' },
                    { label: 'Open11', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit11',
                items: [
                    { label: 'Undo11', icon: 'fa-refresh', disabled: true },
                    { label: 'Redo11', icon: 'fa-repeat', disabled: true },
                    { label: 'New11', icon: 'fa-plus', disabled: true },
                ]
            },
            { label: 'save11', routerLink: "/test2" },
        ];
        reportBarItem.childMenu = items;
        return reportBarItem;
    };
    MenuService = __decorate([
        core_1.Injectable()
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
var NavBarItem = (function () {
    function NavBarItem(title, link) {
        this.isSelected = false;
        this.title = title;
        this.link = link;
    }
    return NavBarItem;
}());
exports.NavBarItem = NavBarItem;
var MenuItem = (function () {
    function MenuItem() {
        this.isSelected = false;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
