import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent {

  medicos: any[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {

    this._medicoService.getMedicos().subscribe((r: any) => {
      this.medicos = r;
    });

  }

}