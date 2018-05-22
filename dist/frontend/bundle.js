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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ViewNew = __webpack_require__(2);

var _Controller = __webpack_require__(5);

var _ControllerList = __webpack_require__(7);

var _ViewList = __webpack_require__(8);

__webpack_require__(9);

function start() {

    var viewnew = new _ViewNew.ViewNew();
    var domnew = viewnew.queryAllDomObjects();

    var viewlist = new _ViewList.ViewList();
    var domlist = viewlist.queryAllDomObjects();

    if (domlist) {
        viewlist.generateListView(domlist);
    }

    var controller = new _Controller.Controller();
    if (domnew) {
        controller.registerAllEventListener(domnew);
    }

    var controllerlist = new _ControllerList.ControllerList();
    if (domlist) {
        controllerlist.registerAllEventListener(domlist);
    }
}

start();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewNew = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewHelper = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewNew = exports.ViewNew = function () {
    function ViewNew() {
        _classCallCheck(this, ViewNew);
    }

    _createClass(ViewNew, [{
        key: "start",
        value: function start() {
            console.log('view is connected');
        }
    }, {
        key: "queryAllDomObjects",
        value: function queryAllDomObjects() {
            var DOM = {
                title: document.querySelector("#jsTitle"),
                description: document.querySelector("#jsDescription"),
                importance: document.querySelector('#jsdropImportance'),
                stars: document.querySelectorAll('.importance span'),
                datepicker: document.querySelector('#jsDatepicker'),
                speichern: document.querySelector("#jsSpeichern"),
                cancel: document.querySelector("#jsCancel")
            };

            _ViewHelper.ViewHelper.wichtigkeit(DOM);

            if (_ViewHelper.ViewHelper.checkDomNoNullValueExist(DOM)) {
                return DOM;
            }
        }
    }]);

    return ViewNew;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewHelper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Storage = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewHelper = exports.ViewHelper = function () {
    function ViewHelper() {
        _classCallCheck(this, ViewHelper);

        console.log(StaticMethodCall.staticMethod());
    }

    _createClass(ViewHelper, null, [{
        key: "staticMethod",
        value: function staticMethod() {
            return 'static method has been called.';
        }
    }, {
        key: "checkDomNoNullValueExist",
        value: function checkDomNoNullValueExist(dom) {
            if (Object.values(dom).indexOf(null) == -1) {
                return true;
            }
        }
    }, {
        key: "wichtigkeitClearAll",
        value: function wichtigkeitClearAll(stars) {
            stars.forEach(function (greyicon) {
                greyicon.classList.remove("yellow");
            });
        }
    }, {
        key: "wichtigkeit",
        value: function wichtigkeit(_ref) {
            var stars = _ref.stars,
                importance = _ref.importance;

            if (stars && importance) {
                stars.forEach(function (item, index) {
                    item.addEventListener('click', function (e) {
                        ViewHelper.wichtigkeitClearAll(stars);
                        importance.options.selectedIndex = index;
                        e.target.classList.toggle("yellow");
                        for (var i = 0; i < index; i++) {
                            stars[i].classList.add("yellow");
                        }
                    });
                });
            }
        }
    }, {
        key: "styleSwitcher",
        value: function styleSwitcher() {
            var dropStyleSwitcher = document.getElementById('dropStyleSwitcher');
            var homebody = document.getElementsByTagName('body')[0];
            if (dropStyleSwitcher) {
                dropStyleSwitcher.addEventListener('change', function () {
                    //((dropStyleSwitcher.value).toString() === "styleWhite") ? homebody.classList.add("style2") : homebody.classList.remove("style2");

                    var storage = new _Storage.Storage('styleKey');

                    if (dropStyleSwitcher.value.toString() === 'styleWhite') {
                        homebody.classList.add('style2');
                        storage.saveStyleToLocalStorage('style2');
                    } else {
                        homebody.classList.remove('style2');
                        storage.saveStyleToLocalStorage('default');
                    }
                });
            }
        }
    }, {
        key: "showAlert3Seconds",
        value: function showAlert3Seconds(message, alert) {
            //Create DOM Element for Alert Message
            var div = document.createElement('div');
            var note = document.querySelector('.note');
            div.className = alert;
            var alertSuccess = document.createTextNode(message);
            div.appendChild(alertSuccess);
            document.querySelector('.detail').insertBefore(div, note); //https://www.mediaevent.de/javascript/insertbefore.html
            div.style.display = 'block'; //show div again
            setTimeout(function () {
                div.style.display = 'none';
                div.innerHTML = '';
            }, 3000);
        }
    }, {
        key: "selectimportance",
        value: function selectimportance(id) {
            switch (id) {
                case 1:
                    return '<span id="1" class="yellow"></span><span id="2"></span><span id="3"></span><span id="4"></span><span id="5"></span>';
                    break;
                case 2:
                    return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3"></span><span id="4"></span><span id="5"></span>';
                    break;
                case 3:
                    return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4"></span><span id="5"></span>';
                    break;
                case 4:
                    return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4" class="yellow"></span><span id="5"></span>';
                    break;
                case 5:
                    return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4" class="yellow"></span><span id="5" class="yellow"></span>';
                    break;
            }
        }
    }, {
        key: "markStars",
        value: function markStars(id, lastStar) {
            var totalstars = document.querySelectorAll("[data-id=\"" + id + "\"] span");
            //const totalstars = document.querySelectorAll(`[data-id="8"] span`);
            //[data-id="8"] span
            totalstars.forEach(function (item) {
                if (item.getAttribute('id') <= lastStar) {
                    item.classList.add('yellow');
                } else {
                    item.classList.remove('yellow');
                }
            });
        }
    }]);

    return ViewHelper;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = exports.Storage = function () {
    function Storage(storageKey, noteObj) {
        _classCallCheck(this, Storage);

        this.SESSION_STORE_KEY = storageKey;
        this.noteObj = noteObj;
    }

    _createClass(Storage, [{
        key: "saveNoteToLocalStorage",
        value: function saveNoteToLocalStorage() {

            if (this.checkIfLocalStorageEmpty()) {
                var firstnote = [];
                firstnote.push(this.noteObj);
                this.setItemToLocalStorage(firstnote);
            } else {
                this.appendOneNoteToLocalStorage(this.noteObj);
            }
        }
    }, {
        key: "saveStyleToLocalStorage",
        value: function saveStyleToLocalStorage(style) {
            this.setItemToLocalStorage(style);
        }
    }, {
        key: "getStyleFromLocalStorage",
        value: function getStyleFromLocalStorage() {
            return this.getItemFromLocalStorage();
        }
    }, {
        key: "saveNoteIDToLocalStorage",
        value: function saveNoteIDToLocalStorage(id) {
            this.setItemToLocalStorage(id);
        }
    }, {
        key: "getNoteIDFromLocalStorage",
        value: function getNoteIDFromLocalStorage() {
            return this.getItemFromLocalStorage();
        }
    }, {
        key: "appendOneNoteToLocalStorage",
        value: function appendOneNoteToLocalStorage(notes) {
            var stored = this.getItemFromLocalStorage();
            stored.push(notes);
            localStorage.setItem(this.SESSION_STORE_KEY, JSON.stringify(stored));
        }
    }, {
        key: "checkIfLocalStorageEmpty",
        value: function checkIfLocalStorageEmpty() {
            return this.getItemFromLocalStorage() === null;
        }
    }, {
        key: "getAllNotesFromLocalStorage",
        value: function getAllNotesFromLocalStorage() {
            return this.getItemFromLocalStorage();
        }
    }, {
        key: "getItemFromLocalStorage",
        value: function getItemFromLocalStorage() {
            return JSON.parse(localStorage.getItem(this.SESSION_STORE_KEY));
        }
    }, {
        key: "setItemToLocalStorage",
        value: function setItemToLocalStorage(items) {
            localStorage.setItem(this.SESSION_STORE_KEY, JSON.stringify(items));
        }
    }, {
        key: "removeKeyFromLocalStorage",
        value: function removeKeyFromLocalStorage() {
            localStorage.removeItem(this.SESSION_STORE_KEY);
        }
    }]);

    return Storage;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Storage = __webpack_require__(4);

var _ViewHelper = __webpack_require__(3);

var _Note = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
    function Controller() {
        _classCallCheck(this, Controller);
    }

    _createClass(Controller, [{
        key: "start",
        value: function start() {
            console.log('controller is connected');
        }
    }, {
        key: "registerAllEventListener",
        value: function registerAllEventListener(dom) {
            var _this = this;

            if (dom.speichern) {
                dom.speichern.addEventListener('click', function () {
                    console.log('speichern, clicked!');

                    var checkIfEmpty = _this.checkIfNoEmptyFields(dom);
                    if (checkIfEmpty) {

                        var noteDto = _this.buildNewNoteEntry(dom);
                        var storage = new _Storage.Storage('notesKey', noteDto);
                        storage.saveNoteToLocalStorage();
                        _ViewHelper.ViewHelper.showAlert3Seconds('Eintrag erfolgreich eingetragen', 'alert success');
                    }
                });
            }

            if (dom.cancel) {
                dom.cancel.addEventListener('click', function () {
                    console.log('cancel, clicked!');

                    _this.clearAllImputs(dom);
                });
            }
        }
    }, {
        key: "getAllNotesFromLocalStorage",
        value: function getAllNotesFromLocalStorage() {
            var storage = new _Storage.Storage('notesKey');
            return storage.getAllNotesFromLocalStorage();
        }
    }, {
        key: "clearAllImputs",
        value: function clearAllImputs(dom) {
            dom.title.value = "";
            dom.description.value = "";
            dom.importance.value = "";
            dom.datepicker.value = "";
            _ViewHelper.ViewHelper.wichtigkeitClearAll(dom.stars);
        }
    }, {
        key: "checkIfNoEmptyFields",
        value: function checkIfNoEmptyFields(dom) {
            if (dom.title.value != "" && dom.description.value != "" && dom.importance.value != "" && dom.datepicker.value != "") {
                return true;
            }
        }
    }, {
        key: "saveIDToLocalStorage",
        value: function saveIDToLocalStorage(id) {
            var storage = new _Storage.Storage('noteKeyLastID');
            storage.saveNoteIDToLocalStorage(id);
        }
    }, {
        key: "getIDFromLocalStorage",
        value: function getIDFromLocalStorage() {
            var storage = new _Storage.Storage('noteKeyLastID');
            return storage.getNoteIDFromLocalStorage();
        }
    }, {
        key: "getNewUniqueNoteID",
        value: function getNewUniqueNoteID() {
            if (this.getIDFromLocalStorage() === null) {
                this.saveIDToLocalStorage(1);
                return 1;
            } else {
                var id = this.getIDFromLocalStorage();
                id++;
                this.saveIDToLocalStorage(id);
                return this.getIDFromLocalStorage();
            }
        }
    }, {
        key: "buildNewNoteEntry",
        value: function buildNewNoteEntry(_ref) {
            var title = _ref.title,
                description = _ref.description,
                importance = _ref.importance,
                datepicker = _ref.datepicker;

            var isFinished = false;
            return new _Note.Note(this.getNewUniqueNoteID(), title.value, description.value, importance.value, datepicker.value, isFinished);
        }
    }]);

    return Controller;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = exports.Note = function Note(id, title, description, importance, datepicker, isFinished) {
    _classCallCheck(this, Note);

    this.id = id;
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.datepicker = datepicker;
    this.isFinished = isFinished;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ControllerList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Storage = __webpack_require__(4);

var _ViewHelper = __webpack_require__(3);

var _Controller = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerList = exports.ControllerList = function () {
    function ControllerList() {
        _classCallCheck(this, ControllerList);
    }

    _createClass(ControllerList, [{
        key: "registerAllEventListener",
        value: function registerAllEventListener(dom) {
            if (dom.dynamicList) {
                dom.dynamicList.addEventListener('click', function (e) {
                    console.log("dynamiclist eventobjekt: ", e);

                    if (e.target.id === "listDelete") {

                        //Remove Note from Lokalstorage
                        var controller = new _Controller.Controller();
                        var allnotes = controller.getAllNotesFromLocalStorage();

                        var filteredNotes = allnotes.filter(function (item) {
                            return item.id != e.target.getAttribute("data-id");
                        });

                        var storage = new _Storage.Storage('notesKey');
                        storage.removeKeyFromLocalStorage();
                        storage.setItemToLocalStorage(filteredNotes);

                        //Remove Note From GUI
                        e.target.parentElement.parentElement.remove();
                    }

                    if (e.target.id === "listEdit") {

                        //Enable Textarea Field --> disabled="disabled
                        var id = e.target.getAttribute("data-id");
                        document.querySelector("[data-description-id=\"" + id + "\"]").removeAttribute("disabled");

                        var _controller = new _Controller.Controller();
                        var _allnotes = _controller.getAllNotesFromLocalStorage();

                        var filteredNote = _allnotes.filter(function (item) {
                            return item.id == id;
                        });

                        if (e.target.innerHTML == 'Edit') {
                            e.target.innerHTML = 'Save';
                            document.querySelector("[data-description-id=\"" + id + "\"]").classList.add('redborder');
                        } else if (e.target.innerHTML == 'Save') {
                            e.target.innerHTML = 'Edit';
                            document.querySelector("[data-description-id=\"" + id + "\"]").classList.remove('redborder');
                        }

                        //console.log("traverse: ",e.target.parentElement.parentElement.getElementsByClassName('listTitleDescriptionImportance')[0].getElementsByClassName('description')[0].value);
                        //console.log("filteredNote[0].description: ",filteredNote[0].description);
                        //console.log("zuweisung: ",document.querySelector(`[data-description-id="${id}"]`).value);
                        //filteredNote[0].description = "Testing, dies geht!!!";
                        filteredNote[0].description = document.querySelector("[data-description-id=\"" + id + "\"]").value; //nicht .innerHMTL!!!!

                        var position_startindex = _allnotes.findIndex(function (item) {
                            return item.id == id;
                        });

                        _allnotes.splice(position_startindex, 1, filteredNote[0]);

                        var _storage = new _Storage.Storage('notesKey');
                        _storage.removeKeyFromLocalStorage();
                        _storage.setItemToLocalStorage(_allnotes);
                    }

                    if (e.target.id === "checkBoxisFinished") {

                        var _controller2 = new _Controller.Controller();
                        var _allnotes2 = _controller2.getAllNotesFromLocalStorage();

                        var _filteredNote = _allnotes2.filter(function (item) {
                            return item.id == e.target.getAttribute("data-id");
                        });

                        //Toggle Finished Status
                        _filteredNote[0].isFinished ? _filteredNote[0].isFinished = false : _filteredNote[0].isFinished = true;

                        var _position_startindex = _allnotes2.findIndex(function (item) {
                            return item.id == e.target.getAttribute("data-id");
                        });

                        //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                        _allnotes2.splice(_position_startindex, 1, _filteredNote[0]);

                        var _storage2 = new _Storage.Storage('notesKey');
                        _storage2.removeKeyFromLocalStorage();
                        _storage2.setItemToLocalStorage(_allnotes2);
                    }

                    if (e.target.id == "1") {
                        _ViewHelper.ViewHelper.markStars(e.target.parentElement.getAttribute("data-id"), e.target.id);
                    }
                    if (e.target.id == "2") {
                        _ViewHelper.ViewHelper.markStars(e.target.parentElement.getAttribute("data-id"), e.target.id);
                    }
                    if (e.target.id == "3") {
                        _ViewHelper.ViewHelper.markStars(e.target.parentElement.getAttribute("data-id"), e.target.id);
                    }
                    if (e.target.id == "4") {
                        _ViewHelper.ViewHelper.markStars(e.target.parentElement.getAttribute("data-id"), e.target.id);
                    }
                    if (e.target.id == "5") {
                        _ViewHelper.ViewHelper.markStars(e.target.parentElement.getAttribute("data-id"), e.target.id);
                    }
                });
            }
        }
    }]);

    return ControllerList;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewHelper = __webpack_require__(3);

var _Controller = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewList = exports.ViewList = function () {
    function ViewList() {
        _classCallCheck(this, ViewList);
    }

    _createClass(ViewList, [{
        key: "queryAllDomObjects",
        value: function queryAllDomObjects() {
            var DOM = {
                dropStyleSwitcher: document.querySelector("#dropStyleSwitcher"),
                dynamicList: document.querySelector(".item--main-content")

            };

            _ViewHelper.ViewHelper.styleSwitcher(DOM);

            if (_ViewHelper.ViewHelper.checkDomNoNullValueExist(DOM)) {
                return DOM;
            }
        }
    }, {
        key: "generateListView",
        value: function generateListView(_ref) {
            var dynamicList = _ref.dynamicList;

            var controller = new _Controller.Controller();
            var allnotes = controller.getAllNotesFromLocalStorage();

            console.log("allnotes: ", allnotes);

            var div = document.createElement('div');
            //div.classList.add('note');


            if (allnotes) {
                var notes = allnotes.map(function (note, i) {
                    return "<div class=\"note\">\n                    <div class=\"listDateStatus\">\n                        <p>" + note.datepicker + "</p>\n                        <p><input id=\"checkBoxisFinished\" type=\"checkbox\" data-id=\"" + note.id + "\" " + (note.isFinished ? 'checked' : '') + "> Finished</p>\n                    </div>\n                    <div class=\"listTitleDescriptionImportance\">\n                        <div class=\"flexTitleImportance\">\n                            <div class=\"title\">\n                                <p>" + note.title + "</p>\n                            </div>\n                            <div class=\"note__importance\">\n                                <div class=\"importance\" data-id=\"" + note.id + "\">\n                                    " + _ViewHelper.ViewHelper.selectimportance(parseInt(note.importance)) + "\n                                </div>\n                            </div>\n                        </div>\n                        <textarea class=\"description\" name=\"description\" cols=\"30\" rows=\"6\" data-description-id=\"" + note.id + "\" disabled=\"disabled\">" + note.description + "</textarea>\n                    </div>\n                    <div class=\"listActionButton\">\n                        <button id=\"listEdit\" data-id=\"" + note.id + "\">Edit</button>\n                        <button id=\"listDelete\" data-id=\"" + note.id + "\">Delete</button>\n                    </div>\n                </div>";
                });
            }

            div.innerHTML = notes.join(""); //remove comma from list

            if (dynamicList) {
                dynamicList.appendChild(div);
            }
        }
    }]);

    return ViewList;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map