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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Storage = exports.Storage = function () {\n    function Storage(notes) {\n        _classCallCheck(this, Storage);\n\n        this.NOTES_KEY = notes;\n    }\n\n    _createClass(Storage, [{\n        key: 'saveNotesToLocalStorage',\n        value: function saveNotesToLocalStorage(_ref) {\n            var title = _ref.title,\n                description = _ref.description,\n                importance = _ref.importance,\n                datepicker = _ref.datepicker;\n\n\n            var note = {\n                title: title.value,\n                description: description.value,\n                importance: importance.value,\n                datepicker: datepicker.value,\n                statusActive: true\n            };\n\n            if (this.checkIfLocalStorageEmpty()) {\n                var firstnote = [];\n                firstnote.push(note);\n                this.setItemToLocalStorage(firstnote);\n            } else {\n                this.appendOneNoteToLocalStorage(note);\n            }\n        }\n    }, {\n        key: 'saveStyleToLocalStorage',\n        value: function saveStyleToLocalStorage(style) {\n            this.setItemToLocalStorage(style);\n        }\n    }, {\n        key: 'appendOneNoteToLocalStorage',\n        value: function appendOneNoteToLocalStorage(notes) {\n            var stored = this.getItemFromLocalStorage();\n            stored.push(notes);\n            localStorage.setItem(this.NOTES_KEY, JSON.stringify(stored));\n        }\n    }, {\n        key: 'checkIfLocalStorageEmpty',\n        value: function checkIfLocalStorageEmpty() {\n            return this.getItemFromLocalStorage() === null;\n        }\n    }, {\n        key: 'getAllNotesFromLocalStorage',\n        value: function getAllNotesFromLocalStorage() {\n            console.log('3getAllNotesFromLocalStorage');\n            return this.getItemFromLocalStorage();\n        }\n    }, {\n        key: 'getItemFromLocalStorage',\n        value: function getItemFromLocalStorage() {\n            console.log('4getItemFromLocalStorage');\n            return JSON.parse(localStorage.getItem(this.NOTES_KEY));\n        }\n    }, {\n        key: 'setItemToLocalStorage',\n        value: function setItemToLocalStorage(notes) {\n            localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));\n        }\n    }]);\n\n    return Storage;\n}();\n\n//# sourceURL=webpack:///./src/js/client-service/Storage.js?");

/***/ }),

/***/ "./src/js/controller/Controller.js":
/*!*****************************************!*\
  !*** ./src/js/controller/Controller.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Controller = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Storage = __webpack_require__(/*! ../client-service/Storage */ \"./src/js/client-service/Storage.js\");\n\nvar _ViewHelper = __webpack_require__(/*! ../view/ViewHelper */ \"./src/js/view/ViewHelper.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = exports.Controller = function () {\n    function Controller() {\n        _classCallCheck(this, Controller);\n    }\n\n    _createClass(Controller, [{\n        key: \"start\",\n        value: function start() {\n            console.log('controller is connected');\n        }\n    }, {\n        key: \"registerAllEventListener\",\n        value: function registerAllEventListener(dom) {\n            var _this = this;\n\n            if (dom.speichern) {\n                dom.speichern.addEventListener('click', function () {\n                    console.log('button speichern, clicked!');\n\n                    var checkIfEmpty = _this.checkIfNoEmptyFields(dom);\n\n                    if (checkIfEmpty) {\n                        var storage = new _Storage.Storage('notesKey');\n                        storage.saveNotesToLocalStorage(dom);\n                        _ViewHelper.ViewHelper.showAlert3Seconds('Eintrag erfolgreich eingetragen', 'alert success');\n                    }\n                });\n            }\n\n            if (dom.cancel) {\n                dom.cancel.addEventListener('click', function () {\n                    console.log('button cancel, clicked!');\n\n                    _this.clearAllImputs(dom);\n                });\n            }\n        }\n    }, {\n        key: \"getAllNotesFromLocalStorage\",\n        value: function getAllNotesFromLocalStorage() {\n            console.log('2getAllNotesFromLocalStorage');\n            var storage = new _Storage.Storage('notesKey');\n            return storage.getAllNotesFromLocalStorage();\n        }\n    }, {\n        key: \"clearAllImputs\",\n        value: function clearAllImputs(dom) {\n            dom.title.value = \"\";\n            dom.description.value = \"\";\n            dom.importance.value = \"\";\n            dom.datepicker.value = \"\";\n            _ViewHelper.ViewHelper.wichtigkeitClearAll(dom.stars);\n        }\n    }, {\n        key: \"checkIfNoEmptyFields\",\n        value: function checkIfNoEmptyFields(dom) {\n            if (dom.title.value != \"\" && dom.description.value != \"\" && dom.importance.value != \"\" && dom.datepicker.value != \"\") {\n                return true;\n            }\n        }\n    }]);\n\n    return Controller;\n}();\n\n//# sourceURL=webpack:///./src/js/controller/Controller.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ViewNew = __webpack_require__(/*! ./view/ViewNew */ \"./src/js/view/ViewNew.js\");\n\nvar _Controller = __webpack_require__(/*! ./controller/Controller */ \"./src/js/controller/Controller.js\");\n\nvar _ViewList = __webpack_require__(/*! ./view/ViewList */ \"./src/js/view/ViewList.js\");\n\nfunction start() {\n\n    var viewnew = new _ViewNew.ViewNew();\n    var domnew = viewnew.queryAllDomObjects();\n\n    var viewlist = new _ViewList.ViewList();\n    var domlist = viewlist.queryAllDomObjects();\n\n    if (domlist) {\n        viewlist.generateListView(domlist);\n    }\n\n    var controller = new _Controller.Controller();\n    if (domnew) {\n        controller.registerAllEventListener(domnew);\n    }\n}\n\nstart();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/view/ViewHelper.js":
/*!***********************************!*\
  !*** ./src/js/view/ViewHelper.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ViewHelper = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Storage = __webpack_require__(/*! ../client-service/Storage */ \"./src/js/client-service/Storage.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewHelper = exports.ViewHelper = function () {\n    function ViewHelper() {\n        _classCallCheck(this, ViewHelper);\n\n        console.log(StaticMethodCall.staticMethod());\n    }\n\n    _createClass(ViewHelper, null, [{\n        key: \"staticMethod\",\n        value: function staticMethod() {\n            return 'static method has been called.';\n        }\n    }, {\n        key: \"checkDomNoNullValueExist\",\n        value: function checkDomNoNullValueExist(dom) {\n            if (Object.values(dom).indexOf(null) == -1) {\n                return true;\n            }\n        }\n    }, {\n        key: \"wichtigkeitClearAll\",\n        value: function wichtigkeitClearAll(stars) {\n            stars.forEach(function (greyicon) {\n                greyicon.classList.remove(\"yellow\");\n            });\n        }\n    }, {\n        key: \"wichtigkeit\",\n        value: function wichtigkeit(_ref) {\n            var stars = _ref.stars,\n                importance = _ref.importance;\n\n            if (stars && importance) {\n                stars.forEach(function (item, index) {\n                    item.addEventListener('click', function (e) {\n                        ViewHelper.wichtigkeitClearAll(stars);\n                        importance.options.selectedIndex = index;\n                        e.target.classList.toggle(\"yellow\");\n                        for (var i = 0; i < index; i++) {\n                            stars[i].classList.add(\"yellow\");\n                        }\n                    });\n                });\n            }\n        }\n    }, {\n        key: \"styleSwitcher\",\n        value: function styleSwitcher() {\n            var dropStyleSwitcher = document.getElementById('dropStyleSwitcher');\n            var homebody = document.getElementsByTagName('body')[0];\n            if (dropStyleSwitcher) {\n                dropStyleSwitcher.addEventListener('change', function () {\n                    //((dropStyleSwitcher.value).toString() === \"styleWhite\") ? homebody.classList.add(\"style2\") : homebody.classList.remove(\"style2\");\n\n                    var storage = new _Storage.Storage('styleKey');\n\n                    if (dropStyleSwitcher.value.toString() === 'styleWhite') {\n                        homebody.classList.add('style2');\n                        storage.saveStyleToLocalStorage('style2');\n                    } else {\n                        homebody.classList.remove('style2');\n                        storage.saveStyleToLocalStorage('default');\n                    }\n                });\n            }\n        }\n    }, {\n        key: \"showAlert3Seconds\",\n        value: function showAlert3Seconds(message, alert) {\n            //Create DOM Element for Alert Message\n            var div = document.createElement('div');\n            var note = document.querySelector('.note');\n            div.className = alert;\n            var alertSuccess = document.createTextNode(message);\n            div.appendChild(alertSuccess);\n            document.querySelector('.detail').insertBefore(div, note); //https://www.mediaevent.de/javascript/insertbefore.html\n            div.style.display = 'block'; //show div again\n            setTimeout(function () {\n                div.style.display = 'none';\n                div.innerHTML = '';\n            }, 3000);\n        }\n    }]);\n\n    return ViewHelper;\n}();\n\n//# sourceURL=webpack:///./src/js/view/ViewHelper.js?");

/***/ }),

/***/ "./src/js/view/ViewList.js":
/*!*********************************!*\
  !*** ./src/js/view/ViewList.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ViewList = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ViewHelper = __webpack_require__(/*! ./ViewHelper */ \"./src/js/view/ViewHelper.js\");\n\nvar _Controller = __webpack_require__(/*! ../controller/Controller */ \"./src/js/controller/Controller.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewList = exports.ViewList = function () {\n    function ViewList() {\n        _classCallCheck(this, ViewList);\n    }\n\n    _createClass(ViewList, [{\n        key: \"queryAllDomObjects\",\n        value: function queryAllDomObjects() {\n            var DOM = {\n                dropStyleSwitcher: document.querySelector(\"#dropStyleSwitcher\"),\n                dynamicList: document.querySelector(\".item--main-content\")\n            };\n\n            _ViewHelper.ViewHelper.styleSwitcher(DOM);\n\n            if (_ViewHelper.ViewHelper.checkDomNoNullValueExist(DOM)) {\n                return DOM;\n            }\n        }\n    }, {\n        key: \"generateListView\",\n        value: function generateListView(_ref) {\n            var dynamicList = _ref.dynamicList;\n\n            console.log('1generateListView');\n            var controller = new _Controller.Controller();\n            var allnotes = controller.getAllNotesFromLocalStorage();\n\n            console.log(allnotes);\n\n            var div = document.createElement('div');\n            //div.classList.add('note');\n\n            if (allnotes) {\n                var notes = allnotes.map(function (note, i) {\n                    return \"<div class=\\\"note\\\">\\n                    <div class=\\\"listDateStatus\\\">\\n                        <p>\" + note.datepicker + \"</p>\\n                        <p><input id=\\\"checkBox\\\" type=\\\"checkbox\\\"> Finished</p>\\n                    </div>\\n                    <div class=\\\"listTitleDescriptionImportance\\\">\\n                        <div class=\\\"flexTitleImportance\\\">\\n                            <div class=\\\"title\\\">\\n                                <p>\" + note.title + \"</p>\\n                            </div>\\n                            <div class=\\\"importance\\\">\\n                                <select name=\\\"dropImportance\\\" class=\\\"dropImportance\\\">\\n                                    <option value=\\\"1\\\">1</option>\\n                                    <option value=\\\"2\\\">2</option>\\n                                    <option value=\\\"3\\\">3</option>\\n                                    <option value=\\\"4\\\">4</option>\\n                                    <option value=\\\"5\\\">5</option>\\n                                </select>\\n                            </div>\\n                        </div>\\n                        <textarea class=\\\"description\\\" name=\\\"description\\\" cols=\\\"30\\\" rows=\\\"6\\\">\" + note.description + \"</textarea>\\n                    </div>\\n                    <div class=\\\"listActionButton\\\">\\n                        <button>Edit \" + (i + 1) + \"</button>\\n                    </div>\\n                </div>\";\n                });\n            }\n\n            div.innerHTML = notes.join(\"\"); //remove comma from list\n\n            if (dynamicList) {\n                dynamicList.appendChild(div);\n            }\n        }\n    }]);\n\n    return ViewList;\n}();\n\n//# sourceURL=webpack:///./src/js/view/ViewList.js?");

/***/ }),

/***/ "./src/js/view/ViewNew.js":
/*!********************************!*\
  !*** ./src/js/view/ViewNew.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ViewNew = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ViewHelper = __webpack_require__(/*! ./ViewHelper */ \"./src/js/view/ViewHelper.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewNew = exports.ViewNew = function () {\n    function ViewNew() {\n        _classCallCheck(this, ViewNew);\n    }\n\n    _createClass(ViewNew, [{\n        key: \"start\",\n        value: function start() {\n            console.log('view is connected');\n        }\n    }, {\n        key: \"queryAllDomObjects\",\n        value: function queryAllDomObjects() {\n            var DOM = {\n                title: document.querySelector(\"#jsTitle\"),\n                description: document.querySelector(\"#jsDescription\"),\n                importance: document.querySelector('#jsdropImportance'),\n                stars: document.querySelectorAll('.importance span'),\n                datepicker: document.querySelector('#jsDatepicker'),\n                speichern: document.querySelector(\"#jsSpeichern\"),\n                cancel: document.querySelector(\"#jsCancel\")\n            };\n\n            _ViewHelper.ViewHelper.wichtigkeit(DOM);\n\n            if (_ViewHelper.ViewHelper.checkDomNoNullValueExist(DOM)) {\n                return DOM;\n            }\n        }\n    }]);\n\n    return ViewNew;\n}();\n\n//# sourceURL=webpack:///./src/js/view/ViewNew.js?");

/***/ })

/******/ });