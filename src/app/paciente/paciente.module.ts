import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { PacienteRoutingModule } from './paciente-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PacienteFormComponent, 
    PacienteListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    DpDatePickerModule,
    NgbModule,
    PacienteRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    PacienteFormComponent,
    PacienteListaComponent
  ]
})
export class PacienteModule { }
