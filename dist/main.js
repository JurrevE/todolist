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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\nbody {\r\n    \r\nbackground: linear-gradient(133deg, rgba(35,187,73,1) 28%, rgba(0,212,255,1) 100%);\r\n}\r\n\r\n#maincontent {\r\nheight: 90vh;\r\nwidth: 95vw;\r\nbackground-color: #e9e5de;\r\nmargin: 40px;\r\ndisplay: grid;\r\ngrid-template-columns: 2fr 4fr;\r\n\r\n}\r\n\r\n#projects {\r\n    grid-column: 1 / 2;\r\n    background-color: pink;\r\n    margin: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n#todos {\r\n    background-color: grey;\r\n    margin: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n\r\n}\r\n#addProjectBtn {\r\n    width: 6rem;\r\n    height: 3rem;\r\n    margin: 1rem;\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: large;\r\n}\r\n\r\n#addTodoBtn {\r\n    width: 6rem;\r\n    height: 3rem;\r\n    margin: 1rem;\r\n    background-color: red;\r\n    color: white;\r\n    font-size: large;\r\n}\r\n.projectbuttons { \r\n    flex-wrap: wrap;\r\n    width: 6rem;\r\n    height: 3rem;\r\n    margin: 1rem;\r\n}\r\n\r\n#projectDialogCloseButton {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    background-color: blueviolet;\r\n}\r\n\r\ndialog #projectdialog {\r\n    display: grid;\r\n    grid-template-rows: 1fr 6fr;\r\n    height: 0rem;\r\n    width: 30rem;\r\n}\r\n\r\n#projectform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n::backdrop {\r\n    background-color: darkgrey;\r\n    opacity: 70%;\r\n}\r\n\r\n#visibleprojectmodal {\r\n    background-color: lightblue;\r\n    height: 100%;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\n    .projectmodalclosebtn {\r\n        width: 10rem;\r\n        height: 5rem;\r\n        background-color: red;\r\n        font-size: xx-large;\r\n    }\r\n\r\n    #projectmodalname {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 20%;\r\n        width: 50%;\r\n        font-size: x-large;\r\n    }\r\n\r\n    #projectmodaltodos {\r\n        background-color: white;\r\n        height: 100%;\r\n        width: 70%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-self: flex-start;\r\n        align-items: center;\r\n    }\r\n\r\n    #deleteprojectbtn {\r\n        background-color: purple; \r\n        width: 10rem;\r\n        height: 5rem;\r\n\r\n    }\r\n    \r\n\r\n    #todoform {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    #todoDialogCloseButton {\r\n            height: 2rem;\r\n            width: 2rem;\r\n            background-color: blueviolet;\r\n        }\r\n  \r\n    #projectmodaladdtodobtn {\r\n        margin-top: 2rem;\r\n        width: 10rem;\r\n        height: 5rem;\r\n        background-color: green;\r\n        font-size: xx-large;\r\n\r\n    }\r\n\r\n    .tododiv {\r\n        display: flex;\r\n        flex-direction: row-reverse;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        width: 100%;\r\n        height: 2rem;\r\n        background-color: grey;\r\n        font-size: x-large;\r\n    }\r\n\r\n    .expand-todo-btn {\r\n        \r\n        width: 10rem;\r\n        height: 80%;\r\n        background-color: green;\r\n        font-size: large;\r\n    \r\n    }\r\n\r\n    .expand-todo-div {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        background-color: grey;\r\n        height: 100%;\r\n        width: 100%;\r\n        \r\n    }\r\n\r\n    .close-todo-button { \r\n        width: 10rem;\r\n        height: 10rem;\r\n        background-color: green;\r\n        font-size: large;\r\n    }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoBtnFunc: () => (/* binding */ addTodoBtnFunc)\n/* harmony export */ });\n\r\nfunction addTodoBtnFunc() {\r\n    let addTodoBtn = document.getElementById(\"projectmodaladdtodobtn\")\r\n    let todoDialog = document.getElementById(\"todoDialog\")\r\n    let todoDialogCloseBtn = document.getElementById(\"todoDialogCloseButton\")\r\n    let todoTitle = document.getElementById(\"todoTitle\")\r\n    let todoDescription = document.getElementById(\"todoDescription\")\r\n    let todoDueDate = document.getElementById(\"dueDate\")\r\n    let todoPriority = document.getElementById(\"priority\")\r\n    let todoNotes = document.getElementById(\"notes\")\r\n    addTodoBtn.addEventListener(\"click\", function(){\r\n        todoDialog.showModal()\r\n    })\r\n\r\n    todoDialogCloseBtn.addEventListener(\"click\", function() {\r\n        todoDialog.close()\r\n        todoTitle.value = \"\"\r\n        todoDescription.value = \"\"\r\n        todoDueDate.value = \"\"\r\n        todoPriority.value = \"\"\r\n        todoNotes.value = \"\"\r\n    })\r\n}\n\n//# sourceURL=webpack://todolist/./src/AddTodoBtnFunc.js?");

/***/ }),

/***/ "./src/addBtnFunc.js":
/*!***************************!*\
  !*** ./src/addBtnFunc.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBtnFunc: () => (/* binding */ addBtnFunc)\n/* harmony export */ });\n\r\nfunction addBtnFunc() {\r\n  let projects = document.getElementById(\"projects\");\r\n  let addProjectBtn = document.createElement(\"button\");\r\n  addProjectBtn.id = \"addProjectBtn\";\r\n  addProjectBtn.textContent = \"Add Project\";\r\n  projects.append(addProjectBtn);\r\n  let projectDialog = document.getElementById(\"projectdialog\")\r\n  let projectDialogCloseBtn = document.getElementById(\"projectDialogCloseButton\")\r\n  let projectTitle = document.getElementById(\"projectTitle\")\r\n  addProjectBtn.addEventListener(\"click\", function() {\r\n    projectDialog.showModal()\r\n  })\r\n\r\n  projectDialogCloseBtn.addEventListener(\"click\", function() {\r\n    projectDialog.close()\r\n    projectTitle.value = \"\"\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/addBtnFunc.js?");

/***/ }),

/***/ "./src/closeModal.js":
/*!***************************!*\
  !*** ./src/closeModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal)\n/* harmony export */ });\nfunction closeModal() {\r\n    let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\r\n    showprojectmodal.style.display = \"none\";\r\n    let projectmodalname = document.getElementById(\"projectmodalname\");\r\n    projectmodalname.innerHTML = \"\";\r\n    let projectmodals = document.getElementById(\"projectmodaltodos\")\r\n    projectmodals.innerHTML = \"\"\r\n    \r\n}\n\n//# sourceURL=webpack://todolist/./src/closeModal.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nlet projectcounter = 0;\r\n\r\nclass Project {\r\n    constructor(title) {\r\n        this.title = title;\r\n        this.todos = [];\r\n        this.data = \"proj\" + projectcounter; // Assign data attribute\r\n        projectcounter++;\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todos.push(todo);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\r\n    constructor(title, description, dueDate, priority, notes) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.notes = notes;\r\n        this.completionStatus = false\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/createTodo.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject)\n/* harmony export */ });\nfunction displayProject(name) {\r\n    let projectdiv = document.getElementById(\"projects\")\r\n    let projectbutton = document.createElement(\"button\")\r\n    projectbutton.classList.add(\"projectbuttons\")\r\n    projectbutton.innerText = name;\r\n\r\n    projectdiv.append(projectbutton)\r\n    \r\n}\n\n//# sourceURL=webpack://todolist/./src/displayProject.js?");

/***/ }),

/***/ "./src/displaytodos.js":
/*!*****************************!*\
  !*** ./src/displaytodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displaytodos: () => (/* binding */ displaytodos),\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _expandtodobtnfunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expandtodobtnfunc */ \"./src/expandtodobtnfunc.js\");\n\r\n\r\n\r\nlet project;\r\n\r\nfunction displaytodos() {\r\n    let projectmodaltododiv = document.getElementById(\"projectmodaltodos\");\r\n    projectmodaltododiv.innerHTML = \"\"; // Clear existing content before displaying todos\r\n\r\n    let projectName = document.getElementById(\"projectmodalname\").innerText;\r\n    project = ___WEBPACK_IMPORTED_MODULE_0__[\"default\"][projectName]; // Assign the project variable\r\n\r\n    let expandbuttoncounter = 0;\r\n\r\n    for (let i = 0; i < project.todos.length; i++) {\r\n        let tododiv = document.createElement(\"div\");\r\n        let tododivbutton = document.createElement(\"button\");\r\n        tododivbutton.innerHTML = \"Expand todo\";\r\n        tododivbutton.classList.add(\"expand-todo-btn\")\r\n        tododivbutton.setAttribute(\"data-expand-button\", expandbuttoncounter); // Add a class for styling or event handling\r\n        expandbuttoncounter++\r\n        tododiv.classList.add(\"tododiv\");\r\n        tododiv.appendChild(tododivbutton); // Append the delete button to tododiv\r\n\r\n        if (project.todos[i].title) {\r\n            let titleElement = document.createElement(\"span\");\r\n            titleElement.innerText = project.todos[i].title;\r\n            tododiv.appendChild(titleElement); // Append the title to tododiv\r\n        } else {\r\n            console.error(\"Title property is missing in todo object:\", project.todos[i]);\r\n        }\r\n\r\n        projectmodaltododiv.appendChild(tododiv);\r\n        (0,_expandtodobtnfunc__WEBPACK_IMPORTED_MODULE_1__.addexpandbtnfunc)();\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/displaytodos.js?");

/***/ }),

/***/ "./src/expandtodobtnfunc.js":
/*!**********************************!*\
  !*** ./src/expandtodobtnfunc.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addexpandbtnfunc: () => (/* binding */ addexpandbtnfunc)\n/* harmony export */ });\n/* harmony import */ var _projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBtnFunc */ \"./src/projectBtnFunc.js\");\n/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeModal */ \"./src/closeModal.js\");\n/* harmony import */ var _displaytodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaytodos */ \"./src/displaytodos.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nlet eventlisteneradded = false;\r\nfunction addexpandbtnfunc() {\r\n    let project = ___WEBPACK_IMPORTED_MODULE_3__[\"default\"][_projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__.projectName]\r\n    let expandtodobuttons = document.getElementsByClassName(\"expand-todo-btn\");\r\n    let expandtodospace = document.getElementById(\"todos\")\r\n\r\n    for (let i = 0; i < expandtodobuttons.length; i++) {\r\n        if (!eventlisteneradded) {\r\n            expandtodobuttons[i].addEventListener(\"click\", function() {\r\n                (0,_closeModal__WEBPACK_IMPORTED_MODULE_1__.closeModal)()\r\n                let todoinformationdiv = document.createElement(\"div\");\r\n                let todoinformationclosebutton = document.createElement(\"button\")\r\n\r\n                todoinformationdiv.classList.add(\"expand-todo-div\")\r\n                todoinformationclosebutton.classList.add(\"close-todo-button\")\r\n\r\n                todoinformationdiv.innerHTML = \"kanker\";\r\n                todoinformationclosebutton.innerHTML = \"close this todo\"\r\n                todoinformationclosebutton.addEventListener(\"click\", function(){ \r\n                    expandtodospace.innerHTML = \"\"\r\n                    ;(0,_projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__.addProjectBtnFunc)(_projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__.projectName)\r\n                    ;(0,_displaytodos__WEBPACK_IMPORTED_MODULE_2__.displaytodos)(project)\r\n                })\r\n                \r\n                todoinformationdiv.appendChild(todoinformationclosebutton)\r\n                expandtodospace.appendChild(todoinformationdiv);\r\n                \r\n                eventlisteneradded = true;\r\n            });\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/expandtodobtnfunc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _projectSubmitButtonFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSubmitButtonFunc.js */ \"./src/projectSubmitButtonFunc.js\");\n/* harmony import */ var _projectBtnFunc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectBtnFunc.js */ \"./src/projectBtnFunc.js\");\n/* harmony import */ var _addBtnFunc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addBtnFunc.js */ \"./src/addBtnFunc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_addBtnFunc_js__WEBPACK_IMPORTED_MODULE_3__.addBtnFunc)()\r\n;(0,_projectSubmitButtonFunc_js__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnFunc)()\r\n\r\nlet differentprojects = {} \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differentprojects);\r\nconsole.log(differentprojects, \"Dit is een object waar de projects in zitten.\")\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectBtnFunc.js":
/*!*******************************!*\
  !*** ./src/projectBtnFunc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectBtnFunc: () => (/* binding */ addProjectBtnFunc),\n/* harmony export */   projectName: () => (/* binding */ projectName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _AddTodoBtnFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodoBtnFunc */ \"./src/AddTodoBtnFunc.js\");\n/* harmony import */ var _todoSubmitBtnFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSubmitBtnFunc */ \"./src/todoSubmitBtnFunc.js\");\n/* harmony import */ var _displaytodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displaytodos */ \"./src/displaytodos.js\");\n/* harmony import */ var _projectSubmitButtonFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectSubmitButtonFunc */ \"./src/projectSubmitButtonFunc.js\");\n/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closeModal */ \"./src/closeModal.js\");\n\r\n \r\n\r\n\r\n\r\n\r\n\r\nlet projectName;\r\n\r\nfunction addProjectBtnFunc() {\r\n    let projectbuttons = document.getElementsByClassName(\"projectbuttons\");\r\n    let functionsAdded = false; // Initialize the flag\r\n    \r\n    function openModal(projectName) {\r\n        let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\r\n        if (showprojectmodal) {\r\n            showprojectmodal.style.display = \"inline-flex\";\r\n            let projectmodalname = document.getElementById(\"projectmodalname\");\r\n            projectmodalname.innerHTML = projectName; \r\n            (0,_displaytodos__WEBPACK_IMPORTED_MODULE_3__.displaytodos)()\r\n        }\r\n    }\r\n    \r\n\r\n    function deleteProject() {\r\n        let projectName = document.getElementById(\"projectmodalname\").innerText;\r\n    \r\n        let projectindex = ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(projectName);\r\n        if (projectindex !== -1) {\r\n            ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(projectindex, 1);\r\n        }\r\n    \r\n        let projectbuttons = document.getElementsByClassName(\"projectbuttons\");\r\n        for (let i = 0; i < projectbuttons.length; i++) {\r\n            if (projectbuttons[i].innerText === projectName) {\r\n                projectbuttons[i].parentNode.removeChild(projectbuttons[i]);\r\n                break; \r\n            }\r\n        }\r\n    \r\n        (0,_closeModal__WEBPACK_IMPORTED_MODULE_5__.closeModal)();\r\n        console.log(___WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    }\r\n    \r\n    for (let i = 0; i < projectbuttons.length; i++) {\r\n        if (!projectbuttons[i].hasAttribute(\"data-clicked\")) {\r\n            projectbuttons[i].setAttribute(\"data-clicked\", \"true\");\r\n            projectbuttons[i].setAttribute(\"data-project-button\", _projectSubmitButtonFunc__WEBPACK_IMPORTED_MODULE_4__.newProject.data)\r\n            \r\n            projectbuttons[i].addEventListener('click', function() {\r\n                let projectName = this.innerHTML; \r\n                let showprojectmodal = document.getElementById(\"visibleprojectmodal\");\r\n\r\n                if (!showprojectmodal) {\r\n                    showprojectmodal = document.createElement(\"div\");\r\n                    showprojectmodal.setAttribute(\"id\", \"visibleprojectmodal\");\r\n\r\n                    let projectmodalclosebtn = document.createElement(\"button\");\r\n                    projectmodalclosebtn.classList.add(\"projectmodalclosebtn\");\r\n                    projectmodalclosebtn.innerText = \"X\";\r\n                    projectmodalclosebtn.addEventListener(\"click\", _closeModal__WEBPACK_IMPORTED_MODULE_5__.closeModal);\r\n\r\n                    let projectmodaladdtodobtn = document.createElement(\"button\");\r\n                    projectmodaladdtodobtn.setAttribute(\"id\", \"projectmodaladdtodobtn\")\r\n                    projectmodaladdtodobtn.innerText = \"add todo\"\r\n                    \r\n                    let projectmodalname = document.createElement(\"div\");\r\n                    projectmodalname.setAttribute(\"id\", \"projectmodalname\");\r\n                    projectmodalname.innerHTML = projectName; \r\n\r\n                    let projectmodaltodos = document.createElement(\"div\")\r\n                    projectmodaltodos.setAttribute(\"id\", \"projectmodaltodos\")\r\n\r\n                    let deleteprojectbtn = document.createElement(\"button\");\r\n                    deleteprojectbtn.setAttribute(\"id\", \"deleteprojectbtn\");\r\n                    deleteprojectbtn.innerText = \"Delete project\";\r\n                    deleteprojectbtn.addEventListener(\"click\", deleteProject);\r\n\r\n                    showprojectmodal.append(projectmodalclosebtn, projectmodaladdtodobtn, projectmodalname, projectmodaltodos, deleteprojectbtn);\r\n                    \r\n                    let maincontent = document.getElementById(\"todos\");\r\n                    maincontent.appendChild(showprojectmodal);\r\n                }\r\n                \r\n                // Check if functions have already been added\r\n                if (!functionsAdded) {\r\n                    (0,_AddTodoBtnFunc__WEBPACK_IMPORTED_MODULE_1__.addTodoBtnFunc)();\r\n                    (0,_todoSubmitBtnFunc__WEBPACK_IMPORTED_MODULE_2__.todoSubmitBtnFunc)();\r\n                    functionsAdded = true; // Set the flag to true after adding functions\r\n                }\r\n                \r\n                projectmodaltodos.innerHTML = \"\"\r\n                openModal(projectName);\r\n                \r\n            });\r\n        }\r\n    }\r\n}\r\n \r\n\n\n//# sourceURL=webpack://todolist/./src/projectBtnFunc.js?");

/***/ }),

/***/ "./src/projectSubmitButtonFunc.js":
/*!****************************************!*\
  !*** ./src/projectSubmitButtonFunc.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SubmitBtnFunc: () => (/* binding */ SubmitBtnFunc),\n/* harmony export */   newProject: () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBtnFunc */ \"./src/projectBtnFunc.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\r\n\r\n\r\n\r\n\r\nlet newProject; \r\n\r\nfunction SubmitBtnFunc() {\r\n    let submitButton = document.getElementById(\"submitbutton\");\r\n    let projectTitle = document.getElementById(\"projectTitle\");\r\n    \r\n    submitButton.addEventListener(\"click\", handleClick);\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault();\r\n\r\n        let titleNameInputValue = projectTitle.value;\r\n\r\n        projectdialog.close();\r\n        projectTitle.value = \"\";\r\n        \r\n        newProject = new _createProject__WEBPACK_IMPORTED_MODULE_3__.Project(titleNameInputValue);\r\n        ___WEBPACK_IMPORTED_MODULE_2__[\"default\"][newProject.title] = newProject; // Use project title as the key\r\n\r\n        (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(titleNameInputValue);\r\n\r\n        (0,_projectBtnFunc__WEBPACK_IMPORTED_MODULE_0__.addProjectBtnFunc)();\r\n        console.log(___WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/projectSubmitButtonFunc.js?");

/***/ }),

/***/ "./src/todoSubmitBtnFunc.js":
/*!**********************************!*\
  !*** ./src/todoSubmitBtnFunc.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTodo: () => (/* binding */ newTodo),\n/* harmony export */   todoSubmitBtnFunc: () => (/* binding */ todoSubmitBtnFunc)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _displaytodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaytodos */ \"./src/displaytodos.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nlet newTodo;\r\nlet listeneradded = false;\r\n\r\nfunction todoSubmitBtnFunc() {\r\n    let todosubmitbutton = document.getElementById(\"todosubmitbutton\");\r\n    let tododialog = document.getElementById(\"todoDialog\");\r\n    let todoTitle = document.getElementById(\"todoTitle\");\r\n    let todoDescription = document.getElementById(\"todoDescription\");\r\n    let todoDueDate = document.getElementById(\"dueDate\");\r\n    let todoPriority = document.getElementsByName(\"priority\");\r\n    let todoNotes = document.getElementById(\"notes\");\r\n\r\n    if (!listeneradded) {\r\n        todosubmitbutton.addEventListener(\"click\", function (event) {\r\n            event.preventDefault();\r\n            console.log(\"eventlistener added!\");\r\n\r\n            let title = todoTitle.value;\r\n            let description = todoDescription.value;\r\n            let dueDate = todoDueDate.value;\r\n            let priority = null;\r\n            let notes = todoNotes.value;\r\n\r\n            for (let i = 0; i < todoPriority.length; i++) {\r\n                if (todoPriority[i].checked) {\r\n                    priority = todoPriority[i].value;\r\n                    break;\r\n                }\r\n            }\r\n\r\n            if (priority === null) {\r\n                console.error(\"No priority selected\");\r\n                return;\r\n            }\r\n\r\n            newTodo = new _createTodo__WEBPACK_IMPORTED_MODULE_0__.todo(title, description, dueDate, priority, notes);\r\n            console.log(newTodo);\r\n\r\n            // Find the correct project based on the project name\r\n            let projectName = document.getElementById(\"projectmodalname\").innerText;\r\n            let project = ___WEBPACK_IMPORTED_MODULE_2__[\"default\"][projectName];\r\n\r\n            if (project && Array.isArray(project.todos)) {\r\n                project.todos.push(newTodo);\r\n                console.log(project);\r\n            } else {\r\n                console.error(`Project ${projectName} or its todos is not properly defined`);\r\n            }\r\n\r\n            todoTitle.value = \"\";\r\n            todoDescription.value = \"\";\r\n            todoDueDate.value = \"\";\r\n            todoNotes.value = \"\";\r\n            todoPriority.forEach((radio) => (radio.checked = false));\r\n\r\n            tododialog.close();\r\n            (0,_displaytodos__WEBPACK_IMPORTED_MODULE_1__.displaytodos)();\r\n        });\r\n\r\n        listeneradded = true;\r\n        console.log(listeneradded);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/todoSubmitBtnFunc.js?");

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