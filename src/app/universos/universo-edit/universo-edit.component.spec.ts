import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoEditComponent } from './universo-edit.component';

describe('UniversoEditComponent', () => {
  let component: UniversoEditComponent;
  let fixture: ComponentFixture<UniversoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
