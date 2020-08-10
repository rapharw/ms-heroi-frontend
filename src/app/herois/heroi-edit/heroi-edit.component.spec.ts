import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiEditComponent } from './heroi-edit.component';

describe('HeroiEditComponent', () => {
  let component: HeroiEditComponent;
  let fixture: ComponentFixture<HeroiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
