(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lastt/Result.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Result",
  props: ["selectedOptions"],
  components: {},
  data: function data() {
    return {
      result: {},
      inputName: ''
    };
  },
  methods: {
    downloadPDF: function downloadPDF(e) {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://light-assessment-api.temali.space/result/pdf', {
        selectedOptions: this.selectedOptions,
        name: this.inputName
      }, {
        responseType: "blob"
      }).then(function (res) {
        var pdf = new Blob([res.data], {
          type: "application/pdf"
        }); // For IE

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        } // Other browsers


        var fileURL = URL.createObjectURL(pdf);
        var link = document.createElement("a");
        link.href = fileURL;
        link.download = "Temali Hasil Light Assessment.pdf";
        link.click(); // For Firefox

        setTimeout(function () {
          window.URL.revokeObjectURL(fileURL);
        }, 100);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://light-assessment-api.temali.space/result', {
      selectedOptions: this.selectedOptions
    }).then(function (res) {
      _this.result = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.result-item[data-v-2497144d] {\r\n    text-align: left;\n}\n.result-item p[data-v-2497144d] {\r\n    white-space: pre-line;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "result" },
    [
      Object.keys(_vm.result).length > 0
        ? _c("div", [
            _c("h3", { staticClass: "text-center font-weight-bold mb-5" }, [
              _vm._v("PERAN-PERAN KUAT")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.result["very_fit"], function(item) {
                return _c(
                  "div",
                  { key: item.id, staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "result-item d-flex flex-column flex-md-row"
                      },
                      [
                        _c("div", { staticClass: "icon mr-3 mb-3" }, [
                          _c("img", {
                            staticClass: "role-icon mx-3",
                            attrs: {
                              src:
                                "/images/role_icons/" +
                                item.result.toUpperCase() +
                                ".png"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                            _vm._v(_vm._s(item.result))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(_vm._s(item.exp_pos))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(_vm._s(item.exp_neg))
                          ])
                        ])
                      ]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "text-center font-weight-bold my-5" }, [
              _vm._v("PERAN-PERAN LEMAH")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.result["very_not_fit"], function(item) {
                return _c(
                  "div",
                  { key: item.id, staticClass: "col-12 col-md-4 mb-3" },
                  [
                    _c("div", { staticClass: "details" }, [
                      _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                        _vm._v(_vm._s(item.result))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-justify" }, [
                        _vm._v(_vm._s(item.exp_neg))
                      ])
                    ])
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("p", { staticClass: "text-center lead mt-5" }, [
              _vm._v(
                "\n            Masukan nama kamu dan dapatkan laporan test ini dalam bentuk PDF:\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form-inline my-3",
                on: { submit: _vm.downloadPDF }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputName,
                      expression: "inputName"
                    }
                  ],
                  staticClass:
                    "form-control form-control-lg ml-auto mb-2 mr-sm-2",
                  attrs: {
                    type: "text",
                    placeholder: "Nama",
                    name: "name",
                    required: ""
                  },
                  domProps: { value: _vm.inputName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.inputName = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-lg btn-warning rounded-pill font-weight-bold py-4 mx-auto ml-sm-0 mb-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("DOWNLOAD PDF")]
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("router-link", { attrs: { to: "/lastt/test" } }, [
        _c(
          "a",
          { staticClass: "btn-lg btn-link text-center d-block mx-auto my-3" },
          [_vm._v("Test Lagi")]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/lastt/Result.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/lastt/Result.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=2497144d&scoped=true& */ "./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true&");
/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ "./resources/js/views/lastt/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& */ "./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2497144d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/lastt/Result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/lastt/Result.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/lastt/Result.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=style&index=0&id=2497144d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_id_2497144d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=template&id=2497144d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lastt/Result.vue?vue&type=template&id=2497144d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_2497144d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);