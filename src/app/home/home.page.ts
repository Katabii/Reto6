import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo, FirebaseService } from '../services/firebase.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  email: LoginPage["email"];
  datos: Todo = {
    respuesta1: null,
    respuesta2: null,
    respuesta3: null,
    respuesta4: null,
    respuesta5: null
  }

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private service: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.toast("sdc" + this.email);
  }

  async guardar() {
    if (this.datos.respuesta1 == null || this.datos.respuesta2 == null || this.datos.respuesta3 == null || this.datos.respuesta4 == null || this.datos.respuesta5 == null || this.datos.respuesta1 == "" || this.datos.respuesta2 == "" || this.datos.respuesta3 == "" || this.datos.respuesta4 == "" || this.datos.respuesta5 == "") {
      this.toast("Faltan campos por rellenar");
    } else {
      this.saveTodo();
    }
  }
  public async toast(mensaje) {
    const toast = await this.toastController.create({
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
    const saving = await this.loadingController.create({
      message: 'Guardando...',
      animated: true,
    });
    await saving.present();

    this.service.createTask(this.datos).then(() => {
      saving.dismiss();
    });

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
      case 1:
        this.datos.respuesta1 = null;
        break;
      case 2:
        this.datos.respuesta2 = null;
        break;
      case 3:
        this.datos.respuesta3 = null;
        break;
      case 4:
        this.datos.respuesta4 = null;
        break;
      case 5:
        this.datos.respuesta5 = null;
        break;
    }
  }


  async logout() {
    const loading = await this.loadingController.create({
      message: 'Cerrando sesión...',
      animated: true,
      duration: 1000,
    });
    await loading.present();

    this.authService.doLogout()
      .then(res => {
        this.router.navigate(["/login"]);
      }, err => {
        console.log(err);
      })
  }

}
