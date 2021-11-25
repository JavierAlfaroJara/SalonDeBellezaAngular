import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaListaUsuariosComponent } from './vista-lista-usuarios.component';

describe('VistaListaUsuariosComponent', () => {
  let component: VistaListaUsuariosComponent;
  let fixture: ComponentFixture<VistaListaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaListaUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
