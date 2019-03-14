import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  respuesta1 = null;
  respuesta2 = null;
  respuesta3 = null;
  respuesta4 = null;
  respuesta5 = null;

  nombre = null;
  apellido = null;
  email = null;
  fecha = null;
  gender = null;



  constructor(private nav: NavController) {

  }

  ngOnInit(): void {
    
  }

  enviarFormulario() {
    if (this.nombre == null || this.apellido == null || this.email == null || this.fecha == null || this.gender == null || this.respuesta1 == null || this.respuesta2 == null || this.respuesta3 == null || this.respuesta4 == null || this.respuesta5 == null) {
      document.getElementById("btn").disabled = true;
    } else {
      this.nav.navigateForward(`/segunda/${this.nombre}/${this.apellido}/${this.email}/${this.fecha}/${this.gender}/${this.respuesta1}/${this.respuesta2}/${this.respuesta3}/${this.respuesta4}/${this.respuesta5}`);
    }
  }

  borrarTxt(num) {
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
  }
  fun() {
    if (this.nombre == null || this.apellido == null || this.email == null || this.fecha == null || this.gender == null || this.respuesta1 == null || this.respuesta2 == null || this.respuesta3 == null || this.respuesta4 == null || this.respuesta5 == null) {
      
    } else {
      document.getElementById("btn").disabled = false;
    }
  }
}