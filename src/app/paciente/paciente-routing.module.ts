import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'pacientes', component: LayoutComponent, canActivate: [AuthGuard], children: [          
      { path: 'form', component: PacienteFormComponent, canActivate: [AuthGuard] },
      { path: 'form/:id', component: PacienteFormComponent, canActivate: [AuthGuard] },
      { path: 'lista', component: PacienteListaComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/pacientes/lista', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PacienteRoutingModule { }