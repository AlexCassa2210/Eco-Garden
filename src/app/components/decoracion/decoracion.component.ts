import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoracion',
  templateUrl: './decoracion.component.html',
  styleUrls: ['./decoracion.component.css']
})
export class Decoracion {

  public titulo: string;
  public descripcion: string;

  constructor() {
    this.titulo = "Encuentra tu decoración exterior e interior";
    this.descripcion = "Contáctanos y en brevedad un asesor se pondrá en contacto.";
   }

}
