import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: Comentario | undefined;

  constructor(private fb: FormBuilder,
              private comentarioService: ComentarioService,
              private router: Router,
              private aRoute: ActivatedRoute
             ) { 
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar(){
    if(this.id !== 0){
      this.accion = 'Editar';
      this.comentarioService.getComentario(this.id).subscribe(data => {
        
        this.comentario = data;
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          texto: data.texto,
          creador: data.creador
        })
      })
    }
  }

  agregarEditarComentario(){

    if(this.comentario == undefined){
      //Agregamos un nuevo comentario
      const comentario:Comentario = {
        
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
      }
     this.comentarioService.saveComentario(comentario).subscribe(data =>{
     
      this.router.navigate(['/']);
     })
    } else{
      //Editamos un comentario
      const comentario:Comentario = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
      }
      this.comentarioService.updateComentario(this.id, comentario).subscribe(data => {
        
        this.router.navigate(['/']);
      })
    }
  }

}
