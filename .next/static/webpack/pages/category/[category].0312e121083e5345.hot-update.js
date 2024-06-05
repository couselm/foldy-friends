"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category/[category]",{

/***/ "./src/pages/Category.tsx":
/*!********************************!*\
  !*** ./src/pages/Category.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductCategory_Collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCategory/Collections */ \"./src/components/ProductCategory/Collections.tsx\");\n/* harmony import */ var _context_ShopContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/ShopContext */ \"./src/context/ShopContext.tsx\");\n/* harmony import */ var _components_BannerButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BannerButton */ \"./src/components/BannerButton.tsx\");\n/* harmony import */ var _components_ProductCategory_ProductFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProductCategory/ProductFilters */ \"./src/components/ProductCategory/ProductFilters.tsx\");\n/* harmony import */ var _tools_ShuffleProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/ShuffleProducts */ \"./src/tools/ShuffleProducts.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Category = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var category = router.query.category;\n    var allProducts = (0,_context_ShopContext__WEBPACK_IMPORTED_MODULE_5__.useShopContext)().allProducts;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState[0], setFilteredProducts = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (category && allProducts.length > 0) {\n            var categoryProducts = (0,_tools_ShuffleProducts__WEBPACK_IMPORTED_MODULE_8__.filterProductCategory)(allProducts, category);\n            setFilteredProducts(categoryProducts);\n        }\n    }, [\n        category,\n        allProducts\n    ]);\n    if (!category) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lg:w-11/12 m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/Assets/banner_\".concat(category, \".png\"),\n                alt: \"\".concat(category, \" banner\"),\n                width: 1200,\n                height: \"auto\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sort-by flex flex-row flex-wrap justify-between items-center m-3 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-extrabold\",\n                                children: \"Showing 1-12\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            \" out of \",\n                            filteredProducts.length,\n                            \" products\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end items-end w-full md:w-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCategory_ProductFilters__WEBPACK_IMPORTED_MODULE_7__.PriceFilters, {\n                                products: filteredProducts,\n                                setFilteredProducts: setFilteredProducts\n                            }, void 0, false, {\n                                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCategory_ProductFilters__WEBPACK_IMPORTED_MODULE_7__.SortBy, {\n                                filteredProducts: filteredProducts,\n                                setFilteredProducts: setFilteredProducts\n                            }, void 0, false, {\n                                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCategory_Collections__WEBPACK_IMPORTED_MODULE_4__.Collections, {\n                header: category,\n                productData: filteredProducts\n            }, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BannerButton__WEBPACK_IMPORTED_MODULE_6__.ButtonRoundBlack, {\n                label: \"Load More\",\n                url: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/pages/Category.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Category, \"hurq+ZscMImjIzBTS4TSKotVVDE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _context_ShopContext__WEBPACK_IMPORTED_MODULE_5__.useShopContext\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ2F0ZWdvcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNUO0FBQ3lDO0FBQ2hCO0FBQ007QUFDc0I7QUFFbkI7QUFFakUsSUFBTVcsV0FBVzs7SUFDZixJQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsSUFBTSxXQUFlUyxPQUFPRSxLQUFLLENBQXpCRDtJQUNSLElBQU0sY0FBa0JQLG9FQUFjQSxHQUE5QlM7SUFDUixJQUFnRGQsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixFQUFFLE9BQW5FZSxtQkFBeUNmLGNBQXZCZ0Isc0JBQXVCaEI7SUFFaERDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsWUFBWUUsWUFBWUcsTUFBTSxHQUFHLEdBQUc7WUFDdEMsSUFBTUMsbUJBQW1CVCw2RUFBcUJBLENBQUNLLGFBQWFGO1lBQzVESSxvQkFBb0JFO1FBQ3RCO0lBQ0YsR0FBRztRQUFDTjtRQUFVRTtLQUFZO0lBRTFCLElBQUksQ0FBQ0YsVUFBVSxPQUFPO0lBRXRCLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLG1EQUFLQTtnQkFDSmtCLEtBQUssa0JBQTJCLE9BQVRULFVBQVM7Z0JBQ2hDVSxLQUFLLEdBQVksT0FBVFYsVUFBUztnQkFDakJXLE9BQU87Z0JBQ1BDLFFBQU87Z0JBQ1BDLFVBQVU7Ozs7OzswQkFFWiw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBRU4sV0FBVTs7MENBQ1gsOERBQUNPO2dDQUFLUCxXQUFVOzBDQUFpQjs7Ozs7OzRCQUFtQjs0QkFBU0wsaUJBQWlCRSxNQUFNOzRCQUFDOzs7Ozs7O2tDQUd2Riw4REFBQ0U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDYixvRkFBWUE7Z0NBQ1hxQixVQUFVYjtnQ0FDVkMscUJBQXFCQTs7Ozs7OzBDQUV2Qiw4REFBQ1IsOEVBQU1BO2dDQUFDTyxrQkFBa0JBO2dDQUFrQkMscUJBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyRSw4REFBQ1osZ0ZBQVdBO2dCQUFDeUIsUUFBUWpCO2dCQUFvQmtCLGFBQWFmOzs7Ozs7MEJBQ3RELDhEQUFDVCxzRUFBZ0JBO2dCQUFDeUIsT0FBTTtnQkFBWUMsS0FBSTs7Ozs7Ozs7Ozs7O0FBRzlDO0dBMUNNdEI7O1FBQ1dSLGtEQUFTQTtRQUVBRyxnRUFBY0E7OztLQUhsQ0s7QUE0Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NhdGVnb3J5LnRzeD83Y2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RDYXRlZ29yeS9Db2xsZWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VTaG9wQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvU2hvcENvbnRleHQnO1xuaW1wb3J0IHsgQnV0dG9uUm91bmRCbGFjayB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyQnV0dG9uJztcbmltcG9ydCB7IFByaWNlRmlsdGVycywgU29ydEJ5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2F0ZWdvcnkvUHJvZHVjdEZpbHRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdERhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBmaWx0ZXJQcm9kdWN0Q2F0ZWdvcnkgfSBmcm9tICcuLi90b29scy9TaHVmZmxlUHJvZHVjdHMnO1xuXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBhbGxQcm9kdWN0cyB9ID0gdXNlU2hvcENvbnRleHQoKTtcbiAgY29uc3QgW2ZpbHRlcmVkUHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdERhdGFbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5ICYmIGFsbFByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5UHJvZHVjdHMgPSBmaWx0ZXJQcm9kdWN0Q2F0ZWdvcnkoYWxsUHJvZHVjdHMsIGNhdGVnb3J5IGFzIHN0cmluZyk7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGNhdGVnb3J5UHJvZHVjdHMpO1xuICAgIH1cbiAgfSwgW2NhdGVnb3J5LCBhbGxQcm9kdWN0c10pO1xuXG4gIGlmICghY2F0ZWdvcnkpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTExLzEyIG0tYXV0b1wiPlxuICAgICAgPEltYWdlIFxuICAgICAgICBzcmM9e2AvQXNzZXRzL2Jhbm5lcl8ke2NhdGVnb3J5fS5wbmdgfSBcbiAgICAgICAgYWx0PXtgJHtjYXRlZ29yeX0gYmFubmVyYH0gXG4gICAgICAgIHdpZHRoPXsxMjAwfSAvLyBTZXQgYXBwcm9wcmlhdGUgd2lkdGggYW5kIGhlaWdodFxuICAgICAgICBoZWlnaHQ9XCJhdXRvXCIgXG4gICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1ieSBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG0tMyBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdteS01Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZFwiPlNob3dpbmcgMS0xMjwvc3Bhbj4gb3V0IG9mIHtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aH0gcHJvZHVjdHNcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWVuZCB3LWZ1bGwgbWQ6dy05Nic+XG4gICAgICAgICAgPFByaWNlRmlsdGVyc1xuICAgICAgICAgICAgcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdHN9XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzPXtzZXRGaWx0ZXJlZFByb2R1Y3RzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNvcnRCeSBmaWx0ZXJlZFByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3RzfSBzZXRGaWx0ZXJlZFByb2R1Y3RzPXtzZXRGaWx0ZXJlZFByb2R1Y3RzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q29sbGVjdGlvbnMgaGVhZGVyPXtjYXRlZ29yeSBhcyBzdHJpbmd9IHByb2R1Y3REYXRhPXtmaWx0ZXJlZFByb2R1Y3RzfSAvPlxuICAgICAgPEJ1dHRvblJvdW5kQmxhY2sgbGFiZWw9XCJMb2FkIE1vcmVcIiB1cmw9XCJcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkNvbGxlY3Rpb25zIiwidXNlU2hvcENvbnRleHQiLCJCdXR0b25Sb3VuZEJsYWNrIiwiUHJpY2VGaWx0ZXJzIiwiU29ydEJ5IiwiZmlsdGVyUHJvZHVjdENhdGVnb3J5IiwiQ2F0ZWdvcnkiLCJyb3V0ZXIiLCJjYXRlZ29yeSIsInF1ZXJ5IiwiYWxsUHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImxlbmd0aCIsImNhdGVnb3J5UHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwicCIsInNwYW4iLCJwcm9kdWN0cyIsImhlYWRlciIsInByb2R1Y3REYXRhIiwibGFiZWwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Category.tsx\n"));

/***/ })

});