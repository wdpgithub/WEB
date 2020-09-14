import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css']
})
export class Demo01Component implements OnInit {

  public demo_msg01: any = null;
  private demo_msg02: any = [];


  constructor() { }

  ngOnInit() {
  }

  getD(key) {
    if (key.key == "Enter") {
      
      if (this.demo_msg01 != null) {
        // console.log(this.demo_msg01);
        let wn = {
          msg:this.demo_msg01,
          state:0
        }
        this.demo_msg02.push(wn);
        this.demo_msg01 = null;
      }
    }
  }

  del(i) {
    this.demo_msg02.splice(i, 1);
    //splice(从第几个索引值开始检索,删除几个)
  }
  change(i,k){
    this.demo_msg02[i].state=k;
  }

}



