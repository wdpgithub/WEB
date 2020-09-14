import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  @ViewChild('viewChild')     viewer;
  //  从html里拿出来的对象   在ts中运用的对象
  constructor() { }

  ngOnInit() {
    this.runmyself();
  }

  //接收子组件传递过来的数据 
  runParent(msg: string) {
    alert(msg);
  }

  runmyself() {
    this.viewer.son02run();
  }


}
