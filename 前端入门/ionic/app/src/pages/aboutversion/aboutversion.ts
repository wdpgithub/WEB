import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
/**
 * Generated class for the AboutversionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutversion',
  templateUrl: 'aboutversion.html',
})
export class AboutversionPage {
  appName: string;
  packageName: string;
  versionCode: any;
  versionNumber: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private appVersion: AppVersion) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AboutversionPage');
    this.appVersion.getAppName().then(v=>{
      this.appName=v;
    });
    this.appVersion.getPackageName().then(v=>{
      this.packageName=v;
    });
    this.appVersion.getVersionCode().then(v=>{
      this.versionCode=v;
    });
    this.appVersion.getVersionNumber().then(v=>{
      this.versionNumber=v;
    });
  }

}
