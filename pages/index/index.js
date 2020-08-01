//index.js
//获取应用实例
const app = getApp()
const weatherMap = {
  'sunny': 'sunny',
  'cloudy': 'cloudy',
  'overcast': 'overcast',
  'lighttrain': 'light rain',
  'heavyrain': 'heavy rain',
  'snow': 'snow'
}

Page({
  data: {
    nowTemp: '14',
    nowWeather: 'cloundy'
  },
  onLoad() {
    let that = this;
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: 'newyork'
      },
      success: function (res) {
        let result = res.data.result;
        let temp = result.now.temp;
        let weather = result.now.weather;
        console.log(temp, weather);
        that.setData({
          nowTemp: temp + '°',
          nowWeather: weatherMap[weather]
        });
      }
    })
  }
})
