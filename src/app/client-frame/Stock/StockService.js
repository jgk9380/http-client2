"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/toPromise');
var StockPromotionService = (function () {
    function StockPromotionService(http) {
        this.http = http;
        this.stockPromotionUrl = "http://127.0.0.1:1274/StockPromotion/byTele";
    }
    // 1、网址
    // 外网段地址：122.192.127.45:1275/promotion/
    // 内网段地址：10.34.56.78/promotion/
    // 计费网地址：130.34.22.178/promotion/
    //stockPromotionUrl: string = "http://127.0.0.1:8080/StockPromotion/byTele/";
    // getStockPromotion(tele:string) :Promise<Stock[]>{
    //   // return new Promise<Stock[]>(resolve =>
    //   //   setTimeout(resolve, 2000)) // delay 2 seconds
    //   //   .then(() => this.getCarsSmall());
    //   return Promise.resolve(stockPromotions);
    // }
    StockPromotionService.prototype.getStockPromotion = function (tele) {
        //let tempStockPromotionUrl:string = this.stockPromotionUrl + tele;
        var tempStockPromotionUrl = this.stockPromotionUrl + "/" + tele;
        console.info("url=" + tempStockPromotionUrl);
        return this.http.get(tempStockPromotionUrl)
            .toPromise()
            .then(function (response) {
            // console.log("res="+JSON.stringify(response));
            // console.log("res.json="+JSON.stringify(response.json()));
            // console.log("res.json.data="+response.json().data);
            return response.json();
        })
            .catch(this.handleError);
    };
    StockPromotionService.prototype.getFileConent = function () {
        return this.http.get("/1.txt")
            .toPromise()
            .then(function (response) {
            console.log("res=" + JSON.stringify(response));
            console.log("res.txt=" + (response.text()));
            // console.log("res.json.data="+response.json().data);
            return response.text();
        })
            .catch(this.handleError);
    };
    StockPromotionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        alert("程序错误:" + (error.message || error.toString()));
        return Promise.reject(error.message || error);
    };
    StockPromotionService = __decorate([
        core_1.Injectable()
    ], StockPromotionService);
    return StockPromotionService;
}());
exports.StockPromotionService = StockPromotionService;
