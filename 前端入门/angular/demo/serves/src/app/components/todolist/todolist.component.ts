import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
//public   公共的变量
//private  私有变量
  
  public username: any = null;
  public todolist: any = [];

  constructor() { }

  ngOnInit() {
  }

  getDate() {
    if (this.username != null) {
      const obj = {
        'name': this.username,
        'stat': 0
      };
      this.todolist.push(obj);
      console.log(this.todolist);
      this.username = null;
    }
  }

  deleate(i) {
    this.todolist.splice(i, 1);


  }
  changestat(i,k) {
    this.todolist[i].stat = k;
  }

}
