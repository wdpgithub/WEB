import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI {

  feeds = [];
  error: string;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController, ) {
    super();

  }
  ionViewDidLoad() {
    this.getFeeds();
  }

  gotoQuestion() {
    var modal = this.modalCtrl.create(QuestionPage);
    modal.present();
  }
  gotochat() {
    this.selectTab(2);
  }
  selectTab(index: number) {
    var t = this.navCtrl.parent;
    t.select(index);
  }

  getFeeds() {
    var loading = super.showLoading(this.loadingCtrl, "加载中...");
    this.rest.getFeeds().subscribe(f => {
      this.feeds = f;
      loading.dismiss();
    }, error => this.error = <any>error);
  }

  gotoDetails(questionId){
    //this.navCtrl.push(DetailsPage, { id: questionId });
    this.navCtrl.push(DetailsPage, {
      id: questionId,
      name: "deatilnav"
    });
  }


}
