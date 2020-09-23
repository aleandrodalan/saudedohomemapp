import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  loading = false;
  submitted = false;
  error = '';

  user: UserLogin;
  loginError: boolean;
  loginDesconectado: boolean;

  constructor(private service: LoginService, 
              private router: Router,
              private route: ActivatedRoute) {

    this.user = new UserLogin();
  }

  ngOnInit(): void {
    this.returnUrl = '/home';
  }

  onExit() {
    this.loginDesconectado = true;    
    this.service.logout();
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.service.login(this.user)
        .subscribe(
            data => {
                const access_token = JSON.stringify(data);
                localStorage.setItem('access_token', access_token);
                this.router.navigate([this.returnUrl]);
                this.loginError = false;
            },
            error => {
                this.error = error;
                this.loginError = true;
                this.loading = false;
            });
  }
}