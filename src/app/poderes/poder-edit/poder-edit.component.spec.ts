import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderEditComponent } from './poder-edit.component';

describe('PoderEditComponent', () => {
  let component: PoderEditComponent;
  let fixture: ComponentFixture<PoderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
