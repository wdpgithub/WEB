import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';


@Component({
  selector: 'app-post-html',
  templateUrl: './post-html.component.html',
  styleUrls: ['./post-html.component.css']
})
export class PostHtmlComponent implements OnInit {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http, private jsonp: Jsonp, ) { }

  public list: any = [];
  public errormessage: string = null;

  ngOnInit() {
  }

  // 1.import { Http,Jsonp,Headers } from '@angular/http';   Headers 定义请求头的

  //2.private headers = new Headers({'Content-Type': 'application/json'});


  //3.post提交数据
  postData() {
    var url = "http://localhost:3000/dologin";
    this.http.post(url, JSON.stringify({ username: 'admin' }), { headers: this.headers })
      .subscribe(function (res) {
        console.log(res);
      });


  }

}
