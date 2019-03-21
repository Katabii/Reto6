(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segunda-segunda-module"],{

/***/ "./src/app/pages/segunda/segunda.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/segunda/segunda.module.ts ***!
  \*************************************************/
/*! exports provided: SegundaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaPageModule", function() { return SegundaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segunda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segunda.page */ "./src/app/pages/segunda/segunda.page.ts");







var routes = [
    {
        path: '',
        component: _segunda_page__WEBPACK_IMPORTED_MODULE_6__["SegundaPage"]
    }
];
var SegundaPageModule = /** @class */ (function () {
    function SegundaPageModule() {
    }
    SegundaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segunda_page__WEBPACK_IMPORTED_MODULE_6__["SegundaPage"]]
        })
    ], SegundaPageModule);
    return SegundaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/segunda/segunda.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/segunda/segunda.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Resultado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <p>\r\n      Tus datos han sido enviados correctamente.\r\n    </p>\r\n    \r\n <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink=\"/home\" routerDirection=\"forward\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>-->\r\n\r\n  <!--<div class=\"titulo\">\r\n    <h2>Formulario</h2>\r\n  </div>\r\n  <h5>Respuesta #1:<span><br>{{ item.respuesta1 }}</span></h5>\r\n  <h5>Respuesta #2:<span><br>{{ item.respuesta2 }}</span></h5>\r\n  <h5>Respuesta #3:<span><br>{{ item.respuesta3 }}</span></h5>\r\n  <h5>Respuesta #4:<span><br>{{ item.respuesta4 }}</span></h5>\r\n  <h5>Respuesta #5:<span><br>{{ item.respuesta5 }}</span></h5>\r\n\r\n  <div class=\"titulo\">\r\n    <h2>Datos personales</h2>\r\n  </div>\r\n  \r\n  <h5>Nombre: <span><br>{{ item.nombre }}</span></h5>\r\n  <h5>Apellido: <span><br>{{ item.apellido }}</span></h5>\r\n  <h5>Correo Electrónico: <span><br>{{ item.email }}</span></h5>\r\n  <h5>Fecha de Nacimiento:<span><br>{{ item.fecha }}</span></h5>\r\n  <h5>Género: <span><br>{{item.gender}}</span></h5>\r\n-->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/segunda/segunda.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/segunda/segunda.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  padding-left: 10px; }\n\nspan {\n  color: black;\n  font-weight: normal;\n  font-size: 14pt;\n  padding-left: 10px; }\n\nion-title {\n  text-align: center;\n  font-size: 25pt; }\n\nion-content {\n  background-color: var(--ion-color-primary); }\n\n.titulo {\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin-left: 0; }\n\nh2 {\n  font-weight: bold;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VndW5kYS9DOlxcVXNlcnNcXDFjaWJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHJldG82L3NyY1xcYXBwXFxwYWdlc1xcc2VndW5kYVxcc2VndW5kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VndW5kYS9zZWd1bmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB0O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/segunda/segunda.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/segunda/segunda.page.ts ***!
  \***********************************************/
/*! exports provided: SegundaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaPage", function() { return SegundaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SegundaPage = /** @class */ (function () {
    function SegundaPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    SegundaPage.prototype.ngOnInit = function () {
    };
    SegundaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segunda',
            template: __webpack_require__(/*! ./segunda.page.html */ "./src/app/pages/segunda/segunda.page.html"),
            styles: [__webpack_require__(/*! ./segunda.page.scss */ "./src/app/pages/segunda/segunda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SegundaPage);
    return SegundaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-segunda-segunda-module.js.map