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

/***/ "./src/components/ThemeSwitcher.tsx":
/*!******************************************!*\
  !*** ./src/components/ThemeSwitcher.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// components/ThemeSwitcher.js\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ThemeSwitcher = function() {\n    _s();\n    var _useTheme = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)(), theme = _useTheme.theme, setTheme = _useTheme.setTheme;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        localStorage.setItem(\"theme\", theme);\n        var localTheme = localStorage.getItem(\"theme\");\n        // add custom data-theme attribute to html tag required to update theme using DaisyUI\n        document.querySelector(\"html\").setAttribute(\"data-theme\", localTheme);\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dark-mode-toggle flex items-center justify-center p\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"swap swap-rotate \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    className: \"theme-controller\",\n                    onClick: function() {\n                        setTheme(theme === \"light\" ? \"dark\" : \"light\");\n                        console.log(theme);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"swap-on fill-base-content w-6 h-6\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    viewBox: \"0 0 24 24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 115\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"swap-off fill-base-content w-6 h-6\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    viewBox: \"0 0 24 24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 116\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorencouse/Documents/development/React/foldy-friends/src/components/ThemeSwitcher.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(ThemeSwitcher, \"GWyluvqPvJYGclNjYuclapM29yk=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = ThemeSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4QkFBOEI7Ozs7QUFDUztBQUNLO0FBRTVDLElBQU1FLGdCQUFnQjs7SUFDcEIsSUFBNEJGLFlBQUFBLHFEQUFRQSxJQUE1QkcsUUFBb0JILFVBQXBCRyxPQUFPQyxXQUFhSixVQUFiSTtJQUVmSCxnREFBU0EsQ0FBQztRQUNSSSxhQUFhQyxPQUFPLENBQUMsU0FBU0g7UUFDOUIsSUFBTUksYUFBYUYsYUFBYUcsT0FBTyxDQUFDO1FBQ3hDLHFGQUFxRjtRQUNyRkMsU0FBU0MsYUFBYSxDQUFDLFFBQVFDLFlBQVksQ0FBQyxjQUFjSjtJQUM1RCxHQUFHO1FBQUNKO0tBQU07SUFFVixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBTUQsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFDQ0MsTUFBSztvQkFDTEgsV0FBVTtvQkFDVkksU0FBUzt3QkFBUWIsU0FBU0QsVUFBVSxVQUFVLFNBQVM7d0JBQVVlLFFBQVFDLEdBQUcsQ0FBQ2hCO29CQUFPOzs7Ozs7OEJBRXBGLDhEQUFDaUI7b0JBQUlQLFdBQVU7b0JBQW9DUSxPQUFNO29CQUE2QkMsU0FBUTs4QkFBWSw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzhCQUNsSCw4REFBQ0o7b0JBQUlQLFdBQVU7b0JBQXFDUSxPQUFNO29CQUE2QkMsU0FBUTs4QkFBWSw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0g7R0EzQk10Qjs7UUFDd0JGLGlEQUFRQTs7O0tBRGhDRTtBQTZCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyLnRzeD83Yjg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci5qc1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xuICAgIGNvbnN0IGxvY2FsVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgIC8vIGFkZCBjdXN0b20gZGF0YS10aGVtZSBhdHRyaWJ1dGUgdG8gaHRtbCB0YWcgcmVxdWlyZWQgdG8gdXBkYXRlIHRoZW1lIHVzaW5nIERhaXN5VUlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIGxvY2FsVGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyay1tb2RlLXRvZ2dsZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwXCI+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2FwIHN3YXAtcm90YXRlIFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWNvbnRyb2xsZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFRoZW1lKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7IGNvbnNvbGUubG9nKHRoZW1lKSB9IH1cbiAgICAgIC8+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3dhcC1vbiBmaWxsLWJhc2UtY29udGVudCB3LTYgaC02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTUuNjQsMTdsLS43MS43MWExLDEsMCwwLDAsMCwxLjQxLDEsMSwwLDAsMCwxLjQxLDBsLjcxLS43MUExLDEsMCwwLDAsNS42NCwxN1pNNSwxMmExLDEsMCwwLDAtMS0xSDNhMSwxLDAsMCwwLDAsMkg0QTEsMSwwLDAsMCw1LDEyWm03LTdhMSwxLDAsMCwwLDEtMVYzYTEsMSwwLDAsMC0yLDBWNEExLDEsMCwwLDAsMTIsNVpNNS42NCw3LjA1YTEsMSwwLDAsMCwuNy4yOSwxLDEsMCwwLDAsLjcxLS4yOSwxLDEsMCwwLDAsMC0xLjQxbC0uNzEtLjcxQTEsMSwwLDAsMCw0LjkzLDYuMzRabTEyLC4yOWExLDEsMCwwLDAsLjctLjI5bC43MS0uNzFhMSwxLDAsMSwwLTEuNDEtMS40MUwxNyw1LjY0YTEsMSwwLDAsMCwwLDEuNDFBMSwxLDAsMCwwLDE3LjY2LDcuMzRaTTIxLDExSDIwYTEsMSwwLDAsMCwwLDJoMWExLDEsMCwwLDAsMC0yWm0tOSw4YTEsMSwwLDAsMC0xLDF2MWExLDEsMCwwLDAsMiwwVjIwQTEsMSwwLDAsMCwxMiwxOVpNMTguMzYsMTdBMSwxLDAsMCwwLDE3LDE4LjM2bC43MS43MWExLDEsMCwwLDAsMS40MSwwLDEsMSwwLDAsMCwwLTEuNDFaTTEyLDYuNUE1LjUsNS41LDAsMSwwLDE3LjUsMTIsNS41MSw1LjUxLDAsMCwwLDEyLDYuNVptMCw5QTMuNSwzLjUsMCwxLDEsMTUuNSwxMiwzLjUsMy41LDAsMCwxLDEyLDE1LjVaXCIvPjwvc3ZnPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN3YXAtb2ZmIGZpbGwtYmFzZS1jb250ZW50IHctNiBoLTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjEuNjQsMTNhMSwxLDAsMCwwLTEuMDUtLjE0LDguMDUsOC4wNSwwLDAsMS0zLjM3LjczQTguMTUsOC4xNSwwLDAsMSw5LjA4LDUuNDlhOC41OSw4LjU5LDAsMCwxLC4yNS0yQTEsMSwwLDAsMCw4LDIuMzYsMTAuMTQsMTAuMTQsMCwxLDAsMjIsMTQuMDUsMSwxLDAsMCwwLDIxLjY0LDEzWm0tOS41LDYuNjlBOC4xNCw4LjE0LDAsMCwxLDcuMDgsNS4yMnYuMjdBMTAuMTUsMTAuMTUsMCwwLDAsMTcuMjIsMTUuNjNhOS43OSw5Ljc5LDAsMCwwLDIuMS0uMjJBOC4xMSw4LjExLDAsMCwxLDEyLjE0LDE5LjczWlwiLz48L3N2Zz5cbiAgICAgIDwvbGFiZWw+XG5cblxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN3aXRjaGVyO1xuIl0sIm5hbWVzIjpbInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwic2V0VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYWxUaGVtZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ThemeSwitcher.tsx\n"));

/***/ })

});