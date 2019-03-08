import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = null;
  apellido = null;
  email = null;
  fecha = null;
  gender = null;

  constructor(private nav: NavController) {}

  

  enviarFormulario() {
    this.nav.navigateForward(`/segunda/${this.nombre}/${this.apellido}/${this.email}/${this.fecha}`);
    
  }
}