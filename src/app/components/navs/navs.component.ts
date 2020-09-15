import {Component} from '@angular/core';

@Component({
    selector: 'navs',
    templateUrl: './navs.component.html',
    styleUrls: ['./navs.component.css']
})
export class Navs{
    public logo: string;
    public nosotros: string;
    public blog: string;
    public anuncios: string;
    public contacto: string;

    constructor(){
        this.anuncios = "Anuncios";
        this.blog = "Blog";
        this.nosotros = "Nosotros";
        this.contacto = "Contacto"
    }
}
