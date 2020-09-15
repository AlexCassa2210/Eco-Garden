import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Hero } from './components/hero/hero.component';
import { Navs } from './components/navs/navs.component';
import { masSobre } from './components/mas-sobre/mas-sobre.component';
import { Decoracion } from './components/decoracion/decoracion.component';
import { Servicio } from './components/servicio/servicio.component';
import { Blog } from './components/blog/blog.component';
import { Footer } from './components/footer/footer.component';

import { ContactoComponent } from './components/contacto/contacto.component';

/* const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'blogs',
    component: BlogsComponent
  }
] */

@NgModule({
  declarations: [
    AppComponent,
    Hero,
    Navs,
    masSobre,
    Decoracion,
    Servicio,
    Blog,
    Footer,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    /* RouterModule.forRoot(rutas) */
    RouterModule.forRoot([
      {path: 'contacto', component: ContactoComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
