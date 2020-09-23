import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'usuarios', component: LayoutComponent, canActivate: [AuthGuard], children: [          
      { path: 'form', component: UsuarioFormComponent, canActivate: [AuthGuard] },
      { path: 'form/:id', component: UsuarioFormComponent, canActivate: [AuthGuard] },
      { path: 'lista', component: UsuarioListaComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/usuarios/lista', pathMatch: 'full'}
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
export class UsuarioRoutingModule { }