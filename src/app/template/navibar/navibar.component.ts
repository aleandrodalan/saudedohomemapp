import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit {

  grupoAcesso: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.verificarAcesso();
  }

  logout() {
    this.loginService.logout();
  }

  verificarAcesso() {
    this.grupoAcesso = this.loginService.getUsuarioRoles();    
  }
}