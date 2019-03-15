import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})

export class SegundaPage implements OnInit {



  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

  }























  /*
    ngOnInit() {
      this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
      this.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
      this.email = this.activatedRoute.snapshot.paramMap.get('email');
      this.fecha = this.activatedRoute.snapshot.paramMap.get('fecha');
      this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
      this.respuesta1 = this.activatedRoute.snapshot.paramMap.get('respuesta1');
      this.respuesta2 = this.activatedRoute.snapshot.paramMap.get('respuesta2');
      this.respuesta3 = this.activatedRoute.snapshot.paramMap.get('respuesta3');
      this.respuesta4 = this.activatedRoute.snapshot.paramMap.get('respuesta4');
      this.respuesta5 = this.activatedRoute.snapshot.paramMap.get('respuesta5');
    }
    */
}

