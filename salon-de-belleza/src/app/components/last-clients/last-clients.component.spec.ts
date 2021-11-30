import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastClientsComponent } from './last-clients.component';

describe('LastClientsComponent', () => {
  let component: LastClientsComponent;
  let fixture: ComponentFixture<LastClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
