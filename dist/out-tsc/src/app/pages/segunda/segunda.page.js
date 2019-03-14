import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var SegundaPage = /** @class */ (function () {
    function SegundaPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.nombre = null;
        this.apellido = null;
        this.email = null;
        this.fecha = null;
        this.gender = null;
        this.respuesta1 = null;
        this.respuesta2 = null;
        this.respuesta3 = null;
        this.respuesta4 = null;
        this.respuesta5 = null;
    }
    SegundaPage.prototype.ngOnInit = function () {
        this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
        this.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
        this.email = this.activatedRoute.snapshot.paramMap.get('email');
        this.fecha = this.activatedRoute.snapshot.paramMap.get('fecha');
        this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
        this.respuesta1 = this.activatedRoute.snapshot.paramMap.get('respuesta1');
        this.respuesta2 = this.activatedRoute.snapshot.paramMap.get('respuesta2');
        this.respuesta3 = this.activatedRoute.snapshot.paramMap.get('respuesta3');
        this.respuesta4 = this.activatedRoute.snapshot.paramMap.get('respuesta4');
        this.respuesta5 = this.activatedRoute.snapshot.paramMap.get('respuesta5');
    };
    SegundaPage = tslib_1.__decorate([
        Component({
            selector: 'app-segunda',
            templateUrl: './segunda.page.html',
            styleUrls: ['./segunda.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], SegundaPage);
    return SegundaPage;
}());
export { SegundaPage };
//# sourceMappingURL=segunda.page.js.map