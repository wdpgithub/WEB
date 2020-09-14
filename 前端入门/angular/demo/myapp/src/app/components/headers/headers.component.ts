import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  public message: any = "我的内容！！！";
  public bl: boolean;
  public h: any;
  public list: any = [];
  constructor() { }

  ngOnInit() {
    this.message = "我是新内容";
    this.bl = true;
    this.h = "<h2>这是一个 h2 用[innerHTML]来解析</h2>";
    this.list = [
      {
        mesg:"苹果",
        stat:1,
      },{
        mesg:"橘子",
        stat:1,
      },{
        mesg:"人类",
        stat:2,
      }
    ];
  }


}
