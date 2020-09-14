import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public message:any="web15";
  public message01:any="web14";
  public messagarr:any=[];
  constructor() { }

  ngOnInit() {
  }

  keyt(k){
    if(k.keyCode == 13){

      if(this.message!=null){
        this.messagarr.push(this.message);
        console.log(this.messagarr);
      }
      this.message=null;
    }
  }

  jp(e){
    if(e.code=="KeyF"){
      console.log(this.message01);
    }
  }



}
