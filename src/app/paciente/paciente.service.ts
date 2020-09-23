import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURLBase + '/pacientes';  

  constructor(private http: HttpClient) { }

  savePaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.apiURL}`, paciente);
  }

  updatePaciente(paciente: Paciente): Observable<any> {
    return this.http.put<Paciente>(`${this.apiURL}/${paciente.id}`, paciente);
  }

  deletePaciente(paciente: Paciente): Observable<any> {
    return this.http.delete<Paciente>(`${this.apiURL}/${paciente.id}`);
  }  

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiURL);
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiURL}/${id}`);
  }  

  getPacientesByNome(nome: string): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiURL}/nome/${nome}`);
  }  
}
