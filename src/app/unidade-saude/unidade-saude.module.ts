import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { UnidadeSaudeFormComponent } from './unidade-saude-form/unidade-saude-form.component';
import { UnidadeSaudeListaComponent } from './unidade-saude-lista/unidade-saude-lista.component';
import { UnidadeSaudeRoutingModule } from './unidade-saude-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UnidadeSaudeFormComponent, 
    UnidadeSaudeListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    UnidadeSaudeRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    UnidadeSaudeFormComponent,
    UnidadeSaudeListaComponent
  ]
})
export class UnidadeSaudeModule { }