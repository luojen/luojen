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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Image; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Image(param) {\n    let { className, src, alt } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleImageLoad = ()=>{\n        setIsLoading(false);\n    };\n    const handleImageError = ()=>{\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        src,\n        classname,\n        alt\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[350px] h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3\"\n        }, void 0, false, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Image.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: src,\n            className: className,\n            onLoad: handleImageLoad,\n            onError: handleImageError,\n            alt: alt\n        }, void 0, false, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Image.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Image, \"QmMObrvwCqfhPfVpIPABr9yxZgQ=\");\n_c = Image;\nvar _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvSW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVEyQztBQVU1QixTQUFTRSxNQUFNLEtBQW1DO1FBQW5DLEVBQUVDLFNBQVMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQWMsR0FBbkM7O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTyxrQkFBa0I7UUFDdEJELGFBQWE7SUFDZjtJQUVBLE1BQU1FLG1CQUFtQjtRQUN2QkYsYUFBYTtJQUNmO0lBRUFQLGdEQUFTQSxDQUFDLEtBRVYsR0FBRztRQUFDSTtRQUFLTTtRQUFXTDtLQUFJO0lBQ3hCTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE1BQU0sTUFBTUYsU0FBU0csSUFBSTtnQkFDL0JDLFFBQVFGLEdBQUcsQ0FBQyxPQUFPO2dCQUNuQkcsV0FBV0gsR0FBRyxDQUFDLE9BQU87WUFDeEIsRUFBRSxPQUFPSSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtZQUM3QztRQUNGO1FBQ0FQO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0tMLDBCQUNHLDhEQUFDYztZQUFJakIsV0FBWTs7Ozs7aUNBRWpCLDhEQUFDa0I7WUFBSWpCLEtBQUtBO1lBQUtELFdBQVdBO1lBQVdtQixRQUFRZDtZQUFpQmUsU0FBU2Q7WUFBa0JKLEtBQUtBOzs7Ozs7O0FBSTFHO0dBckN3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0ltYWdlLnRzeD84ODhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIG1vdGlvbixcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlU3ByaW5nLFxuICAgIHVzZVRyYW5zZm9ybSxcbiAgICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm93IGZyb20gJy4vUm93JztcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJztcblxudHlwZSBJbWFnZVByb3BzID0ge1xuICAgIHNyYz86IHN0cmluZyxcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsIFxuICAgIGFsdD86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IGNsYXNzTmFtZSwgc3JjLCBhbHQgfTogSW1hZ2VQcm9wcykge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkID0gKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VFcnJvciA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgfSwgW3NyYywgY2xhc3NuYW1lLCBhbHRdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3N2Jyk7XG4gICAgICAgIGNvbnN0IGNzdiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShjc3ZbXCJib2R5XCJdKTtcbiAgICAgICAgc2V0RGlzcGxheShjc3ZbXCJib2R5XCJdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIENTViBkYXRhOiAnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1bMzUwcHhdIGgtNSBtZDpoLTEwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWQgbWItM2B9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkxvYWQ9e2hhbmRsZUltYWdlTG9hZH0gb25FcnJvcj17aGFuZGxlSW1hZ2VFcnJvcn0gYWx0PXthbHR9Lz5cbiAgICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUltYWdlTG9hZCIsImhhbmRsZUltYWdlRXJyb3IiLCJjbGFzc25hbWUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiY3N2IiwianNvbiIsInNldERhdGEiLCJzZXREaXNwbGF5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaW1nIiwib25Mb2FkIiwib25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/Image.tsx\n"));

/***/ })

});