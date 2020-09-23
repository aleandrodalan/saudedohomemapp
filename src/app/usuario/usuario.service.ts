import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURLBase + '/usuarios';

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}`, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}`, usuario);
  }

  deleteUsuario(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(`${this.apiURL}/${usuario.id}`);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}`);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  getUsuarioByLogin(login: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}/login/${login}`);
  }
}