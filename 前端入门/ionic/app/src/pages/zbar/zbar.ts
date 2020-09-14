import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';
/**
 * Generated class for the ZbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zbar',
  templateUrl: 'zbar.html',
})
export class ZbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private zbar: ZBar) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ZbarPage');
    this.scan();
  }

  scan() {
    let options: ZBarOptions = {
      flash: 'off',
      text_title: '扫码',
      drawSight: false
    };

    this.zbar.scan(options)
      .then(result => {
        alert("结果：" + result); // Scanned code
      })
      .catch(error => {
        alert(error); // Error message
      });
  }

}
