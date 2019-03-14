import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TodoDetailsPage } from './todo-details.page';
var routes = [
    {
        path: '',
        component: TodoDetailsPage
    }
];
var TodoDetailsPageModule = /** @class */ (function () {
    function TodoDetailsPageModule() {
    }
    TodoDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TodoDetailsPage]
        })
    ], TodoDetailsPageModule);
    return TodoDetailsPageModule;
}());
export { TodoDetailsPageModule };
//# sourceMappingURL=todo-details.module.js.map