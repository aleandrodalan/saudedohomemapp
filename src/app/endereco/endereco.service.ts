import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './endereco';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiURL: string = environment.apiURLBase + '/endereco';

  constructor(private http: HttpClient) { }

  getEnderecoByCepRest(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiURL}/${cep}`);  
  }  
}