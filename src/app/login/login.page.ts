import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

export var email: string;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Propiedades (Variables)
  validations_form: FormGroup;
  errorMessage: string = '';

  //Mensajes de valicación del formulario
  validation_messages = {
    'email': [
      { type: 'required', message: 'El correo electrónico es necesario.' },
      { type: 'pattern', message: 'Por favor introduzca un correo válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es necesaria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 5 carácteres.' }
    ]
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private platform: Platform,
  ) { this.backButtonEvent(); }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
  }

  //Botón para cerrar la aplicación
  backButtonEvent() {
    this.platform.backButton.subscribe(() => {
      if (this.router.url === '/login') {
        navigator['app'].exitApp();
      }
    });
  }

  //Inicio de sesión
  tryLogin(value) {
    email = value.email;
    this.authService.doLogin(value)
      .then(async res => {
        const loading = await this.loadingController.create({
          message: 'Cargando...',
          animated: true,
          duration: 850,
        });
        await loading.present();
        this.router.navigate(["/home"]);
        this.validations_form.reset();
      }, err => {
        this.errorMessage = "El usuario o la contraseña son incorrectos.";
        console.log(err)
      })
  }

  //Borrar mensaje de error de inicio de sesión
  quitarMsgErr() {
    this.errorMessage = "";
  }
}
