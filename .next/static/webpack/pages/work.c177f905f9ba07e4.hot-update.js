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

/***/ "./src/app/components/ScrollButton.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/ScrollButton.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ScrollButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\nfunction ScrollButton(param) {\n    let { className } = param;\n    const scroll_variants = {\n        flash: {\n            scale: 1.15\n        },\n        normal: {\n            scale: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        className: \"\".concat(className, \" ml-8 mb-8 text-white flex flex-col justify-center items-center bg-red-200 w-24\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {\n                className: \"text-xs text-black mb-3\",\n                children: \"Scroll down\"\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/ScrollButton.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                variants: scroll_variants,\n                initial: \"normal\",\n                animate: \"flash\",\n                transition: {\n                    duration: 0.7,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {\n                        src: \"icons/arrow-down.svg\",\n                        className: \"h-6 absolute bottom-5 left-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/ScrollButton.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-16 h-16 rounded-full bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/ScrollButton.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/ScrollButton.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/ScrollButton.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = ScrollButton;\nvar _c;\n$RefreshReg$(_c, \"ScrollButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvU2Nyb2xsQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT3NCO0FBU1AsU0FBU0MsYUFBYSxLQUFnQztRQUFoQyxFQUFFQyxTQUFTLEVBQXFCLEdBQWhDO0lBRWpDLE1BQU1DLGtCQUFrQjtRQUNwQkMsT0FBTztZQUFFQyxPQUFPO1FBQUs7UUFDckJDLFFBQVE7WUFBRUQsT0FBTztRQUFFO0lBQ3ZCO0lBRUEscUJBQ0ksOERBQUNMLGlEQUFNQSxDQUFDTyxHQUFHO1FBQUNMLFdBQVcsR0FBYSxPQUFWQSxXQUFVOzswQkFFaEMsOERBQUNGLGlEQUFNQSxDQUFDUSxDQUFDO2dCQUFDTixXQUFXOzBCQUEyQjs7Ozs7OzBCQUdoRCw4REFBQ0YsaURBQU1BLENBQUNPLEdBQUc7Z0JBQ1BFLFVBQVVOO2dCQUNWTyxTQUFRO2dCQUNSQyxTQUFRO2dCQUNSQyxZQUFZO29CQUFFQyxVQUFVO29CQUFLQyxRQUFRQztvQkFBVUMsWUFBWTtnQkFBUzs7a0NBRXBFLDhEQUFDaEIsaURBQU1BLENBQUNpQixHQUFHO3dCQUFDQyxLQUFJO3dCQUF1QmhCLFdBQVU7Ozs7OztrQ0FDakQsOERBQUNLO3dCQUFJTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0I7S0F4QndCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2Nyb2xsQnV0dG9uLnRzeD9mYmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIG1vdGlvbixcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlU3ByaW5nLFxuICAgIHVzZVRyYW5zZm9ybSxcbiAgICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm93IGZyb20gJy4vUm93JztcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJztcblxudHlwZSBTY3JvbGxCdXR0b25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbEJ1dHRvbih7IGNsYXNzTmFtZSB9OiBTY3JvbGxCdXR0b25Qcm9wcykge1xuXG4gICAgY29uc3Qgc2Nyb2xsX3ZhcmlhbnRzID0ge1xuICAgICAgICBmbGFzaDogeyBzY2FsZTogMS4xNSB9LFxuICAgICAgICBub3JtYWw6IHsgc2NhbGU6IDEgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IG1sLTggbWItOCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXJlZC0yMDAgdy0yNGB9PlxuICAgICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBtbC04IG1iLTggdGV4dC13aGl0ZWB9PiAqL31cbiAgICAgICAgICAgIDxtb3Rpb24ucCBjbGFzc05hbWU9e1widGV4dC14cyB0ZXh0LWJsYWNrIG1iLTNcIn0+XG4gICAgICAgICAgICAgICAgU2Nyb2xsIGRvd25cbiAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtzY3JvbGxfdmFyaWFudHN9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImZsYXNoXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmltZyBzcmM9XCJpY29ucy9hcnJvdy1kb3duLnN2Z1wiIGNsYXNzTmFtZT0naC02IGFic29sdXRlIGJvdHRvbS01IGxlZnQtNicvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsibW90aW9uIiwiU2Nyb2xsQnV0dG9uIiwiY2xhc3NOYW1lIiwic2Nyb2xsX3ZhcmlhbnRzIiwiZmxhc2giLCJzY2FsZSIsIm5vcm1hbCIsImRpdiIsInAiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/ScrollButton.tsx\n"));

/***/ })

});