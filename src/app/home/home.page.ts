import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Button } from 'protractor';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  respuesta1 = null;
  respuesta2 = null;
  respuesta3 = null;

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
    this.nav.navigateForward(`/segunda/${this.nombre}/${this.apellido}/${this.email}/${this.fecha}/${this.gender}/${this.respuesta1}/${this.respuesta2}/${this.respuesta3}`);

  }
}