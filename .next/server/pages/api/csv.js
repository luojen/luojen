"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/csv";
exports.ids = ["pages/api/csv"];
exports.modules = {

/***/ "papaparse":
/*!****************************!*\
  !*** external "papaparse" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("papaparse");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/csv.tsx":
/*!*******************************!*\
  !*** ./src/pages/api/csv.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ \"papaparse\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"data\", \"work_data.csv\");\n    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf-8\");\n    const parsedContent = papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(fileContent, {\n        header: true\n    });\n    const body = parsedContent.data;\n    // parse tags\n    for (const project of body){\n        const tags_unparsed = project.tags.toString();\n        const tags_split = tags_unparsed.split(\",\");\n        const tags_parsed = tags_split.map((tag)=>tag.trim());\n        project.tags = tags_parsed;\n    }\n    const response = {\n        body: body,\n        message: \"Succesfully accessed database\"\n    };\n    res.status(200).json(response);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Nzdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtQjtBQUNlO0FBQ047QUFHYixTQUFTRyxRQUFRQyxHQUFRLEVBQUVDLEdBQXVIO0lBQy9KLE1BQU1DLFdBQVdMLGdEQUFTLENBQUNPLFFBQVFDLEdBQUcsSUFBSSxVQUFVLFFBQVE7SUFDNUQsTUFBTUMsY0FBY1Ysc0RBQWUsQ0FBQ00sVUFBVTtJQUM5QyxNQUFNTSxnQkFBZ0JWLHNEQUFVLENBQUNRLGFBQWE7UUFDNUNJLFFBQVE7SUFDVjtJQUNBLE1BQU1DLE9BQWFILGNBQWNJLElBQUk7SUFDckMsYUFBYTtJQUNiLEtBQUssTUFBTUMsV0FBV0YsS0FBTTtRQUMxQixNQUFNRyxnQkFBZ0JELFFBQVFFLElBQUksQ0FBQ0MsUUFBUTtRQUMzQyxNQUFNQyxhQUFhSCxjQUFjSSxLQUFLLENBQUM7UUFDdkMsTUFBTUMsY0FBY0YsV0FBV0csR0FBRyxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO1FBQ2xEVCxRQUFRRSxJQUFJLEdBQUdJO0lBQ2pCO0lBQ0EsTUFBTUksV0FBVztRQUNmWixNQUFNQTtRQUNOYSxTQUFTO0lBQ1g7SUFDQXZCLElBQUl3QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wYWdlcy9hcGkvY3N2LnRzeD9jOTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoLCB7IHBhcnNlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBQYXBhIGZyb20gXCJwYXBhcGFyc2VcIlxuaW1wb3J0IHsgRGF0YSwgUHJvamVjdCB9IGZyb20gJ0AvYXBwL3R5cGVzL0RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogYW55LCByZXM6IHsgc3RhdHVzOiAoYXJnMDogbnVtYmVyKSA9PiB7ICgpOiBhbnk7IG5ldygpOiBhbnk7IGpzb246IHsgKGFyZzA6IHsgbWVzc2FnZTogc3RyaW5nOyB9KTogdm9pZDsgbmV3KCk6IGFueTsgfTsgfTsgfSkge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ2RhdGEnLCAnd29ya19kYXRhLmNzdicpO1xuICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0Zi04Jyk7XG4gIGNvbnN0IHBhcnNlZENvbnRlbnQgPSBQYXBhLnBhcnNlKGZpbGVDb250ZW50LCB7XG4gICAgaGVhZGVyOiB0cnVlXG4gIH0pO1xuICBjb25zdCBib2R5OiBEYXRhID0gcGFyc2VkQ29udGVudC5kYXRhIGFzIERhdGE7XG4gIC8vIHBhcnNlIHRhZ3NcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGJvZHkpIHtcbiAgICBjb25zdCB0YWdzX3VucGFyc2VkID0gcHJvamVjdC50YWdzLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdGFnc19zcGxpdCA9IHRhZ3NfdW5wYXJzZWQuc3BsaXQoJywnKTtcbiAgICBjb25zdCB0YWdzX3BhcnNlZCA9IHRhZ3Nfc3BsaXQubWFwKHRhZyA9PiB0YWcudHJpbSgpKTsgXG4gICAgcHJvamVjdC50YWdzID0gdGFnc19wYXJzZWQ7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgYm9keTogYm9keSxcbiAgICBtZXNzYWdlOiBcIlN1Y2Nlc2Z1bGx5IGFjY2Vzc2VkIGRhdGFiYXNlXCIsIFxuICB9O1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiUGFwYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJwYXJzZWRDb250ZW50IiwicGFyc2UiLCJoZWFkZXIiLCJib2R5IiwiZGF0YSIsInByb2plY3QiLCJ0YWdzX3VucGFyc2VkIiwidGFncyIsInRvU3RyaW5nIiwidGFnc19zcGxpdCIsInNwbGl0IiwidGFnc19wYXJzZWQiLCJtYXAiLCJ0YWciLCJ0cmltIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/csv.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/csv.tsx"));
module.exports = __webpack_exports__;

})();