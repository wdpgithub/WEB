import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son01',
  templateUrl: './son01.component.html',
  styleUrls: ['./son01.component.css']
})
export class Son01Component implements OnInit {
  public message: string;
  constructor() { }

  ngOnInit() {
    this.message = "王宁";
  }

  wnRun() {

    alert('这是 son01 子组件的Run 方法');
  }

}
