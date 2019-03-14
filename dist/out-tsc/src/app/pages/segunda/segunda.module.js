import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SegundaPage } from './segunda.page';
var routes = [
    {
        path: '',
        component: SegundaPage
    }
];
var SegundaPageModule = /** @class */ (function () {
    function SegundaPageModule() {
    }
    SegundaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SegundaPage]
        })
    ], SegundaPageModule);
    return SegundaPageModule;
}());
export { SegundaPageModule };
//# sourceMappingURL=segunda.module.js.map