import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClientesComponent } from './alta-clientes.component';

describe('AltaClientesComponent', () => {
  let component: AltaClientesComponent;
  let fixture: ComponentFixture<AltaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaClientesComponent]
    });
    fixture = TestBed.createComponent(AltaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
