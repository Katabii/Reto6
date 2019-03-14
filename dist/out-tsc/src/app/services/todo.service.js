import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
var TodoService = /** @class */ (function () {
    function TodoService(db) {
        this.todosCollection = db.collection('todos');
        this.todos = this.todosCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
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
    TodoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], TodoService);
    return TodoService;
}());
export { TodoService };
//# sourceMappingURL=todo.service.js.map