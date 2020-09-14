import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'app-newscontant',
    templateUrl: './newscontant.component.html',
    styleUrls: ['./newscontant.component.css']
})
export class NewscontantComponent implements OnInit {
    message: any = "我是id";
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(data => {
            console.log(data.id);
            this.message = data.id;
            console.log(this.message);
        });
        // this.route.params.subscribe(function (data) {
        //   this.message = data.id;
        //   //console.log(this.id);
        // });
        //this.message = this.route.params.value.id;
    }

}
