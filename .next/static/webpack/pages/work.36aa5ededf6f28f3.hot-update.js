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

/***/ "./src/app/components/Preview.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Preview.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Preview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projects_downballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/downballot */ \"./src/app/projects/downballot.tsx\");\n/* harmony import */ var _projects_impart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/impart */ \"./src/app/projects/impart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Preview(param) {\n    let { className, projectData, selectedProject, setSelectedProject } = param;\n    var _projectData;\n    _s();\n    const [Project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _projectData, _projectData1;\n        if (((_projectData = projectData) === null || _projectData === void 0 ? void 0 : _projectData.id) == \"downballot\") {\n            setProject(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projects_downballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setSelectedProject: setSelectedProject,\n                selectedProject: selectedProject,\n                projectData: projectData\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Preview.tsx\",\n                lineNumber: 32,\n                columnNumber: 24\n            }, this));\n        } else if (((_projectData1 = projectData) === null || _projectData1 === void 0 ? void 0 : _projectData1.id) == \"impart\") {\n            setProject(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projects_impart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSelectedProject: setSelectedProject,\n                selectedProject: selectedProject,\n                projectData: projectData\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Preview.tsx\",\n                lineNumber: 34,\n                columnNumber: 24\n            }, this));\n        }\n    }, [\n        (_projectData = projectData) === null || _projectData === void 0 ? void 0 : _projectData.id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        className: \"\".concat(className, \" z-9\"),\n        style: {\n            fontFamily: \"NeueHaasGroteskTextPro\",\n            fontWeight: \"normal\",\n            fontStyle: \"normal\"\n        },\n        children: Project\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Preview.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Preview, \"EiDsFQuE21weMo0FWIoj0DwTYIU=\");\n_c = Preview;\nvar _c;\n$RefreshReg$(_c, \"Preview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUXNCO0FBQ3FCO0FBR2pCO0FBQ3NCO0FBR1I7QUFTekIsU0FBU00sUUFBUSxLQUE2RTtRQUE3RSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBZ0IsR0FBN0U7UUFVeEJGOztJQVJKLE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBdUI7SUFFN0RELGdEQUFTQSxDQUFDO1lBQ0ZPLGNBRU9BO1FBRlgsSUFBSUEsRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhSyxFQUFFLEtBQUksY0FBYztZQUNqQ0QseUJBQVcsOERBQUNSLDREQUFVQTtnQkFBQ00sb0JBQW9CQTtnQkFBb0JELGlCQUFpQkE7Z0JBQWlCRCxhQUFhQTs7Ozs7O1FBQ2xILE9BQU8sSUFBSUEsRUFBQUEsZ0JBQUFBLHlCQUFBQSxvQ0FBQUEsY0FBYUssRUFBRSxLQUFJLFVBQVU7WUFDcENELHlCQUFXLDhEQUFDUCx3REFBTUE7Z0JBQUNLLG9CQUFvQkE7Z0JBQW9CRCxpQkFBaUJBO2dCQUFpQkQsYUFBYUE7Ozs7OztRQUM5RztJQUNKLEdBQUc7U0FBQ0EsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhSyxFQUFFO0tBQUM7SUFFcEIscUJBQ0ksOERBQUNiLGlEQUFNQSxDQUFDYyxHQUFHO1FBQUNQLFdBQVcsR0FBYSxPQUFWQSxXQUFVO1FBQU9RLE9BQU87WUFBRUMsWUFBWTtZQUEwQkMsWUFBWTtZQUFVQyxXQUFXO1FBQVE7a0JBQzlIUDs7Ozs7O0FBR2I7R0FqQndCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJldmlldy50c3g/NjU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgICBtb3Rpb24sXG4gICAgdXNlU2Nyb2xsLFxuICAgIHVzZVNwcmluZyxcbiAgICB1c2VUcmFuc2Zvcm0sXG4gICAgTW90aW9uVmFsdWUsXG4gICAgQW5pbWF0ZVByZXNlbmNlXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuaW1wb3J0IHsgRGF0YSwgUHJvamVjdCB9IGZyb20gJ0AvYXBwL3R5cGVzL0RhdGEnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb3duYmFsbG90IGZyb20gJy4uL3Byb2plY3RzL2Rvd25iYWxsb3QnO1xuaW1wb3J0IFNjcm9sbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbEJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgSW1wYXJ0IGZyb20gJy4uL3Byb2plY3RzL2ltcGFydCc7XG5cbnR5cGUgUHJldmlld1Byb3BzID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICBwcm9qZWN0RGF0YT86IFByb2plY3QsXG4gICAgc2VsZWN0ZWRQcm9qZWN0OiBQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBzZXRTZWxlY3RlZFByb2plY3Q6IChwcm9qZWN0OiBQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmV2aWV3KHsgY2xhc3NOYW1lLCBwcm9qZWN0RGF0YSwgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfTogUHJldmlld1Byb3BzKSB7XG5cbiAgICBjb25zdCBbUHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZTwoSlNYLkVsZW1lbnQgfCBudWxsKT4obnVsbCk7ICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3REYXRhPy5pZCA9PSAnZG93bmJhbGxvdCcpIHtcbiAgICAgICAgICAgIHNldFByb2plY3QoPERvd25iYWxsb3Qgc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBwcm9qZWN0RGF0YT17cHJvamVjdERhdGF9Lz4pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3REYXRhPy5pZCA9PSAnaW1wYXJ0Jykge1xuICAgICAgICAgICAgc2V0UHJvamVjdCg8SW1wYXJ0IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gcHJvamVjdERhdGE9e3Byb2plY3REYXRhfS8+KTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9qZWN0RGF0YT8uaWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB6LTlgfSBzdHlsZT17eyBmb250RmFtaWx5OiAnTmV1ZUhhYXNHcm90ZXNrVGV4dFBybycsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnfX0+XG4gICAgICAgICAgICB7UHJvamVjdH1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJEb3duYmFsbG90IiwiSW1wYXJ0IiwiUHJldmlldyIsImNsYXNzTmFtZSIsInByb2plY3REYXRhIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiUHJvamVjdCIsInNldFByb2plY3QiLCJpZCIsImRpdiIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/Preview.tsx\n"));

/***/ })

});