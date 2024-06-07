"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar/MiniCart.tsx":
/*!********************************************!*\
  !*** ./src/components/Navbar/MiniCart.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ShopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ShopContext */ \"./src/context/ShopContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Cart_CartQuantityButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cart/CartQuantityButtons */ \"./src/components/Cart/CartQuantityButtons.tsx\");\n/* harmony import */ var _MiniCartButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniCartButtons */ \"./src/components/Navbar/MiniCartButtons.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MiniCart = function(param) {\n    var showMiniCart = param.showMiniCart, setShowMiniCart = param.setShowMiniCart;\n    var CartTotal = function CartTotal() {\n        var total = 0;\n        cartItems.forEach(function(cartItem) {\n            var product = productMap[cartItem.id];\n            if (product) {\n                var _product_new_price;\n                var price = (_product_new_price = product.new_price) !== null && _product_new_price !== void 0 ? _product_new_price : product.old_price;\n                total += price * cartItem.quantity;\n            }\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cart-total mt-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold\",\n                        children: \"Total: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 12\n                    }, this),\n                    \"$\".concat(total.toFixed(2))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    };\n    _s();\n    var _useShopContext = (0,_context_ShopContext__WEBPACK_IMPORTED_MODULE_2__.useShopContext)(), allProducts = _useShopContext.allProducts, cartItems = _useShopContext.cartItems;\n    var productMap = allProducts.reduce(function(map, product) {\n        map[product.id] = product;\n        return map;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cart-container flex flex-col lg:m-auto mx-3 text-left items-end max-w-lg bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-[auto_2fr_auto] lg:gap-12 gap-5 w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full overflow-y-auto max-h-80\",\n                children: [\n                    \" \",\n                    cartItems.map(function(cartItem) {\n                        var product = productMap[cartItem.id];\n                        return product ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MiniCartItem, {\n                            product: product,\n                            cartItem: cartItem\n                        }, cartItem.id, false, {\n                            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this) : null;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartTotal, {}, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MiniCartButtons__WEBPACK_IMPORTED_MODULE_5__.MiniCartButtons, {\n                setShowMiniCart: setShowMiniCart\n            }, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(MiniCart, \"tah0rXPZlypurB/WaU3GzLbpfZ0=\", false, function() {\n    return [\n        _context_ShopContext__WEBPACK_IMPORTED_MODULE_2__.useShopContext\n    ];\n});\n_c = MiniCart;\nvar MiniCartItem = function(param) {\n    var product = param.product, cartItem = param.cartItem;\n    var _product_new_price, _ref;\n    var price = (_ref = (_product_new_price = product.new_price) !== null && _product_new_price !== void 0 ? _product_new_price : product.old_price) !== null && _ref !== void 0 ? _ref : 1000;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mini-cart-item\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-[auto_2fr_auto] lg:gap-12 gap-5 m-auto py-8 w-full border border-y-1 border-x-0 border-gray-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cart-item\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/Assets/product_\".concat(product.id, \".png\"),\n                            alt: product.name,\n                            className: \"max-h-24\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cart-item flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/product/\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"\".concat(product.name, \" - \"),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Size: \".concat(cartItem.size.toUpperCase())\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 39\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cart-item flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4\",\n                            children: \"$\".concat(price.toFixed(2))\n                        }, void 0, false, {\n                            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_CartQuantityButtons__WEBPACK_IMPORTED_MODULE_4__.CartQuantityButtons, {\n                            cartItem: cartItem\n                        }, void 0, false, {\n                            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/Navbar/MiniCart.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = MiniCartItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniCart);\nvar _c, _c1;\n$RefreshReg$(_c, \"MiniCart\");\n$RefreshReg$(_c1, \"MiniCartItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxNQUFNUSxPQUFPLENBQUM7Ozs7OztzQ0FDdkMsOERBQUNyQiwwRUFBbUJBOzRCQUFDUyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7TUF0Qk1nQjtBQXdCTiwrREFBZXZCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL01pbmlDYXJ0LnRzeD82N2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTaG9wQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU2hvcENvbnRleHQnO1xuaW1wb3J0IHsgQ2FydEl0ZW0sIFByb2R1Y3REYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IENhcnRRdWFudGl0eUJ1dHRvbnMgfSBmcm9tICcuLi9DYXJ0L0NhcnRRdWFudGl0eUJ1dHRvbnMnO1xuaW1wb3J0IHsgTWluaUNhcnRCdXR0b25zIH0gZnJvbSAnLi9NaW5pQ2FydEJ1dHRvbnMnO1xuXG5jb25zdCBNaW5pQ2FydCA9ICh7IHNob3dNaW5pQ2FydCwgc2V0U2hvd01pbmlDYXJ0IH06IHsgc2hvd01pbmlDYXJ0OiBib29sZWFuOyBzZXRTaG93TWluaUNhcnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjsgfSkgPT4ge1xuICBjb25zdCB7IGFsbFByb2R1Y3RzLCBjYXJ0SXRlbXMgfSA9IHVzZVNob3BDb250ZXh0KCk7XG5cbiAgY29uc3QgcHJvZHVjdE1hcCA9IGFsbFByb2R1Y3RzLnJlZHVjZSgobWFwLCBwcm9kdWN0KSA9PiB7XG4gICAgbWFwW3Byb2R1Y3QuaWRdID0gcHJvZHVjdDtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSBhcyB7IFtpZDogbnVtYmVyXTogUHJvZHVjdERhdGEgfSk7XG5cbiAgZnVuY3Rpb24gQ2FydFRvdGFsKCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICBjYXJ0SXRlbXMuZm9yRWFjaChjYXJ0SXRlbSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdE1hcFtjYXJ0SXRlbS5pZF07XG4gICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICBjb25zdCBwcmljZSA9IHByb2R1Y3QubmV3X3ByaWNlID8/IHByb2R1Y3Qub2xkX3ByaWNlO1xuICAgICAgICB0b3RhbCArPSBwcmljZSAqIGNhcnRJdGVtLnF1YW50aXR5O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC10b3RhbCBtdC00XCI+XG4gICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+VG90YWw6IDwvc3Bhbj57YCQke3RvdGFsLnRvRml4ZWQoMil9YH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtY29udGFpbmVyIGZsZXggZmxleC1jb2wgbGc6bS1hdXRvIG14LTMgdGV4dC1sZWZ0IGl0ZW1zLWVuZCBtYXgtdy1sZyBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bYXV0b18yZnJfYXV0b10gbGc6Z2FwLTEyIGdhcC01IHctZnVsbFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvIG1heC1oLTgwXCI+IHsvKiBBZGQgc2Nyb2xsYWJsZSBjb250YWluZXIgKi99XG4gICAgICAgIHtjYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0TWFwW2NhcnRJdGVtLmlkXTtcbiAgICAgICAgICByZXR1cm4gcHJvZHVjdCA/IChcbiAgICAgICAgICAgIDxNaW5pQ2FydEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtjYXJ0SXRlbS5pZH1cbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgY2FydEl0ZW09e2NhcnRJdGVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDYXJ0VG90YWwgLz5cbiAgICAgIDxNaW5pQ2FydEJ1dHRvbnMgc2V0U2hvd01pbmlDYXJ0PXtzZXRTaG93TWluaUNhcnR9IC8+IHsvKiBFbnN1cmUgYnV0dG9ucyBhcmUgd2l0aGluIHRoZSBtYWluIGNvbnRhaW5lciAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1pbmlDYXJ0SXRlbSA9ICh7IHByb2R1Y3QsIGNhcnRJdGVtIH06IHsgcHJvZHVjdDogUHJvZHVjdERhdGE7IGNhcnRJdGVtOiBDYXJ0SXRlbSB9KSA9PiB7XG4gIGNvbnN0IHByaWNlID0gcHJvZHVjdC5uZXdfcHJpY2UgPz8gcHJvZHVjdC5vbGRfcHJpY2UgPz8gMTAwMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWluaS1jYXJ0LWl0ZW0nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLVthdXRvXzJmcl9hdXRvXSBsZzpnYXAtMTIgZ2FwLTUgbS1hdXRvIHB5LTggdy1mdWxsIGJvcmRlciBib3JkZXIteS0xIGJvcmRlci14LTAgYm9yZGVyLWdyYXktMjAwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvQXNzZXRzL3Byb2R1Y3RfJHtwcm9kdWN0LmlkfS5wbmdgfSBhbHQ9e3Byb2R1Y3QubmFtZX0gY2xhc3NOYW1lPSdtYXgtaC0yNCcgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICA8cD57YCR7cHJvZHVjdC5uYW1lfSAtIGB9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+e2BTaXplOiAke2NhcnRJdGVtLnNpemUudG9VcHBlckNhc2UoKX1gfTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTQnPntgJCR7cHJpY2UudG9GaXhlZCgyKX1gfTwvcD5cbiAgICAgICAgICA8Q2FydFF1YW50aXR5QnV0dG9ucyBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW5pQ2FydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNob3BDb250ZXh0IiwiTGluayIsIkNhcnRRdWFudGl0eUJ1dHRvbnMiLCJNaW5pQ2FydEJ1dHRvbnMiLCJNaW5pQ2FydCIsInNob3dNaW5pQ2FydCIsInNldFNob3dNaW5pQ2FydCIsIkNhcnRUb3RhbCIsInRvdGFsIiwiY2FydEl0ZW1zIiwiZm9yRWFjaCIsImNhcnRJdGVtIiwicHJvZHVjdCIsInByb2R1Y3RNYXAiLCJpZCIsInByaWNlIiwibmV3X3ByaWNlIiwib2xkX3ByaWNlIiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInRvRml4ZWQiLCJhbGxQcm9kdWN0cyIsInJlZHVjZSIsIm1hcCIsIk1pbmlDYXJ0SXRlbSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwic2l6ZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/MiniCart.tsx\n"));

/***/ })

});