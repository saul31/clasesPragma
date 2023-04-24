import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;
  let servicio: MedicoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MedicoComponent],
      providers: [MedicoService],
    })
      .compileComponents();
    servicio = TestBed.inject(MedicoService);

    fixture = TestBed.createComponent(MedicoComponent);
    component = new MedicoComponent(servicio);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Debe crearse el componente Medico', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {

    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);

  });
});
