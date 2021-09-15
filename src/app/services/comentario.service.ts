import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private beUrl = "https://localhost:44371/"
  private apiUrl = "api/comentario/"
  constructor(private http: HttpClient) {}

  getListComentarios(): Observable<any>{
    return this.http.get(this.beUrl + this.apiUrl);
  }

  removeComentario(id: number): Observable<any>{

    return this.http.delete(this.beUrl + this.apiUrl + id);

  }

  createComentario(comentario: object): Observable<any>{
    return this.http.post(this.beUrl + this.apiUrl, comentario);
  }

  getComentario(id: number): Observable<any>{
    return this.http.get(this.beUrl + this.apiUrl + id);
  }

  updateComentario(id: number, comentario: Comentario): Observable<any>{
    return this.http.put(this.beUrl + this.apiUrl + id, comentario);
  }

}
