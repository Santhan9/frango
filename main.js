(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-page {}\r\n\r\n.dashboard-head-img {\r\n  background-image: url(/../assets/imgs/dashboard-head.jpg);\r\n  background-size: cover;\r\n  height: 340px;\r\n}\r\n\r\n.home-bg-overlay {\r\n  /*background-color: #929292;*/\r\n}\r\n\r\n.ui.sticky {\r\n  position: static;\r\n  transition: none;\r\n  z-index: 800;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\n.header-link {\r\n  padding: 4px 4px;\r\n}\r\n\r\n.lg-h-btn {\r\n  color: #fff!important;\r\n}\r\n\r\n.c-account-btn {\r\n  background: 0 0!important;\r\n  border: 2px solid #fff!important;\r\n  color: #fff!important;\r\n}\r\n\r\n.h-city-main {\r\n  background-size: cover;\r\n  padding: 25px 0 40px;\r\n  background-position: bottom center;\r\n  z-index: 6;\r\n}\r\n\r\n.p-relative {\r\n  position: relative;\r\n}\r\n\r\n.logo-home {\r\n  height: 120px;\r\n  width: 120px;\r\n  line-height: 100px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.home-location-section {\r\n  /*    position: static;\r\n    -webkit-transition: none;\r\n    transition: none;\r\n    z-index: 800;*/\r\n}\r\n\r\n.home-location-wrapper {\r\n  /*    margin: 0 auto;*/\r\n}\r\n\r\n.home-suggestion-message{\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n  padding-top: 40px;\r\n  color: white;\r\n}\r\n\r\n.home-form-wrapper {\r\n  /*        padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    max-width: 1160px;*/\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n.menu-wrapper{\r\n    padding: 50px 6px;\r\n}\r\n\r\n.home-count-message{\r\n     text-align: center;\r\n    font-weight: bold;\r\n    color:black;\r\n    font-size: 40px;\r\n    padding-top: 50px;   \r\n}\r\n\r\n.home-dishes-count{\r\n    color:#ffbd2f;\r\n}\r\n\r\n.home-welcome-message{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color:gray;\r\n    font-size: 20px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.image-home-content{\r\n    background-color: white;\r\n        border-radius: 40px;\r\n\r\n    height: 320px;\r\n  /*  position: relative;*/\r\n}\r\n\r\n.home-bg-menu{\r\n    background-size: cover;\r\n    background-position: center center; \r\n    display: block;\r\n    height: 210px;\r\n    border-top-left-radius: 40px;\r\n    border-top-right-radius: 40px;\r\n}\r\n\r\n.image-con-header{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color:#414549;\r\n    padding-top: 15px;\r\n}\r\n\r\n.image-con-message{\r\n    text-align: center;\r\n     color:gray;   \r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"frango-navbar-header\">\n  <img class=\"menu-logo\" src=\"assets/imgs/redLogo.png\">\n</mat-toolbar>\n<div class=\"dashboard-page\" class=\"dashboard-head-img\">\n\t<div class=\"dashboard-head-img\">\n\t\t<div class=\"home-bg-overlay\">\n\t\t\t<div id=\"sticky_header\" class=\"ui sticky\">\n\t\t\t\t<header class=\"header\" id=\"header\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div id=\"login-navigation\" class=\"login__container right\">\n\t\t\t\t\t\t\t<div class=\"header-link\">\n\t\t\t\t\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t   \t\t\t\t  <button mat-button class=\"lg-h-btn\">Login</button>\n\t\t\t\t                  <button mat-stroked-button isRoundButton=\"true\"\n\t\t\t\t                  class=\"c-account-btn\" color=\"primary\">\n\t\t\t\t                  \t\tCreate Account\n\t\t\t\t              \t  </button>\n\t\t\t      \t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</header>\n\t\t\t</div>\n\t\t\t<div class=\"h-city-main p-relative\" id=\"zimagery-container\" \n\t\t\t\tstyle=\"color: #929292;\">\n\t\t\t\t<div class=\"logo-home\">\n\t\t\t\t\t<img class=\"menu-logo\" src=\"assets/imgs/homeLogo.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"home-location-section\">\n\t\t\t\t\t<div class=\"home-location-wrapper\">\n\t\t\t\t\t\t<div class=\"home-suggestion-message\">\n\t\t\t\t\t\t\t<h2>Please Select Nearest Location</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"home-form-wrapper\">\n\t\t\t\t\t\t\t<form> \n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t    <mat-select placeholder=\"\" [(ngModel)]=\"selectedValue\" \n\t\t\t\t\t\t\t    panelClass=\"example-panel-red\"\n\t\t\t\t\t\t\t    name=\"food\">\n\t\t\t\t\t\t\t      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n\t\t\t\t\t\t\t        {{food.viewValue}}\n\t\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t\t    </mat-select>\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"menu-conainer\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"home-count-message\">\n\t\t\t\tWELCOME TO FRANGO \n\t\t\t</div>\n\t\t\t<div class=\"home-welcome-message\">\n\t\t\t\tFor Chicken Lovers\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"menu-wrapper\">\t\n\t\t\t<div class=\"row\">\n\t\t\t \n\t\t\t  <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n\t\t\t  \t<div class=\"image-home-content\">\t\t\t  \t\t\n\t\t\t  \t\t<div class=\"home-bg-menu\" \n\t\t\t        \t[ngStyle]=\"{'background-image':'url(/../assets/imgs/periperi.jpg)'}\">\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-header\">\n\t\t\t        \t<div>Peri Peri</div>\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-message\">\n\t\t\t        \tSteamed and Grilled\n\t\t\t        </div>\n\t\t\t  \t</div> \t\n\t\t\t  </div>\n\t\t\t  <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n\t\t\t    <div class=\"image-home-content\">\t\t\t  \t\t\n\t\t\t  \t\t<div class=\"home-bg-menu\" \n\t\t\t        \t[ngStyle]=\"{'background-image':'url(/../assets/imgs/pizza.jpg)'}\">\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-header\">\n\t\t\t        \t<div>Pizzas</div>\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-message\">\n\t\t\t        \tExtra toppings are available\n\t\t\t        </div>\n\t\t\t  \t</div>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n\t\t\t    <div class=\"image-home-content\">\t\t\t  \t\t\n\t\t\t  \t\t<div class=\"home-bg-menu\" \n\t\t\t        \t[ngStyle]=\"{'background-image':'url(/../assets/imgs/mealdealNew.jpg)'}\">\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-header\">\n\t\t\t        \t<div>Meal Deals</div>\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-message\">\n\t\t\t        \tAll meals are served\n\t\t\t        </div>\n\t\t\t  \t</div>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n\t\t\t    <div class=\"image-home-content\">\t\t\t  \t\t\n\t\t\t  \t\t<div class=\"home-bg-menu\" \n\t\t\t        \t[ngStyle]=\"{'background-image':'url(/../assets/imgs/burger.jpg)'}\">\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-header\">\n\t\t\t        \t<div>Burgers</div>\n\t\t\t        </div>\n\t\t\t        <div class=\"image-con-message\">\n\t\t\t        \tServed with free salad\n\t\t\t        </div>\n\t\t\t  \t</div>\n\t\t\t  </div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Ballymena BT43 6UF' },
            { value: 'pizza-1', viewValue: 'Londonderry, BT48 7PX' },
            { value: 'tacos-2', viewValue: 'Belfast BT7 1RR' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.selectedValue = "steak-0";
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Apps\Frango\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map