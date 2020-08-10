import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiRemoveComponent } from './heroi-remove.component';

describe('HeroiRemoveComponent', () => {
  let component: HeroiRemoveComponent;
  let fixture: ComponentFixture<HeroiRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
