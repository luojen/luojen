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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                tags ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    tags: tags,\n                                    className: \"w-full flex-1\",\n                                    selectedTag: selectedTag,\n                                    setSelectedTag: setSelectedTag,\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"loading-image\",\n                                    children: \"Loading...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, this),\n                                data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: display,\n                                    className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 86,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tyw4REFBQ04sNERBQUlBO29DQUFDTSxNQUFNRTtvQ0FBUzJCLFdBQVc7b0NBQWtFckIsaUJBQWlCQTtvQ0FBaUJDLG9CQUFvQkE7Ozs7OzJDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWpNRCxnQ0FBa0IsOERBQUNWLCtEQUFPQTtnQkFBQ3FDLGFBQWEzQjtnQkFBaUJxQixXQUFXO2dCQUF3R3JCLGlCQUFpQkE7Z0JBQWlCQyxvQkFBb0JBOzs7Ozt1QkFBd0I7Ozs7Ozs7QUFHalE7R0ExRXdCVjtLQUFBQTtBQTRFeEIsU0FBU3FDO0lBQ1AscUJBQ0UsOERBQUNOO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTTztBQU1ULFNBQVNDO0lBQ1AscUJBQ0UsOERBQUNQO1FBQUlELFdBQVk7Ozs7OztBQUVyQjtNQUpTUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd29yay50c3g/YTI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFncyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1RhZ3MnXG5pbXBvcnQgUm93cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1Jvd3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGF0YSwgUHJvamVjdCB9IGZyb20gJ0AvYXBwL3R5cGVzL0RhdGEnXG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVNjcm9sbCxcbiAgdXNlU3ByaW5nLFxuICB1c2VUcmFuc2Zvcm0sXG4gIE1vdGlvblZhbHVlXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUHJldmlldyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1ByZXZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPERhdGE+KFtdKTtcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGU8UHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuXG4gIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFnX2xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICBwcm9qZWN0X3RhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgIGlmICghdGFnX2xpc3QuaW5jbHVkZXModGFnKSkgdGFnX2xpc3QucHVzaCh0YWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0VGFncyh0YWdfbGlzdCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlfZGF0YTogRGF0YSA9IFtdO1xuICAgICAgbGV0IGZvdW5kX3NlbGVjdGVkX3Byb2plY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0X3RhZ3M6IHN0cmluZ1tdID0gcHJvamVjdFtcInRhZ3NcIl07XG4gICAgICAgIGlmIChwcm9qZWN0X3RhZ3MuaW5jbHVkZXMoc2VsZWN0ZWRUYWcpKSB7XG4gICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdD8uaWQpIGZvdW5kX3NlbGVjdGVkX3Byb2plY3QgPSB0cnVlO1xuICAgICAgICAgIGRpc3BsYXlfZGF0YS5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRfc2VsZWN0ZWRfcHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9qZWN0KGRpc3BsYXlfZGF0YVswXSk7XG4gICAgICB9XG4gICAgICBzZXREaXNwbGF5KGRpc3BsYXlfZGF0YSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRUYWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIGdldFRhZ3MoKTtcbiAgICBnZXRUYWdzKCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NzdicpO1xuICAgICAgICBjb25zdCBjc3YgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldERhdGEoY3N2W1wiYm9keVwiXSk7XG4gICAgICAgIHNldERpc3BsYXkoY3N2W1wiYm9keVwiXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBDU1YgZGF0YTogJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXsndy1mdWxsIGgtZnVsbCByZWxhdGl2ZSd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZzpibG9jayAke3NlbGVjdGVkUHJvamVjdCA/ICdoaWRkZW4nIDogJ2Jsb2NrJ30gZml4ZWQgbGVmdC0wICR7c2VsZWN0ZWRQcm9qZWN0ID8gJ3ctWzI1JV0nIDogJ3ctWzEwMCVdJ30gcHgtOCBzZWxlY3Qtbm9uZWB9IGlkPXsncHJvamVjdHMnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnSW50ZXItUmVndWxhcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnfX0gY2xhc3NOYW1lPXtcInRleHQtNXhsIGxnOnRleHQtNnhsIHBiLTRcIn0+V29yazwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvd2B9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwnfT5cbiAgICAgICAgICAgICAgICB7Lyoge3RhZ3MgPyA8VGFncyB0YWdzPXt0YWdzfSBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleC0xYH0gc2VsZWN0ZWRUYWc9e3NlbGVjdGVkVGFnfSBzZXRTZWxlY3RlZFRhZz17c2V0U2VsZWN0ZWRUYWd9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IDxkaXY+SGVsbG88L2Rpdj59ICovfVxuICAgICAgICAgICAgICAgIHt0YWdzID8gKFxuICAgICAgICAgICAgICAgIDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1pbWFnZVwiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtkYXRhID8gPFJvd3MgZGF0YT17ZGlzcGxheX0gY2xhc3NOYW1lPXsndy1mdWxsIGZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gPFByZXZpZXcgcHJvamVjdERhdGE9e3NlbGVjdGVkUHJvamVjdH0gY2xhc3NOYW1lPXsndy1bMTAwJV0gaC1bMTAwJV0gbGc6dy1bNzQlXSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gVGFnc0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZGB9Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUm93c0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xNiBtZDpoLTY0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWRgfS8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlRhZ3MiLCJSb3dzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQcmV2aWV3IiwiV29yayIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJnZXRUYWdzIiwidGFnX2xpc3QiLCJtYXAiLCJwcm9qZWN0IiwicHJvamVjdF90YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJwdXNoIiwibGVuZ3RoIiwiZGlzcGxheV9kYXRhIiwiZm91bmRfc2VsZWN0ZWRfcHJvamVjdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNzdiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwicHJvamVjdERhdGEiLCJUYWdzTG9hZGluZyIsIlJvd3NMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});