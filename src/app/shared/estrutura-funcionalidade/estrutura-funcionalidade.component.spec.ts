import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaFuncionalidadeComponent } from './estrutura-funcionalidade.component';

describe('EstruturaFuncionalidadeComponent', () => {
  let component: EstruturaFuncionalidadeComponent;
  let fixture: ComponentFixture<EstruturaFuncionalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstruturaFuncionalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaFuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
