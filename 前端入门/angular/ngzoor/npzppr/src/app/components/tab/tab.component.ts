import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  arrty = [
    {
      "title": "tabone",
      "contant": "我是tab1的内容"
    },
    {
      "title": "tabtwo",
      "contant": "我是tab2的内容"
    }
  ]

  tabs = ['Tab 1', 'Tab 2'];

  constructor() { }

  ngOnInit() {
  }

  closeTab(tab: any): void {
    //this.tabs.splice(this.tabs.indexOf(tab), 1);
    this.arrty.splice(this.arrty.indexOf(tab),1)
  }

  // newTab(): void {
  //   // this.tabs.push('New Tab');
  //   this.arrty.push(
  //     {
  //       "title": "tabtextAdd",
  //       "contant": "我是add的内容"
  //     }
  //   )
  // }

}
