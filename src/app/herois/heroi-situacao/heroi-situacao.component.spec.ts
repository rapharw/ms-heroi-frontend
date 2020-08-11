import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiSituacaoComponent } from './heroi-situacao.component';

describe('HeroiSituacaoComponent', () => {
  let component: HeroiSituacaoComponent;
  let fixture: ComponentFixture<HeroiSituacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiSituacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
