import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListaComponent } from './prontuario-lista/prontuario-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'prontuarios', component: LayoutComponent, canActivate: [AuthGuard], children: [          
      { path: 'form', component: ProntuarioFormComponent, canActivate: [AuthGuard] },
      { path: 'form/:id', component: ProntuarioFormComponent, canActivate: [AuthGuard] },
      { path: 'lista', component: ProntuarioListaComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/prontuarios/lista', pathMatch: 'full'}
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
export class ProntuarioRoutingModule { }