import { Component } from '@angular/core';
import {StockPromotionService} from "./StockService";
import {StockPromotion} from "./StockPromotion";
import {Message} from "primeng/components/common/api";
@Component({
  moduleId: 'module.id',
  selector: 'hc-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockPromotionService],
})

export class StockComponent {
  title = '用户活动查询';
  msgs: Message[] = [];
  stockPromotions: StockPromotion[];

  constructor(private stockPromotionService: StockPromotionService) { }

  ngOnInit() {
    console.log("init");
    //this.showInfoMsg("请输入手机号码，查询用户活动信息","信息","info") ;
    //this.stockPromotionService.getStockPromotion("15695159855").then(stockPromotions => this.stockPromotions = stockPromotions);
  }

  query(tele:string) {
    // let xxx= this.stockPromotionService.getFileConent();
    // console.log("xxx=",xxx);
    console.info("host:"+location.host);
    this.clearInfoMsg();
    this.stockPromotions=[];
   //console.log("in query() this.tele="+tele)
    if(!tele||tele.length!=11){
      this.showInfoMsg("请输入正确的电话号码","错误","error") ;
      return;
    }
    this.stockPromotionService.getStockPromotion(tele).then(stockPromotions => {

      if(!stockPromotions||!stockPromotions[0]){
        this.showInfoMsg("没有查到活动信息，请确认手机号码","提醒","warn") ;
        return;
      }
      this.stockPromotions = stockPromotions;
      //this.showInfoMsg("请输入手机号码，查询用户活动信息","信息","info") ;
    });
  }

  showInfoMsg(msg:string,summary:string,severity:string) {
    this.msgs.push({severity:severity, summary:summary, detail:msg});
  }

  clearInfoMsg(){
   this.msgs=[];
  }

}

