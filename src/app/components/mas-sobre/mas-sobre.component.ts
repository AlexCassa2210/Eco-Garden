import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-sobre',
  templateUrl: './mas-sobre.component.html',
  styleUrls: ['./mas-sobre.component.css']
})
export class masSobre {

  public titulo1: string;public titulo2: string;public titulo3: string;
  public descripcion1: string;public descripcion2: string;public descripcion3: string;

  constructor() { 

    this.titulo1 ="Seguridad";
    this.titulo2 = "El Mejor Precio";
    this.titulo3 = "Puntualidad";

    this.descripcion1 ="Damos garantía de cada trabajo realizado y contamos con los más altos estándares de calidad, además brindamos nuestros servicios con los protocolos establecidos de higiene y salud. ";
    this.descripcion2 ="Ahorra con nuestros planes mensuales, semestrales o anuales que te ofrecemos para contratos establecidos. Además contamos con los mejores precios del mercado para cada uno de nuestros servicios. ";
    this.descripcion3 ="Programamos cada trabajo en el tiempo requerido por nuestros clientes para brindar un mejor servicio.";
  
  }

}
