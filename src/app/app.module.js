"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var primeng_1 = require('primeng/primeng');
var stock_component_1 = require('./Stock/stock.component');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var num2chinese_pipe_1 = require('./base/num2chinese.pipe');
var login_user_admin_component_1 = require('./login/login-user-admin.component');
var Login_service_1 = require("./base/Login.service");
var frame_component_1 = require('./frame/frame.component');
var routing_module_1 = require("./routing.module");
var MenuBar_component_1 = require("./frame/MenuBar.component");
var primeng_5 = require('primeng/primeng');
var test1_component_1 = require('./test1/test1.component');
var test2_component_1 = require('./test2/test2.component');
var Menu_component_1 = require("./frame/Menu.component");
var menu_service_1 = require("./frame/menu.service");
var main_component_1 = require('./main/main.component');
var primeng_6 = require('primeng/primeng');
var global_config_service_1 = require("./base/global-config.service");
//import {CorsBrowserXhr} from "./base/cors-browser-xhr.service";
var AuthenticatedHttpService_1 = require("./base/AuthenticatedHttpService");
var cors_browser_xhr_service_1 = require("./base/cors-browser-xhr.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.ButtonModule,
                primeng_2.DataTableModule,
                primeng_2.SharedModule,
                primeng_3.MessagesModule,
                primeng_4.GrowlModule,
                routing_module_1.AppRoutingModule,
                primeng_5.MenuModule,
                primeng_5.PanelMenuModule,
                primeng_6.DialogModule
            ],
            declarations: [
                login_user_admin_component_1.LoginUserAdminComponent,
                stock_component_1.StockComponent,
                num2chinese_pipe_1.Num2chinesePipe,
                frame_component_1.FrameComponent,
                MenuBar_component_1.NavBar,
                test1_component_1.Test1Component,
                test2_component_1.Test2Component,
                Menu_component_1.MenuComponent,
                main_component_1.MainComponent,
            ],
            providers: [
                { provide: http_1.BrowserXhr, useClass: cors_browser_xhr_service_1.CorsBrowserXhr },
                // { provide: AuthenticatedHttpService, useClass:AuthenticatedHttpService},
                { provide: http_1.Http, useClass: AuthenticatedHttpService_1.AuthenticatedHttpService },
                Login_service_1.LoginService,
                menu_service_1.MenuService,
                global_config_service_1.GlobalConfig
            ],
            bootstrap: [frame_component_1.FrameComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
