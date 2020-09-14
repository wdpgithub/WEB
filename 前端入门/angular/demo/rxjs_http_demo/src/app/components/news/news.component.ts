import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from "@angular/http";


//使用rxjs
import { Observable } from "rxjs";
import 'rxjs/Rx';



@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    constructor(private http: Http, private jsonp: Jsonp) { }

    ngOnInit() {

        this.requestData();

        this.requestDataJsonp();
    }

    requestData() {


        // alert('请求数据');
        var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        this.http.get(url).map(res => res.json())  /*返回的数据转换成json*/
            .subscribe(data => {
                     console.log(data);
            }, function (err) {

                console.log(err);
            });
    }

    requestDataJsonp() {


        // alert('请求数据');
        var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
        this.jsonp.get(url).map(res => res.json())  /*返回的数据转换成json*/
            .subscribe(function (data) {

                console.log(data);


            }, function (err) {

                console.log(err);
            })
    }



}
