import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  web14=[
    {'name':'王大鹏1','age':'22','address':"山洞"},
    {'name':'王大鹏2','age':'22','address':"山洞"},
    {'name':'王大鹏3','age':'22','address':"山洞"},
    {'name':'王大鹏4','age':'22','address':"山洞"},
    {'name':'王大鹏5','age':'22','address':"山洞"},
    {'name':'王大鹏6','age':'22','address':"山洞"},
    {'name':'王大鹏7','age':'22','address':"山洞"},
    {'name':'王大鹏8','age':'22','address':"山洞"},
    {'name':'王大鹏9','age':'22','address':"山洞"},
    {'name':'王大鹏0','age':'22','address':"山洞"},
    {'name':'王大鹏11','age':'22','address':"山洞"},
    {'name':'王大鹏12','age':'22','address':"山洞"},
    {'name':'王大鹏13','age':'22','address':"山洞"},
    {'name':'王大鹏14','age':'22','address':"山洞"},
    {'name':'王大鹏15','age':'22','address':"山洞"},
    {'name':'王大鹏1','age':'22','address':"山洞"},
    {'name':'王大鹏2','age':'22','address':"山洞"},
    {'name':'王大鹏3','age':'22','address':"山洞"},
    {'name':'王大鹏4','age':'22','address':"山洞"},
    {'name':'王大鹏5','age':'22','address':"山洞"},
    {'name':'王大鹏6','age':'22','address':"山洞"},
    {'name':'王大鹏7','age':'22','address':"山洞"},
    {'name':'王大鹏8','age':'22','address':"山洞"},
    {'name':'王大鹏9','age':'22','address':"山洞"},
    {'name':'王大鹏0','age':'22','address':"山洞"},
    {'name':'王大鹏11','age':'22','address':"山洞"},
    {'name':'王大鹏12','age':'22','address':"山洞"},
    {'name':'王大鹏13','age':'22','address':"山洞"},
    {'name':'王大鹏14','age':'22','address':"山洞"},
    {'name':'王大鹏15','age':'22','address':"山洞"},
    {'name':'王大鹏1','age':'22','address':"山洞"},
    {'name':'王大鹏2','age':'22','address':"山洞"},
    {'name':'王大鹏3','age':'22','address':"山洞"},
    {'name':'王大鹏4','age':'22','address':"山洞"},
    {'name':'王大鹏5','age':'22','address':"山洞"},
    {'name':'王大鹏6','age':'22','address':"山洞"},
    {'name':'王大鹏7','age':'22','address':"山洞"},
    {'name':'王大鹏8','age':'22','address':"山洞"},
    {'name':'王大鹏9','age':'22','address':"山洞"},
    {'name':'王大鹏0','age':'22','address':"山洞"},
    {'name':'王大鹏11','age':'22','address':"山洞"},
    {'name':'王大鹏12','age':'22','address':"山洞"},
    {'name':'王大鹏13','age':'22','address':"山洞"},
    {'name':'王大鹏14','age':'22','address':"山洞"},
    {'name':'王大鹏15','age':'22','address':"山洞"},
  ];
  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  operating = false;
  dataSet = [];
  indeterminate = false;


  constructor() { }

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.operating = true;
    setTimeout(_ => {
      this.dataSet.forEach(value => value.checked = false);
      this.refreshStatus();
      this.operating = false;
    }, 1000);
  }
  // ngOnInit() {
  // }
  ngOnInit(): void {
    for (let i = 0; i < 46; i++) {
      this.dataSet.push({
        name   : this.web14[i].name,
        age    : this.web14[i].age,
        address: this.web14[i].address,
        checked: false
      });
    }
  }

}
