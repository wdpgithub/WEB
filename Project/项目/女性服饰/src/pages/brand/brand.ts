import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var BMap;
/**
 * Generated class for the BrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandPage')
  }
  ionViewDidEnter() {
    /** 地图初始化  */
    let map = new BMap.Map('container', { enableMapClick: true })//创建地图
    // let point =new BMap.Point(119.80306,29.17765);//设置一个点
    // let marker =new BMap.Marker(point);//创建标注
    map.centerAndZoom(new BMap.Point(119.045426, 33.722514), 14);  // 初始化地图,设置中心点坐标和地图级别
    // let point = new BMap.Point(116.417, 39.909);
    // let opts = {
    //   width: 100,     // 信息窗口宽度
    //   height: 100,     // 信息窗口高度
    //   title: "LOVE服饰有限公司", // 信息窗口标题
    // }
    // var infoWindow = new BMap.InfoWindow("地址：中原区亚星西建材大世界北区022号"+"邮编：450003", opts);  // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, point);//初始开启信息窗口
    // map.centerAndZoom(point,18)//设置中心＆地图显示级别

    /**添加额外的组件 */
    let opts = { offset: new BMap.Size(260, 5) }
    map.addControl(new BMap.ScaleControl())//标尺
    map.addControl(new BMap.MapTypeControl(opts))//改变地图风格
    map.addControl(new BMap.NavigationControl())//地图平移缩放
    map.addControl(new BMap.PanoramaControl())//全景
    map.addControl(new BMap.LocalSearch())

    let pt = new BMap.Point(119.045426, 33.722514);
    let marker = new BMap.Marker(pt);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中


  }

}