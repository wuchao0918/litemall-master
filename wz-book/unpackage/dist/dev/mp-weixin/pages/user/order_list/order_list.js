(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/order_list/order_list"],{

/***/ "../../../mvn/litemall-master/wz-book/main.js?{\"page\":\"pages%2Fuser%2Forder_list%2Forder_list\"}":
/*!************************************************************************************************!*\
  !*** C:/mvn/litemall-master/wz-book/main.js?{"page":"pages%2Fuser%2Forder_list%2Forder_list"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../mvn/litemall-master/wz-book/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _order_list = _interopRequireDefault(__webpack_require__(/*! ./pages/user/order_list/order_list.vue */ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_order_list.default));

/***/ }),

/***/ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue":
/*!***************************************************************************!*\
  !*** C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order_list.vue?vue&type=template&id=4e4cda6c& */ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c&");
/* harmony import */ var _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order_list.vue?vue&type=script&lang=js& */ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order_list.vue?vue&type=style&index=0&lang=scss& */ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order_list.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c&":
/*!**********************************************************************************************************!*\
  !*** C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order_list.vue?vue&type=template&id=4e4cda6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_4e4cda6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =




















































{
  data: function data() {
    return {
      headerPosition: "fixed",
      headerTop: "0px",
      typeText: {
        unpaid: '等待付款',
        back: '等待商家发货',
        unreceived: '商家已发货',
        received: '等待用户评价',
        completed: '交易已完成',
        refunds: '商品退货处理中' },

      orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
      //订单列表 演示数据
      orderList: [
      [
      { type: "unpaid", ordersn: 0, goods_id: 0, img: '/static/img/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "unpaid", ordersn: 1, goods_id: 1, img: '/static/img/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "back", ordersn: 1, goods_id: 1, img: '/static/img/goods/p3.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "unreceived", ordersn: 1, goods_id: 1, img: '/static/img/goods/p4.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "received", ordersn: 1, goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "completed", ordersn: 1, goods_id: 1, img: '/static/img/goods/p6.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "refunds", ordersn: 1, goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 }],

      [
      { type: "unpaid", ordersn: 0, goods_id: 0, img: '/static/img/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 },
      { type: "unpaid", ordersn: 1, goods_id: 1, img: '/static/img/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 }],

      [
        //无
      ],
      [
      { type: "unreceived", ordersn: 1, goods_id: 1, img: '/static/img/goods/p4.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 }],

      [
      { type: "received", ordersn: 1, goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 }],

      [
      { type: "refunds", ordersn: 1, goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', payment: 168.00, freight: 12.00, spec: '规格:S码', numner: 1 }]],



      list: [],
      tabbarIndex: 0 };

  },
  onLoad: function onLoad(option) {
    //option为object类型，会序列化上个页面传递的参数
    console.log("option: " + JSON.stringify(option));
    var tbIndex = parseInt(option.tbIndex) + 1;
    this.list = this.orderList[tbIndex];
    this.tabbarIndex = tbIndex;
    //兼容H5下排序栏位置



  },
  onPageScroll: function onPageScroll(e) {
    return;
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
  },
  methods: {
    showType: function showType(tbIndex) {
      this.tabbarIndex = tbIndex;
      this.list = this.orderList[tbIndex];
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/mvn/litemall-master/wz-book/pages/user/order_list/order_list.vue?vue&type=template&id=4e4cda6c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: "topTabBar",
        style: { position: _vm.headerPosition, top: _vm.headerTop }
      },
      _vm._l(_vm.orderType, function(grid, tbIndex) {
        return _c(
          "view",
          {
            key: tbIndex,
            staticClass: "grid",
            attrs: { eventid: "03da78af-0-" + tbIndex },
            on: {
              tap: function($event) {
                _vm.showType(tbIndex)
              }
            }
          },
          [
            _c(
              "view",
              {
                staticClass: "text",
                class: [tbIndex == _vm.tabbarIndex ? "on" : ""]
              },
              [_vm._v(_vm._s(grid))]
            )
          ]
        )
      })
    ),
    _c("view", { staticClass: "order-list" }, [
      _c(
        "view",
        { staticClass: "list" },
        [
          _vm.list.length == 0
            ? _c("view", { staticClass: "onorder" }, [
                _c("image", {
                  attrs: { src: "../../../static/img/noorder.png" }
                }),
                _c("view", { staticClass: "text" }, [_vm._v("没有相关订单")])
              ])
            : _vm._e(),
          _vm._l(_vm.list, function(row, index) {
            return _c("view", { key: index, staticClass: "row" }, [
              _c("view", { staticClass: "type" }, [
                _vm._v(_vm._s(_vm.typeText[row.type]))
              ]),
              _c("view", { staticClass: "order-info" }, [
                _c("view", { staticClass: "left" }, [
                  _c("image", { attrs: { src: row.img } })
                ]),
                _c("view", { staticClass: "right" }, [
                  _c("view", { staticClass: "name" }, [
                    _vm._v(_vm._s(row.name))
                  ]),
                  _c("view", { staticClass: "spec" }, [
                    _vm._v(_vm._s(row.spec))
                  ]),
                  _c("view", { staticClass: "price-number" }, [
                    _vm._v("￥"),
                    _c("view", { staticClass: "price" }, [
                      _vm._v(_vm._s(row.price))
                    ]),
                    _vm._v("x"),
                    _c("view", { staticClass: "number" }, [
                      _vm._v(_vm._s(row.numner))
                    ])
                  ])
                ])
              ]),
              _c("view", { staticClass: "detail" }, [
                _c("view", { staticClass: "number" }, [
                  _vm._v("共" + _vm._s(row.numner) + "件商品")
                ]),
                _c("view", { staticClass: "sum" }, [
                  _vm._v("合计￥"),
                  _c("view", { staticClass: "price" }, [
                    _vm._v(_vm._s(row.payment))
                  ])
                ]),
                _c("view", { staticClass: "nominal" }, [
                  _vm._v("(含运费 ￥" + _vm._s(row.freight) + ")")
                ])
              ]),
              _c(
                "view",
                { staticClass: "btns" },
                [
                  row.type == "unpaid"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("取消订单")
                        ]),
                        _c("view", { staticClass: "pay" }, [_vm._v("付款")])
                      ])
                    : _vm._e(),
                  row.type == "back"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("提醒发货")
                        ])
                      ])
                    : _vm._e(),
                  row.type == "unreceived"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("查看物流")
                        ]),
                        _c("view", { staticClass: "pay" }, [
                          _vm._v("确认收货")
                        ]),
                        _c("view", { staticClass: "pay" }, [_vm._v("我要退货")])
                      ])
                    : _vm._e(),
                  row.type == "received"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("评价")
                        ]),
                        _c("view", { staticClass: "default" }, [
                          _vm._v("再次购买")
                        ])
                      ])
                    : _vm._e(),
                  row.type == "completed"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("再次购买")
                        ])
                      ])
                    : _vm._e(),
                  row.type == "refunds"
                    ? _c("block", [
                        _c("view", { staticClass: "default" }, [
                          _vm._v("查看进度")
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../mvn/litemall-master/wz-book/main.js?{\"page\":\"pages%2Fuser%2Forder_list%2Forder_list\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/order_list/order_list.js.map