"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[productId]",{

/***/ "./src/components/Product/AddToCartButton.tsx":
/*!****************************************************!*\
  !*** ./src/components/Product/AddToCartButton.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddToCartButton: function() { return /* binding */ AddToCartButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BannerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BannerButton */ \"./src/components/BannerButton.tsx\");\n/* harmony import */ var _hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/UseAddToCart */ \"./src/hooks/UseAddToCart.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar AddToCartButton = function(param) {\n    var id = param.id, size = param.size;\n    _s();\n    var handleAddToCart = (0,_hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__.useAddToCart)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Add to Cart\"), 2), buttonText = _useState[0], setButtonText = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cartSvg), 2), svg = _useState1[0], setSvg = _useState1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BannerButton__WEBPACK_IMPORTED_MODULE_2__.ButtonSquareRed, {\n        label: buttonText,\n        d: svg,\n        onClick: function() {\n            handleAddToCart(id, size);\n            setButtonText(\"Added\");\n            setSvg(checkSvg);\n            setTimeout(function() {\n                setButtonText(\"Add to Cart\");\n                setSvg(cartSvg);\n            }, 1000);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Product/AddToCartButton.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddToCartButton, \"SYiGC8niKMv2W8ZtP1JnZ6Xjv/o=\", false, function() {\n    return [\n        _hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__.useAddToCart\n    ];\n});\n_c = AddToCartButton;\nvar _c;\n$RefreshReg$(_c, \"AddToCartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L0FkZFRvQ2FydEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ2E7QUFDTTtBQUVqRCxJQUFNSSxrQkFBa0I7UUFBRUMsV0FBQUEsSUFBSUMsYUFBQUE7O0lBQ25DLElBQU1DLGtCQUFrQkosaUVBQVlBO0lBRXBDLElBQW9DRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsb0JBQTlDTyxhQUE2QlAsY0FBakJRLGdCQUFpQlI7SUFDcEMsSUFBc0JBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBU1MsY0FBaENDLE1BQWVWLGVBQVZXLFNBQVVYO0lBRXRCLHFCQUNFLDhEQUFDQywwREFBZUE7UUFBQ1csT0FBT0w7UUFBWU0sR0FBR0g7UUFBS0ksU0FBUztZQUFRUixnQkFBZ0JGLElBQUlDO1lBQU9HLGNBQWM7WUFBVUcsT0FBT0k7WUFBV0MsV0FBWTtnQkFBUVIsY0FBYztnQkFBZ0JHLE9BQU9GO1lBQVMsR0FBRztRQUFNOzs7Ozs7QUFFak4sRUFBQztHQVRZTjs7UUFDYUQsNkRBQVlBOzs7S0FEekJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvQWRkVG9DYXJ0QnV0dG9uLnRzeD9jM2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvblNxdWFyZVJlZCB9IGZyb20gJy4uL0Jhbm5lckJ1dHRvbic7XG5pbXBvcnQgeyB1c2VBZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9ob29rcy9Vc2VBZGRUb0NhcnQnO1xuXG5leHBvcnQgY29uc3QgQWRkVG9DYXJ0QnV0dG9uID0gKHtpZCwgc2l6ZX06e2lkOm51bWJlciwgc2l6ZTpzdHJpbmd9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IHVzZUFkZFRvQ2FydCgpO1xuXG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJBZGQgdG8gQ2FydFwiKTtcbiAgY29uc3QgW3N2Zywgc2V0U3ZnXSA9IHVzZVN0YXRlPHN0cmluZz4oY2FydFN2ZylcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25TcXVhcmVSZWQgbGFiZWw9e2J1dHRvblRleHR9IGQ9e3N2Z30gb25DbGljaz17KCkgPT4geyBoYW5kbGVBZGRUb0NhcnQoaWQsIHNpemUpOyBzZXRCdXR0b25UZXh0KFwiQWRkZWRcIik7IHNldFN2ZyhjaGVja1N2Zyk7IHNldFRpbWVvdXQoICgpID0+ICB7c2V0QnV0dG9uVGV4dChcIkFkZCB0byBDYXJ0XCIpOyBzZXRTdmcoY2FydFN2ZykgfSwgMTAwMCApfX0gLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b25TcXVhcmVSZWQiLCJ1c2VBZGRUb0NhcnQiLCJBZGRUb0NhcnRCdXR0b24iLCJpZCIsInNpemUiLCJoYW5kbGVBZGRUb0NhcnQiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsImNhcnRTdmciLCJzdmciLCJzZXRTdmciLCJsYWJlbCIsImQiLCJvbkNsaWNrIiwiY2hlY2tTdmciLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Product/AddToCartButton.tsx\n"));

/***/ })

});