import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController,ToastController,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { HeadfacePage  } from '../headface/headface';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI {
  headface: string = "assets/imgs/mr.jpg";
  nickname: string = "加载中...";
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl : ToastController,
    public viewCtrl: ViewController,
    private storage: Storage) {
    super();
  }

  ionViewDidLoad() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      // console.log('Your age is', val);
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...");
        this.rest.getUserInfo(val).subscribe(
          userinfo => {
            this.nickname = userinfo["UserNickName"];
            this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();

            loading.dismiss();

          }, error => this.errorMessage = <any>error);
      }
    });

  }

  updatenickname() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "修改中...");
        this.rest.updatenickname(val,this.nickname).subscribe(
          f => {
            if(f["Status"]=="OK"){
              loading.dismiss();
              super.showToast(this.toastCtrl,"昵称修改成功.");
            }else{
              loading.dismiss();
              // super.showToast(this.toastCtrl,"修改失败");
              //一般错误出现在后端了，以防万一。
              super.showToast(this.toastCtrl,f["StatusContent"]);
            }
          }, error => this.errorMessage = <any>error);
      }
    })
  }

  logout(){
    this.storage.remove("UserId");
    this.viewCtrl.dismiss();
  }
  
  gotoHeadface(){
    this.navCtrl.push(HeadfacePage);
  }

}
