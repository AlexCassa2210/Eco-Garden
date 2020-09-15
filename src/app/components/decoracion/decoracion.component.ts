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
    this.titulo = "Encuentra tu decoración exterior";
    this.descripcion = "Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad"
   }

}
