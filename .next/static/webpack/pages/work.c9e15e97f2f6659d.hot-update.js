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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tags */ \"./src/app/components/Tags.tsx\");\n/* harmony import */ var _app_components_Rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Rows */ \"./src/app/components/Rows.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _app_components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Preview */ \"./src/app/components/Preview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Work() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getTags = ()=>{\n        const tag_list = [];\n        data.map((project)=>{\n            const project_tags = project[\"tags\"];\n            project_tags.map((tag)=>{\n                if (!tag_list.includes(tag)) tag_list.push(tag);\n            });\n        });\n        setTags(tag_list);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) {\n            const display_data = [];\n            let found_selected_project = false;\n            data.map((project)=>{\n                const project_tags = project[\"tags\"];\n                if (project_tags.includes(selectedTag)) {\n                    var _selectedProject;\n                    if (project.id === ((_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.id)) found_selected_project = true;\n                    display_data.push(project);\n                }\n            });\n            if (!found_selected_project && selectedProject !== null) {\n                setSelectedProject(display_data[0]);\n            }\n            setDisplay(display_data);\n        }\n    }, [\n        selectedTag\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data.length > 0) getTags();\n        getTags();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/csv\");\n                const csv = await response.json();\n                setData(csv[\"body\"]);\n                setDisplay(csv[\"body\"]);\n            } catch (error) {\n                console.error(\"Error fetching CSV data: \", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-full h-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:block \".concat(selectedProject ? \"hidden\" : \"block\", \" fixed left-0 \").concat(selectedProject ? \"w-[25%]\" : \"w-[100%]\", \" px-8 select-none\"),\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Inter-Regular\",\n                            fontWeight: \"normal\",\n                            fontStyle: \"normal\"\n                        },\n                        className: \"text-5xl lg:text-6xl pb-4\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full h-full\",\n                            children: [\n                                tags ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    tags: tags,\n                                    className: \"w-full flex-1\",\n                                    selectedTag: selectedTag,\n                                    setSelectedTag: setSelectedTag,\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Hello\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 207\n                                }, this),\n                                data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Rows__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: display,\n                                    className: \"w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                                    selectedProject: selectedProject,\n                                    setSelectedProject: setSelectedProject\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            selectedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectData: selectedProject,\n                className: \"w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar\",\n                selectedProject: selectedProject,\n                setSelectedProject: setSelectedProject\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n                lineNumber: 81,\n                columnNumber: 26\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Work, \"v++U3F2aeR7OmJWp4+fn6txA7ag=\");\n_c = Work;\nfunction TagsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagsLoading;\nfunction RowsLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md\"\n    }, void 0, false, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/pages/work.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RowsLoading;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"TagsLoading\");\n$RefreshReg$(_c2, \"RowsLoading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUE7b0NBQUNNLE1BQU1FO29DQUFTMkIsV0FBVztvQ0FBa0VyQixpQkFBaUJBO29DQUFpQkMsb0JBQW9CQTs7Ozs7MkNBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJak1ELGdDQUFrQiw4REFBQ1YsK0RBQU9BO2dCQUFDcUMsYUFBYTNCO2dCQUFpQnFCLFdBQVc7Z0JBQXdHckIsaUJBQWlCQTtnQkFBaUJDLG9CQUFvQkE7Ozs7O3VCQUF3Qjs7Ozs7OztBQUdqUTtHQXJFd0JWO0tBQUFBO0FBdUV4QixTQUFTcUM7SUFDUCxxQkFDRSw4REFBQ047UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNPO0FBTVQsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ1A7UUFBSUQsV0FBWTs7Ozs7O0FBRXJCO01BSlNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93b3JrLnRzeD9hMjliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWdzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVGFncydcbmltcG9ydCBSb3dzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUm93cydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRhLCBQcm9qZWN0IH0gZnJvbSAnQC9hcHAvdHlwZXMvRGF0YSdcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlU2Nyb2xsLFxuICB1c2VTcHJpbmcsXG4gIHVzZVRyYW5zZm9ybSxcbiAgTW90aW9uVmFsdWVcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IExheW91dCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQcmV2aWV3IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yaygpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YT4oW10pO1xuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZTxEYXRhPihbXSk7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGU8c3RyaW5nPignQWxsJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XG5cbiAgY29uc3QgZ2V0VGFncyA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdfbGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgIHByb2plY3RfdGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgaWYgKCF0YWdfbGlzdC5pbmNsdWRlcyh0YWcpKSB0YWdfbGlzdC5wdXNoKHRhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRUYWdzKHRhZ19saXN0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGlzcGxheV9kYXRhOiBEYXRhID0gW107XG4gICAgICBsZXQgZm91bmRfc2VsZWN0ZWRfcHJvamVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfdGFnczogc3RyaW5nW10gPSBwcm9qZWN0W1widGFnc1wiXTtcbiAgICAgICAgaWYgKHByb2plY3RfdGFncy5pbmNsdWRlcyhzZWxlY3RlZFRhZykpIHtcbiAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0Py5pZCkgZm91bmRfc2VsZWN0ZWRfcHJvamVjdCA9IHRydWU7XG4gICAgICAgICAgZGlzcGxheV9kYXRhLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFmb3VuZF9zZWxlY3RlZF9wcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoZGlzcGxheV9kYXRhWzBdKTtcbiAgICAgIH1cbiAgICAgIHNldERpc3BsYXkoZGlzcGxheV9kYXRhKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFRhZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkgZ2V0VGFncygpO1xuICAgIGdldFRhZ3MoKTtcbiAgfSwgW2RhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3N2Jyk7XG4gICAgICAgIGNvbnN0IGNzdiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShjc3ZbXCJib2R5XCJdKTtcbiAgICAgICAgc2V0RGlzcGxheShjc3ZbXCJib2R5XCJdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIENTViBkYXRhOiAnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9eyd3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGxnOmJsb2NrICR7c2VsZWN0ZWRQcm9qZWN0ID8gJ2hpZGRlbicgOiAnYmxvY2snfSBmaXhlZCBsZWZ0LTAgJHtzZWxlY3RlZFByb2plY3QgPyAndy1bMjUlXScgOiAndy1bMTAwJV0nfSBweC04IHNlbGVjdC1ub25lYH0gaWQ9eydwcm9qZWN0cyd9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdJbnRlci1SZWd1bGFyJywgZm9udFdlaWdodDogJ25vcm1hbCcsIGZvbnRTdHlsZTogJ25vcm1hbCd9fSBjbGFzc05hbWU9e1widGV4dC01eGwgbGc6dGV4dC02eGwgcGItNFwifT5Xb3JrPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCd9PlxuICAgICAgICAgICAgICAgIHt0YWdzID8gPFRhZ3MgdGFncz17dGFnc30gY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgtMWB9IHNlbGVjdGVkVGFnPXtzZWxlY3RlZFRhZ30gc2V0U2VsZWN0ZWRUYWc9e3NldFNlbGVjdGVkVGFnfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiA8ZGl2PkhlbGxvPC9kaXY+fVxuICAgICAgICAgICAgICAgIHtkYXRhID8gPFJvd3MgZGF0YT17ZGlzcGxheX0gY2xhc3NOYW1lPXsndy1mdWxsIGZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXInfSBzZWxlY3RlZFByb2plY3Q9e3NlbGVjdGVkUHJvamVjdH0gc2V0U2VsZWN0ZWRQcm9qZWN0PXtzZXRTZWxlY3RlZFByb2plY3R9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gPFByZXZpZXcgcHJvamVjdERhdGE9e3NlbGVjdGVkUHJvamVjdH0gY2xhc3NOYW1lPXsndy1bMTAwJV0gaC1bMTAwJV0gbGc6dy1bNzQlXSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIG5vLXNjcm9sbGJhcid9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPiA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gVGFnc0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC01IG1kOmgtMTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZGB9Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUm93c0xvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xNiBtZDpoLTY0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWRgfS8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlRhZ3MiLCJSb3dzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQcmV2aWV3IiwiV29yayIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJnZXRUYWdzIiwidGFnX2xpc3QiLCJtYXAiLCJwcm9qZWN0IiwicHJvamVjdF90YWdzIiwidGFnIiwiaW5jbHVkZXMiLCJwdXNoIiwibGVuZ3RoIiwiZGlzcGxheV9kYXRhIiwiZm91bmRfc2VsZWN0ZWRfcHJvamVjdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNzdiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwicHJvamVjdERhdGEiLCJUYWdzTG9hZGluZyIsIlJvd3NMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});