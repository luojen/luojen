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

/***/ "./src/app/components/CloseButton.tsx":
/*!********************************************!*\
  !*** ./src/app/components/CloseButton.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CloseButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\nfunction CloseButton(param) {\n    let { className, selectedProject, setSelectedProject, projectData } = param;\n    const handleCloseClick = ()=>{\n        var _selectedProject, _projectData;\n        if (((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id) === ((_projectData = projectData) === null || _projectData === void 0 ? void 0 : _projectData.id)) {\n            setSelectedProject(null);\n        } else {\n            setSelectedProject(projectData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" absolute top-0 right-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {\n            className: \"flex flex-row rounded-full px-4 py-1 justify-center bg-[#FCFCFC] text-[#575757]\",\n            whileHover: {\n                backgroundColor: \"rgba(0, 0, 0, 0.8)\",\n                color: \"rgba(255, 255, 255, 1)\"\n            },\n            whileTap: {\n                scale: 1.1\n            },\n            onClick: handleCloseClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"pr-2 text-xs\",\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/CloseButton.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs\",\n                    children: \"CLOSE\"\n                }, void 0, false, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/CloseButton.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/CloseButton.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/CloseButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_c = CloseButton;\nvar _c;\n$RefreshReg$(_c, \"CloseButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPc0I7QUFZUCxTQUFTQyxZQUFZLEtBQWlGO1FBQWpGLEVBQUVDLFNBQVMsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRUMsV0FBVyxFQUFvQixHQUFqRjtJQUVoQyxNQUFNQyxtQkFBbUI7WUFDakJILGtCQUF3QkU7UUFBNUIsSUFBSUYsRUFBQUEsbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCSSxFQUFFLFFBQUtGLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYUUsRUFBRSxHQUFFO1lBQ3pDSCxtQkFBbUI7UUFDdkIsT0FBTztZQUNIQSxtQkFBbUJDO1FBQ3ZCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSU4sV0FBVyxHQUFhLE9BQVZBLFdBQVU7a0JBQ3pCLDRFQUFDRixpREFBTUEsQ0FBQ1MsTUFBTTtZQUNWUCxXQUFXO1lBQ1hRLFlBQVk7Z0JBQUVDLGlCQUFpQjtnQkFBc0JDLE9BQU87WUFBeUI7WUFDckZDLFVBQVU7Z0JBQUVDLE9BQU87WUFBSTtZQUN2QkMsU0FBU1Q7OzhCQUVULDhEQUFDVTtvQkFBRWQsV0FBVzs4QkFBaUI7Ozs7Ozs4QkFDL0IsOERBQUNjO29CQUFFZCxXQUFZOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QztLQXZCd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DbG9zZUJ1dHRvbi50c3g/ZmY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgICBtb3Rpb24sXG4gICAgdXNlU2Nyb2xsLFxuICAgIHVzZVNwcmluZyxcbiAgICB1c2VUcmFuc2Zvcm0sXG4gICAgTW90aW9uVmFsdWVcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSc7XG5cbnR5cGUgQ2xvc2VCdXR0b25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsIFxuICAgIHNlbGVjdGVkUHJvamVjdDogUHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0OiAocHJvamVjdDogUHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQpID0+IHZvaWQsXG4gICAgcHJvamVjdERhdGE6IFByb2plY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2VCdXR0b24oeyBjbGFzc05hbWUsIHNlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0RGF0YSB9OiBDbG9zZUJ1dHRvblByb3BzKSB7XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0Py5pZCA9PT0gcHJvamVjdERhdGE/LmlkKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QocHJvamVjdERhdGEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGFic29sdXRlIHRvcC0wIHJpZ2h0LTBgfT5cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtcm93IHJvdW5kZWQtZnVsbCBweC00IHB5LTEganVzdGlmeS1jZW50ZXIgYmctWyNGQ0ZDRkNdIHRleHQtWyM1NzU3NTddXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wicHItMiB0ZXh0LXhzXCJ9ID5YPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteHNgfT5DTE9TRTwvcD4gXG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsIkNsb3NlQnV0dG9uIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwicHJvamVjdERhdGEiLCJoYW5kbGVDbG9zZUNsaWNrIiwiaWQiLCJkaXYiLCJidXR0b24iLCJ3aGlsZUhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aGlsZVRhcCIsInNjYWxlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/CloseButton.tsx\n"));

/***/ })

});