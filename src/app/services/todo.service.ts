import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


export interface Todo {
  id?: string;
  respuesta1: string,
  respuesta2: string,
  respuesta3: string,
  respuesta4: string,
  respuesta5: string,

  dni: string,
  nombre: string,
  apellido: string,
  email: string,
  fecha: string,
  genero: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>;

  constructor(db: AngularFirestore, private toastController: ToastController) {
    this.todosCollection = db.collection<Todo>('todos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getTodos() {
    return this.todos;
  }

  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }

  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }

 
}