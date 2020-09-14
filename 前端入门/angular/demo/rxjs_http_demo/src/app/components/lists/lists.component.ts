import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
//使用rxjs
import { Observable } from "rxjs";
import 'rxjs/Rx';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  public list: any = [];
  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
    this.getup();
  }

  getup() {
    var url = "https://imoocqa.gugujiankong.com/api/feeds/get";
    this.http.get(url).map(res => res.json())  /*返回的数据转换成json*/
      .subscribe(data => {
        console.log(JSON.parse(data));
        this.list = JSON.parse(data);
      }, err => {
        console.log(err);
      });
  }
}
