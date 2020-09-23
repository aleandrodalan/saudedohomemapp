import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadeSaude } from './unidade-saude';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadeSaudeService {

  apiURL: string = environment.apiURLBase + '/unidadessaude';

  constructor(private http: HttpClient) { }

  saveUnidadeSaude(unidadeSaude: UnidadeSaude): Observable<UnidadeSaude> {
    console.log(unidadeSaude);
    return this.http.post<UnidadeSaude>(`${this.apiURL}`, unidadeSaude);
  }

  updateUnidadeSaude(unidadeSaude: UnidadeSaude): Observable<any> {
    console.log(unidadeSaude);
    return this.http.put<UnidadeSaude>(`${this.apiURL}/${unidadeSaude.id}`, unidadeSaude);
  }

  deleteUnidadeSaude(unidadeSaude: UnidadeSaude): Observable<any> {
    console.log(unidadeSaude);
    return this.http.delete<UnidadeSaude>(`${this.apiURL}/${unidadeSaude.id}`);
  }

  getUnidadesSaude(): Observable<UnidadeSaude[]> {
    return this.http.get<UnidadeSaude[]>(`${this.apiURL}`);
  }

  getUnidadeSaudeById(id: number): Observable<UnidadeSaude> {
    return this.http.get<UnidadeSaude>(`${this.apiURL}/${id}`);  
  }

  getUnidadeSaudeByNome(nome: string): Observable<UnidadeSaude[]> {
    return this.http.get<UnidadeSaude[]>(`${this.apiURL}/nome/${nome}`);
  }
}