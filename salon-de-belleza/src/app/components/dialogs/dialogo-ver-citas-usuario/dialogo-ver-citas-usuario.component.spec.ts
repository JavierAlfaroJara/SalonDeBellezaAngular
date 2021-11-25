import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoVerCitasUsuarioComponent } from './dialogo-ver-citas-usuario.component';

describe('DialogoVerCitasUsuarioComponent', () => {
  let component: DialogoVerCitasUsuarioComponent;
  let fixture: ComponentFixture<DialogoVerCitasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoVerCitasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoVerCitasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
