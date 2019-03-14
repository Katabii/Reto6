import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(nav) {
        this.nav = nav;
        this.respuesta1 = null;
        this.respuesta2 = null;
        this.respuesta3 = null;
        this.respuesta4 = null;
        this.respuesta5 = null;
        this.nombre = null;
        this.apellido = null;
        this.email = null;
        this.fecha = null;
        this.gender = null;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.enviarFormulario = function () {
        this.nav.navigateForward("/segunda/" + this.nombre + "/" + this.apellido + "/" + this.email + "/" + this.fecha + "/" + this.gender + "/" + this.respuesta1 + "/" + this.respuesta2 + "/" + this.respuesta3 + "/" + this.respuesta4 + "/" + this.respuesta5);
    };
    HomePage.prototype.myFunction = function () {
        document.getElementById("button").removeAttribute("disabled");
    };
    HomePage.prototype.borrarTxt = function (num) {
        switch (num) {
            case 1:
                this.nombre = null;
                break;
            case 2:
                this.apellido = null;
                break;
            case 3:
                this.email = null;
                break;
            case 4:
                this.fecha = null;
                break;
            case 5:
                this.gender = null;
                break;
            case 6:
                this.respuesta1 = null;
                break;
            case 7:
                this.respuesta2 = null;
                break;
            case 8:
                this.respuesta3 = null;
                break;
            case 9:
                this.respuesta4 = null;
                break;
            case 10:
                this.respuesta5 = null;
                break;
        }
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map