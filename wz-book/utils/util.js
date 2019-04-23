var api = require('../utils/api.js');
var app = getApp();

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n
}

/**
 * 封装微信的的request
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function(resolve, reject) {
    uni.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'X-Litemall-Token': uni.getStorageSync('token')
      },
      success: function(res) {

        if (res.statusCode == 200) {

          if (res.data.errno == 501) {
            // 清除登录相关内容
            try {
              uni.removeStorageSync('userInfo');
              uni.removeStorageSync('token');
            } catch (e) {
              // Do something when catch error
            }
            // 切换到登录页面
            uni.navigateTo({
              url: '/pages/auth/login/login'
            });
          } else {
            resolve(res.data);
          }
        } else {
          reject(res.errMsg);
        }

      },
      fail: function(err) {
        reject(err)
      }
    })
  });
}
function setData(obj){  
	//小程序端
    let that = this;  
    let keys = [];  
    let val,data;  
    Object.keys(obj).forEach(function(key){  
         keys = key.split('.');  
         val = obj[key];  
         data = that.$data;  
         keys.forEach(function(key2,index){  
             if(index+1 == keys.length){  
                 that.$set(data,key2,val);  
             }else{  
                 if(!data[key2]){  
                    that.$set(data,key2,{});  
                 }  
             }  
             data = data[key2];  
         })  
    });  
}  
function redirect(url) {

  //判断页面是否需要登录
  if (false) {
    uni.redirectTo({
      url: '/pages/auth/login/login'
    });
    return false;
  } else {
    uni.redirectTo({
      url: url
    });
  }
}

function showErrorToast(msg) {
  uni.showToast({
    title: msg,
    image: '/static/images/icon_error.png'
  })
}

module.exports = {
  formatTime,
  request,
  redirect,
  showErrorToast
};