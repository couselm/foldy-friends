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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddToCartButton: function() { return /* binding */ AddToCartButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BannerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BannerButton */ \"./src/components/BannerButton.tsx\");\n/* harmony import */ var _hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/UseAddToCart */ \"./src/hooks/UseAddToCart.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar AddToCartButton = function(param) {\n    var id = param.id, size = param.size;\n    _s();\n    var handleAddToCart = (0,_hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__.useAddToCart)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Add to Cart\"), 2), buttonText = _useState[0], setButtonText = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), svg = _useState1[0], setSvg = _useState1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BannerButton__WEBPACK_IMPORTED_MODULE_2__.ButtonSquareRed, {\n        label: buttonText,\n        d: \"M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z\",\n        onClick: function() {\n            handleAddToCart(id, size);\n            setButtonText(\"Added\");\n            setTimeout(function() {\n                return setButtonText(\"Add to Cart\");\n            }, 1000);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Product/AddToCartButton.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddToCartButton, \"ZkZbsbjTPJjo7BKpkngSjKDLOs8=\", false, function() {\n    return [\n        _hooks_UseAddToCart__WEBPACK_IMPORTED_MODULE_3__.useAddToCart\n    ];\n});\n_c = AddToCartButton;\nvar _c;\n$RefreshReg$(_c, \"AddToCartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L0FkZFRvQ2FydEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ2E7QUFDTTtBQUVqRCxJQUFNSSxrQkFBa0I7UUFBRUMsV0FBQUEsSUFBSUMsYUFBQUE7O0lBQ25DLElBQU1DLGtCQUFrQkosaUVBQVlBO0lBQ3BDLElBQW9DRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsb0JBQTlDTyxhQUE2QlAsY0FBakJRLGdCQUFpQlI7SUFDcEMsSUFBc0JBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBdkJTLE1BQWVULGVBQVZVLFNBQVVWO0lBRXRCLHFCQUNFLDhEQUFDQywwREFBZUE7UUFBQ1UsT0FBT0o7UUFBWUssR0FBRTtRQUF1VEMsU0FBUztZQUFRUCxnQkFBZ0JGLElBQUlDO1lBQU9HLGNBQWM7WUFBVU0sV0FBWTt1QkFBTU4sY0FBYztlQUFnQjtRQUFNOzs7Ozs7QUFFM2QsRUFBQztHQVJZTDs7UUFDYUQsNkRBQVlBOzs7S0FEekJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvQWRkVG9DYXJ0QnV0dG9uLnRzeD9jM2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvblNxdWFyZVJlZCB9IGZyb20gJy4uL0Jhbm5lckJ1dHRvbic7XG5pbXBvcnQgeyB1c2VBZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9ob29rcy9Vc2VBZGRUb0NhcnQnO1xuXG5leHBvcnQgY29uc3QgQWRkVG9DYXJ0QnV0dG9uID0gKHtpZCwgc2l6ZX06e2lkOm51bWJlciwgc2l6ZTpzdHJpbmd9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IHVzZUFkZFRvQ2FydCgpO1xuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiQWRkIHRvIENhcnRcIik7XG4gIGNvbnN0IFtzdmcsIHNldFN2Z10gPSB1c2VTdGF0ZTxzdHJpbmc+KClcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25TcXVhcmVSZWQgbGFiZWw9e2J1dHRvblRleHR9IGQ9XCJNMjEgNUwxOSAxMkg3LjM3NjcxTTIwIDE2SDhMNiAzSDNNMTYgNS41SDEzLjVNMTMuNSA1LjVIMTFNMTMuNSA1LjVWOE0xMy41IDUuNVYzTTkgMjBDOSAyMC41NTIzIDguNTUyMjggMjEgOCAyMUM3LjQ0NzcyIDIxIDcgMjAuNTUyMyA3IDIwQzcgMTkuNDQ3NyA3LjQ0NzcyIDE5IDggMTlDOC41NTIyOCAxOSA5IDE5LjQ0NzcgOSAyMFpNMjAgMjBDMjAgMjAuNTUyMyAxOS41NTIzIDIxIDE5IDIxQzE4LjQ0NzcgMjEgMTggMjAuNTUyMyAxOCAyMEMxOCAxOS40NDc3IDE4LjQ0NzcgMTkgMTkgMTlDMTkuNTUyMyAxOSAyMCAxOS40NDc3IDIwIDIwWlwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQWRkVG9DYXJ0KGlkLCBzaXplKTsgc2V0QnV0dG9uVGV4dChcIkFkZGVkXCIpOyBzZXRUaW1lb3V0KCAoKSA9PiBzZXRCdXR0b25UZXh0KFwiQWRkIHRvIENhcnRcIiksIDEwMDAgKX19IC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uU3F1YXJlUmVkIiwidXNlQWRkVG9DYXJ0IiwiQWRkVG9DYXJ0QnV0dG9uIiwiaWQiLCJzaXplIiwiaGFuZGxlQWRkVG9DYXJ0IiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJzdmciLCJzZXRTdmciLCJsYWJlbCIsImQiLCJvbkNsaWNrIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Product/AddToCartButton.tsx\n"));

/***/ })

});