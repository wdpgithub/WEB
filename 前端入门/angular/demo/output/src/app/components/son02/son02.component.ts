import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son02',
  templateUrl: './son02.component.html',
  styleUrls: ['./son02.component.css']
})
export class Son02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  son02run() {
    console.log("赵飞看过来！")
  }

}
