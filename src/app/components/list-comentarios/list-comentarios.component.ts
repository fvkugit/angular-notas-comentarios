import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [ 
    {
      titulo: "Titulo3",
      creador: "Creador3",
      fechaCreacion: new Date(),
      texto: "Ninguno", 
      id: 5
    },
    {
      titulo: "Titulo4",
      creador: "Creador4",
      fechaCreacion: new Date(),
      texto: "Ninguno 2", 
      id: 3
    } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
