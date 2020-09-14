import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
@Component({
  selector: 'app-jsonp-demo',
  templateUrl: './jsonp-demo.component.html',
  styleUrls: ['./jsonp-demo.component.css']
})
export class JsonpDemoComponent implements OnInit {
  public mylist: any;
  public mylistfeed: any;
  public errormessage: any = "对不起，您的数据加载错误!";

  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
    this.getjson();
  }

  getjson() {
    //跨域：
    //我的这台主机需要访问别的主机的数据，则会发生跨域;
    //第一个解决办法则是jsonp
    //jsonp只支持get请求，post不存在的！
    //因为get是获取,post是提交,一般情况提交到数据库内，直接在端口里修改即可;
    //jsonp需要在url的后缀加入  &callback=JSONP_CALLBACK

    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.jsonp.get(url).subscribe(
      data => {
        this.mylist = data._body.result;
       // console.log(this.mylist);
      }, err => {
        //console.log(this.errormessage);
      }
    );

  }

  // getfeeds() {
  //   var urlfeed = "https://imoocqa.gugujiankong.com/api/feeds/get";
  //   this.http.get(urlfeed).subscribe(
  //     data => {
  //       this.mylistfeed = JSON.parse(data['_body']);
  //       console.log(this.mylistfeed);
  //     } , error => this.errormessage = <any>error);
  // }

}
