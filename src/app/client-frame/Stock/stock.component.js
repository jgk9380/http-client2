"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StockService_1 = require("./StockService");
var StockComponent = (function () {
    function StockComponent(stockPromotionService) {
        this.stockPromotionService = stockPromotionService;
        this.title = '用户活动查询';
        this.msgs = [];
    }
    StockComponent.prototype.ngOnInit = function () {
        console.log("init");
        //this.showInfoMsg("请输入手机号码，查询用户活动信息","信息","info") ;
        //this.stockPromotionService.getStockPromotion("15695159855").then(stockPromotions => this.stockPromotions = stockPromotions);
    };
    StockComponent.prototype.query = function (tele) {
        var _this = this;
        // let xxx= this.stockPromotionService.getFileConent();
        // console.log("xxx=",xxx);
        console.info("host:" + location.host);
        this.clearInfoMsg();
        this.stockPromotions = [];
        //console.log("in query() this.tele="+tele)
        if (!tele || tele.length != 11) {
            this.showInfoMsg("请输入正确的电话号码", "错误", "error");
            return;
        }
        this.stockPromotionService.getStockPromotion(tele).then(function (stockPromotions) {
            if (!stockPromotions || !stockPromotions[0]) {
                _this.showInfoMsg("没有查到活动信息，请确认手机号码", "提醒", "warn");
                return;
            }
            _this.stockPromotions = stockPromotions;
            //this.showInfoMsg("请输入手机号码，查询用户活动信息","信息","info") ;
        });
    };
    StockComponent.prototype.showInfoMsg = function (msg, summary, severity) {
        this.msgs.push({ severity: severity, summary: summary, detail: msg });
    };
    StockComponent.prototype.clearInfoMsg = function () {
        this.msgs = [];
    };
    StockComponent = __decorate([
        core_1.Component({
            moduleId: 'module.id',
            selector: 'hc-stock',
            templateUrl: 'stock.component.html',
            styleUrls: ['stock.component.css'],
            providers: [StockService_1.StockPromotionService],
        })
    ], StockComponent);
    return StockComponent;
}());
exports.StockComponent = StockComponent;
