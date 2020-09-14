import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent implements OnInit {
  public myarr: any = [];
  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
    this.getD();
  }



  getD() {
    let url01 = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    var _that = this;
    console.log(this);
    this.http.get(url01).subscribe(function (data) {
      //                  订阅
      // console.log(JSON.parse(data._body));
      var newlist = JSON.parse(data["_body"]).result;
      _that.myarr = newlist;
      console.log(this);
      console.log(_that);
    }, function (err) {
      console.log("加载失败");
    });
  }
  page(k) {
    let url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" + k;
    //         http://www.phonegap100.com/---------服务器的域名地址
    //         appapi.php----------------  编译地址的文件名
    //         ?----------------------判断数据的哪个分类
    //         a=getPortalList ------------ 进入到我们的大分类
    //         & 并且进入到细分的小分类
    //         catid=20 =========================    => 更加细化的分类
    //         page =============================  => 数据库里面早已经将分页分好了，只需要改个数字即可
    var _that = this;
    this.http.get(url).subscribe(function (data) {
      var newlist = JSON.parse(data["_body"]).result;
      _that.myarr = newlist;
    }, function (err) {
      console.log("加载失败");
    });
  }

  //大数据：
  //所有数据都拿过来，
  //包含的数据有很多：
  //设备的名称、当前的wifi名称、用户的密码习惯、浏览器当前的隐私、当前的网速、访问时间、
  //用户名的形式以及密码的规范,url只是大数据的冰山一角
}
