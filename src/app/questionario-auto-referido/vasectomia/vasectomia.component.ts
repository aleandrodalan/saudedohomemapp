import { Component } from '@angular/core';
import { Vasectomia } from './vasectomia';
import { UltimaVezProcAtenSaudeComponent } from '../ultima-vez-proc-aten-saude/ultima-vez-proc-aten-saude.component';

@Component({
  selector: 'app-vasectomia',
  templateUrl: './vasectomia.component.html',
  styleUrls: ['./vasectomia.component.css']
})
export class VasectomiaComponent {

  vasectomia: Vasectomia;

  constructor() {
    this.novo();
  }

  marcarSim() {
    this.novo();
    this.vasectomia.vasectomizado = true;
  }

  novo() {
    this.vasectomia = new Vasectomia();
  }
}