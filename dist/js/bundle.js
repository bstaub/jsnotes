/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/client-service/Storage.js":
/*!******************************************!*\
  !*** ./src/js/client-service/Storage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Storage = exports.Storage = function () {\n    function Storage(notes) {\n        _classCallCheck(this, Storage);\n\n        this.NOTES_KEY = notes;\n    }\n\n    _createClass(Storage, [{\n        key: \"saveNotesToLocalStorage\",\n        value: function saveNotesToLocalStorage(_ref) {\n            var title = _ref.title,\n                description = _ref.description,\n                importance = _ref.importance,\n                datepicker = _ref.datepicker;\n\n\n            var note = {\n                title: title.value,\n                description: description.value,\n                importance: importance.value,\n                datepicker: datepicker.value\n            };\n\n            var notes = [];\n            notes.push(note);\n\n            if (this.checkIfLocalStorageEmpty()) {\n                this.setItemToLocalStorage(notes);\n            } else {\n                this.appendOneNoteToLocalStorage(notes);\n            }\n        }\n    }, {\n        key: \"appendOneNoteToLocalStorage\",\n        value: function appendOneNoteToLocalStorage(notes) {\n            var stored = this.getItemFromLocalStorage();\n            stored.push(notes);\n            localStorage.setItem(this.NOTES_KEY, JSON.stringify(stored));\n        }\n    }, {\n        key: \"checkIfLocalStorageEmpty\",\n        value: function checkIfLocalStorageEmpty() {\n            return this.getItemFromLocalStorage() === null;\n        }\n    }, {\n        key: \"getAllNotesFromLocalStorage\",\n        value: function getAllNotesFromLocalStorage() {\n            return this.getItemFromLocalStorage();\n        }\n    }, {\n        key: \"getItemFromLocalStorage\",\n        value: function getItemFromLocalStorage() {\n            return JSON.parse(localStorage.getItem(this.NOTES_KEY));\n        }\n    }, {\n        key: \"setItemToLocalStorage\",\n        value: function setItemToLocalStorage(notes) {\n            localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));\n        }\n    }]);\n\n    return Storage;\n}();\n\n//# sourceURL=webpack:///./src/js/client-service/Storage.js?");

/***/ }),

/***/ "./src/js/controller/Controller.js":
/*!*****************************************!*\
  !*** ./src/js/controller/Controller.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Controller = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Storage = __webpack_require__(/*! ../client-service/Storage */ \"./src/js/client-service/Storage.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = exports.Controller = function () {\n    function Controller() {\n        _classCallCheck(this, Controller);\n    }\n\n    _createClass(Controller, [{\n        key: 'start',\n        value: function start() {\n            console.log('controller is connected');\n        }\n    }, {\n        key: 'registerAllEventListener',\n        value: function registerAllEventListener(dom) {\n            var _this = this;\n\n            dom.speichern.addEventListener('click', function () {\n                console.log('button speichern, clicked!');\n\n                var checkIfEmpty = _this.checkIfNoEmptyFields(dom);\n\n                if (checkIfEmpty) {\n                    var storage = new _Storage.Storage('notesKey1');\n                    storage.saveNotesToLocalStorage(dom);\n                }\n            });\n\n            dom.cancel.addEventListener('click', function () {\n                console.log('button cancel, clicked!');\n\n                _this.clearAllImputs(dom);\n            });\n        }\n    }, {\n        key: 'clearAllImputs',\n        value: function clearAllImputs(dom) {\n            dom.title.value = \"\";\n            dom.description.value = \"\";\n            dom.importance.value = \"\";\n            dom.datepicker.value = \"\";\n        }\n    }, {\n        key: 'checkIfNoEmptyFields',\n        value: function checkIfNoEmptyFields(dom) {\n            if (dom.title.value != \"\" && dom.description.value != \"\" && dom.importance.value != \"\" && dom.datepicker.value != \"\") {\n                return true;\n            }\n        }\n    }]);\n\n    return Controller;\n}();\n\n//# sourceURL=webpack:///./src/js/controller/Controller.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _View = __webpack_require__(/*! ./view/View */ \"./src/js/view/View.js\");\n\nvar _Controller = __webpack_require__(/*! ./controller/Controller */ \"./src/js/controller/Controller.js\");\n\nfunction start() {\n    var view = new _View.View();\n    var dom = view.queryAllDomObjects();\n\n    var contr = new _Controller.Controller();\n    if (dom) {\n        contr.registerAllEventListener(dom);\n    }\n}\n\nstart();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/view/View.js":
/*!*****************************!*\
  !*** ./src/js/view/View.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.View = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ViewHelper = __webpack_require__(/*! ./ViewHelper */ \"./src/js/view/ViewHelper.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = exports.View = function () {\n    function View() {\n        _classCallCheck(this, View);\n    }\n\n    _createClass(View, [{\n        key: \"start\",\n        value: function start() {\n            console.log('view is connected');\n        }\n    }, {\n        key: \"queryAllDomObjects\",\n        value: function queryAllDomObjects() {\n            var DOM = {\n                title: document.querySelector(\"#jsTitle\"),\n                description: document.querySelector(\"#jsDescription\"),\n                importance: document.querySelector('#jsdropImportance'),\n                datepicker: document.querySelector('#jsDatepicker'),\n                speichern: document.querySelector(\"#jsSpeichern\"),\n                cancel: document.querySelector(\"#jsCancel\")\n            };\n\n            if (_ViewHelper.ViewHelper.checkDomNoNullValueExist(DOM)) {\n                return DOM;\n            }\n\n            /*\n            if(DOM.title  || DOM.description || DOM.speichern || DOM.cancel){\n                return DOM;\n            }\n            */\n        }\n    }]);\n\n    return View;\n}();\n\n//# sourceURL=webpack:///./src/js/view/View.js?");

/***/ }),

/***/ "./src/js/view/ViewHelper.js":
/*!***********************************!*\
  !*** ./src/js/view/ViewHelper.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewHelper = exports.ViewHelper = function () {\n    function ViewHelper() {\n        _classCallCheck(this, ViewHelper);\n\n        console.log(StaticMethodCall.staticMethod());\n    }\n\n    _createClass(ViewHelper, null, [{\n        key: 'staticMethod',\n        value: function staticMethod() {\n            return 'static method has been called.';\n        }\n    }, {\n        key: 'checkDomNoNullValueExist',\n        value: function checkDomNoNullValueExist(dom) {\n            if (Object.values(dom).indexOf(null) == -1) {\n                return true;\n            }\n        }\n    }]);\n\n    return ViewHelper;\n}();\n\n//# sourceURL=webpack:///./src/js/view/ViewHelper.js?");

/***/ })

/******/ });