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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative overflow-x-hidden no-scrollbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                tags.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    tags: tags,\n                                    className: \"w-full flex-1\",\n                                    selectedTag: selectedTag,\n                                    setSelectedTag: setSelectedTag,\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 36\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagsLoading, {}, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 218\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-px bg-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this),\n                                data.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: display,\n                                    className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 36\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RowsLoading, {}, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 212\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 82,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mt-3\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJRCxXQUFZOzs7Ozs7Z0NBQ2hCN0IsS0FBS2tCLE1BQU0sR0FBRyxrQkFBSSw4REFBQ3hCLDREQUFJQTtvQ0FBQ00sTUFBTUU7b0NBQVMyQixXQUFXO29DQUFrRXJCLGlCQUFpQkE7b0NBQWlCQyxvQkFBb0JBOzs7Ozt5REFBd0IsOERBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUk3TTVCLGdDQUFrQiw4REFBQ1YsK0RBQU9BO2dCQUFDdUMsYUFBYTdCO2dCQUFpQnFCLFdBQVc7Z0JBQXdHckIsaUJBQWlCQTtnQkFBaUJDLG9CQUFvQkE7Ozs7O3VCQUF3Qjs7Ozs7OztBQUdqUTtHQXRFd0JWO0tBQUFBO0FBd0V4QixTQUFTb0M7SUFDUCxxQkFDRSw4REFBQ0w7UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNNO0FBTVQsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ047UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93b3JrLnRzeD9hMjliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWdzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVGFncydcbmltcG9ydCBSb3dzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUm93cydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSdcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlU2Nyb2xsLFxuICB1c2VTcHJpbmcsXG4gIHVzZVRyYW5zZm9ybSxcbiAgTW90aW9uVmFsdWVcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IExheW91dCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQcmV2aWV3IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yaygpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZTxEYXRhPihbXSk7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGU8c3RyaW5nPignQWxsJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XG5cbiAgY29uc3QgZ2V0VGFncyA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdfbGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgIHByb2plY3RfdGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgaWYgKCF0YWdfbGlzdC5pbmNsdWRlcyh0YWcpKSB0YWdfbGlzdC5wdXNoKHRhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRUYWdzKHRhZ19saXN0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGlzcGxheV9kYXRhOiBEYXRhID0gW107XG4gICAgICBsZXQgZm91bmRfc2VsZWN0ZWRfcHJvamVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgICAgaWYgKHByb2plY3RfdGFncy5pbmNsdWRlcyhzZWxlY3RlZFRhZykpIHtcbiAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0Py5pZCkgZm91bmRfc2VsZWN0ZWRfcHJvamVjdCA9IHRydWU7XG4gICAgICAgICAgZGlzcGxheV9kYXRhLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFmb3VuZF9zZWxlY3RlZF9wcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoZGlzcGxheV9kYXRhWzBdKTtcbiAgICAgIH1cbiAgICAgIHNldERpc3BsYXkoZGlzcGxheV9kYXRhKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFRhZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkgZ2V0VGFncygpO1xuICAgIGdldFRhZ3MoKTtcbiAgfSwgW2RhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3N2Jyk7XG4gICAgICAgIGNvbnN0IGNzdiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShjc3ZbXCJib2R5XCJdKTtcbiAgICAgICAgc2V0RGlzcGxheShjc3ZbXCJib2R5XCJdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIENTViBkYXRhOiAnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9eyd3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZzpibG9jayAke3NlbGVjdGVkUHJvamVjdCA/ICdoaWRkZW4nIDogJ2Jsb2NrJ30gZml4ZWQgbGVmdC0wICR7c2VsZWN0ZWRQcm9qZWN0ID8gJ3ctWzI1JV0nIDogJ3ctWzEwMCVdJ30gcHgtOCBzZWxlY3Qtbm9uZWB9IGlkPXsncHJvamVjdHMnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnSW50ZXItUmVndWxhcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnfX0gY2xhc3NOYW1lPXtcInRleHQtNXhsIGxnOnRleHQtNnhsIHBiLTRcIn0+V29yazwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvd2B9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwnfT5cbiAgICAgICAgICAgICAgICB7dGFncy5sZW5ndGggPiAwID8gPFRhZ3MgdGFncz17dGFnc30gY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgtMWB9IHNlbGVjdGVkVGFnPXtzZWxlY3RlZFRhZ30gc2V0U2VsZWN0ZWRUYWc9e3NldFNlbGVjdGVkVGFnfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiA8VGFnc0xvYWRpbmcvPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLXB4IGJnLWJsYWNrYH0vPlxuICAgICAgICAgICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyA8Um93cyBkYXRhPXtkaXNwbGF5fSBjbGFzc05hbWU9eyd3LWZ1bGwgZmxleC0xIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IDxSb3dzTG9hZGluZy8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gPFByZXZpZXcgcHJvamVjdERhdGE9e3NlbGVjdGVkUHJvamVjdH0gY2xhc3NOYW1lPXsndy1bMTAwJV0gaC1bMTAwJV0gbGc6dy1bNzQlXSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gVGFnc0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZCBtYi0zYH0vPlxuICApO1xufVxuXG5mdW5jdGlvbiBSb3dzTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLTE2IG1kOmgtNjQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZCBtdC0zYH0vPlxuICApO1xufSJdLCJuYW1lcyI6WyJUYWdzIiwiUm93cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiUHJldmlldyIsIldvcmsiLCJkYXRhIiwic2V0RGF0YSIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidGFncyIsInNldFRhZ3MiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiZ2V0VGFncyIsInRhZ19saXN0IiwibWFwIiwicHJvamVjdCIsInByb2plY3RfdGFncyIsInRhZyIsImluY2x1ZGVzIiwicHVzaCIsImxlbmd0aCIsImRpc3BsYXlfZGF0YSIsImZvdW5kX3NlbGVjdGVkX3Byb2plY3QiLCJpZCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjc3YiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsIlRhZ3NMb2FkaW5nIiwiUm93c0xvYWRpbmciLCJwcm9qZWN0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});