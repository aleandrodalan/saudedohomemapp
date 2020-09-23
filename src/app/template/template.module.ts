import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavibarComponent } from './navibar/navibar.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavibarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavibarComponent
  ]
})
export class TemplateModule { }
