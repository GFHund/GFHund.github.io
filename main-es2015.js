(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"container\">\n  <ul>\n    <li>\n      <a routerLink=\"/\">index</a>\n    </li>\n    <li>\n      <a routerLink=\"/login\">login</a>\n    </li>\n    <li ><!--*ngIf=\"bLoggedIn\"-->\n      backend\n      <ul>\n        <li>\n          <a routerLink=\"backend\" >Backend Index</a>\n        </li>\n        <li>\n          <a routerLink=\"backend/saison\">Saison Overview</a>\n        </li>\n\n      </ul>\n    </li>\n  </ul>\n  <a (click)=\"logout()\">Logout</a>\n</header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-points-row/table-points-row.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-points-row/table-points-row.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td>{{driver.name}}</td>\n<td *ngFor=\"let raceEvent of raceEvents\">\n  {{getPoints(driver.id,raceEvent.id) |async}}\n</td>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/backend-index/backend-index.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/backend-index/backend-index.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>backend-index works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/driver-list/driver-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/driver-list/driver-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>driver-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-detail/race-event-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-detail/race-event-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"raceEventObj\">\r\n\r\n<form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\r\n  <input type=\"hidden\" name=\"id\" ngModel>\r\n  <input type=\"hidden\" name=\"saisonId\" ngModel>\r\n  <label>\r\n    title\r\n    <input type=\"text\" name=\"title\" ngModel required>\r\n  </label>\r\n  <label>\r\n    date\r\n    <input type=\"date\" name=\"date\" ngModel required>\r\n  </label>\r\n  <label>\r\n    icon\r\n    <select name=\"icon\" ngModel>\r\n      <option>?</option>\r\n    </select>\r\n  </label>\r\n\r\n\r\n  <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n</form>\r\n<a [routerLink]=\"['/backend/race-event',saisonId]\">Zurück zur Übersicht</a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-list/race-event-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-list/race-event-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/backend/race-event',saisonId,'new']\">Neues Event anlegen</a>\n<table class=\"table\">\n  <tr *ngFor=\"let raceEvent of raceEvents\">\n    <td>{{raceEvent.title}}</td>\n    <td>\n      <a [routerLink]=\"['/backend/race-event',saisonId,'edit',raceEvent.id]\">Edit Event</a>\n      <a [routerLink]=\"['/backend/result/',saisonId,raceEvent.id]\">Results</a>\n    </td>\n  </tr>\n</table>\n<a [routerLink]=\"['/backend/saison']\">Zurück zur Saison Übersicht</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-detail/result-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-detail/result-detail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"onSubmitResult(formResult)\" id=\"resultForm\" #formResult=\"ngForm\">\n  <input type=\"hidden\" name=\"id\" ngModel>\n  <input type=\"hidden\" name=\"raceEventId\" ngModel>\n  <label>\n    Fahrer:\n    <select name=\"driverId\" ngModel>\n      <option *ngFor=\"let driver of drivers\" value=\"{{driver.id}}\">{{driver.name}}</option>\n    </select>\n  </label>\n  <label>\n    Team:\n    <select name=\"teamId\" ngModel>\n      <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\n    </select>\n  </label>\n  <label>\n    Punkte\n    <input type=\"number\" name=\"points\" ngModel required>\n  </label>\n  <label>\n    Position\n    <input name=\"position\" type=\"number\" ngModel required>\n  </label>\n  <label>\n    Quali Position\n    <input name=\"qualiPosition\" type=\"number\" ngModel>\n  </label>\n  <label>\n    Quali Zeit\n    <input name=\"timeQuali\" type=\"text\" ngModel>\n  </label>\n  <label>\n    Schnellste Runde\n    <input name=\"time\" type=\"text\" ngModel>\n  </label>\n  <button type=\"submit\" [disabled]=\"!formResult.valid\">Submit</button>\n</form>\n<a [routerLink]=\"['/backend/result',saisonId,raceEventId]\">Zurück zur liste</a>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-list/result-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-list/result-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"onSubmitResult(formResult)\" id=\"resultForm\" #formResult=\"ngForm\">\n  <input type=\"hidden\" name=\"id\" ngModel>\n  <input type=\"hidden\" name=\"raceEventId\" ngModel>\n  <label>\n    Fahrer:\n    <select name=\"driverId\" ngModel>\n      <option *ngFor=\"let driver of drivers\" value=\"{{driver.id}}\">{{driver.name}}</option>\n    </select>\n  </label>\n  <label>\n    Team:\n    <select name=\"teamId\" ngModel>\n      <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\n    </select>\n  </label>\n  <label>\n    Punkte\n    <input type=\"number\" name=\"points\" ngModel required>\n  </label>\n  <label>\n    Position\n    <input name=\"position\" type=\"number\" ngModel required>\n  </label>\n  <label>\n    Quali Position\n    <input name=\"position\" type=\"number\" ngModel>\n  </label>\n  <label>\n    Quali Zeit\n    <input name=\"position\" type=\"text\" ngModel>\n  </label>\n  <label>\n    Schnellste Runde\n    <input name=\"position\" type=\"text\" ngModel>\n  </label>\n  <button type=\"submit\" [disabled]=\"!formResult.valid\">Submit</button>\n</form>\n\n<form (submit)=\"onSubmitDriver(formDriver)\" id=\"driverForm\" #formDriver=\"ngForm\">\n  <input type=\"hidden\" name=\"id\" ngModel>\n  <label>\n    Name\n    <input type=\"text\" name=\"name\" ngModel required>\n  </label>\n  <button type=\"submit\" [disabled]=\"!formDriver.valid\">Add</button>\n</form>\n\n<form (submit)=\"onSubmitTeam(formTeam)\" id=\"teamForm\" #formTeam=\"ngForm\">\n  <input type=\"hidden\" name=\"id\" ngModel>\n  <label>\n    Team\n    <input type=\"text\" name=\"name\" ngModel required>\n  </label>\n  <button type=\"submit\" [disabled]=\"!formTeam.valid\">Add</button>\n</form>\n\n<table class=\"table\">\n  <tr *ngFor=\"let result of results\">\n    <td>{{getDriver(result.driverId)}}</td>\n    <td>{{getTeam(result.teamId)}}</td>\n    <td>{{result.points}}</td>\n    <td>{{result.position}}</td>\n    <td><a [routerLink]=\"['/backend/result',saisonId,raceEventId,result.id]\">edit</a></td>\n  </tr>\n</table>\n<a [routerLink]=\"['/backend/race-event/',saisonId]\">Zurück zur Event Übersicht</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-detail/saison-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-detail/saison-detail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"saisonObj\">\n  <div class=\"bg-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\n<form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"id\" ngModel>\n  <label>\n    title\n    <input type=\"text\" name=\"title\" ngModel required>\n  </label>\n\n  <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-list/saison-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-list/saison-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<a routerLink=\"/backend/saison/new\">New Saison</a>\n\n<table class=\"table\">\n  <tr *ngFor=\"let saison of saisons\">\n    <td>\n      {{saison.title}}\n    </td>\n    <td>\n      <a [routerLink]=\"['/backend/saison/',saison.id]\">Edit</a>\n      <a [routerLink]=\"['/backend/race-event/',saison.id]\">Show Race Events</a>\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-points/driver-points.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-points/driver-points.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n  <tr>\n    <th>Fahrername</th>\n    <th *ngFor=\"let raceEvent of raceEvents\">\n      {{raceEvent.title}}\n    </th>\n    <th>Gesamt</th>\n  </tr>\n  <!--app-table-points-row [driver]=\"driver\" [raceEvents]=\"raceEvents\"-->\n  <tr *ngFor=\"let driver of results\">\n    <td>{{driver.name}}</td>\n    <td *ngFor=\"let result of driver.results\">\n      {{result.points}}\n    </td>\n    <td>{{driver.totalPoints}}</td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fe-seison-detail/fe-seison-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fe-seison-detail/fe-seison-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<table class=\"table\">\n  <tr>\n    <th>Fahrername</th>\n    <th *ngFor=\"let raceEvent of raceEvents\">\n      {{raceEvent.title}}\n    </th>\n    <th>Gesamt</th>\n  </tr>\n  <tr *ngFor=\"let driver of results\">\n    <td>{{driver.name}}</td>\n    <td *ngFor=\"let result of driver.results\">\n      {{result.points}}\n    </td>\n    <td>{{driver.totalPoints}}</td>\n  </tr>\n</table>\n-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/login\">login</a>\n<ul>\n  <li *ngFor=\"let saison of saisons\">\n    <a [routerLink]=\"['/saison-detail/',saison.id]\">{{saison.title}}</a>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n  <label>\n    eMail:\n    <input type=\"email\" name=\"email\" ngModel required>\n  </label>\n  <label>\n    Password:\n    <input type=\"password\" name=\"password\" ngModel required>\n  </label>\n  <button type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-points/team-points.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-points/team-points.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>team-points works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_backend_backend_index_backend_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/backend/backend-index/backend-index.component */ "./src/app/pages/backend/backend-index/backend-index.component.ts");
/* harmony import */ var _pages_backend_saison_list_saison_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/backend/saison-list/saison-list.component */ "./src/app/pages/backend/saison-list/saison-list.component.ts");
/* harmony import */ var _pages_backend_saison_detail_saison_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/backend/saison-detail/saison-detail.component */ "./src/app/pages/backend/saison-detail/saison-detail.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");
/* harmony import */ var _pages_backend_race_event_list_race_event_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/backend/race-event-list/race-event-list.component */ "./src/app/pages/backend/race-event-list/race-event-list.component.ts");
/* harmony import */ var _pages_backend_race_event_detail_race_event_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/backend/race-event-detail/race-event-detail.component */ "./src/app/pages/backend/race-event-detail/race-event-detail.component.ts");
/* harmony import */ var _pages_backend_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/backend/result-list/result-list.component */ "./src/app/pages/backend/result-list/result-list.component.ts");
/* harmony import */ var _pages_fe_seison_detail_fe_seison_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/fe-seison-detail/fe-seison-detail.component */ "./src/app/pages/fe-seison-detail/fe-seison-detail.component.ts");
/* harmony import */ var _pages_backend_result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/backend/result-detail/result-detail.component */ "./src/app/pages/backend/result-detail/result-detail.component.ts");
/* harmony import */ var _pages_driver_points_driver_points_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/driver-points/driver-points.component */ "./src/app/pages/driver-points/driver-points.component.ts");
/* harmony import */ var _pages_team_points_team_points_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/team-points/team-points.component */ "./src/app/pages/team-points/team-points.component.ts");
















const routes = [
    { path: '', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'saison-detail/:saisonId', component: _pages_fe_seison_detail_fe_seison_detail_component__WEBPACK_IMPORTED_MODULE_12__["FeSeisonDetailComponent"], children: [
            { path: '', component: _pages_driver_points_driver_points_component__WEBPACK_IMPORTED_MODULE_14__["DriverPointsComponent"] },
            { path: 'team', component: _pages_team_points_team_points_component__WEBPACK_IMPORTED_MODULE_15__["TeamPointsComponent"] }
        ] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'backend', component: _pages_backend_backend_index_backend_index_component__WEBPACK_IMPORTED_MODULE_5__["BackendIndexComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/saison', component: _pages_backend_saison_list_saison_list_component__WEBPACK_IMPORTED_MODULE_6__["SaisonListComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/saison/:saisonId', component: _pages_backend_saison_detail_saison_detail_component__WEBPACK_IMPORTED_MODULE_7__["SaisonDetailComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/saison/new', component: _pages_backend_saison_detail_saison_detail_component__WEBPACK_IMPORTED_MODULE_7__["SaisonDetailComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/race-event/:saisonId', component: _pages_backend_race_event_list_race_event_list_component__WEBPACK_IMPORTED_MODULE_9__["RaceEventListComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/race-event/:saisonId/edit/:eventId', component: _pages_backend_race_event_detail_race_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["RaceEventDetailComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/race-event/:saisonId/new', component: _pages_backend_race_event_detail_race_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["RaceEventDetailComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/result/:saisonId/:eventId', component: _pages_backend_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_11__["ResultListComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] },
    { path: 'backend/result/:saisonId/:eventId/:resultId', component: _pages_backend_result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_13__["ResultDetailComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'Split5ResultList';
        this.bLoggedIn = false;
    }
    ngOnInit() {
        this.bLoggedIn = this.auth.isLoggedIn();
    }
    logout() {
        this.auth.logout().then(() => {
            this.router.navigateByUrl('/');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_backend_saison_detail_saison_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/backend/saison-detail/saison-detail.component */ "./src/app/pages/backend/saison-detail/saison-detail.component.ts");
/* harmony import */ var _pages_backend_backend_index_backend_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/backend/backend-index/backend-index.component */ "./src/app/pages/backend/backend-index/backend-index.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_backend_saison_list_saison_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/backend/saison-list/saison-list.component */ "./src/app/pages/backend/saison-list/saison-list.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");
/* harmony import */ var _pages_backend_race_event_detail_race_event_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/backend/race-event-detail/race-event-detail.component */ "./src/app/pages/backend/race-event-detail/race-event-detail.component.ts");
/* harmony import */ var _pages_backend_race_event_list_race_event_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/backend/race-event-list/race-event-list.component */ "./src/app/pages/backend/race-event-list/race-event-list.component.ts");
/* harmony import */ var _pages_backend_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/backend/result-list/result-list.component */ "./src/app/pages/backend/result-list/result-list.component.ts");
/* harmony import */ var _pages_backend_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/backend/driver-list/driver-list.component */ "./src/app/pages/backend/driver-list/driver-list.component.ts");
/* harmony import */ var _pages_fe_seison_detail_fe_seison_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/fe-seison-detail/fe-seison-detail.component */ "./src/app/pages/fe-seison-detail/fe-seison-detail.component.ts");
/* harmony import */ var _components_table_points_row_table_points_row_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/table-points-row/table-points-row.component */ "./src/app/components/table-points-row/table-points-row.component.ts");
/* harmony import */ var _directives_auth_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/auth.directive */ "./src/app/directives/auth.directive.ts");
/* harmony import */ var _pages_backend_result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/backend/result-detail/result-detail.component */ "./src/app/pages/backend/result-detail/result-detail.component.ts");
/* harmony import */ var _pages_driver_points_driver_points_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/driver-points/driver-points.component */ "./src/app/pages/driver-points/driver-points.component.ts");
/* harmony import */ var _pages_team_points_team_points_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/team-points/team-points.component */ "./src/app/pages/team-points/team-points.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _pages_backend_saison_detail_saison_detail_component__WEBPACK_IMPORTED_MODULE_8__["SaisonDetailComponent"],
            _pages_backend_backend_index_backend_index_component__WEBPACK_IMPORTED_MODULE_9__["BackendIndexComponent"],
            _pages_backend_saison_list_saison_list_component__WEBPACK_IMPORTED_MODULE_14__["SaisonListComponent"],
            _pages_backend_race_event_detail_race_event_detail_component__WEBPACK_IMPORTED_MODULE_16__["RaceEventDetailComponent"],
            _pages_backend_race_event_list_race_event_list_component__WEBPACK_IMPORTED_MODULE_17__["RaceEventListComponent"],
            _pages_backend_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_18__["ResultListComponent"],
            _pages_backend_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_19__["DriverListComponent"],
            _pages_fe_seison_detail_fe_seison_detail_component__WEBPACK_IMPORTED_MODULE_20__["FeSeisonDetailComponent"],
            _components_table_points_row_table_points_row_component__WEBPACK_IMPORTED_MODULE_21__["TablePointsRowComponent"],
            _directives_auth_directive__WEBPACK_IMPORTED_MODULE_22__["AuthDirective"],
            _pages_backend_result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_23__["ResultDetailComponent"],
            _pages_driver_points_driver_points_component__WEBPACK_IMPORTED_MODULE_24__["DriverPointsComponent"],
            _pages_team_points_team_points_component__WEBPACK_IMPORTED_MODULE_25__["TeamPointsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthGuardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/table-points-row/table-points-row.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/table-points-row/table-points-row.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtcG9pbnRzLXJvdy90YWJsZS1wb2ludHMtcm93LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/table-points-row/table-points-row.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/table-points-row/table-points-row.component.ts ***!
  \***************************************************************************/
/*! exports provided: TablePointsRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePointsRowComponent", function() { return TablePointsRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/result/result.service */ "./src/app/service/result/result.service.ts");



let TablePointsRowComponent = class TablePointsRowComponent {
    constructor(resultService) {
        this.resultService = resultService;
    }
    ngOnInit() {
    }
    getPoints(driverId, raceEventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const obj = yield this.resultService.getListFromEventAndDriver(raceEventId, driverId).toPromise();
            //return obj.points;
        });
    }
};
TablePointsRowComponent.ctorParameters = () => [
    { type: src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TablePointsRowComponent.prototype, "driver", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TablePointsRowComponent.prototype, "raceEvents", void 0);
TablePointsRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-table-points-row]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-points-row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-points-row/table-points-row.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-points-row.component.scss */ "./src/app/components/table-points-row/table-points-row.component.scss")).default]
    })
], TablePointsRowComponent);



/***/ }),

/***/ "./src/app/directives/auth.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/directives/auth.directive.ts ***!
  \**********************************************/
/*! exports provided: AuthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDirective", function() { return AuthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



let AuthDirective = class AuthDirective {
    constructor(auth, templateRef, viewContainer) {
        this.auth = auth;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (this.auth.isLoggedIn()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
};
AuthDirective.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
AuthDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAuth]'
    })
], AuthDirective);



/***/ }),

/***/ "./src/app/pages/backend/backend-index/backend-index.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/backend/backend-index/backend-index.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvYmFja2VuZC1pbmRleC9iYWNrZW5kLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/backend/backend-index/backend-index.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/backend/backend-index/backend-index.component.ts ***!
  \************************************************************************/
/*! exports provided: BackendIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendIndexComponent", function() { return BackendIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackendIndexComponent = class BackendIndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
BackendIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backend-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backend-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/backend-index/backend-index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backend-index.component.scss */ "./src/app/pages/backend/backend-index/backend-index.component.scss")).default]
    })
], BackendIndexComponent);



/***/ }),

/***/ "./src/app/pages/backend/driver-list/driver-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/backend/driver-list/driver-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvZHJpdmVyLWxpc3QvZHJpdmVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backend/driver-list/driver-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/backend/driver-list/driver-list.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverListComponent", function() { return DriverListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DriverListComponent = class DriverListComponent {
    constructor() { }
    ngOnInit() {
    }
};
DriverListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/driver-list/driver-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-list.component.scss */ "./src/app/pages/backend/driver-list/driver-list.component.scss")).default]
    })
], DriverListComponent);



/***/ }),

/***/ "./src/app/pages/backend/race-event-detail/race-event-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/backend/race-event-detail/race-event-detail.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvcmFjZS1ldmVudC1kZXRhaWwvcmFjZS1ldmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backend/race-event-detail/race-event-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/backend/race-event-detail/race-event-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: RaceEventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceEventDetailComponent", function() { return RaceEventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/event/event.service */ "./src/app/service/event/event.service.ts");




let RaceEventDetailComponent = class RaceEventDetailComponent {
    constructor(route, raceEventService, router) {
        this.route = route;
        this.raceEventService = raceEventService;
        this.router = router;
        this.isNew = false;
        this.saisonId = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.saisonId = params.saisonId;
            if (params.eventId !== undefined) {
                this.isNew = false;
                this.raceEventService.get(params.eventId).subscribe((result) => {
                    // @ts-ignore
                    this.raceEventObj = result.data();
                    setTimeout(() => {
                        this.form.setValue(this.raceEventObj);
                    });
                });
            }
            else {
                this.isNew = true;
                this.raceEventObj = {
                    id: '',
                    title: '',
                    icon: '',
                    date: '',
                    saisonId: this.saisonId
                };
                setTimeout(() => {
                    this.form.setValue(this.raceEventObj);
                });
            }
        });
    }
    onSubmit(form) {
        this.raceEventObj = form.value;
        if (this.isNew) {
            this.raceEventService.create(this.raceEventObj).then((createdDoc) => {
                const id = createdDoc.id;
                this.raceEventObj.id = id;
                this.raceEventService.update(id, this.raceEventObj).then(() => { });
                this.router.navigateByUrl('backend/race-event/' + this.saisonId + '/edit/' + this.raceEventObj.id);
            });
        }
        else {
            this.raceEventService.update(this.raceEventObj.id, this.raceEventObj).then(() => { });
        }
    }
};
RaceEventDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null)
], RaceEventDetailComponent.prototype, "form", void 0);
RaceEventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-race-event-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./race-event-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-detail/race-event-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./race-event-detail.component.scss */ "./src/app/pages/backend/race-event-detail/race-event-detail.component.scss")).default]
    })
], RaceEventDetailComponent);



/***/ }),

/***/ "./src/app/pages/backend/race-event-list/race-event-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/backend/race-event-list/race-event-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvcmFjZS1ldmVudC1saXN0L3JhY2UtZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/backend/race-event-list/race-event-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/backend/race-event-list/race-event-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: RaceEventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceEventListComponent", function() { return RaceEventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/event/event.service */ "./src/app/service/event/event.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RaceEventListComponent = class RaceEventListComponent {
    constructor(route, raceEventService) {
        this.route = route;
        this.raceEventService = raceEventService;
        this.raceEvents = [];
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])((params) => {
            this.saisonId = params.saisonId;
            return this.raceEventService.getList(this.saisonId);
        })).subscribe((results) => {
            console.log(results);
            // @ts-ignore
            this.raceEvents = results;
        });
    }
};
RaceEventListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }
];
RaceEventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-race-event-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./race-event-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/race-event-list/race-event-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./race-event-list.component.scss */ "./src/app/pages/backend/race-event-list/race-event-list.component.scss")).default]
    })
], RaceEventListComponent);



/***/ }),

/***/ "./src/app/pages/backend/result-detail/result-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/backend/result-detail/result-detail.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvcmVzdWx0LWRldGFpbC9yZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/backend/result-detail/result-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/backend/result-detail/result-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: ResultDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultDetailComponent", function() { return ResultDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/result/result.service */ "./src/app/service/result/result.service.ts");
/* harmony import */ var src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/driver/driver.service */ "./src/app/service/driver/driver.service.ts");
/* harmony import */ var src_app_service_team_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/team/team.service */ "./src/app/service/team/team.service.ts");






let ResultDetailComponent = class ResultDetailComponent {
    constructor(route, resultService, driverService, teamService) {
        this.route = route;
        this.resultService = resultService;
        this.driverService = driverService;
        this.teamService = teamService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.saisonId = params.saisonId;
            this.raceEventId = params.eventId;
            this.resultId = params.resultId;
            this.resultService.get(this.resultId).subscribe((resultObj) => {
                // @ts-ignore
                this.resultObj = resultObj;
                this.resultObj = this.checkObj(this.resultObj);
                console.log(this.resultObj);
                setTimeout(() => {
                    this.form.setValue(this.resultObj);
                });
            });
        });
        this.driverService.getList().subscribe((drivers) => {
            this.drivers = drivers;
        });
        this.teamService.getList().subscribe((teams) => {
            this.teams = teams;
        });
    }
    checkObj(checkObj) {
        if (checkObj.qualiPosition === undefined) {
            checkObj.qualiPosition = -1;
        }
        if (checkObj.timeQuali === undefined) {
            checkObj.timeQuali = '';
        }
        if (checkObj.time === undefined) {
            checkObj.time = '';
        }
        if (checkObj.teamId === undefined) {
            checkObj.teamId = '';
        }
        return checkObj;
    }
    ngAfterViewInit() {
    }
    onSubmitResult(form) {
        // this.saisonObj.title = form.value.title;
        this.resultObj.driverId = form.value.driverId;
        this.resultObj.points = form.value.points;
        this.resultObj.position = form.value.position;
        this.resultObj.qualiPosition = form.value.qualiPosition;
        this.resultObj.time = form.value.time;
        this.resultObj.timeQuali = form.value.timeQuali;
        this.resultObj.teamId = form.value.teamId;
        console.log(this.resultObj);
        this.resultService.update(this.resultObj.id, this.resultObj).then();
    }
};
ResultDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] },
    { type: src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
    { type: src_app_service_team_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formResult', null)
], ResultDetailComponent.prototype, "form", void 0);
ResultDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-detail/result-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result-detail.component.scss */ "./src/app/pages/backend/result-detail/result-detail.component.scss")).default]
    })
], ResultDetailComponent);



/***/ }),

/***/ "./src/app/pages/backend/result-list/result-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/backend/result-list/result-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvcmVzdWx0LWxpc3QvcmVzdWx0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backend/result-list/result-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/backend/result-list/result-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/result/result.service */ "./src/app/service/result/result.service.ts");
/* harmony import */ var src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/driver/driver.service */ "./src/app/service/driver/driver.service.ts");
/* harmony import */ var src_app_service_team_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/team/team.service */ "./src/app/service/team/team.service.ts");






let ResultListComponent = class ResultListComponent {
    constructor(router, route, resultService, driverService, teamService) {
        this.router = router;
        this.route = route;
        this.resultService = resultService;
        this.driverService = driverService;
        this.teamService = teamService;
        this.results = [];
        this.drivers = [];
        this.teams = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.saisonId = params.saisonId;
            this.raceEventId = params.eventId;
            this.resultService.getList(this.raceEventId).subscribe((results) => {
                this.results = results;
            });
            this.driverService.getList().subscribe((drivers) => {
                this.drivers = drivers;
            });
            this.teamService.getList().subscribe((teams) => {
                this.teams = teams;
            });
        });
    }
    getDriver(driverId) {
        const result = this.drivers.filter(driver => driver.id === driverId);
        if (result[0] === undefined) {
            return '';
        }
        return result[0].name;
    }
    getTeam(teamId) {
        const result = this.teams.filter(team => team.id === teamId);
        if (result[0] === undefined) {
            return '';
        }
        return result[0].name;
    }
    onSubmitResult(form) {
        const result = form.value;
        result.raceEventId = this.raceEventId;
        this.resultService.create(result).then((res) => {
            const id = res.id;
            result.id = id;
            this.resultService.update(id, result).then(() => { });
        });
    }
    onSubmitDriver(form) {
        const driver = form.value;
        this.driverService.create(driver).then((res) => {
            const id = res.id;
            driver.id = id;
            this.driverService.update(id, driver).then(() => {
                //this.drivers.push(driver);
            });
        });
    }
    onSubmitTeam(form) {
        const team = form.value;
        this.teamService.create(team).then((res) => {
            const id = res.id;
            team.id = id;
            this.teamService.update(id, team).then(() => { });
        });
    }
};
ResultListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] },
    { type: src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
    { type: src_app_service_team_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#resultForm', null)
], ResultListComponent.prototype, "resultForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#driverForm', null)
], ResultListComponent.prototype, "driverForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formTeam', null)
], ResultListComponent.prototype, "teamForm", void 0);
ResultListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/result-list/result-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result-list.component.scss */ "./src/app/pages/backend/result-list/result-list.component.scss")).default]
    })
], ResultListComponent);



/***/ }),

/***/ "./src/app/pages/backend/saison-detail/saison-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/backend/saison-detail/saison-detail.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvc2Fpc29uLWRldGFpbC9zYWlzb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/backend/saison-detail/saison-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/backend/saison-detail/saison-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: SaisonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaisonDetailComponent", function() { return SaisonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/saison/saison.service */ "./src/app/service/saison/saison.service.ts");
/* harmony import */ var src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/event/event.service */ "./src/app/service/event/event.service.ts");





let SaisonDetailComponent = class SaisonDetailComponent {
    constructor(router, route, saisonService, eventService) {
        this.router = router;
        this.route = route;
        this.saisonService = saisonService;
        this.eventService = eventService;
        this.events = [];
        this.successMessage = '';
        this.errorMessage = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.saisonId !== 'new') {
                this.saisonService.get(params.saisonId).subscribe((docChange) => {
                    // console.log(docChange.data());
                    // @ts-ignore
                    this.saisonObj = docChange.data();
                    setTimeout(() => {
                        this.form.setValue(this.saisonObj);
                    });
                });
                this.isNew = false;
            }
            else {
                this.saisonObj = { id: '', title: '' };
                this.isNew = true;
                setTimeout(() => {
                    this.form.setValue(this.saisonObj);
                });
            }
            //
        });
    }
    ngAfterViewChecked() {
    }
    onSubmit(form) {
        console.log(form.value);
        this.saisonObj.title = form.value.title;
        if (this.isNew) {
            this.saisonService.create(this.saisonObj).then((doc) => {
                const id = doc.id;
                this.saisonObj.id = id;
                this.saisonService.update(id, this.saisonObj).then(() => { });
                this.successMessage = 'Data Successfully saved';
                this.router.navigateByUrl('backend/saison/' + id);
            }, (reson) => console.log(reson));
        }
        else {
            this.saisonService.update(this.saisonObj.id, this.saisonObj).then(() => { });
            // console.log(this.saisonObj);
        }
    }
};
SaisonDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_3__["SaisonService"] },
    { type: src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null)
], SaisonDetailComponent.prototype, "form", void 0);
SaisonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saison-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saison-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-detail/saison-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saison-detail.component.scss */ "./src/app/pages/backend/saison-detail/saison-detail.component.scss")).default]
    })
], SaisonDetailComponent);



/***/ }),

/***/ "./src/app/pages/backend/saison-list/saison-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/backend/saison-list/saison-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tlbmQvc2Fpc29uLWxpc3Qvc2Fpc29uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backend/saison-list/saison-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/backend/saison-list/saison-list.component.ts ***!
  \********************************************************************/
/*! exports provided: SaisonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaisonListComponent", function() { return SaisonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/saison/saison.service */ "./src/app/service/saison/saison.service.ts");



let SaisonListComponent = class SaisonListComponent {
    constructor(saisonService) {
        this.saisonService = saisonService;
        this.saisons = [];
    }
    ngOnInit() {
        this.saisonService.getList().subscribe((docChange) => {
            console.log(docChange);
            //console.log(docChange[0].payload.doc.data());
            this.saisons = docChange;
        });
    }
};
SaisonListComponent.ctorParameters = () => [
    { type: src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_2__["SaisonService"] }
];
SaisonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saison-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saison-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backend/saison-list/saison-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saison-list.component.scss */ "./src/app/pages/backend/saison-list/saison-list.component.scss")).default]
    })
], SaisonListComponent);



/***/ }),

/***/ "./src/app/pages/driver-points/driver-points.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/driver-points/driver-points.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1wb2ludHMvZHJpdmVyLXBvaW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/driver-points/driver-points.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/driver-points/driver-points.component.ts ***!
  \****************************************************************/
/*! exports provided: DriverPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPointsComponent", function() { return DriverPointsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/event/event.service */ "./src/app/service/event/event.service.ts");
/* harmony import */ var src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/driver/driver.service */ "./src/app/service/driver/driver.service.ts");
/* harmony import */ var src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/result/result.service */ "./src/app/service/result/result.service.ts");






let DriverPointsComponent = class DriverPointsComponent {
    constructor(route, raceEventService, driverService, resultService) {
        this.route = route;
        this.raceEventService = raceEventService;
        this.driverService = driverService;
        this.resultService = resultService;
        this.raceEvents = [];
        this.drivers = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.saisonId = params.saisonId;
            this.raceEventService.getList(this.saisonId).subscribe((raceEvents) => {
                this.raceEvents = raceEvents;
            });
            // this.resultService.getListFormatted(this.saisonId);
            this.resultService.getListFormatted(this.saisonId).then((val) => {
                val.sort((a, b) => {
                    return b.totalPoints - a.totalPoints;
                });
                this.results = val;
            });
        });
        this.driverService.getList().subscribe((drivers) => {
            this.drivers = drivers;
        });
    }
};
DriverPointsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
    { type: src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"] }
];
DriverPointsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver-points',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-points.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-points/driver-points.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-points.component.scss */ "./src/app/pages/driver-points/driver-points.component.scss")).default]
    })
], DriverPointsComponent);



/***/ }),

/***/ "./src/app/pages/fe-seison-detail/fe-seison-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/fe-seison-detail/fe-seison-detail.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlLXNlaXNvbi1kZXRhaWwvZmUtc2Vpc29uLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/fe-seison-detail/fe-seison-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fe-seison-detail/fe-seison-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: FeSeisonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeSeisonDetailComponent", function() { return FeSeisonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/event/event.service */ "./src/app/service/event/event.service.ts");
/* harmony import */ var src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/driver/driver.service */ "./src/app/service/driver/driver.service.ts");
/* harmony import */ var src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/result/result.service */ "./src/app/service/result/result.service.ts");






let FeSeisonDetailComponent = class FeSeisonDetailComponent {
    constructor(route, raceEventService, driverService, resultService) {
        this.route = route;
        this.raceEventService = raceEventService;
        this.driverService = driverService;
        this.resultService = resultService;
    }
    ngOnInit() {
    }
};
FeSeisonDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_event_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: src_app_service_driver_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
    { type: src_app_service_result_result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"] }
];
FeSeisonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fe-seison-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fe-seison-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fe-seison-detail/fe-seison-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fe-seison-detail.component.scss */ "./src/app/pages/fe-seison-detail/fe-seison-detail.component.scss")).default]
    })
], FeSeisonDetailComponent);



/***/ }),

/***/ "./src/app/pages/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/saison/saison.service */ "./src/app/service/saison/saison.service.ts");



let IndexComponent = class IndexComponent {
    constructor(saisonService) {
        this.saisonService = saisonService;
        this.saisons = [];
    }
    ngOnInit() {
        this.saisonService.getList().subscribe((result) => {
            this.saisons = result;
        });
    }
};
IndexComponent.ctorParameters = () => [
    { type: src_app_service_saison_saison_service__WEBPACK_IMPORTED_MODULE_2__["SaisonService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/pages/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.authService.login(form.value.email, form.value.password).then(() => {
            console.log('drin');
            this.router.navigateByUrl('backend');
        }, (reason) => {
            console.log(reason);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/team-points/team-points.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/team-points/team-points.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0tcG9pbnRzL3RlYW0tcG9pbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/team-points/team-points.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/team-points/team-points.component.ts ***!
  \************************************************************/
/*! exports provided: TeamPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPointsComponent", function() { return TeamPointsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamPointsComponent = class TeamPointsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamPointsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-points',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-points.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-points/team-points.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-points.component.scss */ "./src/app/pages/team-points/team-points.component.scss")).default]
    })
], TeamPointsComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let AuthService = class AuthService {
    constructor(fbAuth) {
        this.fbAuth = fbAuth;
        this.bLoggedIn = false;
        this.fbAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.bLoggedIn = true;
            }
            else {
                this.bLoggedIn = false;
            }
        });
    }
    login(email, password) {
        return this.fbAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
            this.bLoggedIn = true;
        });
    }
    logout() {
        return this.fbAuth.auth.signOut();
    }
    isLoggedIn() {
        return this.bLoggedIn;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/driver/driver.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/driver/driver.service.ts ***!
  \**************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DriverService = class DriverService {
    constructor(db) {
        this.db = db;
    }
    get(id) {
        // return this.db.collection('Event').snapshotChanges(); //.pipe(filter(ev => ev));
        return this.db.collection('Driver').doc(id).get();
    }
    getList() {
        return this.db.
            collection('Driver').
            snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const ret = [];
            for (const obj in results) {
                if (results[obj] !== undefined) {
                    ret.push(results[obj].payload.doc.data());
                }
            }
            return ret;
        }));
    }
    create(result) {
        return this.db.collection('Driver').add(result);
    }
    update(id, result) {
        return this.db.collection('Driver').doc(id).set(result);
    }
};
DriverService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DriverService);



/***/ }),

/***/ "./src/app/service/event/event.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/event/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EventService = class EventService {
    constructor(db) {
        this.db = db;
    }
    get(id) {
        // return this.db.collection('Event').snapshotChanges(); //.pipe(filter(ev => ev));
        return this.db.collection('Event').doc(id).get();
    }
    getList(saisonId) {
        return this.db.
            collection('Event', ref => ref.where('saisonId', '==', saisonId)).
            snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const ret = [];
            for (const obj in results) {
                if (results[obj] !== undefined) {
                    ret.push(results[obj].payload.doc.data());
                }
            }
            return ret;
        }));
    }
    getListFromSaison(saisonId) {
        return this.db.collection('Event', ref => ref.where('saisonId', '==', saisonId)).snapshotChanges();
    }
    create(event) {
        return this.db.collection('Event').add(event);
    }
    update(id, event) {
        return this.db.collection('Event').doc(id).set(event);
    }
};
EventService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/service/result/result.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/result/result.service.ts ***!
  \**************************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _driver_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../driver/driver.service */ "./src/app/service/driver/driver.service.ts");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event/event.service */ "./src/app/service/event/event.service.ts");
/* harmony import */ var _team_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../team/team.service */ "./src/app/service/team/team.service.ts");








let ResultService = class ResultService {
    constructor(db, driverService, raceEventService, teamService) {
        this.db = db;
        this.driverService = driverService;
        this.raceEventService = raceEventService;
        this.teamService = teamService;
    }
    get(id) {
        // return this.db.collection('Event').snapshotChanges(); //.pipe(filter(ev => ev));
        return this.db.collection('Result').doc(id).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((val) => {
            return val.data();
        }));
    }
    getList(raceEventId) {
        return this.db.
            collection('Result', ref => ref.where('raceEventId', '==', raceEventId)).
            snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const ret = [];
            for (const obj in results) {
                if (results[obj] !== undefined) {
                    ret.push(results[obj].payload.doc.data());
                }
            }
            return ret;
        }));
    }
    getListFromEventAndDriver(raceEventId, driverId) {
        return this.db.
            collection('Result', ref => ref.where('raceEventId', '==', raceEventId).where('driverId', '==', driverId)).
            snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            // console.log(results);
            const ret = [];
            for (const obj in results) {
                // console.log(obj);
                if (results[obj] !== undefined) {
                    // console.log(results[obj]);
                    // console.log(results[obj].payload.doc.data());
                    ret.push(results[obj].payload.doc.data());
                }
            }
            // return results;
            if (ret.length > 0) {
                return ret[0];
            }
            else {
                return null;
            }
            // return ret;
            // const ret = results[0].payload.doc.data();
            // return ret;
        }));
    }
    getListFormatted(seasonId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const driverList = yield this.driverService.getList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();
            const eventList = yield this.raceEventService.getList(seasonId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();
            const observables = [];
            for (const driverListIndex in driverList) {
                if (driverList.hasOwnProperty(driverListIndex)) {
                    for (const eventListIndex in eventList) {
                        if (eventList.hasOwnProperty(eventListIndex)) {
                            observables.push(this.getListFromEventAndDriver(eventList[eventListIndex].id, driverList[driverListIndex].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()));
                        }
                    }
                }
            }
            const results = yield Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables).toPromise();
            console.log(results);
            const ret = [];
            for (const driverListIndex in driverList) {
                if (driverList.hasOwnProperty(driverListIndex)) {
                    let totalPoints = 0;
                    const raceResults = [];
                    for (const eventListIndex in eventList) {
                        if (eventList.hasOwnProperty(eventListIndex)) {
                            let bFoundResult = false;
                            for (const resultsIndex in results) {
                                if (results.hasOwnProperty(resultsIndex)) {
                                    if (results[resultsIndex] === null) {
                                        continue;
                                    }
                                    if (results[resultsIndex].driverId === driverList[driverListIndex].id &&
                                        results[resultsIndex].raceEventId === eventList[eventListIndex].id) {
                                        totalPoints += results[resultsIndex].points;
                                        raceResults.push(results[resultsIndex]);
                                        bFoundResult = true;
                                        break;
                                    }
                                }
                            }
                            if (!bFoundResult) {
                                raceResults.push({
                                    driverId: driverList[driverListIndex].id,
                                    points: 0,
                                    position: 0,
                                    time: 0,
                                    timeQuali: 0,
                                    qualiPosition: 0,
                                    raceEventId: eventList[eventListIndex].id
                                });
                            }
                        }
                    }
                    ret.push({
                        name: driverList[driverListIndex].name,
                        results: raceResults,
                        totalPoints,
                    });
                }
            }
            return ret;
        });
    }
    getListFormattedForTeam(seasonId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const teamList = yield this.teamService.getList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();
            const eventList = yield this.raceEventService.getList(seasonId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();
            const observables = [];
            for (const teamListIndex in teamList) {
                if (teamList.hasOwnProperty(teamListIndex)) {
                    for (const eventListIndex in eventList) {
                        if (eventList.hasOwnProperty(eventListIndex)) {
                            observables.push(this.getListFromEventAndDriver(eventList[eventListIndex].id, teamList[teamListIndex].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()));
                        }
                    }
                }
            }
            const results = yield Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables).toPromise();
            console.log(results);
            const ret = [];
            for (const teamListIndex in teamList) {
                if (teamList.hasOwnProperty(teamListIndex)) {
                    let totalPoints = 0;
                    const raceResults = [];
                    for (const eventListIndex in eventList) {
                        if (eventList.hasOwnProperty(eventListIndex)) {
                            let bFoundResult = false;
                            for (const resultsIndex in results) {
                                if (results.hasOwnProperty(resultsIndex)) {
                                    if (results[resultsIndex] === null) {
                                        continue;
                                    }
                                    if (results[resultsIndex].teamId === teamList[teamListIndex].id &&
                                        results[resultsIndex].raceEventId === eventList[eventListIndex].id) {
                                        totalPoints += results[resultsIndex].points;
                                        raceResults.push(results[resultsIndex]);
                                        bFoundResult = true;
                                        break;
                                    }
                                }
                            }
                            if (!bFoundResult) {
                                raceResults.push({
                                    teamId: teamList[teamListIndex].id,
                                    points: 0,
                                    position: 0,
                                    time: 0,
                                    timeQuali: 0,
                                    qualiPosition: 0,
                                    raceEventId: eventList[eventListIndex].id
                                });
                            }
                        }
                    }
                    ret.push({
                        name: teamList[teamListIndex].name,
                        results: raceResults,
                        totalPoints,
                    });
                }
            }
        });
    }
    create(result) {
        return this.db.collection('Result').add(result);
    }
    update(id, result) {
        return this.db.collection('Result').doc(id).set(result);
    }
};
ResultService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
    { type: _event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] },
    { type: _team_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] }
];
ResultService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ResultService);



/***/ }),

/***/ "./src/app/service/saison/saison.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/saison/saison.service.ts ***!
  \**************************************************/
/*! exports provided: SaisonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaisonService", function() { return SaisonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SaisonService = class SaisonService {
    constructor(db) {
        this.db = db;
    }
    get(id) {
        return this.db.collection('Saison').doc(id).get();
        // return this.db.collection('Saison').snapshotChanges(); //.pipe(filter(ev => ev));
    }
    getList() {
        return this.db.collection('Saison').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const ret = [];
            for (const obj in results) {
                if (results[obj] !== undefined) {
                    ret.push(results[obj].payload.doc.data());
                }
            }
            return ret;
        }));
    }
    create(saison) {
        return this.db.collection('Saison').add(saison);
    }
    update(id, saison) {
        return this.db.collection('Saison').doc(id).set(saison);
    }
    delete(id) {
        this.db.collection('Saison').doc(id).delete();
    }
};
SaisonService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SaisonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SaisonService);



/***/ }),

/***/ "./src/app/service/team/team.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/team/team.service.ts ***!
  \**********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TeamService = class TeamService {
    constructor(db) {
        this.db = db;
    }
    getList() {
        return this.db.
            collection('Team').
            snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const ret = [];
            for (const obj in results) {
                if (results[obj] !== undefined) {
                    ret.push(results[obj].payload.doc.data());
                }
            }
            return ret;
        }));
    }
    create(team) {
        return this.db.collection('Team').add(team);
    }
    update(id, team) {
        return this.db.collection('Team').doc(id).set(team);
    }
};
TeamService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TeamService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDtoTZiS7YFnEsbL3yP5cGq4J2oY5ZsTfE',
        authDomain: 'rangliste-69208.firebaseapp.com',
        databaseURL: 'https://rangliste-69208.firebaseio.com',
        projectId: 'rangliste-69208',
        storageBucket: 'rangliste-69208.appspot.com',
        messagingSenderId: '1018820326317',
        appId: '1:1018820326317:web:e550e9aba2bd2a19b56724'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Desktop\EigeneProjekte\Split5ResultList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map