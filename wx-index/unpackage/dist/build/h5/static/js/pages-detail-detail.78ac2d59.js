(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"006d":function(t,e,i){"use strict";i.r(e);var a=i("e78c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"06fd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){e=t.$handleEvent(e),t.toggleMask(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":""}},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,function(e,a){return i("v-uni-view",{key:a,staticClass:"share-item",on:{click:function(i){i=t.$handleEvent(i),t.shareToFriend(e.text)}}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}}),i("v-uni-text",[t._v(t._s(e.text))])],1)}))],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){e=t.$handleEvent(e),t.toggleMask(e)}}},[t._v("取消")])],1)],1):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"171a":function(t,e,i){"use strict";var a=i("cb3f"),n=i.n(a);n.a},"1fff":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":"true",circular:"true",interval:"3000",duration:"700"}},t._l(t.data.imgList,function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){e=t.$handleEvent(e),t.imageOnLoad("imgList",a)}}})],1)],1)})),i("v-uni-view",{staticClass:"scroll-view-wrapper"},[i("v-uni-scroll-view",{staticClass:"episode-panel",class:{Skeleton:!t.loaded},attrs:{"scroll-x":""}},t._l(t.data.episodeList,function(e,a){return i("v-uni-view",{key:a,class:{current:t.currentEpd===e},on:{click:function(e){e=t.$handleEvent(e),t.changeEpd(a)}}},[t._v(t._s(e))])}))],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title))]),i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title2))])],1),i("v-uni-text",{staticClass:"yticon icon-xia"})],1),i("v-uni-view",{staticClass:"actions"},[i("v-uni-text",{staticClass:"yticon icon-fenxiang2",on:{click:function(e){e=t.$handleEvent(e),t.share(e)}}}),i("v-uni-text",{staticClass:"yticon icon-Group-"}),i("v-uni-text",{staticClass:"yticon icon-shoucang",class:{active:t.data.favorite},on:{click:function(e){e=t.$handleEvent(e),t.favorite(e)}}})],1),i("v-uni-view",{staticClass:"guess"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("猜你喜欢")]),i("v-uni-view",{staticClass:"guess-list"},t._l(t.data.guessList,function(e,a){return i("v-uni-view",{key:a,staticClass:"guess-item"},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){e=t.$handleEvent(e),t.imageOnLoad("guessList",a)}}})],1),i("v-uni-text",{staticClass:"title clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title2))])],1)}))],1),i("v-uni-view",{staticClass:"evalution"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("评论")]),i("v-uni-view",{staticClass:"eva-list",class:{Skeleton:!t.loaded}},t._l(t.data.evaList,function(e,a){return i("v-uni-view",{key:a,staticClass:"eva-item"},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"eva-right"},[i("v-uni-text",[t._v(t._s(e.nickname))]),i("v-uni-text",[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"zan-box"},[i("v-uni-text",[t._v(t._s(e.zan))]),i("v-uni-text",{staticClass:"yticon icon-shoucang"})],1),i("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)],1)}))],1),i("share",{ref:"share",attrs:{contentHeight:580,shareList:t.shareList}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"44cb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a")),n=s(i("f0fd"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,a,n,s,o){try{var r=t[s](o),l=r.value}catch(c){return void i(c)}r.done?e(l):Promise.resolve(l).then(a,n)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var s=t.apply(e,i);function r(t){o(s,a,n,r,l,"next",t)}function l(t){o(s,a,n,r,l,"throw",t)}r(void 0)})}}var l={components:{share:n.default},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var t=r(a.default.mark(function t(){var e,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("detailData");case 2:return e=t.sent,t.next=5,this.$api.json("shareList");case 5:i=t.sent,this.loaded=!0,this.data=e,this.shareList=i,uni.setNavigationBarTitle({title:e.title});case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,i=e[t];this.$api.msg("切换到第".concat(i,"项")),this.currentEpd=i},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=l},"477d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.mask[data-v-6f99a105]{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;z-index:998;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.mask .bottom[data-v-6f99a105]{position:absolute;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%;color:#303133}.mask-content[data-v-6f99a105]{width:100%;height:%?580?%;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-6f99a105]{padding-bottom:%?90?%}.mask-content .view-content[data-v-6f99a105]{height:100%}.share-header[data-v-6f99a105]{height:%?110?%;font-size:%?30?%;color:font-color-dark;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-6f99a105]:after,.share-header[data-v-6f99a105]:before{content:"";width:%?240?%;heighg:0;border-top:1px solid #e4e7ed;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-6f99a105]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-6f99a105]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.share-item[data-v-6f99a105]{min-width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?180?%}.share-item uni-image[data-v-6f99a105]{width:%?80?%;height:%?80?%;margin-bottom:%?16?%}.share-item uni-text[data-v-6f99a105]{font-size:%?28?%;color:#606266}',""])},"6f48":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-1dd469bb]{background:#f8f8f8}.carousel[data-v-1dd469bb]{height:200px}.carousel .image-wrapper[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:100%;overflow:hidden}.carousel .image-wrapper uni-image[data-v-1dd469bb]{width:100%;height:100%}.scroll-view-wrapper[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding:%?20?% 0 %?20?% %?40?%;background:#fff}.episode-panel[data-v-1dd469bb]{white-space:nowrap;width:100%}.episode-panel uni-view[data-v-1dd469bb]{display:inline-block;margin-right:%?30?%;width:%?56?%;font-size:%?32?%;color:#606266}.episode-panel uni-view.current[data-v-1dd469bb]{color:#07a7a7}.info[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?10?% %?40?%;background:#fff}.info .title[data-v-1dd469bb]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:%?36?%;color:#303133}.info .title uni-text[data-v-1dd469bb]:last-child{font-size:%?24?%;color:#909399;margin-top:%?4?%}.info .title uni-text:last-child.Skeleton[data-v-1dd469bb]{width:%?220?%}.info .yticon[data-v-1dd469bb]{font-size:%?44?%;color:#606266;margin:0 %?10?% 0 %?30?%}.actions[data-v-1dd469bb]{padding:%?10?% %?28?%;background:#fff}.actions .yticon[data-v-1dd469bb]{font-size:%?46?%;color:#606266;padding:%?10?% %?12?%}.actions .yticon.active[data-v-1dd469bb]{color:#ff4443}.actions .yticon[data-v-1dd469bb]:nth-child(2){font-size:%?50?%}.section-tit[data-v-1dd469bb]{font-size:%?30?%;color:#303133;margin-bottom:%?30?%;text-align:center}.guess[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% %?40?% %?10?%;margin-top:%?16?%;background:#fff}.guess-list[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.guess-item[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;min-width:40%;margin-right:%?26?%;padding-bottom:%?40?%}.guess-item[data-v-1dd469bb]:nth-child(2n){margin-right:0}.guess-item uni-image[data-v-1dd469bb]{width:100%;height:%?200?%;border-radius:%?10?%}.guess-item uni-text[data-v-1dd469bb]{font-size:%?24?%;color:#909399}.guess-item uni-text.Skeleton[data-v-1dd469bb]{width:%?180?%}.guess-item uni-text.Skeleton.title[data-v-1dd469bb]{width:%?140?%}.guess-item uni-text.title[data-v-1dd469bb]{font-size:%?30?%;color:#303133;margin-top:%?16?%;margin-bottom:%?8?%}.evalution[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;margin-top:%?16?%;padding:%?40?% 0}.eva-item[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?40?%}.eva-item uni-image[data-v-1dd469bb]{width:%?60?%;height:%?60?%;border-radius:50px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?24?%}.eva-right[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?26?%;color:#909399;position:relative}.eva-right .zan-box[data-v-1dd469bb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:base-line;-webkit-align-items:base-line;-ms-flex-align:base-line;align-items:base-line;position:absolute;top:%?10?%;right:%?10?%}.eva-right .zan-box .yticon[data-v-1dd469bb]{margin-left:%?8?%}.eva-right .content[data-v-1dd469bb]{font-size:%?28?%;color:#333;padding-top:%?20?%}body.?%PAGE?%[data-v-1dd469bb]{background:#f8f8f8}',""])},7976:function(t,e,i){var a=i("6f48");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7a5ec9c9",a,!0,{sourceMap:!1,shadowMode:!1})},a34a:function(t,e,i){t.exports=i("bbdd")},afc0:function(t,e,i){"use strict";var a=i("7976"),n=i.n(a);n.a},bbdd:function(t,e,i){var a=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=i("96cf"),n)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(o){a.regeneratorRuntime=void 0}},c18d:function(t,e,i){"use strict";i.r(e);var a=i("1fff"),n=i("ff07");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("afc0");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1dd469bb",null);e["default"]=r.exports},cb3f:function(t,e,i){var a=i("477d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7b0de177",a,!0,{sourceMap:!1,shadowMode:!1})},e78c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout(function(){t.timer=0},500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout(function(){t.show=!1,t.hasTabbar&&uni.showTabBar()},200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}}):setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};e.default=a},f0fd:function(t,e,i){"use strict";i.r(e);var a=i("06fd"),n=i("006d");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("171a");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"6f99a105",null);e["default"]=r.exports},ff07:function(t,e,i){"use strict";i.r(e);var a=i("44cb"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}}]);