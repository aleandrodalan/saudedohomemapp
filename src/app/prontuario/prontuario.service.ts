import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prontuario } from './prontuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  apiURL: string = environment.apiURLBase + '/prontuarios';  

  constructor(private http: HttpClient) { }

  saveProntuario(prontuario: Prontuario): Observable<Prontuario> {
    console.log(prontuario);
    return this.http.post<Prontuario>(`${this.apiURL}`, prontuario);
  }

  updateProntuario(prontuario: Prontuario): Observable<any> {
    return this.http.put<Prontuario>(`${this.apiURL}/${prontuario.id}`, prontuario);
  }

  deleteProntuario(prontuario: Prontuario): Observable<any> {
    return this.http.delete<Prontuario>(`${this.apiURL}/${prontuario.id}`);
  }

  getProntuarios(): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>(`${this.apiURL}`);
  }

  getProntuarioById(id: number): Observable<Prontuario> {
    return this.http.get<Prontuario>(`${this.apiURL}/${id}`);
  }  

  getProntuariosByPacienteName(nome: string): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>(`${this.apiURL}/nome_paciente/${nome}`);
  }
}