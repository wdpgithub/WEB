//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  fn1:function(){
    console.log(1)
    wx.switchTab({
      url: '../artical/artical',
    })
  },
  //跳转到首页
  goSouYe:function(){
  
    /**
    wx.navigateTo({
      url: '../souye/souye',
    })
     */

    //跳转到带有tab切换的页面!!!!b
    wx.switchTab({
      url: '../artical/artical',
    })
  },
  //查看当前位置
  lookLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: "翡翠教育",
          address:"海淀区,小南庄路"
        })
      }
    })
  },
  //联系我们
  callMe:function(){
    wx.makePhoneCall({
      phoneNumber: '17600950805'
    })
  }
  
})
