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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    var _ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative text-[#575757]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"lg:w-[25%] xl:w-[30%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"SwearDisplay-BlackItalic\",\n                            fontWeight: \"black\",\n                            fontStyle: \"cilati\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                tags.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    tags: tags,\n                                    className: \"w-full flex-1\",\n                                    selectedTag: selectedTag,\n                                    setSelectedTag: setSelectedTag,\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 36\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagsLoading, {}, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 218\n                                }, this),\n                                (_ref = tags.length <= 0) !== null && _ref !== void 0 ? _ref : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-px bg-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 38\n                                }, this),\n                                data.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: display,\n                                    className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 36\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RowsLoading, {}, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 212\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 82,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mt-3\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUFBLE9BQUFBLEtBQUtjLE1BQU0sSUFBSSxlQUFmZCxrQkFBQUEscUJBQW9CLDhEQUFDMEI7b0NBQUlELFdBQVk7Ozs7OztnQ0FDckM3QixLQUFLa0IsTUFBTSxHQUFHLGtCQUFJLDhEQUFDeEIsNERBQUlBO29DQUFDTSxNQUFNRTtvQ0FBUzJCLFdBQVc7b0NBQWtFckIsaUJBQWlCQTtvQ0FBaUJDLG9CQUFvQkE7Ozs7O3lEQUF3Qiw4REFBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTdNNUIsZ0NBQWtCLDhEQUFDViwrREFBT0E7Z0JBQUN1QyxhQUFhN0I7Z0JBQWlCcUIsV0FBVztnQkFBd0dyQixpQkFBaUJBO2dCQUFpQkMsb0JBQW9CQTs7Ozs7dUJBQXdCOzs7Ozs7O0FBR2pRO0dBdEV3QlY7S0FBQUE7QUF3RXhCLFNBQVNvQztJQUNQLHFCQUNFLDhEQUFDTDtRQUFJRCxXQUFZOzs7Ozs7QUFFckI7TUFKU007QUFNVCxTQUFTQztJQUNQLHFCQUNFLDhEQUFDTjtRQUFJRCxXQUFZOzs7Ozs7QUFFckI7TUFKU08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dvcmsudHN4P2EyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhZ3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9UYWdzJ1xuaW1wb3J0IFJvd3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9Sb3dzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJ1xuaW1wb3J0IHtcbiAgbW90aW9uLFxuICB1c2VTY3JvbGwsXG4gIHVzZVNwcmluZyxcbiAgdXNlVHJhbnNmb3JtLFxuICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9QcmV2aWV3J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhPihbXSk7XG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlPERhdGE+KFtdKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdBbGwnKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3QgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcblxuICBjb25zdCBnZXRUYWdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhZ19saXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGRhdGEubWFwKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdF90YWdzOiBzdHJpbmdbXSA9IHByb2plY3RbXCJ0YWdzXCJdO1xuICAgICAgcHJvamVjdF90YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICBpZiAoIXRhZ19saXN0LmluY2x1ZGVzKHRhZykpIHRhZ19saXN0LnB1c2godGFnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldFRhZ3ModGFnX2xpc3QpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkaXNwbGF5X2RhdGE6IERhdGEgPSBbXTtcbiAgICAgIGxldCBmb3VuZF9zZWxlY3RlZF9wcm9qZWN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdF90YWdzOiBzdHJpbmdbXSA9IHByb2plY3RbXCJ0YWdzXCJdO1xuICAgICAgICBpZiAocHJvamVjdF90YWdzLmluY2x1ZGVzKHNlbGVjdGVkVGFnKSkge1xuICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3Q/LmlkKSBmb3VuZF9zZWxlY3RlZF9wcm9qZWN0ID0gdHJ1ZTtcbiAgICAgICAgICBkaXNwbGF5X2RhdGEucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWZvdW5kX3NlbGVjdGVkX3Byb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChkaXNwbGF5X2RhdGFbMF0pO1xuICAgICAgfVxuICAgICAgc2V0RGlzcGxheShkaXNwbGF5X2RhdGEpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkVGFnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSBnZXRUYWdzKCk7XG4gICAgZ2V0VGFncygpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jc3YnKTtcbiAgICAgICAgY29uc3QgY3N2ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGNzdltcImJvZHlcIl0pO1xuICAgICAgICBzZXREaXNwbGF5KGNzdltcImJvZHlcIl0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgQ1NWIGRhdGE6ICcsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17J3ctZnVsbCBoLWZ1bGwgcmVsYXRpdmUgdGV4dC1bIzU3NTc1N10nfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6YmxvY2sgJHtzZWxlY3RlZFByb2plY3QgPyAnaGlkZGVuJyA6ICdibG9jayd9IGZpeGVkIGxlZnQtMCAke3NlbGVjdGVkUHJvamVjdCA/ICdsZzp3LVsyNSVdIHhsOnctWzMwJV0nIDogJ3ctWzEwMCVdJ30gcHgtOCBzZWxlY3Qtbm9uZWB9IGlkPXsncHJvamVjdHMnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnU3dlYXJEaXNwbGF5LUJsYWNrSXRhbGljJywgZm9udFdlaWdodDogJ2JsYWNrJywgZm9udFN0eWxlOiAnY2lsYXRpJ319IGNsYXNzTmFtZT17XCJ0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBwYi00XCJ9Pldvcms8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3dgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsJ30+XG4gICAgICAgICAgICAgICAge3RhZ3MubGVuZ3RoID4gMCA/IDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogPFRhZ3NMb2FkaW5nLz59XG4gICAgICAgICAgICAgICAge3RhZ3MubGVuZ3RoIDw9IDAgPz8gPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC1weCBiZy1ibGFja2B9Lz59XG4gICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoID4gMCA/IDxSb3dzIGRhdGE9e2Rpc3BsYXl9IGNsYXNzTmFtZT17J3ctZnVsbCBmbGV4LTEgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gbm8tc2Nyb2xsYmFyJ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogPFJvd3NMb2FkaW5nLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWxlY3RlZFByb2plY3QgPyA8UHJldmlldyBwcm9qZWN0RGF0YT17c2VsZWN0ZWRQcm9qZWN0fSBjbGFzc05hbWU9eyd3LVsxMDAlXSBoLVsxMDAlXSBsZzp3LVs3NCVdIGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgb3ZlcmZsb3cteS1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gbm8tc2Nyb2xsYmFyJ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+IDogbnVsbH1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5mdW5jdGlvbiBUYWdzTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLTUgbWQ6aC0xMCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0zMDAgdG8tZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kIG1iLTNgfS8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvd3NMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtMTYgbWQ6aC02NCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0zMDAgdG8tZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kIG10LTNgfS8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlRhZ3MiLCJSb3dzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQcmV2aWV3IiwiV29yayIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJnZXRUYWdzIiwidGFnX2xpc3QiLCJtYXAiLCJwcm9qZWN0IiwicHJvamVjdF90YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJwdXNoIiwibGVuZ3RoIiwiZGlzcGxheV9kYXRhIiwiZm91bmRfc2VsZWN0ZWRfcHJvamVjdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNzdiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwiVGFnc0xvYWRpbmciLCJSb3dzTG9hZGluZyIsInByb2plY3REYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});