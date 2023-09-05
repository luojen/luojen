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

/***/ "./src/app/components/Tags.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Tags.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tags; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tag */ \"./src/app/components/Tag.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Tags(param) {\n    let { className, tags, selectedTag, setSelectedTag, selectedProject, setSelectedProject } = param;\n    _s();\n    const [tagsArray, setTagsArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveredTag, setHoveredTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (tags) {\n            setTagsArray(Array.from(tags));\n        }\n    }, [\n        tags\n    ]);\n    const handleTagHover = (tag)=>{\n        setHoveredTag(tag);\n    };\n    const handleTagLeave = (tag)=>{\n        setHoveredTag(null);\n    };\n    const handleTagClick = (tag)=>{\n        setSelectedTag(tag);\n        setHoveredTag(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row flex-wrap justify-start select-none pb-4 min-w-[235px] mr-16\",\n        children: [\n            tagsArray.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: index,\n                    name: tag,\n                    onHover: ()=>handleTagHover(tag),\n                    onLeave: ()=>handleTagLeave(tag),\n                    onClick: ()=>handleTagClick(tag),\n                    hovered: tag === hoveredTag,\n                    selected: tag === selectedTag\n                }, index, false, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Tags.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-px bg-black\"\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Tags.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Tags.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(Tags, \"lk+9gpiZIJ3ZZlc0broReQRhTbk=\");\n_c = Tags;\nvar _c;\n$RefreshReg$(_c, \"Tags\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVEyQztBQUVuQjtBQVdULFNBQVNHLEtBQUssS0FBZ0c7UUFBaEcsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFhLEdBQWhHOztJQUV6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUN2RCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQWdCO0lBRTVERCxnREFBU0EsQ0FBQztRQUNOLElBQUlLLE1BQU07WUFDTk0sYUFBYUcsTUFBTUMsSUFBSSxDQUFDVjtRQUM1QjtJQUNKLEdBQUc7UUFBQ0E7S0FBSztJQUVULE1BQU1XLGlCQUFpQixDQUFDQztRQUNwQkosY0FBY0k7SUFDbEI7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0Q7UUFDcEJKLGNBQWM7SUFDbEI7SUFFQSxNQUFNTSxpQkFBaUIsQ0FBQ0Y7UUFDcEJWLGVBQWVVO1FBQ2ZKLGNBQWM7SUFDbEI7SUFFQSxxQkFDSSw4REFBQ087UUFBSWhCLFdBQVc7O1lBQ1hNLFVBQVVXLEdBQUcsQ0FBQyxDQUFDSixLQUFLSyxzQkFDakIsOERBQUNwQiw0Q0FBR0E7b0JBRUFxQixJQUFJRDtvQkFDSkUsTUFBTVA7b0JBQ05RLFNBQVMsSUFBTVQsZUFBZUM7b0JBQzlCUyxTQUFTLElBQU1SLGVBQWVEO29CQUM5QlUsU0FBUyxJQUFNUixlQUFlRjtvQkFDOUJXLFNBQVNYLFFBQVFMO29CQUNqQmlCLFVBQVVaLFFBQVFYO21CQVBiZ0I7Ozs7OzBCQVViLDhEQUFDRjtnQkFBSWhCLFdBQVk7Ozs7Ozs7Ozs7OztBQUc3QjtHQXpDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYWdzLnRzeD83MWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIG1vdGlvbixcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlU3ByaW5nLFxuICAgIHVzZVRyYW5zZm9ybSxcbiAgICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSdcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuXG50eXBlIFRhZ3NQcm9wcyA9IHtcbiAgICB0YWdzOiBzdHJpbmdbXSxcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgc2VsZWN0ZWRUYWc6IHN0cmluZyxcbiAgICBzZXRTZWxlY3RlZFRhZzogKHRhZzogc3RyaW5nKSA9PiB2b2lkLCBcbiAgICBzZWxlY3RlZFByb2plY3Q6IFByb2plY3QgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIHNldFNlbGVjdGVkUHJvamVjdDogKHByb2plY3Q6IFByb2plY3QgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ3MoeyBjbGFzc05hbWUsIHRhZ3MsIHNlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZywgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfTogVGFnc1Byb3BzKSB7XG5cbiAgICBjb25zdCBbdGFnc0FycmF5LCBzZXRUYWdzQXJyYXldID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBbaG92ZXJlZFRhZywgc2V0SG92ZXJlZFRhZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgICBzZXRUYWdzQXJyYXkoQXJyYXkuZnJvbSh0YWdzKSk7XG4gICAgICAgIH0gXG4gICAgfSwgW3RhZ3NdKTtcblxuICAgIGNvbnN0IGhhbmRsZVRhZ0hvdmVyID0gKHRhZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEhvdmVyZWRUYWcodGFnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVUYWdMZWF2ZSA9ICh0YWc6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRIb3ZlcmVkVGFnKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVRhZ0NsaWNrID0gKHRhZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVGFnKHRhZyk7XG4gICAgICAgIHNldEhvdmVyZWRUYWcobnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IHNlbGVjdC1ub25lIHBiLTQgbWluLXctWzIzNXB4XSBtci0xNid9PlxuICAgICAgICAgICAge3RhZ3NBcnJheS5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGFnIFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGFnfSBcbiAgICAgICAgICAgICAgICAgICAgb25Ib3Zlcj17KCkgPT4gaGFuZGxlVGFnSG92ZXIodGFnKX1cbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZT17KCkgPT4gaGFuZGxlVGFnTGVhdmUodGFnKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFnQ2xpY2sodGFnKX0gXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyZWQ9e3RhZyA9PT0gaG92ZXJlZFRhZ31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RhZyA9PT0gc2VsZWN0ZWRUYWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC1weCBiZy1ibGFja2B9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWciLCJUYWdzIiwiY2xhc3NOYW1lIiwidGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJ0YWdzQXJyYXkiLCJzZXRUYWdzQXJyYXkiLCJob3ZlcmVkVGFnIiwic2V0SG92ZXJlZFRhZyIsIkFycmF5IiwiZnJvbSIsImhhbmRsZVRhZ0hvdmVyIiwidGFnIiwiaGFuZGxlVGFnTGVhdmUiLCJoYW5kbGVUYWdDbGljayIsImRpdiIsIm1hcCIsImluZGV4IiwiaWQiLCJuYW1lIiwib25Ib3ZlciIsIm9uTGVhdmUiLCJvbkNsaWNrIiwiaG92ZXJlZCIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/Tags.tsx\n"));

/***/ })

});