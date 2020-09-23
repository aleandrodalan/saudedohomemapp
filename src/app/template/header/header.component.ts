import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioConectado: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuarioConectado = this.loginService.getUsuarioLogado();    
  }
} 
