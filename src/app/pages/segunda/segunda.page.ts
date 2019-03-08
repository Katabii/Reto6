import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  nombre = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
  }

}
