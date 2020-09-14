import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css']
})
export class Demo01Component implements OnInit {

  public demo_msg01: any = null;
  private demo_msg02: any = [];


  constructor(private storage: StorageService) { }

  ngOnInit() {
    var todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.demo_msg02 = todolist;
    }
  }

  getD(key) {
    if (key.key == "Enter") {

      if (this.demo_msg01 != null) {
        // console.log(this.demo_msg01);
        let wn = {
          msg: this.demo_msg01,
          state: 0
        }

        this.demo_msg02.push(wn);
        this.storage.setItem("todolist", this.demo_msg02);
        //                    ||       ||
        //                    ||       ||        
        //                    ||       ||             
        //                存储的名称 存储的内容
        this.demo_msg01 = null;
      }
    }
  }

  del(i) {
    this.demo_msg02.splice(i, 1);
    //splice(从第几个索引值开始检索,删除几个)

    this.storage.setItem("todolist", this.demo_msg02);
  }
  change(i, k) {
    this.demo_msg02[i].state = k;
    this.storage.setItem("todolist", this.demo_msg02);
  }

}





