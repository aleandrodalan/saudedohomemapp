import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from './user-login';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl = environment.apiURLBase;  

  private currentUserSubject: BehaviorSubject<UserLogin>;  
  public currentUser: Observable<UserLogin>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserLogin {
    return this.currentUserSubject.getValue();
  }

  public login(userLogin: UserLogin) {
    return this.http.post(this.baseUrl + '/api/auth', userLogin);
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public getUsuarioLogado(): string {
    const tokenString = localStorage.getItem('access_token');

    if (tokenString) {
      return JSON.parse(tokenString).nomeUsuario;
    }

    return null;    
  }
  
  public getUsuarioRoles(): string {
    const tokenString = localStorage.getItem('access_token');

    if (tokenString) {
      return JSON.parse(tokenString).grupoAcesso;
    }

    return null;    
  }
}