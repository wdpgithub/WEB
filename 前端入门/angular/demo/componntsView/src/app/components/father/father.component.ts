import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  private msg: string="我是爸爸的msg";
  constructor() { }

  ngOnInit() {
  }

  run(){ 
    alert('这是父组件的 run 方法'); 
   }

}
