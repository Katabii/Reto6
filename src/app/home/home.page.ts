import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = 0;

  constructor(private nav:NavController){

  }

  enviarFormulario(){
    this.nav.navigateForward(`/segunda/${this.value}`);
  }

}
