import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [

  // Ruteo de páginas
  {path: '', component: ListComentariosComponent},
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:id', component: AgregarEditarComentarioComponent},
  {path: 'ver/:id', component: VerComentariosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
