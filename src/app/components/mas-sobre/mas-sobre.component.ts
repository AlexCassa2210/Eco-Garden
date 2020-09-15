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

    this.descripcion1 ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, aut totam. Laudantium, dolores.Molestias minima quasi illum pariatur, at totam in cumque aspernatur, praesentium porro vel placeatvoluptatibusinventorevero.";
    this.descripcion2 ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, aut totam. Laudantium, dolores.Molestias minima quasi illum pariatur, at totam in cumque aspernatur, praesentium porro vel placeatvoluptatibusinventorevero.";
    this.descripcion3 ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, aut totam. Laudantium, dolores.Molestias minima quasi illum pariatur, at totam in cumque aspernatur, praesentium porro vel placeatvoluptatibusinventorevero.";
  
  }

}
