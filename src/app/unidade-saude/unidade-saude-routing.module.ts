import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UnidadeSaudeFormComponent } from './unidade-saude-form/unidade-saude-form.component';
import { UnidadeSaudeListaComponent } from './unidade-saude-lista/unidade-saude-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'unidades_saude', component: LayoutComponent, canActivate: [AuthGuard], children: [          
      { path: 'form', component: UnidadeSaudeFormComponent, canActivate: [AuthGuard] },
      { path: 'form/:id', component: UnidadeSaudeFormComponent, canActivate: [AuthGuard] },
      { path: 'lista', component: UnidadeSaudeListaComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/unidades_saude/lista', pathMatch: 'full'}
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
export class UnidadeSaudeRoutingModule { }