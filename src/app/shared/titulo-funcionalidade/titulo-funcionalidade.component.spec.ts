import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloFuncionalidadeComponent } from './titulo-funcionalidade.component';

describe('TituloFuncionalidadeComponent', () => {
  let component: TituloFuncionalidadeComponent;
  let fixture: ComponentFixture<TituloFuncionalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloFuncionalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloFuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
