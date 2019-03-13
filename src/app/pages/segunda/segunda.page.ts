import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  nombre = null;
  apellido = null;
  email = null;
  fecha = null;
  gender = null;
  respuesta1 = null;
  respuesta2 = null;
  respuesta3 = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.fecha = this.activatedRoute.snapshot.paramMap.get('fecha');
    this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
    this.respuesta1 = this.activatedRoute.snapshot.paramMap.get('respuesta1');
    this.respuesta2 = this.activatedRoute.snapshot.paramMap.get('respuesta2');
    this.respuesta3 = this.activatedRoute.snapshot.paramMap.get('respuesta3');
  }
}

