"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var FrameComponent = (function () {
    function FrameComponent(ls, http, router, gc) {
        this.ls = ls;
        this.http = http;
        this.router = router;
        this.gc = gc;
        this.menuShow = true;
        this.adsShow = false;
        this.rememberMe = false;
    }
    FrameComponent.prototype.ngOnInit = function () {
        if (localStorage["userId"]) {
            this.userId = localStorage["userId"];
        }
        if (localStorage["pwd"]) {
            this.pwd = localStorage["pwd"];
        }
    };
    FrameComponent.prototype.menuToggle = function () {
        console.log("toggle menu");
        this.menuShow = !this.menuShow;
    };
    FrameComponent.prototype.login = function () {
        var _this = this;
        var auth = 'Basic ' + btoa(this.userId + ':' + this.pwd);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', "application/json");
        console.log("auth=" + auth);
        headers.append('Authorization', auth);
        //headers.append("Access-Control-Allow-Origin", "*");
        var login_url = this.gc.RestBaseUrl + 'users/currentUser';
        return this.http.get(login_url, { headers: headers })
            .toPromise().then(function (response) {
            console.log("res.result=" + response.json().result + "   bool= " + (response.json().result === 1) + "  result=" + response.json().result);
            if (response.json().authenticated) {
                console.info("登录成功");
                if (_this.rememberMe) {
                    localStorage["userId"] = _this.userId;
                    localStorage["pwd"] = _this.pwd;
                }
                _this.ls.setLoginUser({ loginId: _this.userId, loginPwd: _this.pwd });
                _this.infoResult = null;
                return true;
            }
            else {
                console.error("登录失败,没有取到登录用户信息，result：" + response.json().msg + " " + JSON.stringify(response.json()));
                _this.infoResult = "用户名或密码错";
                return false;
            }
        }).catch(function (x) {
            console.error("登录失败");
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var valid_url = _this.gc.RestBaseUrl + 'users/valid/' + _this.userId + "/" + _this.pwd;
            _this.http.get(valid_url, { headers: headers })
                .toPromise().then(function (response) {
                _this.infoResult = response.json().msg;
            }).catch(function (y) { return _this.handleError(y); });
            _this.handleError(x);
            return false;
        });
    };
    FrameComponent.prototype.queryPwd = function () {
        var _this = this;
        var auth = 'Basic ' + btoa(this.userId + ':' + this.pwd);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', "application/json");
        //headers.append("Access-Control-Allow-Origin", "*");
        var query_url = this.gc.RestBaseUrl + 'users/queryPwd/' + this.userId;
        return this.http.get(query_url, { headers: headers })
            .toPromise().then(function (response) {
            _this.infoResult = response.json().msg;
        }).catch(function (x) {
            _this.handleError(x);
        });
    };
    FrameComponent.prototype.getPrincipal = function () {
        var principal_url = this.gc.RestBaseUrl + "/users/currentUser";
        return this.http.get(principal_url)
            .toPromise()
            .then(function (response) {
            return response.json().principal.name;
        })
            .catch(this.handleError);
    };
    FrameComponent.prototype.handleError = function (error) {
        var msg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'unknown error';
        console.error("err.msg=" + msg); // log to console instead
        this.ls.setLoginUser(null);
        return Promise.reject(false);
    };
    FrameComponent = __decorate([
        core_1.Component({
            selector: 'hc-frame',
            templateUrl: 'frame.component.html',
            styleUrls: ['frame.component.css']
        })
    ], FrameComponent);
    return FrameComponent;
}());
exports.FrameComponent = FrameComponent;
