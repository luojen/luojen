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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n// import Tags from '@/app/components/Tags'\n// import Rows from '@/app/components/Rows'\n\nvar _s = $RefreshSig$();\n\n\n\nconst Tags = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/*! import() */ \"src_app_components_Tags_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\")));\n_c = Tags;\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tags, {\n                                        tags: tags,\n                                        className: \"w-full flex-1\",\n                                        selectedTag: selectedTag,\n                                        setSelectedTag: setSelectedTag,\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RowsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Rows, {\n                                        data: display,\n                                        className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 89,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c1 = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_c2 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_c3 = RowsLoading;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Tags\");\n$RefreshReg$(_c1, \"Work\");\n$RefreshReg$(_c2, \"TagsLoading\");\n$RefreshReg$(_c3, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7d0NBQWdCQyxpQkFBaUJBO3dDQUFpQkMsb0JBQW9CQTs7Ozs7Ozs7Ozs7OENBRWhLLDhEQUFDZiwyQ0FBUUE7b0NBQUN5Qyx3QkFBVSw4REFBQ0U7OENBQ25CLDRFQUFDQzt3Q0FBS3RDLE1BQU1FO3dDQUFTMkIsV0FBVzt3Q0FBa0VyQixpQkFBaUJBO3dDQUFpQkMsb0JBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9uS0QsZ0NBQWtCLDhEQUFDWCwrREFBT0E7Z0JBQUMwQyxhQUFhL0I7Z0JBQWlCcUIsV0FBVztnQkFBd0dyQixpQkFBaUJBO2dCQUFpQkMsb0JBQW9CQTs7Ozs7dUJBQXdCOzs7Ozs7O0FBR2pRO0dBM0V3QlY7TUFBQUE7QUE2RXhCLFNBQVNxQztJQUNQLHFCQUNFLDhEQUFDTjtRQUFJRCxXQUFZOzs7Ozs7QUFFckI7TUFKU087QUFNVCxTQUFTQztJQUNQLHFCQUNFLDhEQUFDUDtRQUFJRCxXQUFZOzs7Ozs7QUFFckI7TUFKU1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dvcmsudHN4P2EyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRhZ3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9UYWdzJ1xuLy8gaW1wb3J0IFJvd3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9Sb3dzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJ1xuaW1wb3J0IHtcbiAgbW90aW9uLFxuICB1c2VTY3JvbGwsXG4gIHVzZVNwcmluZyxcbiAgdXNlVHJhbnNmb3JtLFxuICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9QcmV2aWV3J1xuXG5jb25zdCBUYWdzID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0AvYXBwL2NvbXBvbmVudHMvVGFncycpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhPihbXSk7XG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlPERhdGE+KFtdKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdBbGwnKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3QgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcblxuICBjb25zdCBnZXRUYWdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhZ19saXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdF90YWdzOiBzdHJpbmdbXSA9IHByb2plY3RbXCJ0YWdzXCJdO1xuICAgICAgcHJvamVjdF90YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICBpZiAoIXRhZ19saXN0LmluY2x1ZGVzKHRhZykpIHRhZ19saXN0LnB1c2godGFnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldFRhZ3ModGFnX2xpc3QpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkaXNwbGF5X2RhdGE6IERhdGEgPSBbXTtcbiAgICAgIGxldCBmb3VuZF9zZWxlY3RlZF9wcm9qZWN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdF90YWdzOiBzdHJpbmdbXSA9IHByb2plY3RbXCJ0YWdzXCJdO1xuICAgICAgICBpZiAocHJvamVjdF90YWdzLmluY2x1ZGVzKHNlbGVjdGVkVGFnKSkge1xuICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3Q/LmlkKSBmb3VuZF9zZWxlY3RlZF9wcm9qZWN0ID0gdHJ1ZTtcbiAgICAgICAgICBkaXNwbGF5X2RhdGEucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWZvdW5kX3NlbGVjdGVkX3Byb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChkaXNwbGF5X2RhdGFbMF0pO1xuICAgICAgfVxuICAgICAgc2V0RGlzcGxheShkaXNwbGF5X2RhdGEpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkVGFnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSBnZXRUYWdzKCk7XG4gICAgZ2V0VGFncygpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jc3YnKTtcbiAgICAgICAgY29uc3QgY3N2ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGNzdltcImJvZHlcIl0pO1xuICAgICAgICBzZXREaXNwbGF5KGNzdltcImJvZHlcIl0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgQ1NWIGRhdGE6ICcsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17J3ctZnVsbCBoLWZ1bGwgcmVsYXRpdmUnfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6YmxvY2sgJHtzZWxlY3RlZFByb2plY3QgPyAnaGlkZGVuJyA6ICdibG9jayd9IGZpeGVkIGxlZnQtMCAke3NlbGVjdGVkUHJvamVjdCA/ICd3LVsyNSVdJyA6ICd3LVsxMDAlXSd9IHB4LTggc2VsZWN0LW5vbmVgfSBpZD17J3Byb2plY3RzJ30+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ0ludGVyLVJlZ3VsYXInLCBmb250V2VpZ2h0OiAnbm9ybWFsJywgZm9udFN0eWxlOiAnbm9ybWFsJ319IGNsYXNzTmFtZT17XCJ0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBwYi00XCJ9Pldvcms8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3dgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsJ30+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8VGFnc0xvYWRpbmcvPn0+XG4gICAgICAgICAgICAgICAgICA8VGFncyB0YWdzPXt0YWdzfSBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleC0xYH0gc2VsZWN0ZWRUYWc9e3NlbGVjdGVkVGFnfSBzZXRTZWxlY3RlZFRhZz17c2V0U2VsZWN0ZWRUYWd9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPlxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8Um93c0xvYWRpbmcvPn0+XG4gICAgICAgICAgICAgICAgICA8Um93cyBkYXRhPXtkaXNwbGF5fSBjbGFzc05hbWU9eyd3LWZ1bGwgZmxleC0xIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPlxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgICAgey8qIHt0YWdzID8gPFRhZ3MgdGFncz17dGFnc30gY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgtMWB9IHNlbGVjdGVkVGFnPXtzZWxlY3RlZFRhZ30gc2V0U2VsZWN0ZWRUYWc9e3NldFNlbGVjdGVkVGFnfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiA8VGFnc0xvYWRpbmcvPn0gKi99XG4gICAgICAgICAgICAgICAgey8qIHtkYXRhID8gPFJvd3MgZGF0YT17ZGlzcGxheX0gY2xhc3NOYW1lPXsndy1mdWxsIGZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiBudWxsfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlbGVjdGVkUHJvamVjdCA/IDxQcmV2aWV3IHByb2plY3REYXRhPXtzZWxlY3RlZFByb2plY3R9IGNsYXNzTmFtZT17J3ctWzEwMCVdIGgtWzEwMCVdIGxnOnctWzc0JV0gYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmZ1bmN0aW9uIFRhZ3NMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtNSBtZDpoLTEwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWRgfS8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvd3NMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtMTYgbWQ6aC02NCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0zMDAgdG8tZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kYH0vPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN1c3BlbnNlIiwibGF6eSIsIkxheW91dCIsIlByZXZpZXciLCJUYWdzIiwiV29yayIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJnZXRUYWdzIiwidGFnX2xpc3QiLCJtYXAiLCJwcm9qZWN0IiwicHJvamVjdF90YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJwdXNoIiwibGVuZ3RoIiwiZGlzcGxheV9kYXRhIiwiZm91bmRfc2VsZWN0ZWRfcHJvamVjdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNzdiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwiZmFsbGJhY2siLCJUYWdzTG9hZGluZyIsIlJvd3NMb2FkaW5nIiwiUm93cyIsInByb2plY3REYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});