// pages/artical/artical.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    circular:true,
    interval:2000,
    imgUrls: ['../images/banner1.png', "../images/banner2.png", "../images/banner3.png", "../images/banner4.png"],
    items: [
      {
        "url": "../images/hj1.png",
      },
      {
        "url": "../images/hj2.png",
      },
      {
        "url": "../images/hj3.png",
      }
    ],
    coaches: [
      {
        "urll": "../images/jl1.png",
        "title":"王教练",
        "details": "瑜伽教学超过1000节课时。2001年考入四川岳池师范学院2002年广安新春文艺晚会获舞蹈队团体一等奖2004年获成都大学＊＊＊主持人奖2006年担任现上市公司成都黑蚁集团文化推广培训部主管2008年任成都本土艺术杂志《BEST100》主编2010年创业成立广告策划公司。"

      },
      {
        "urll": "../images/jl2.png",
        "title": "李教练",
        "details": "瑜伽教学超过1000节课时。2001年考入四川岳池师范学院2002年广安新春文艺晚会获舞蹈队团体一等奖2004年获成都大学＊＊＊主持人奖2006年担任现上市公司成都黑蚁集团文化推广培训部主管2008年任成都本土艺术杂志《BEST100》主编2010年创业成立广告策划公司。"
      },
      {
        "urll": "../images/jl3.png",
        "title": "张教练",
        "details": "瑜伽教学超过1000节课时。2001年考入四川岳池师范学院2002年广安新春文艺晚会获舞蹈队团体一等奖2004年获成都大学＊＊＊主持人奖2006年担任现上市公司成都黑蚁集团文化推广培训部主管2008年任成都本土艺术杂志《BEST100》主编2010年创业成立广告策划公司。"
      }
    ]
  },

  goDetails(){
    wx.navigateTo({
      url: '../yj/yj',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * data中是属性/变量,页面才能展示!!!
   * this.setData({属性:值})  动态的设置data中的数据!!!
   */
  onLoad: function (options) {
   
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})