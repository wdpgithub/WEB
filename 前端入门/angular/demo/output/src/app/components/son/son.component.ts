import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Output() private outer = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendParent() {
    // alert('zhixing'); 
    this.outer.emit('msg from child')
  }

}
