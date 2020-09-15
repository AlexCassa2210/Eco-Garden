import { Component } from '@angular/core';

@Component({
  selector: 'servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})

  export class Servicio{
    public nombre: string; public nombre1: string;public nombre2: string
    public descripcion: string;public descripcion1: string;public descripcion2: string;
    public precio: string;public precio1: string;public precio2: string;

    constructor(){
        this.nombre = "Casa de Lujo "; this.nombre1 = "Casa terminados"; this.nombre2 = "Casa con alberca"
        this.descripcion = "Casa en el lago con excelente vista, acabados de lujo a un excelente precio";
        this.descripcion1 = "Casa con diseño moderno, así como tecnología inteligente y amueblada";
        this.descripcion2 = "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad"
        this.precio = "$3,000,000";this.precio1 = "$2,000,000";this.precio2 = "$3,000,000";
    }
  }
