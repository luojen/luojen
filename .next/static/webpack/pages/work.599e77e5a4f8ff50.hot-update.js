"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./src/app/components/Image.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Image.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Image; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Image(param) {\n    let { className, src, alt } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleImageLoad = ()=>{\n        console.log(\"image has loaded\");\n        setIsLoading(false);\n    };\n    const handleImageError = ()=>{\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(src);\n        console.log(className);\n        console.log(alt);\n    }, [\n        src,\n        className,\n        alt\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[350px] h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3\"\n        }, void 0, false, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Image.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: src,\n            className: className,\n            onLoad: handleImageLoad,\n            onError: handleImageError,\n            alt: alt\n        }, void 0, false, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Image.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Image, \"Yt82d/dvZsn5nYh5sqDQjv+rJ38=\");\n_c = Image;\nvar _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvSW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVEyQztBQVU1QixTQUFTRSxNQUFNLEtBQW1DO1FBQW5DLEVBQUVDLFNBQVMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQWMsR0FBbkM7O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTyxrQkFBa0I7UUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaSCxhQUFhO0lBQ2Y7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkJKLGFBQWE7SUFDZjtJQUVBUCxnREFBU0EsQ0FBQztRQUNSUyxRQUFRQyxHQUFHLENBQUNOO1FBQ1pLLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDWk0sUUFBUUMsR0FBRyxDQUFDTDtJQUNkLEdBQUc7UUFBQ0Q7UUFBS0Q7UUFBV0U7S0FBSTtJQUV4QixxQkFDRTtrQkFDS0MsMEJBQ0csOERBQUNNO1lBQUlULFdBQVk7Ozs7O2lDQUVqQiw4REFBQ1U7WUFBSVQsS0FBS0E7WUFBS0QsV0FBV0E7WUFBV1csUUFBUU47WUFBaUJPLFNBQVNKO1lBQWtCTixLQUFLQTs7Ozs7OztBQUkxRztHQTNCd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbWFnZS50c3g/ODg4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgICBtb3Rpb24sXG4gICAgdXNlU2Nyb2xsLFxuICAgIHVzZVNwcmluZyxcbiAgICB1c2VUcmFuc2Zvcm0sXG4gICAgTW90aW9uVmFsdWVcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSc7XG5cbnR5cGUgSW1hZ2VQcm9wcyA9IHtcbiAgICBzcmM/OiBzdHJpbmcsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLCBcbiAgICBhbHQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBjbGFzc05hbWUsIHNyYywgYWx0IH06IEltYWdlUHJvcHMpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UgaGFzIGxvYWRlZCcpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VFcnJvciA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3JjKTtcbiAgICBjb25zb2xlLmxvZyhjbGFzc05hbWUpO1xuICAgIGNvbnNvbGUubG9nKGFsdCk7XG4gIH0sIFtzcmMsIGNsYXNzTmFtZSwgYWx0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LVszNTBweF0gaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZCBtYi0zYH0vPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTG9hZD17aGFuZGxlSW1hZ2VMb2FkfSBvbkVycm9yPXtoYW5kbGVJbWFnZUVycm9yfSBhbHQ9e2FsdH0vPlxuICAgICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlSW1hZ2VMb2FkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUltYWdlRXJyb3IiLCJkaXYiLCJpbWciLCJvbkxvYWQiLCJvbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/Image.tsx\n"));

/***/ })

});