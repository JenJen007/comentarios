import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListComentariosComponent,
    VerComentarioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 12,
      outerStrokeColor: "#e4002b",
      showInnerStroke: false,
      animationDuration: 600,
      showUnits: false,
      showSubtitle: false,
      showImage: true,
      imageHeight: 150,
      imageWidth: 150

    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
