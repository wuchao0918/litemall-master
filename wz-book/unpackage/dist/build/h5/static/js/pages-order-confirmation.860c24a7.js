(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirmation"],{4282:function(i,e,t){"use strict";t.r(e);var s=t("763c"),a=t("f73b");for(var n in a)"default"!==n&&function(i){t.d(e,i,function(){return a[i]})}(n);t("7dc1");var d=t("2877"),o=Object(d["a"])(a["default"],s["a"],s["b"],!1,null,"178dd240",null);e["default"]=o.exports},7014:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0}},onShow:function(){var i=this;uni.getStorage({key:"buylist",success:function(e){i.buylist=e.data,i.goodsPrice=0;for(var t=i.buylist.length,s=0;s<t;s++)i.goodsPrice=i.goodsPrice+i.buylist[s].number*i.buylist[s].price;i.deduction=i.int/100,i.sumPrice=i.goodsPrice-i.deduction+i.freight,i.sumPrice=i.sumPrice.toFixed(2),i.goodsPrice=i.goodsPrice.toFixed(2),i.freight=i.freight.toFixed(2),i.deduction=i.deduction.toFixed(2)}})},onHide:function(){this.clearOrder()},onBackPress:function(){this.clearOrder()},methods:{clearOrder:function(){uni.removeStorage({key:"buylist",success:function(i){this.buylist=[],console.log("remove buylist success")}})},toPay:function(){for(var i=[],e=this.buylist.length,t=0;t<e;t++)i.push(this.buylist[t].id)}}};e.default=s},"763c":function(i,e,t){"use strict";var s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",[t("v-uni-view",{staticClass:"addr"},[t("v-uni-view",{staticClass:"icon"},[t("v-uni-image",{attrs:{src:"../../static/img/addricon.png",mode:""}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"tel-name"},[t("v-uni-view",{staticClass:"name"},[i._v("小王子")]),t("v-uni-view",{staticClass:"tel"},[i._v("188****1688")])],1),t("v-uni-view",{staticClass:"addres"},[i._v("广东省广州市越秀区沙河大街1024-8号")])],1)],1),t("v-uni-view",{staticClass:"buy-list"},i._l(i.buylist,function(e,s){return t("v-uni-view",{key:s,staticClass:"row"},[t("v-uni-view",{staticClass:"goods-info"},[t("v-uni-view",{staticClass:"img"},[t("v-uni-image",{attrs:{src:e.img}})],1),t("v-uni-view",{staticClass:"info"},[t("v-uni-view",{staticClass:"title"},[i._v(i._s(e.name))]),t("v-uni-view",{staticClass:"spec"},[i._v("选择"+i._s(e.spec)+" 数量:"+i._s(e.number))]),t("v-uni-view",{staticClass:"price-number"},[t("v-uni-view",{staticClass:"price"},[i._v("￥"+i._s(e.price*e.number))]),t("v-uni-view",{staticClass:"number"})],1)],1)],1)],1)})),t("v-uni-view",{staticClass:"order"},[t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"left"},[i._v("积分 :")]),t("v-uni-view",{staticClass:"right"},[i._v("已扣除"+i._s(i.int)+"积分抵扣"+i._s(i.deduction)+"元")])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"left"},[i._v("备注 :")]),t("v-uni-view",{staticClass:"right"},[t("v-uni-input",{attrs:{placeholder:"选填,备注内容"},model:{value:i.note,callback:function(e){i.note=e},expression:"note"}})],1)],1)],1),t("v-uni-view",{staticClass:"detail"},[t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[i._v("商品金额")]),t("v-uni-view",{staticClass:"content"},[i._v("￥"+i._s(i.goodsPrice))])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[i._v("运费")]),t("v-uni-view",{staticClass:"content"},[i._v("￥+"+i._s(i.freight))])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[i._v("积分抵扣")]),t("v-uni-view",{staticClass:"content"},[i._v("￥-"+i._s(i.deduction))])],1)],1),t("v-uni-view",{staticClass:"blck"}),t("v-uni-view",{staticClass:"footer"},[t("v-uni-view",{staticClass:"settlement"},[t("v-uni-view",{staticClass:"sum"},[i._v("合计:"),t("v-uni-view",{staticClass:"money"},[i._v("￥"+i._s(i.sumPrice))])],1),t("v-uni-view",{staticClass:"btn",on:{click:function(e){e=i.$handleEvent(e),i.toPay(e)}}},[i._v("提交订单")])],1)],1)],1)},a=[];t.d(e,"a",function(){return s}),t.d(e,"b",function(){return a})},"7dc1":function(i,e,t){"use strict";var s=t("b0c6"),a=t.n(s);a.a},b0c6:function(i,e,t){var s=t("bd5f");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=t("4f06").default;a("60c75a08",s,!0,{sourceMap:!1,shadowMode:!1})},bd5f:function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.addr[data-v-178dd240]{width:86%;padding:%?20?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.addr .icon[data-v-178dd240]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.addr .icon uni-image[data-v-178dd240]{width:%?60?%;height:%?60?%}.addr .tel-name[data-v-178dd240]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%}.addr .tel-name .tel[data-v-178dd240]{margin-left:%?40?%}.addr .addres[data-v-178dd240]{width:100%;font-size:%?26?%;color:#999}.buy-list[data-v-178dd240]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.buy-list .row[data-v-178dd240]{margin:%?30?% 0}.buy-list .row .goods-info[data-v-178dd240]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.buy-list .row .goods-info .img[data-v-178dd240]{width:22vw;height:22vw;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?10?%}.buy-list .row .goods-info .img uni-image[data-v-178dd240]{width:22vw;height:22vw}.buy-list .row .goods-info .info[data-v-178dd240]{width:100%;height:22vw;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.buy-list .row .goods-info .info .title[data-v-178dd240]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.buy-list .row .goods-info .info .spec[data-v-178dd240]{font-size:%?22?%;background-color:#f3f3f3;color:#a7a7a7;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 %?10?%;border-radius:%?20?%;margin-bottom:20vw}.buy-list .row .goods-info .info .price-number[data-v-178dd240]{position:absolute;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;font-size:%?28?%;height:%?40?%}.buy-list .row .goods-info .info .price-number .price[data-v-178dd240]{color:#f06c7a}.buy-list .row .goods-info .info .price-number .number[data-v-178dd240]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order[data-v-178dd240]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.order .row[data-v-178dd240]{margin:%?20?% 0;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.order .row .left[data-v-178dd240]{font-size:%?28?%}.order .row .right[data-v-178dd240]{margin-left:%?40?%;font-size:%?26?%;color:#999}.order .row .right uni-input[data-v-178dd240]{font-size:%?26?%;color:#999}.blck[data-v-178dd240]{width:100%;height:%?100?%}.footer[data-v-178dd240]{width:92%;padding:0 4%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .settlement[data-v-178dd240]{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.footer .settlement .sum[data-v-178dd240]{width:50%;font-size:%?28?%;margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.footer .settlement .sum .money[data-v-178dd240]{font-weight:600}.footer .settlement .btn[data-v-178dd240]{padding:0 %?30?%;height:%?60?%;background-color:#f06c7a;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;border-radius:%?40?%}.detail[data-v-178dd240]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.detail .row[data-v-178dd240]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.detail .row .nominal[data-v-178dd240]{font-size:%?28?%}.detail .row .content[data-v-178dd240]{font-size:%?26?%;color:#f06c7a}',""])},f73b:function(i,e,t){"use strict";t.r(e);var s=t("7014"),a=t.n(s);for(var n in s)"default"!==n&&function(i){t.d(e,i,function(){return s[i]})}(n);e["default"]=a.a}}]);