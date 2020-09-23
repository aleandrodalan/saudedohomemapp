import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser: any = this.loginService.currentUserValue;
        
        if (currentUser && currentUser.data.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.data.token}`
                }
            });
        }

        return next.handle(request);
    }
}