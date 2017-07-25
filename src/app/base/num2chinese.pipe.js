"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Num2chinesePipe = (function () {
    function Num2chinesePipe() {
    }
    Num2chinesePipe.prototype.transform = function (value, args) {
        var reslut = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        return reslut[value] || value;
    };
    Num2chinesePipe = __decorate([
        core_1.Pipe({
            name: 'num2chinese'
        })
    ], Num2chinesePipe);
    return Num2chinesePipe;
}());
exports.Num2chinesePipe = Num2chinesePipe;
