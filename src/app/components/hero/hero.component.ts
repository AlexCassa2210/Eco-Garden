import {Component} from '@angular/core';

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class Hero{
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
