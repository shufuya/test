// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: options
    })
    console.log(this.data.list);
  },
})