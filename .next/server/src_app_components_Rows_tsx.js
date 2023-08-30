"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_app_components_Rows_tsx";
exports.ids = ["src_app_components_Rows_tsx"];
exports.modules = {

/***/ "./src/app/components/Row.tsx":
/*!************************************!*\
  !*** ./src/app/components/Row.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Row)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Row({ className, project, selectedProject, setSelectedProject }) {\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [columnOne, setColumnOne] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [columnTwo, setColumnTwo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (tags.length > 0) {\n            const midpoint = Math.ceil(tags.length / 2);\n            setColumnOne(tags.slice(0, midpoint));\n            setColumnTwo(tags.slice(midpoint));\n        }\n    }, [\n        tags\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (project?.id == \"downballot\") {\n            setColor(\"bg-blue-400\");\n        } else if (project?.id == \"impart\") {\n            setColor(\"bg-yellow-400\");\n        }\n    }, [\n        project?.color\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (project?.tags) {\n            const edited_tags = project.tags.filter((tag)=>tag !== \"All\");\n            setTags(edited_tags);\n        }\n    }, [\n        project\n    ]);\n    const handleClick = ()=>{\n        if (selectedProject?.id === project?.id) {\n            setSelectedProject(null);\n        } else {\n            setSelectedProject(project);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: ``,\n            whileHover: {\n                scale: 1.02,\n                transition: {\n                    duration: 0.25\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: `flex flex-row items-start pb-3 ${selectedProject?.id === project?.id ? \"bg-black text-white\" : \"\"}`,\n                    onClick: handleClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: `mr-5 mt-3 ml-3`,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: `w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 ${color} rounded-md`\n                            }, void 0, false, {\n                                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 55\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col pr-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl lg:text-2xl pt-2\",\n                                    style: {\n                                        fontFamily: \"Inter-Semibold\",\n                                        fontWeight: \"bold\",\n                                        fontStyle: \"normal\"\n                                    },\n                                    children: project && project[\"name\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm lg:text-base align-end whitespace-nowrap\",\n                                    children: [\n                                        \"——\",\n                                        project && project[\"year\"]\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        selectedProject === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: `hidden sm:block`,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-2 text-sm w-60 flex flex-row\",\n                                children: tags.length > 3 ? // Two columns\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-1/2\",\n                                            children: columnOne.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: item\n                                                }, index, false, {\n                                                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 45\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-1/2\",\n                                            children: columnTwo.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: item\n                                                }, index, false, {\n                                                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 45\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true) : // Single column\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: tags?.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: tag\n                                        }, index, false, {\n                                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 45\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-px bg-black\"\n                }, void 0, false, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Row.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNQyxzQkFDbEIsOERBQUNiOzhEQUNJWTttREFES0M7Ozs7Ozs7Ozs7O21EQU9sQixnQkFBZ0I7OENBQ2hCLDhEQUFDYjtvQ0FBSXRCLFdBQVc7OENBQ1hJLE1BQU02QixJQUFJLENBQUNiLEtBQUtlLHNCQUNiLDhEQUFDYjtzREFBaUJGOzJDQUFSZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUXRDLDhEQUFDYjtvQkFBSXRCLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXBwL2NvbXBvbmVudHMvUm93LnRzeD85Y2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIG1vdGlvbixcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlU3ByaW5nLFxuICAgIHVzZVRyYW5zZm9ybSxcbiAgICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJztcblxudHlwZSBSb3dQcm9wcyA9IHtcbiAgICBwcm9qZWN0PzogUHJvamVjdCxcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgc2VsZWN0ZWRQcm9qZWN0OiBQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBzZXRTZWxlY3RlZFByb2plY3Q6IChwcm9qZWN0OiBQcm9qZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gdm9pZCwgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdyh7IGNsYXNzTmFtZSwgcHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfTogUm93UHJvcHMpIHtcblxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW2NvbHVtbk9uZSwgc2V0Q29sdW1uT25lXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW2NvbHVtblR3bywgc2V0Q29sdW1uVHdvXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtaWRwb2ludCA9IE1hdGguY2VpbCh0YWdzLmxlbmd0aCAvIDIpO1xuICAgICAgICAgICAgc2V0Q29sdW1uT25lKHRhZ3Muc2xpY2UoMCwgbWlkcG9pbnQpKTtcbiAgICAgICAgICAgIHNldENvbHVtblR3byh0YWdzLnNsaWNlKG1pZHBvaW50KSk7XG4gICAgICAgIH1cbiAgICB9LCBbdGFnc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3Q/LmlkID09ICdkb3duYmFsbG90Jykge1xuICAgICAgICAgICAgc2V0Q29sb3IoJ2JnLWJsdWUtNDAwJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvamVjdD8uaWQgPT0gXCJpbXBhcnRcIikge1xuICAgICAgICAgICAgc2V0Q29sb3IoJ2JnLXllbGxvdy00MDAnKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9qZWN0Py5jb2xvcl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3Q/LnRhZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZF90YWdzID0gcHJvamVjdC50YWdzLmZpbHRlcigodGFnKSA9PiB0YWcgIT09ICdBbGwnKTtcbiAgICAgICAgICAgIHNldFRhZ3MoZWRpdGVkX3RhZ3MpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb2plY3RdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0Py5pZCA9PT0gcHJvamVjdD8uaWQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGB9XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMDIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yNSB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQgcGItMyAke3NlbGVjdGVkUHJvamVjdD8uaWQgPT09IHByb2plY3Q/LmlkID8gJ2JnLWJsYWNrIHRleHQtd2hpdGUnIDogJyd9YH0gb25DbGljaz17aGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICAgICAgICAgICAgey8qIEljb24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXItNSBtdC0zIG1sLTNgfT48ZGl2IGNsYXNzTmFtZT17YHctMTAgaC0xMCBtZDp3LTEwIG1kOmgtMTAgbGc6dy0xNCBsZzpoLTE0ICR7Y29sb3J9IHJvdW5kZWQtbWRgfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaXRsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBmbGV4LWNvbCBwci02XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtMnhsIGxnOnRleHQtMnhsIHB0LTJcIn0gc3R5bGU9e3sgZm9udEZhbWlseTogJ0ludGVyLVNlbWlib2xkJywgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U3R5bGU6ICdub3JtYWwnfX0+e3Byb2plY3QgJiYgcHJvamVjdFtcIm5hbWVcIl19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtc20gbGc6dGV4dC1iYXNlIGFsaWduLWVuZCB3aGl0ZXNwYWNlLW5vd3JhcFwifT7igJTigJR7cHJvamVjdCAmJiBwcm9qZWN0W1wieWVhclwiXX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogRGl2aWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleC1ncm93XCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRhZ3MgKi99XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgPT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoaWRkZW4gc206YmxvY2tgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwdC0yIHRleHQtc20gdy02MCBmbGV4IGZsZXgtcm93XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFncy5sZW5ndGggPiAzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHdvIGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbk9uZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uVHdvLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5nbGUgY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWdzPy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57dGFnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGwgaC1weCBiZy1ibGFja1wifS8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm93IiwiY2xhc3NOYW1lIiwicHJvamVjdCIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInRhZ3MiLCJzZXRUYWdzIiwiY29sdW1uT25lIiwic2V0Q29sdW1uT25lIiwiY29sdW1uVHdvIiwic2V0Q29sdW1uVHdvIiwiY29sb3IiLCJzZXRDb2xvciIsImxlbmd0aCIsIm1pZHBvaW50IiwiTWF0aCIsImNlaWwiLCJzbGljZSIsImlkIiwiZWRpdGVkX3RhZ3MiLCJmaWx0ZXIiLCJ0YWciLCJoYW5kbGVDbGljayIsImRpdiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9uQ2xpY2siLCJwIiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/Row.tsx\n");

/***/ }),

/***/ "./src/app/components/Rows.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Rows.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rows)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ \"./src/app/components/Row.tsx\");\n\n\nfunction Rows({ className, data, selectedProject, setSelectedProject }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${className} min-w-[235px]`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `w-full h-px bg-black`\n            }, void 0, false, {\n                fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Rows.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this),\n            data?.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    project: project,\n                    selectedProject: selectedProject,\n                    setSelectedProject: setSelectedProject\n                }, index, false, {\n                    fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Rows.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luojen/Desktop/luojen/src/app/components/Rows.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvUm93cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVN3QjtBQVVULFNBQVNDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQWE7SUFFNUYscUJBQ0ksOERBQUNDO1FBQUlKLFdBQVcsQ0FBQyxFQUFFQSxVQUFVLGNBQWMsQ0FBQzs7MEJBQ3BDLDhEQUFDSTtnQkFBSUosV0FBVyxDQUFDLG9CQUFvQixDQUFDOzs7Ozs7WUFDckNDLE1BQU1JLElBQUksQ0FBQ0MsU0FBU0Msc0JBQ2pCLDhEQUFDVCw0Q0FBR0E7b0JBQWFRLFNBQVNBO29CQUFTSixpQkFBaUJBO29CQUFpQkMsb0JBQW9CQTttQkFBL0VJOzs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hcHAvY29tcG9uZW50cy9Sb3dzLnRzeD9kYWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIG1vdGlvbixcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlU3ByaW5nLFxuICAgIHVzZVRyYW5zZm9ybSxcbiAgICBNb3Rpb25WYWx1ZVxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm93IGZyb20gJy4vUm93JztcbmltcG9ydCB7IERhdGEsIFByb2plY3QgfSBmcm9tICdAL2FwcC90eXBlcy9EYXRhJztcblxudHlwZSBSb3dzUHJvcHMgPSB7XG4gICAgZGF0YT86IERhdGEsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIHNlbGVjdGVkUHJvamVjdDogUHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0OiAocHJvamVjdDogUHJvamVjdCB8IG51bGwgfCB1bmRlZmluZWQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm93cyh7IGNsYXNzTmFtZSwgZGF0YSwgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfTogUm93c1Byb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBtaW4tdy1bMjM1cHhdYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC1weCBiZy1ibGFja2B9Lz5cbiAgICAgICAgICAgICAgICB7ZGF0YT8ubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17aW5kZXh9IHByb2plY3Q9e3Byb2plY3R9IHNlbGVjdGVkUHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fSBzZXRTZWxlY3RlZFByb2plY3Q9e3NldFNlbGVjdGVkUHJvamVjdH0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSb3ciLCJSb3dzIiwiY2xhc3NOYW1lIiwiZGF0YSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsImRpdiIsIm1hcCIsInByb2plY3QiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/Rows.tsx\n");

/***/ })

};
;