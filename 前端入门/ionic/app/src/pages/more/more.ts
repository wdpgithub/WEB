import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { UserPage } from "../user/user";
import { UserdatalistPage } from "../userdatalist/userdatalist";
import { ScanPage } from "../scan/scan";
import { AboutversionPage } from '../aboutversion/aboutversion';
import { ZbarPage } from '../zbar/zbar';
import { SettingsProvider } from '../../providers/settings/settings';


/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {

  public notlogin: boolean = true;
  public logined: boolean = false;
  headface: string;
  userinfo: string[];
  selectedTheme: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    private settings: SettingsProvider,
    private storage: Storage) {
    super();
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MorePage');
    this.loadUserPage();
  }
  ionViewDidEnter() {
     
  }

  showmodel() {
    const modal = this.modalCtrl.create(LoginPage);

    //关闭后的回调
    //因为modal关闭的时候，不会再次触发父页面的ionViewDidEnter();
    
    modal.onDidDismiss(()=>{
      this.loadUserPage();
    })

    modal.present();
  }

 

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      // console.log('Your age is', val);
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...");
        this.rest.getUserInfo(val).subscribe(
          userinfo => {
            this.userinfo = userinfo;
            this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
            this.notlogin = false;
            this.logined = true;

            loading.dismiss();

          }
        );

        // this.notlogin = false;
        // this.logined = true;
        // alert("已登录");
      } else {
        this.notlogin = true;
        this.logined = false;
        // alert("未登录");
      }
    });

  }


  gotouserpage() {
    this.navCtrl.push(UserPage)
  }

  gotoDataList(type) {
    this.navCtrl.push(UserdatalistPage, { "dataType": type })
  }
  toggleChangeTheme(){
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    }
    else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

  //  /**
  //  * 跳转到扫描二维码的页面，加上 animate = false 的参数是为了
  //  * 相机能够在整个屏幕中显示，如果不加，相机就出不来。
  //  * animate 的参数默认值为 true
  //  * 
  //  * @memberof MorePage
  //  */
  gotoScanQRCode() {
    //this.navCtrl.push(ScanPage, null, { "animate": false });
    //this.navCtrl.push(ZbarPage);
    this.navCtrl.push(ScanPage);
  }

  gotoVersions(){
    this.navCtrl.push(AboutversionPage);
  }

}
