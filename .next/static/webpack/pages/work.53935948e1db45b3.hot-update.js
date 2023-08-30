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

/***/ "./src/pages/work.tsx":
/*!****************************!*\
  !*** ./src/pages/work.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // if (data.length > 0) {\n        const display_data = [];\n        let found_selected_project = false;\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            if (project_tags.includes(selectedTag)) {\n                var _selectedProject;\n                if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                display_data.push(project);\n            }\n        });\n        if (!found_selected_project && selectedProject !== null) {\n            setSelectedProject(display_data[0]);\n        }\n        setDisplay(display_data);\n    // }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" pl-8 pr-4 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        tags: tags,\n                                        className: \"w-full flex-1\",\n                                        selectedTag: selectedTag,\n                                        setSelectedTag: setSelectedTag,\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RowsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        data: display,\n                                        className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 87,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNDLDREQUFJQTt3Q0FBQ08sTUFBTUU7d0NBQVMwQixXQUFXO3dDQUFrRXBCLGlCQUFpQkE7d0NBQWlCQyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT25LRCxnQ0FBa0IsOERBQUNWLCtEQUFPQTtnQkFBQ3VDLGFBQWE3QjtnQkFBaUJvQixXQUFXO2dCQUF3R3BCLGlCQUFpQkE7Z0JBQWlCQyxvQkFBb0JBOzs7Ozt1QkFBd0I7Ozs7Ozs7QUFHalE7R0EzRXdCVjtLQUFBQTtBQTZFeEIsU0FBU29DO0lBQ1AscUJBQ0UsOERBQUNOO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTTztBQU1ULFNBQVNDO0lBQ1AscUJBQ0UsOERBQUNQO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd29yay50c3g/YTI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFncyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1RhZ3MnXG5pbXBvcnQgUm93cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1Jvd3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGF0YSwgUHJvamVjdCB9IGZyb20gJ0AvYXBwL3R5cGVzL0RhdGEnXG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVNjcm9sbCxcbiAgdXNlU3ByaW5nLFxuICB1c2VUcmFuc2Zvcm0sXG4gIE1vdGlvblZhbHVlXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUHJldmlldyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1ByZXZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPERhdGE+KFtdKTtcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGU8UHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuXG4gIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFnX2xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICBwcm9qZWN0X3RhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgIGlmICghdGFnX2xpc3QuaW5jbHVkZXModGFnKSkgdGFnX2xpc3QucHVzaCh0YWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0VGFncyh0YWdfbGlzdCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlfZGF0YTogRGF0YSA9IFtdO1xuICAgICAgbGV0IGZvdW5kX3NlbGVjdGVkX3Byb2plY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICAgIGlmIChwcm9qZWN0X3RhZ3MuaW5jbHVkZXMoc2VsZWN0ZWRUYWcpKSB7XG4gICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdD8uaWQpIGZvdW5kX3NlbGVjdGVkX3Byb2plY3QgPSB0cnVlO1xuICAgICAgICAgIGRpc3BsYXlfZGF0YS5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRfc2VsZWN0ZWRfcHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9qZWN0KGRpc3BsYXlfZGF0YVswXSk7XG4gICAgICB9XG4gICAgICBzZXREaXNwbGF5KGRpc3BsYXlfZGF0YSk7XG4gICAgLy8gfVxuICB9LCBbc2VsZWN0ZWRUYWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChkYXRhLmxlbmd0aCA+IDApIGdldFRhZ3MoKTtcbiAgICBnZXRUYWdzKCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NzdicpO1xuICAgICAgICBjb25zdCBjc3YgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldERhdGEoY3N2W1wiYm9keVwiXSk7XG4gICAgICAgIHNldERpc3BsYXkoY3N2W1wiYm9keVwiXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBDU1YgZGF0YTogJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXsndy1mdWxsIGgtZnVsbCByZWxhdGl2ZSd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZzpibG9jayAke3NlbGVjdGVkUHJvamVjdCA/ICdoaWRkZW4nIDogJ2Jsb2NrJ30gZml4ZWQgbGVmdC0wICR7c2VsZWN0ZWRQcm9qZWN0ID8gJ3ctWzI1JV0nIDogJ3ctWzEwMCVdJ30gcGwtOCBwci00IHNlbGVjdC1ub25lYH0gaWQ9eydwcm9qZWN0cyd9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdJbnRlci1SZWd1bGFyJywgZm9udFdlaWdodDogJ25vcm1hbCcsIGZvbnRTdHlsZTogJ25vcm1hbCd9fSBjbGFzc05hbWU9e1widGV4dC01eGwgbGc6dGV4dC02eGwgcGItNFwifT5Xb3JrPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCd9PlxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFRhZ3NMb2FkaW5nLz59PlxuICAgICAgICAgICAgICAgICAgPFRhZ3MgdGFncz17dGFnc30gY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgtMWB9IHNlbGVjdGVkVGFnPXtzZWxlY3RlZFRhZ30gc2V0U2VsZWN0ZWRUYWc9e3NldFNlbGVjdGVkVGFnfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFJvd3NMb2FkaW5nLz59PlxuICAgICAgICAgICAgICAgICAgPFJvd3MgZGF0YT17ZGlzcGxheX0gY2xhc3NOYW1lPXsndy1mdWxsIGZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICAgIHsvKiB7dGFncyA/IDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogPFRhZ3NMb2FkaW5nLz59ICovfVxuICAgICAgICAgICAgICAgIHsvKiB7ZGF0YSA/IDxSb3dzIGRhdGE9e2Rpc3BsYXl9IGNsYXNzTmFtZT17J3ctZnVsbCBmbGV4LTEgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gbm8tc2Nyb2xsYmFyJ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogbnVsbH0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWxlY3RlZFByb2plY3QgPyA8UHJldmlldyBwcm9qZWN0RGF0YT17c2VsZWN0ZWRQcm9qZWN0fSBjbGFzc05hbWU9eyd3LVsxMDAlXSBoLVsxMDAlXSBsZzp3LVs3NCVdIGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gbm8tc2Nyb2xsYmFyJ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogbnVsbH1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5mdW5jdGlvbiBUYWdzTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLTUgbWQ6aC0xMCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0zMDAgdG8tZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kYH0vPlxuICApO1xufVxuXG5mdW5jdGlvbiBSb3dzTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLTE2IG1kOmgtNjQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZGB9Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiVGFncyIsIlJvd3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN1c3BlbnNlIiwiTGF5b3V0IiwiUHJldmlldyIsIldvcmsiLCJkYXRhIiwic2V0RGF0YSIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidGFncyIsInNldFRhZ3MiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiZ2V0VGFncyIsInRhZ19saXN0IiwibWFwIiwicHJvamVjdCIsInByb2plY3RfdGFncyIsInRhZyIsImluY2x1ZGVzIiwicHVzaCIsImRpc3BsYXlfZGF0YSIsImZvdW5kX3NlbGVjdGVkX3Byb2plY3QiLCJpZCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjc3YiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsImZhbGxiYWNrIiwiVGFnc0xvYWRpbmciLCJSb3dzTG9hZGluZyIsInByb2plY3REYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});