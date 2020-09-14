import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  //解决切换其他页面回去轮播图不动问题 
  constructor(public navCtrl: NavController) {
  }
  ionViewWillEnter() { this.slides.startAutoplay(); }
  ionViewWillLeave() { this.slides.stopAutoplay(); }
}
