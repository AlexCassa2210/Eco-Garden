import { Component } from '@angular/core';

@Component({
  selector: 'servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})

  export class Servicio{
    public nombre: string; public nombre1: string;public nombre2: string
    public descripcion: string;public descripcion1: string;public descripcion2: string;

    constructor(){
        this.nombre = "Mantenimiento general"; this.nombre1 = "Jardines para exterior e interior"; this.nombre2 = "Servicios especiales"
        this.descripcion = "Se realiza corte del césped de su jardín, lote o finca. Además corta preventiva de árboles, mantenimiento de cercas verdes, siembra de plantas y árboles.";
        this.descripcion1 = "Contamos con experiencia y personal capacitado para la elaboración y mantenimiento de todo tipo de jardines para exteriores e interiores según la necesidad y ambiente. Se realizan el planeamiento, recomendación y cotización de su jardín preferido. Contamos con todo tipo de insumos de la más alta calidad.";
        this.descripcion2 = "Pensando en su comodidad le brindamos el servicio de lavado de aceras y exteriores de su propiedad, recolección y limpieza de propiedades, limpieza de canoas y todo lo relacionado con el mantenimiento de su vivienda. Fabricación,  asesoramiento y mantenimiento de huertas."

    }
  }
