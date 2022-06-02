import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDoHistoricoComponent } from './registro-do-historico.component';

describe('RegistroDoHistoricoComponent', () => {
  let component: RegistroDoHistoricoComponent;
  let fixture: ComponentFixture<RegistroDoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
