import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
     const authenticated = this.isAuthenticated();

     if (authenticated) {
       return true;
     } else {
       this.router.navigate(['/login']);
       return false;
     }
  }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');

    if (tokenString) {
      const token = JSON.parse(tokenString).token;
      return token;
    }

    return null;
  }

  isAuthenticated() : boolean {
    const token = this.obterToken();

    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);

      return !expired;
    }

    return false;
  }
}