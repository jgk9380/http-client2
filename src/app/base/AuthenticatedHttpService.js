"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jianggk on 2017/1/24.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var AuthenticatedHttpService = (function (_super) {
    __extends(AuthenticatedHttpService, _super);
    function AuthenticatedHttpService(backend, defaultOptions, ls) {
        _super.call(this, backend, defaultOptions);
        this.ls = ls;
    }
    AuthenticatedHttpService.prototype.request = function (url, options) {
        console.log("url=" + JSON.stringify(url));
        if (url instanceof http_1.Request) {
            if (this.ls.getLoginUser()) {
                var urlRequest = url;
                console.log("已登录");
                var auth = 'Basic ' + btoa(this.ls.getLoginUser().loginId + ':' + this.ls.getLoginUser().loginPwd);
                console.log("auth=" + auth);
                if (!urlRequest.headers)
                    urlRequest.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                urlRequest.headers.append('Accept', "application/json");
                urlRequest.headers.append('Authorization', auth);
            }
        }
        else {
            if (!options)
                options = {};
            if (this.ls.getLoginUser()) {
                var auth = 'Basic ' + btoa(this.ls.getLoginUser().loginId + ':' + this.ls.getLoginUser().loginPwd);
                if (!options.headers)
                    options.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                console.log("----in true  auth=" + auth);
                options.headers.append('Accept', "application/json");
                options.headers.append('Authorization', auth);
            }
        }
        return _super.prototype.request.call(this, url, options).catch(function (error) {
            console.log('----------error--------');
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('----------The authentication session expires or the user is not authorised. Force refresh of the current page.--------');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    AuthenticatedHttpService = __decorate([
        core_1.Injectable()
    ], AuthenticatedHttpService);
    return AuthenticatedHttpService;
}(http_1.Http));
exports.AuthenticatedHttpService = AuthenticatedHttpService;
