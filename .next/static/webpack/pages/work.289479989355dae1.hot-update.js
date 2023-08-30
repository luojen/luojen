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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" pl-8 pr-4 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        tags: tags,\n                                        className: \"w-full flex-1\",\n                                        selectedTag: selectedTag,\n                                        setSelectedTag: setSelectedTag,\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RowsLoading, {}, void 0, false, void 0, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        tags: tags,\n                                        className: \"w-full flex-1\",\n                                        selectedTag: selectedTag,\n                                        setSelectedTag: setSelectedTag,\n                                        selectedProject: selectedProject,\n                                        setSelectedProject: setSelectedProject\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 86,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29yay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRWE7QUFTVDtBQUNFO0FBRS9CLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQU8sRUFBRTtJQUN6QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQU8sRUFBRTtJQUMvQyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUM3QyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDYSxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBNkI7SUFFbkYsTUFBTWUsVUFBVTtRQUNkLE1BQU1DLFdBQXFCLEVBQUU7UUFDN0JYLEtBQUtZLEdBQUcsQ0FBQ0MsQ0FBQUE7WUFDUCxNQUFNQyxlQUF5QkQsT0FBTyxDQUFDLE9BQU87WUFDOUNDLGFBQWFGLEdBQUcsQ0FBQ0csQ0FBQUE7Z0JBQ2YsSUFBSSxDQUFDSixTQUFTSyxRQUFRLENBQUNELE1BQU1KLFNBQVNNLElBQUksQ0FBQ0Y7WUFDN0M7UUFDRjtRQUNBVixRQUFRTTtJQUNWO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLElBQUlNLEtBQUtrQixNQUFNLEdBQUcsR0FBRztZQUNuQixNQUFNQyxlQUFxQixFQUFFO1lBQzdCLElBQUlDLHlCQUFrQztZQUN0Q3BCLEtBQUtZLEdBQUcsQ0FBQ0MsQ0FBQUE7Z0JBQ1AsTUFBTUMsZUFBeUJELE9BQU8sQ0FBQyxPQUFPO2dCQUM5QyxJQUFJQyxhQUFhRSxRQUFRLENBQUNWLGNBQWM7d0JBQ25CRTtvQkFBbkIsSUFBSUssUUFBUVEsRUFBRSxPQUFLYixtQkFBQUEsNkJBQUFBLHVDQUFBQSxpQkFBaUJhLEVBQUUsR0FBRUQseUJBQXlCO29CQUNqRUQsYUFBYUYsSUFBSSxDQUFDSjtnQkFDcEI7WUFDRjtZQUNBLElBQUksQ0FBQ08sMEJBQTBCWixvQkFBb0IsTUFBTTtnQkFDdkRDLG1CQUFtQlUsWUFBWSxDQUFDLEVBQUU7WUFDcEM7WUFDQWhCLFdBQVdnQjtRQUNiO0lBQ0YsR0FBRztRQUFDYjtLQUFZO0lBRWhCWixnREFBU0EsQ0FBQztRQUNSLElBQUlNLEtBQUtrQixNQUFNLEdBQUcsR0FBR1I7SUFDdkIsR0FBRztRQUFDVjtLQUFLO0lBRVROLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTRCLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE1BQU0sTUFBTUYsU0FBU0csSUFBSTtnQkFDL0J6QixRQUFRd0IsR0FBRyxDQUFDLE9BQU87Z0JBQ25CdEIsV0FBV3NCLEdBQUcsQ0FBQyxPQUFPO1lBQ3hCLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDN0M7UUFDRjtRQUNBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDekIsOERBQU1BO1FBQUNnQyxXQUFXOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFXLFlBQWlFckIsT0FBckRBLGtCQUFrQixXQUFXLFNBQVEsa0JBQXlELE9BQXpDQSxrQkFBa0IsWUFBWSxZQUFXO2dCQUF5QmEsSUFBSTs7a0NBQ3JKLDhEQUFDUzt3QkFBSUMsT0FBTzs0QkFBRUMsWUFBWTs0QkFBaUJDLFlBQVk7NEJBQVVDLFdBQVc7d0JBQVE7d0JBQUdMLFdBQVc7a0NBQTZCOzs7Ozs7a0NBQzdILDhEQUFDQzt3QkFBSUQsV0FBWTtrQ0FDZiw0RUFBQ0M7NEJBQUlELFdBQVc7OzhDQUNaLDhEQUFDakMsMkNBQVFBO29DQUFDdUMsd0JBQVUsOERBQUNDOzhDQUNuQiw0RUFBQzNDLDREQUFJQTt3Q0FBQ1csTUFBTUE7d0NBQU15QixXQUFZO3dDQUFnQnZCLGFBQWFBO3dDQUFhQyxnQkFBZ0JBO3dDQUFnQkMsaUJBQWlCQTt3Q0FBaUJDLG9CQUFvQkE7Ozs7Ozs7Ozs7OzhDQUVoSyw4REFBQ2IsMkNBQVFBO29DQUFDdUMsd0JBQVUsOERBQUNFOzhDQUNuQiw0RUFBQzVDLDREQUFJQTt3Q0FBQ1csTUFBTUE7d0NBQU15QixXQUFZO3dDQUFnQnZCLGFBQWFBO3dDQUFhQyxnQkFBZ0JBO3dDQUFnQkMsaUJBQWlCQTt3Q0FBaUJDLG9CQUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPektELGdDQUFrQiw4REFBQ1YsK0RBQU9BO2dCQUFDd0MsYUFBYTlCO2dCQUFpQnFCLFdBQVc7Z0JBQXdHckIsaUJBQWlCQTtnQkFBaUJDLG9CQUFvQkE7Ozs7O3VCQUF3Qjs7Ozs7OztBQUdqUTtHQTFFd0JWO0tBQUFBO0FBNEV4QixTQUFTcUM7SUFDUCxxQkFDRSw4REFBQ047UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNPO0FBTVQsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ1A7UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93b3JrLnRzeD9hMjliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWdzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVGFncydcbmltcG9ydCBSb3dzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUm93cydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSdcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlU2Nyb2xsLFxuICB1c2VTcHJpbmcsXG4gIHVzZVRyYW5zZm9ybSxcbiAgTW90aW9uVmFsdWVcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IExheW91dCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQcmV2aWV3IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yaygpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZTxEYXRhPihbXSk7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGU8c3RyaW5nPignQWxsJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XG5cbiAgY29uc3QgZ2V0VGFncyA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdfbGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgIHByb2plY3RfdGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgaWYgKCF0YWdfbGlzdC5pbmNsdWRlcyh0YWcpKSB0YWdfbGlzdC5wdXNoKHRhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRUYWdzKHRhZ19saXN0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGlzcGxheV9kYXRhOiBEYXRhID0gW107XG4gICAgICBsZXQgZm91bmRfc2VsZWN0ZWRfcHJvamVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgICAgaWYgKHByb2plY3RfdGFncy5pbmNsdWRlcyhzZWxlY3RlZFRhZykpIHtcbiAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0Py5pZCkgZm91bmRfc2VsZWN0ZWRfcHJvamVjdCA9IHRydWU7XG4gICAgICAgICAgZGlzcGxheV9kYXRhLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFmb3VuZF9zZWxlY3RlZF9wcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoZGlzcGxheV9kYXRhWzBdKTtcbiAgICAgIH1cbiAgICAgIHNldERpc3BsYXkoZGlzcGxheV9kYXRhKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFRhZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkgZ2V0VGFncygpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jc3YnKTtcbiAgICAgICAgY29uc3QgY3N2ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGNzdltcImJvZHlcIl0pO1xuICAgICAgICBzZXREaXNwbGF5KGNzdltcImJvZHlcIl0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgQ1NWIGRhdGE6ICcsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17J3ctZnVsbCBoLWZ1bGwgcmVsYXRpdmUnfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6YmxvY2sgJHtzZWxlY3RlZFByb2plY3QgPyAnaGlkZGVuJyA6ICdibG9jayd9IGZpeGVkIGxlZnQtMCAke3NlbGVjdGVkUHJvamVjdCA/ICd3LVsyNSVdJyA6ICd3LVsxMDAlXSd9IHBsLTggcHItNCBzZWxlY3Qtbm9uZWB9IGlkPXsncHJvamVjdHMnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnSW50ZXItUmVndWxhcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnfX0gY2xhc3NOYW1lPXtcInRleHQtNXhsIGxnOnRleHQtNnhsIHBiLTRcIn0+V29yazwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvd2B9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwnfT5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxUYWdzTG9hZGluZy8+fT5cbiAgICAgICAgICAgICAgICAgIDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxSb3dzTG9hZGluZy8+fT5cbiAgICAgICAgICAgICAgICAgIDxUYWdzIHRhZ3M9e3RhZ3N9IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LTFgfSBzZWxlY3RlZFRhZz17c2VsZWN0ZWRUYWd9IHNldFNlbGVjdGVkVGFnPXtzZXRTZWxlY3RlZFRhZ30gc2VsZWN0ZWRQcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9IHNldFNlbGVjdGVkUHJvamVjdD17c2V0U2VsZWN0ZWRQcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgICB7Lyoge3RhZ3MgPyA8VGFncyB0YWdzPXt0YWdzfSBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleC0xYH0gc2VsZWN0ZWRUYWc9e3NlbGVjdGVkVGFnfSBzZXRTZWxlY3RlZFRhZz17c2V0U2VsZWN0ZWRUYWd9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IDxUYWdzTG9hZGluZy8+fSAqL31cbiAgICAgICAgICAgICAgICB7Lyoge2RhdGEgPyA8Um93cyBkYXRhPXtkaXNwbGF5fSBjbGFzc05hbWU9eyd3LWZ1bGwgZmxleC0xIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IG51bGx9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gPFByZXZpZXcgcHJvamVjdERhdGE9e3NlbGVjdGVkUHJvamVjdH0gY2xhc3NOYW1lPXsndy1bMTAwJV0gaC1bMTAwJV0gbGc6dy1bNzQlXSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gVGFnc0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZGB9Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUm93c0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZGB9Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiVGFncyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VzcGVuc2UiLCJMYXlvdXQiLCJQcmV2aWV3IiwiV29yayIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJnZXRUYWdzIiwidGFnX2xpc3QiLCJtYXAiLCJwcm9qZWN0IiwicHJvamVjdF90YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJwdXNoIiwibGVuZ3RoIiwiZGlzcGxheV9kYXRhIiwiZm91bmRfc2VsZWN0ZWRfcHJvamVjdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNzdiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwiZmFsbGJhY2siLCJUYWdzTG9hZGluZyIsIlJvd3NMb2FkaW5nIiwicHJvamVjdERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});