import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DpDatePickerModule } from 'ng2-date-picker';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    DpDatePickerModule,
    UsuarioRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ]
})
export class UsuarioModule { }
