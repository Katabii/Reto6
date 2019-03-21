import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, PopoverController, AlertController } from '@ionic/angular';
import { ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { TodoService, Todo } from '../services/todo.service';
import { reduce } from 'rxjs/operators';
import { R3TargetBinder } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  datos: Todo = {
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
  }
  datoId = null;

  constructor(private nav: NavController, private loadingController: LoadingController, private route: ActivatedRoute, private service: TodoService, private toastControler: ToastController, private alertController: AlertController) {

  }

  ngOnInit(): void {

  }

  async guardar() {
    if (this.datos.dni == null || this.datos.nombre == null || this.datos.apellido == null || this.datos.email == null || this.datos.fecha == null || this.datos.genero == null || this.datos.respuesta1 == null || this.datos.respuesta2 == null || this.datos.respuesta3 == null || this.datos.respuesta4 == null || this.datos.respuesta5 == null) {
      this.toast("Faltan campos por rellenar");
    } else {
      this.saveTodo();
      this.toast("Datos guardados correctamente");
    }
  }
  async toast(mensaje) {
    const toast = await this.toastControler.create({
      message: mensaje,
      position: 'top',
      duration: 5000,
    });
    await toast.present();
  }
  async acceptTerms() {
    const alert = await this.alertController.create({
      header: 'Términos y condiciones',
      message: '<p class="terminos" padding>Los datos de carácter personal que nos remita a través de este formulario, quedarán incorporados en los sistemas de información.<br><br>Garantizamos la confidencialidad de todos los datos facilitados. Además de los mínimos establecidos por la legislación, la recogida y tratamiento de los datos se efectúan bajo niveles de seguridad que impiden la pérdida o manipulación de los datos.</p>',
      buttons: [
        {
          text: 'Denegar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.guardar();
          }
        }
      ]
    });
    await alert.present();

  }
  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Guardando...',
    });
    await loading.present();

    if (this.datoId) {
      this.service.updateTodo(this.datos, this.datoId).then(() => {
        loading.dismiss();
      });
    } else {
      this.service.addTodo(this.datos).then(() => {
        loading.dismiss();
      });
    }
  }

  /*isChecked(e): void {
    var isChecked = e.currentTarget.checked;
    console.log(isChecked);//undefined
    if (isChecked) {
      document.getElementById("btn").disabled = true;
    } else {
      document.getElementById("btn").disabled = false;
    }
  }*/

  borrarTxt(num) {
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
  }


  /*
  fun() {
    if (this.nombre == null || this.apellido == null || this.email == null || this.fecha == null || this.gender == null || this.respuesta1 == null || this.respuesta2 == null || this.respuesta3 == null || this.respuesta4 == null || this.respuesta5 == null) {
 
    } else {
      document.getElementById("btn").disabled = false;
    }
  }*/
}