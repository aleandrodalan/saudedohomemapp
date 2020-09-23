import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { TemplateModule } from './template/template.module';
import { UnidadeSaudeModule } from './unidade-saude/unidade-saude.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { ProntuarioModule } from './prontuario/prontuario.module';

import { MessagesComponent } from './messages/messages.component';

import { DateFormatPortuguesePipe } from './pipe/date-format-portuguese.pipe';
import { TelefoneFormatPipe } from './pipe/telefone-format.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    DateFormatPortuguesePipe,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    UnidadeSaudeModule,
    UsuarioModule,
    PacienteModule,
    ProntuarioModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    DateFormatPortuguesePipe,
    TelefoneFormatPipe,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
