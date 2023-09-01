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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n    // setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                tags ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    tags: tags,\n                                    className: \"w-full flex-1\",\n                                    selectedTag: selectedTag,\n                                    setSelectedTag: setSelectedTag,\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Hello\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 207\n                                }, this),\n                                data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: display,\n                                    className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 81,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlBO29DQUFDTSxNQUFNRTtvQ0FBUzJCLFdBQVc7b0NBQWtFckIsaUJBQWlCQTtvQ0FBaUJDLG9CQUFvQkE7Ozs7OzJDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWpNRCxnQ0FBa0IsOERBQUNWLCtEQUFPQTtnQkFBQ3FDLGFBQWEzQjtnQkFBaUJxQixXQUFXO2dCQUF3R3JCLGlCQUFpQkE7Z0JBQWlCQyxvQkFBb0JBOzs7Ozt1QkFBd0I7Ozs7Ozs7QUFHalE7R0FyRXdCVjtLQUFBQTtBQXVFeEIsU0FBU3FDO0lBQ1AscUJBQ0UsOERBQUNOO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTTztBQU1ULFNBQVNDO0lBQ1AscUJBQ0UsOERBQUNQO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd29yay50c3g/YTI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFncyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1RhZ3MnXG5pbXBvcnQgUm93cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1Jvd3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGF0YSwgUHJvamVjdCB9IGZyb20gJ0AvYXBwL3R5cGVzL0RhdGEnXG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVNjcm9sbCxcbiAgdXNlU3ByaW5nLFxuICB1c2VUcmFuc2Zvcm0sXG4gIE1vdGlvblZhbHVlXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUHJldmlldyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1ByZXZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPERhdGE+KFtdKTtcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGU8UHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuXG4gIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFnX2xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICBwcm9qZWN0X3RhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgIGlmICghdGFnX2xpc3QuaW5jbHVkZXModGFnKSkgdGFnX2xpc3QucHVzaCh0YWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gc2V0VGFncyh0YWdfbGlzdCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlfZGF0YTogRGF0YSA9IFtdO1xuICAgICAgbGV0IGZvdW5kX3NlbGVjdGVkX3Byb2plY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICAgIGlmIChwcm9qZWN0X3RhZ3MuaW5jbHVkZXMoc2VsZWN0ZWRUYWcpKSB7XG4gICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdD8uaWQpIGZvdW5kX3NlbGVjdGVkX3Byb2plY3QgPSB0cnVlO1xuICAgICAgICAgIGRpc3BsYXlfZGF0YS5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRfc2VsZWN0ZWRfcHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9qZWN0KGRpc3BsYXlfZGF0YVswXSk7XG4gICAgICB9XG4gICAgICBzZXREaXNwbGF5KGRpc3BsYXlfZGF0YSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRUYWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIGdldFRhZ3MoKTtcbiAgICBnZXRUYWdzKCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NzdicpO1xuICAgICAgICBjb25zdCBjc3YgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldERhdGEoY3N2W1wiYm9keVwiXSk7XG4gICAgICAgIHNldERpc3BsYXkoY3N2W1wiYm9keVwiXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBDU1YgZGF0YTogJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXsndy1mdWxsIGgtZnVsbCByZWxhdGl2ZSd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZzpibG9jayAke3NlbGVjdGVkUHJvamVjdCA/ICdoaWRkZW4nIDogJ2Jsb2NrJ30gZml4ZWQgbGVmdC0wICR7c2VsZWN0ZWRQcm9qZWN0ID8gJ3ctWzI1JV0nIDogJ3ctWzEwMCVdJ30gcHgtOCBzZWxlY3Qtbm9uZWB9IGlkPXsncHJvamVjdHMnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnSW50ZXItUmVndWxhcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnfX0gY2xhc3NOYW1lPXtcInRleHQtNXhsIGxnOnRleHQtNnhsIHBiLTRcIn0+V29yazwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvd2B9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwnfT5cbiAgICAgICAgICAgICAgICB7dGFncyA/IDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogPGRpdj5IZWxsbzwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7ZGF0YSA/IDxSb3dzIGRhdGE9e2Rpc3BsYXl9IGNsYXNzTmFtZT17J3ctZnVsbCBmbGV4LTEgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gbm8tc2Nyb2xsYmFyJ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlbGVjdGVkUHJvamVjdCA/IDxQcmV2aWV3IHByb2plY3REYXRhPXtzZWxlY3RlZFByb2plY3R9IGNsYXNzTmFtZT17J3ctWzEwMCVdIGgtWzEwMCVdIGxnOnctWzc0JV0gYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmZ1bmN0aW9uIFRhZ3NMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtNSBtZDpoLTEwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWRgfS8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvd3NMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtMTYgbWQ6aC02NCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0zMDAgdG8tZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kYH0vPlxuICApO1xufSJdLCJuYW1lcyI6WyJUYWdzIiwiUm93cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiUHJldmlldyIsIldvcmsiLCJkYXRhIiwic2V0RGF0YSIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidGFncyIsInNldFRhZ3MiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiZ2V0VGFncyIsInRhZ19saXN0IiwibWFwIiwicHJvamVjdCIsInByb2plY3RfdGFncyIsInRhZyIsImluY2x1ZGVzIiwicHVzaCIsImxlbmd0aCIsImRpc3BsYXlfZGF0YSIsImZvdW5kX3NlbGVjdGVkX3Byb2plY3QiLCJpZCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjc3YiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInByb2plY3REYXRhIiwiVGFnc0xvYWRpbmciLCJSb3dzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});