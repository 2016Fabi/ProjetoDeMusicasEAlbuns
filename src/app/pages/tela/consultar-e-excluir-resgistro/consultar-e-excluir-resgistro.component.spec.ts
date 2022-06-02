import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEExcluirResgistroComponent } from './consultar-e-excluir-resgistro.component';

describe('ConsultarEExcluirResgistroComponent', () => {
  let component: ConsultarEExcluirResgistroComponent;
  let fixture: ComponentFixture<ConsultarEExcluirResgistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEExcluirResgistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEExcluirResgistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
