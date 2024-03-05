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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0px;\n    padding: 0px;\n}\nbody {\n    \nbackground: linear-gradient(133deg, rgba(35,187,73,1) 28%, rgba(0,212,255,1) 100%);\n}\n\n#maincontent {\nheight: 90vh;\nwidth: 95vw;\nbackground-color: #e9e5de;\nmargin: 40px;\ndisplay: grid;\ngrid-template-columns: 2fr 4fr;\n\n}\n\n#projects {\n    grid-column: 1 / 2;\n    background-color: pink;\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    \n}\n\n#todos {\n    background-color: grey;\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n}\n#addProjectBtn {\n    width: 6rem;\n    height: 3rem;\n    margin: 1rem;\n    background-color: blue;\n    color: white;\n    font-size: large;\n}\n\n#addTodoBtn {\n    width: 6rem;\n    height: 3rem;\n    margin: 1rem;\n    background-color: red;\n    color: white;\n    font-size: large;\n}\n.projectbuttons { \n    flex-wrap: wrap;\n    width: 6rem;\n    height: 3rem;\n    margin: 1rem;\n}\n\n#projectDialogCloseButton {\n    height: 2rem;\n    width: 2rem;\n    background-color: blueviolet;\n}\n\ndialog #projectdialog {\n    display: grid;\n    grid-template-rows: 1fr 6fr;\n    height: 0rem;\n    width: 30rem;\n}\n\n#projectform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n::backdrop {\n    background-color: darkgrey;\n    opacity: 70%;\n}\n\n#visibleprojectmodal {\n    background-color: lightblue;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    \n}\n\n    .projectmodalclosebtn {\n        width: 10rem;\n        height: 5rem;\n        background-color: red;\n        font-size: xx-large;\n    }\n\n    #projectmodalname {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 20%;\n        width: 50%;\n        font-size: x-large;\n    }\n\n    #projectmodaltodos {\n        background-color: white;\n        height: 100%;\n        width: 70%;\n        display: flex;\n        flex-direction: column;\n        justify-self: flex-start;\n        align-items: center;\n    }\n\n    #deleteprojectbtn {\n        background-color: purple; \n        width: 10rem;\n        height: 5rem;\n\n    }\n    \n\n    #todoform {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #todoDialogCloseButton {\n            height: 2rem;\n            width: 2rem;\n            background-color: blueviolet;\n        }\n  \n    #projectmodaladdtodobtn {\n        margin-top: 2rem;\n        width: 10rem;\n        height: 5rem;\n        background-color: green;\n        font-size: xx-large;\n\n    }\n\n    .tododiv {\n        display: flex;\n        flex-direction: row-reverse;\n        justify-content: space-around;\n        align-items: center;\n        width: 100%;\n        height: 2rem;\n        background-color: grey;\n        font-size: x-large;\n    }\n\n    .delete-todo-btn {\n        \n        width: 10rem;\n        height: 80%;\n        background-color: red;\n        font-size: large;\n    \n    }\n\n    .expand-todo-div {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        background-color: grey;\n        height: 100%;\n        width: 100%;\n        \n    }\n\n    .close-todo-button { \n        width: 10rem;\n        height: 10rem;\n        background-color: green;\n        font-size: large;\n    }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/AddTodoBtnFunc.js":
/*!*******************************!*\
  !*** ./src/AddTodoBtnFunc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoBtnFunc: () => (/* binding */ addTodoBtnFunc)\n/* harmony export */ });\nfunction addTodoBtnFunc() {\n    let addTodoBtn = document.getElementById(\"projectmodaladdtodobtn\")\n    let todoDialog = document.getElementById(\"todoDialog\")\n    let todoDialogCloseBtn = document.getElementById(\"todoDialogCloseButton\")\n    let todoTitle = document.getElementById(\"todoTitle\")\n    let todoDescription = document.getElementById(\"todoDescription\")\n    let todoDueDate = document.getElementById(\"dueDate\")\n    let todoPriority = document.getElementById(\"priority\")\n    let todoNotes = document.getElementById(\"notes\")\n    addTodoBtn.addEventListener(\"click\", function(){\n        todoDialog.showModal()\n    })\n\n    todoDialogCloseBtn.addEventListener(\"click\", function() {\n        todoDialog.close()\n        todoTitle.value = \"\"\n        todoDescription.value = \"\"\n        todoDueDate.value = \"\"\n        todoPriority.value = \"\"\n        todoNotes.value = \"\"\n    })\n}\n\n//# sourceURL=webpack://todolist/./src/AddTodoBtnFunc.js?");

/***/ }),

/***/ "./src/addBtnFunc.js":
/*!***************************!*\
  !*** ./src/addBtnFunc.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBtnFunc: () => (/* binding */ addBtnFunc)\n/* harmony export */ });\n\nfunction addBtnFunc() {\n  //verkrijg projects div\n  let projects = document.getElementById(\"projects\");\n  //create addProjectButton\n  let addProjectBtn = document.createElement(\"button\");\n  addProjectBtn.id = \"addProjectBtn\";\n  addProjectBtn.textContent = \"Add Project\";\n  //append die button aan projects div.\n  projects.append(addProjectBtn);\n\n  //maak button om dialog te closen van het maken van projecten en zorg ervoor dat hij werkt. \n  let projectDialog = document.getElementById(\"projectdialog\")\n  let projectDialogCloseBtn = document.getElementById(\"projectDialogCloseButton\")\n  let projectTitle = document.getElementById(\"projectTitle\")\n  addProjectBtn.addEventListener(\"click\", function() {\n    projectDialog.showModal()\n  })\n\n  //zorg er voor dat de dialog ook weer geclosed kan worden. \n  projectDialogCloseBtn.addEventListener(\"click\", function() {\n    projectDialog.close()\n    projectTitle.value = \"\"\n  })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/addBtnFunc.js?");

/***/ }),

/***/ "./src/closeModal.js":
/*!***************************!*\
  !*** ./src/closeModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal)\n/* harmony export */ });\nfunction closeModal() {\n    let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\n    showprojectmodal.style.display = \"none\";\n    let projectmodalname = document.getElementById(\"projectmodalname\");\n    projectmodalname.innerHTML = \"\";\n    let projectmodals = document.getElementById(\"projectmodaltodos\")\n    projectmodals.innerHTML = \"\"\n    \n}\n\n//# sourceURL=webpack://todolist/./src/closeModal.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nlet projectcounter = 0;\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.todos = [];\n        this.data = \"proj\" + projectcounter; // Assign data attribute\n        projectcounter++;\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n    constructor(title, description, dueDate, priority, notes) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.completionStatus = false\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/createTodo.js?");

/***/ }),

/***/ "./src/deleteTodoButtonFunc.js":
/*!*************************************!*\
  !*** ./src/deleteTodoButtonFunc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodoButtonFunc: () => (/* binding */ deleteTodoButtonFunc)\n/* harmony export */ });\n\nfunction deleteTodoButtonFunc(){\n    let deleteTodoButtons = document.getElementsByClassName(\"delete-todo-btn\")\n\n    for (let i = 0; i < deleteTodoButtons.length; i++) {\n        deleteTodoButtons[i].addEventListener(\"click\", function(event){\n            let buttondata = event.target.getAttribute(\"data-delete-button\")\n            console.log(buttondata)\n        })\n    }\n    \n\n}\n\n//# sourceURL=webpack://todolist/./src/deleteTodoButtonFunc.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject)\n/* harmony export */ });\nfunction displayProject(name) {\n    let projectdiv = document.getElementById(\"projects\")\n    let projectbutton = document.createElement(\"button\")\n    projectbutton.classList.add(\"projectbuttons\")\n    projectbutton.innerText = name;\n\n    projectdiv.append(projectbutton)\n    \n}\n\n//# sourceURL=webpack://todolist/./src/displayProject.js?");

/***/ }),

/***/ "./src/displaytodos.js":
/*!*****************************!*\
  !*** ./src/displaytodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displaytodos: () => (/* binding */ displaytodos),\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _deleteTodoButtonFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTodoButtonFunc */ \"./src/deleteTodoButtonFunc.js\");\n\n\n\n\nlet project;\n\nfunction displaytodos() {\n    let projectmodaltododiv = document.getElementById(\"projectmodaltodos\");\n    projectmodaltododiv.innerHTML = \"\"; // Clear existing content before displaying todos\n\n    let projectName = document.getElementById(\"projectmodalname\").innerText;\n    project = ___WEBPACK_IMPORTED_MODULE_0__[\"default\"][projectName]; // Assign the project variable\n\n    let deletecounter = 0;\n\n    for (let i = 0; i < project.todos.length; i++) {\n        let tododiv = document.createElement(\"div\");\n        let tododivdeletebutton = document.createElement(\"button\");\n        tododivdeletebutton.innerHTML = \"Delete todo\";\n        tododivdeletebutton.classList.add(\"delete-todo-btn\")\n        tododivdeletebutton.setAttribute(\"data-delete-button\", deletecounter); // Add a class for styling or event handling\n        deletecounter++\n        tododiv.classList.add(\"tododiv\");\n        tododiv.appendChild(tododivdeletebutton); // Append the delete button to tododiv\n\n        if (project.todos[i].title) {\n            let titleElement = document.createElement(\"span\");\n            titleElement.innerText = project.todos[i].title;\n            tododiv.appendChild(titleElement); // Append the title to tododiv\n        } else {\n            console.error(\"Title property is missing in todo object:\", project.todos[i]);\n        }\n\n        projectmodaltododiv.appendChild(tododiv);\n    }\n    (0,_deleteTodoButtonFunc__WEBPACK_IMPORTED_MODULE_1__.deleteTodoButtonFunc)()\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/displaytodos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _projectSubmitButtonFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSubmitButtonFunc.js */ \"./src/projectSubmitButtonFunc.js\");\n/* harmony import */ var _projectBtnFunc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectBtnFunc.js */ \"./src/projectBtnFunc.js\");\n/* harmony import */ var _addBtnFunc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addBtnFunc.js */ \"./src/addBtnFunc.js\");\n\n\n\n\n\n\n(0,_addBtnFunc_js__WEBPACK_IMPORTED_MODULE_3__.addBtnFunc)()\n;(0,_projectSubmitButtonFunc_js__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnFunc)()\n\nlet differentprojects = {} \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differentprojects);\nconsole.log(differentprojects, \"Dit is een object waar de projects in zitten.\")\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectBtnFunc.js":
/*!*******************************!*\
  !*** ./src/projectBtnFunc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectBtnFunc: () => (/* binding */ addProjectBtnFunc)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _AddTodoBtnFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodoBtnFunc */ \"./src/AddTodoBtnFunc.js\");\n/* harmony import */ var _todoSubmitBtnFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSubmitBtnFunc */ \"./src/todoSubmitBtnFunc.js\");\n/* harmony import */ var _displaytodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displaytodos */ \"./src/displaytodos.js\");\n/* harmony import */ var _projectSubmitButtonFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectSubmitButtonFunc */ \"./src/projectSubmitButtonFunc.js\");\n/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closeModal */ \"./src/closeModal.js\");\n\n \n\n\n\n\n\n\n\nfunction addProjectBtnFunc() {\n    let projectbuttons = document.getElementsByClassName(\"projectbuttons\");\n    let functionsAdded = false; // Initialize the flag\n    \n    function openModal(projectName) {\n        let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\n        if (showprojectmodal) {\n            showprojectmodal.style.display = \"inline-flex\";\n            let projectmodalname = document.getElementById(\"projectmodalname\");\n            projectmodalname.innerHTML = projectName; \n            (0,_displaytodos__WEBPACK_IMPORTED_MODULE_3__.displaytodos)()\n        }\n    }\n    \n    for (let i = 0; i < projectbuttons.length; i++) {\n        if (!projectbuttons[i].hasAttribute(\"data-clicked\")) {\n            projectbuttons[i].setAttribute(\"data-clicked\", \"true\");\n            projectbuttons[i].setAttribute(\"data-project-button\", _projectSubmitButtonFunc__WEBPACK_IMPORTED_MODULE_4__.createdProject.data)\n            console.log(\"great succes\")\n            \n            projectbuttons[i].addEventListener('click', function() {\n                let projectName = this.innerHTML;   \n                let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\n\n                if (!showprojectmodal) {\n                    showprojectmodal = document.createElement(\"div\");\n                    showprojectmodal.setAttribute(\"id\", \"visibleprojectmodal\");\n\n                    let projectmodalclosebtn = document.createElement(\"button\");\n                    projectmodalclosebtn.classList.add(\"projectmodalclosebtn\");\n                    projectmodalclosebtn.innerText = \"X\";\n                    projectmodalclosebtn.addEventListener(\"click\", _closeModal__WEBPACK_IMPORTED_MODULE_5__.closeModal);\n\n                    let projectmodaladdtodobtn = document.createElement(\"button\");\n                    projectmodaladdtodobtn.setAttribute(\"id\", \"projectmodaladdtodobtn\")\n                    projectmodaladdtodobtn.innerText = \"add todo\"\n                    \n                    let projectmodalname = document.createElement(\"div\");\n                    projectmodalname.setAttribute(\"id\", \"projectmodalname\");\n                    projectmodalname.innerHTML = projectName; \n\n                    let projectmodaltodos = document.createElement(\"div\")\n                    projectmodaltodos.setAttribute(\"id\", \"projectmodaltodos\")\n\n                    showprojectmodal.append(projectmodalclosebtn, projectmodaladdtodobtn, projectmodalname, projectmodaltodos, );\n                    \n                    let maincontent = document.getElementById(\"todos\");\n                    maincontent.appendChild(showprojectmodal);\n                }\n                \n                // Check if functions have already been added\n                if (!functionsAdded) {\n                    (0,_AddTodoBtnFunc__WEBPACK_IMPORTED_MODULE_1__.addTodoBtnFunc)();\n                    (0,_todoSubmitBtnFunc__WEBPACK_IMPORTED_MODULE_2__.todoSubmitBtnFunc)();\n                    functionsAdded = true; // Set the flag to true after adding functions\n                }\n                \n                projectmodaltodos.innerHTML = \"\"\n                openModal(projectName);\n                \n            });\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/projectBtnFunc.js?");

/***/ }),

/***/ "./src/projectSubmitButtonFunc.js":
/*!****************************************!*\
  !*** ./src/projectSubmitButtonFunc.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SubmitBtnFunc: () => (/* binding */ SubmitBtnFunc),\n/* harmony export */   createdProject: () => (/* binding */ createdProject)\n/* harmony export */ });\n/* harmony import */ var _projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBtnFunc */ \"./src/projectBtnFunc.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\n\n\nlet createdProject; \n\nfunction SubmitBtnFunc() {\n    let submitButton = document.getElementById(\"submitbutton\");\n    let projectTitle = document.getElementById(\"projectTitle\");\n    \n    submitButton.addEventListener(\"click\", handleClick);\n\n    function handleClick(event) {\n        event.preventDefault();\n\n        let titleNameInputValue = projectTitle.value;\n\n        projectdialog.close();\n        projectTitle.value = \"\";\n        \n        createdProject = new _createProject__WEBPACK_IMPORTED_MODULE_3__.Project(titleNameInputValue);\n        ___WEBPACK_IMPORTED_MODULE_2__[\"default\"][createdProject.title] = createdProject; // Use project title as the key\n\n        (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(titleNameInputValue);\n\n        (0,_projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__.addProjectBtnFunc)();\n        console.log(___WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/projectSubmitButtonFunc.js?");

/***/ }),

/***/ "./src/todoSubmitBtnFunc.js":
/*!**********************************!*\
  !*** ./src/todoSubmitBtnFunc.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTodo: () => (/* binding */ newTodo),\n/* harmony export */   todoSubmitBtnFunc: () => (/* binding */ todoSubmitBtnFunc)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _displaytodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaytodos */ \"./src/displaytodos.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\nlet newTodo;\nlet listeneradded = false;\n\nfunction todoSubmitBtnFunc() {\n    let todosubmitbutton = document.getElementById(\"todosubmitbutton\");\n    let tododialog = document.getElementById(\"todoDialog\");\n    let todoTitle = document.getElementById(\"todoTitle\");\n    let todoDescription = document.getElementById(\"todoDescription\");\n    let todoDueDate = document.getElementById(\"dueDate\");\n    let todoPriority = document.getElementsByName(\"priority\");\n    let todoNotes = document.getElementById(\"notes\");\n\n    if (!listeneradded) {\n        todosubmitbutton.addEventListener(\"click\", function (event) {\n            event.preventDefault();\n            console.log(\"eventlistener added!\");\n\n            let title = todoTitle.value;\n            let description = todoDescription.value;\n            let dueDate = todoDueDate.value;\n            let priority = null;\n            let notes = todoNotes.value;\n\n            for (let i = 0; i < todoPriority.length; i++) {\n                if (todoPriority[i].checked) {\n                    priority = todoPriority[i].value;\n                    break;\n                }\n            }\n\n            if (priority === null) {\n                console.error(\"No priority selected\");\n                return;\n            }\n\n            newTodo = new _createTodo__WEBPACK_IMPORTED_MODULE_0__.todo(title, description, dueDate, priority, notes);\n            console.log(newTodo);\n\n            // Find the correct project based on the project name\n            let projectName = document.getElementById(\"projectmodalname\").innerText;\n            let project = ___WEBPACK_IMPORTED_MODULE_2__[\"default\"][projectName];\n\n            if (project && Array.isArray(project.todos)) {\n                project.todos.push(newTodo);\n                console.log(project);\n            } else {\n                console.error(`Project ${projectName} or its todos is not properly defined`);\n            }\n\n            todoTitle.value = \"\";\n            todoDescription.value = \"\";\n            todoDueDate.value = \"\";\n            todoNotes.value = \"\";\n            todoPriority.forEach((radio) => (radio.checked = false));\n\n            tododialog.close();\n            (0,_displaytodos__WEBPACK_IMPORTED_MODULE_1__.displaytodos)();\n        });\n\n        listeneradded = true;\n        console.log(listeneradded);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/todoSubmitBtnFunc.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;