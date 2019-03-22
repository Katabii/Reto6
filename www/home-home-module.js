(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        Encuesta Analphabet\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list padding>\r\n    <ion-item>\r\n      <ion-icon name=\"help\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h6 stacked>¿Qué conjunto de habilidades necesitamos en nuestro equipo?</h6>\r\n        <ion-textarea [(ngModel)]=\"datos.respuesta1\" required clearinput rows=\"3\" cols=\"5\"\r\n          placeholder=\"Escribe aquí...\">\r\n        </ion-textarea>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(6)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"help\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h6 stacked>¿Estamos siguiendo nuestros ideales?</h6>\r\n        <ion-textarea [(ngModel)]=\"datos.respuesta2\" required rows=\"3\" cols=\"5\" placeholder=\"Escribe aquí...\">\r\n        </ion-textarea>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(7)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"help\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h6 stacked>¿Cómo es tu equilibrio de trabajo y vida?</h6>\r\n        <ion-textarea [(ngModel)]=\"datos.respuesta3\" required rows=\"3\" cols=\"5\" placeholder=\"Escribe aquí...\">\r\n        </ion-textarea>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(8)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"help\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h6 stacked>¿Te gusta lo que haces?</h6>\r\n        <ion-textarea [(ngModel)]=\"datos.respuesta4\" required rows=\"3\" cols=\"5\" placeholder=\"Escribe aquí...\">\r\n        </ion-textarea>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(9)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"help\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h6 stacked>¿Hay alguna pregunta que no hicimos, pero deberíamos haber hecho?</h6>\r\n        <ion-textarea [(ngModel)]=\"datos.respuesta5\" required rows=\"3\" cols=\"5\" placeholder=\"Escribe aquí...\">\r\n        </ion-textarea>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(10)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <div class=\"titulo2\">\r\n    <h2>Datos personales</h2>\r\n  </div>\r\n  <ion-list padding>\r\n    <ion-item>\r\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>DNI</h5>\r\n        <ion-input maxlength=\"9\" type=\"text\" id=\"dni\" name=\"dni\" [(ngModel)]=\"datos.dni\" required clearinput\r\n          placeholder=\"DNI\" slot=\"start\">\r\n        </ion-input>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(0)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>Nombre</h5>\r\n        <ion-input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"datos.nombre\" required clearinput placeholder=\"Nombre\"\r\n          slot=\"start\">\r\n        </ion-input>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(1)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>Apellido</h5>\r\n        <ion-input [(ngModel)]=\"datos.apellido\" required clearinput placeholder=\"Apellido\"></ion-input>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(2)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>Correo electrónico</h5>\r\n        <ion-input type=\"email\" [(ngModel)]=\"datos.email\" required clearinput placeholder=\"Correo electrónico\">\r\n        </ion-input>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(3)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>F. Nacimiento</h5>\r\n        <ion-datetime slot=\"start\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"datos.fecha\" required\r\n          placeholder=\"DD-MM-YYYY\">\r\n        </ion-datetime>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(4)\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"people\" slot=\"start\"></ion-icon>\r\n      <div>\r\n        <h5 stacked>Género</h5>\r\n        <ion-select required [(ngModel)]=\"datos.genero\" cancelText=\"Nah\" okText=\"Okay!\" placeholder=\"Elige tu género\">\r\n          <ion-select-option>Hombre</ion-select-option>\r\n          <ion-select-option>Mujer</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <ion-icon class=\"borrar\" name=\"backspace\" slot=\"end\" (click)=\"borrarTxt(5)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button expand=\"full\" (click)=\"acceptTerms()\" id=\"btn\" name=\"btn\">Enviar formulario</ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n  font-size: 20pt; }\n\nion-textarea {\n  padding-left: 5px;\n  background-color: var(--ion-color-terciary);\n  width: 100%; }\n\nion-input {\n  width: 100%; }\n\nion-label {\n  font-size: 12pt;\n  font-style: oblique; }\n\nh5 {\n  color: var(--ion-color-primary);\n  font-weight: bold; }\n\nh2 {\n  font-weight: bold;\n  text-decoration: underline; }\n\nh6 {\n  color: var(--ion-color-primary);\n  font-weight: bold; }\n\nspan {\n  color: black;\n  font-weight: normal;\n  font-size: 14pt; }\n\n.titulo {\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin-left: 0; }\n\n.titulo2 {\n  text-align: center;\n  width: 100%;\n  color: var(--ion-color-primary);\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin-left: 0; }\n\nion-select {\n  width: 400pt; }\n\n.term {\n  padding-bottom: 10px;\n  text-align: left; }\n\n.terminos {\n  font-size: 10pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXDFjaWJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHJldG82L3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcmNpYXJ5KTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaDYge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4udGl0dWxvMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogNDAwcHQ7XHJcbn1cclxuXHJcbi50ZXJtIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXJtaW5vc3tcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(nav, loadingController, route, service, toastControler, alertController) {
        this.nav = nav;
        this.loadingController = loadingController;
        this.route = route;
        this.service = service;
        this.toastControler = toastControler;
        this.alertController = alertController;
        this.datos = {
            respuesta1: null,
            respuesta2: null,
            respuesta3: null,
            respuesta4: null,
            respuesta5: null,
            dni: null,
            nombre: null,
            apellido: null,
            email: null,
            fecha: null,
            genero: null,
        };
        this.datoId = null;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.guardar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.datos.dni == null || this.datos.nombre == null || this.datos.apellido == null || this.datos.email == null || this.datos.fecha == null || this.datos.genero == null || this.datos.respuesta1 == null || this.datos.respuesta2 == null || this.datos.respuesta3 == null || this.datos.respuesta4 == null || this.datos.respuesta5 == null) {
                    this.toast("Faltan campos por rellenar");
                }
                else {
                    this.saveTodo();
                    this.toast("Datos guardados correctamente");
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.toast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastControler.create({
                            message: mensaje,
                            position: 'top',
                            duration: 5000,
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.acceptTerms = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Términos y condiciones',
                            message: '<p class="terminos" padding>Los datos de carácter personal que nos remita a través de este formulario, quedarán incorporados en los sistemas de información.<br><br>Garantizamos la confidencialidad de todos los datos facilitados. Además de los mínimos establecidos por la legislación, la recogida y tratamiento de los datos se efectúan bajo niveles de seguridad que impiden la pérdida o manipulación de los datos.</p>',
                            buttons: [
                                {
                                    text: 'Denegar',
                                    role: 'cancel',
                                }, {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.guardar();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Guardando...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.datoId) {
                            this.service.updateTodo(this.datos, this.datoId).then(function () {
                                loading.dismiss();
                            });
                        }
                        else {
                            this.service.addTodo(this.datos).then(function () {
                                loading.dismiss();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /*isChecked(e): void {
      var isChecked = e.currentTarget.checked;
      console.log(isChecked);//undefined
      if (isChecked) {
        document.getElementById("btn").disabled = true;
      } else {
        document.getElementById("btn").disabled = false;
      }
    }*/
    HomePage.prototype.borrarTxt = function (num) {
        switch (num) {
            case 0:
                this.datos.dni = null;
                break;
            case 1:
                this.datos.nombre = null;
                break;
            case 2:
                this.datos.apellido = null;
                break;
            case 3:
                this.datos.email = null;
                break;
            case 4:
                this.datos.fecha = null;
                break;
            case 5:
                this.datos.genero = null;
                break;
            case 6:
                this.datos.respuesta1 = null;
                break;
            case 7:
                this.datos.respuesta2 = null;
                break;
            case 8:
                this.datos.respuesta3 = null;
                break;
            case 9:
                this.datos.respuesta4 = null;
                break;
            case 10:
                this.datos.respuesta5 = null;
                break;
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TodoService = /** @class */ (function () {
    function TodoService(db) {
        this.todosCollection = db.collection('todos');
        this.todos = this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.getTodo = function (id) {
        return this.todosCollection.doc(id).valueChanges();
    };
    TodoService.prototype.updateTodo = function (todo, id) {
        return this.todosCollection.doc(id).update(todo);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.todosCollection.add(todo);
    };
    TodoService.prototype.removeTodo = function (id) {
        return this.todosCollection.doc(id).delete();
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TodoService);
    return TodoService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map