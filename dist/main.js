/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/completionSwitcher.js":
/*!***********************************!*\
  !*** ./src/completionSwitcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleCompletionStatus: () => (/* binding */ toggleCompletionStatus)\n/* harmony export */ });\nfunction toggleCompletionStatus(todo) {\n    todo.completionStatus = !todo.completionStatus\n}\n\n//# sourceURL=webpack://todolist/./src/completionSwitcher.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject() {\n    class project {\n        constructor (title) {\n            this.title = title\n            this.todos = []\n        }\n        addTodo(todo) {\n            this.todos.push(todo);\n        }\n    }\n    const defaultProject = new project(\"To-Do\")\n    return {project, defaultProject}\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTodo: () => (/* binding */ defaultTodo),\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n    constructor(title, description, dueDate, priority, notes) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.completionStatus = false\n    }\n}\nconst defaultTodo = new todo(\"Default Todo\", \"Default description\", \"Default due date\", \"low\", \"Default notes\");\n\n\n\n//# sourceURL=webpack://todolist/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _prioritySwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prioritySwitcher */ \"./src/prioritySwitcher.js\");\n/* harmony import */ var _completionSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completionSwitcher */ \"./src/completionSwitcher.js\");\n\n\n\n\n\n\nlet { project, defaultProject } = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)();\n\n\nlet todo1 = new _createTodo__WEBPACK_IMPORTED_MODULE_0__.todo(\"Homework\", \"right now\", \"before I die\", \"high\", \"heel moeilijk\");\nlet todo2 = new _createTodo__WEBPACK_IMPORTED_MODULE_0__.todo(\"Monkey\", \"rn\", \"before I die\", \"low\", \"niet zo moeilijk\");\nlet todo3 = new _createTodo__WEBPACK_IMPORTED_MODULE_0__.todo(\"Get money\", \"always\", \"2024\", \"high\", \"best lastig\", false)\n\ndefaultProject.addTodo(todo1);\ndefaultProject.addTodo(todo2);\nconsole.log(defaultProject);\n\n(0,_prioritySwitcher__WEBPACK_IMPORTED_MODULE_2__.setPriorityToLow)(todo1)\nconsole.log(todo1)\n\nconsole.log(todo3)\n;(0,_prioritySwitcher__WEBPACK_IMPORTED_MODULE_2__.setPriorityToMedium)(todo3)\n;(0,_completionSwitcher__WEBPACK_IMPORTED_MODULE_3__.toggleCompletionStatus)(todo3)\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/prioritySwitcher.js":
/*!*********************************!*\
  !*** ./src/prioritySwitcher.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setPriorityToHigh: () => (/* binding */ setPriorityToHigh),\n/* harmony export */   setPriorityToLow: () => (/* binding */ setPriorityToLow),\n/* harmony export */   setPriorityToMedium: () => (/* binding */ setPriorityToMedium)\n/* harmony export */ });\n\nfunction setPriorityToLow(todo) {\n    todo.priority = 'low';\n}\n\nfunction setPriorityToMedium(todo) {\n    todo.priority = 'medium';\n}\n\nfunction setPriorityToHigh(todo) {\n    todo.priority = 'high';\n}\n\n\n//# sourceURL=webpack://todolist/./src/prioritySwitcher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;