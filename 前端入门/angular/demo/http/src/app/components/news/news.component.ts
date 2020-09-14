import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public arr: any = [];
  public sttext: string = "赵飞卖萌";
  constructor() { }

  ngOnInit() {
    this.arr = ["李正贵", "袁辉", "王威", "王旭", "张飞"]
  }

  getDate() {
    console.log(this.sttext);
  }
  changeDate() {
    this.sttext = "赵飞吃肉";
  }



}
