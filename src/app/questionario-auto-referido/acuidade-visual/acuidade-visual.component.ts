import { Component } from '@angular/core';
import { AcuidadeVisual } from './acuidade-visual';

@Component({
  selector: 'app-acuidade-visual',
  templateUrl: './acuidade-visual.component.html',
  styleUrls: ['./acuidade-visual.component.css']
})
export class AcuidadeVisualComponent {

  acuidadeVisual: AcuidadeVisual;

  constructor() {
    this.acuidadeVisual = new AcuidadeVisual();
  }
}