import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderAddComponent } from './poder-add.component';

describe('PoderAddComponent', () => {
  let component: PoderAddComponent;
  let fixture: ComponentFixture<PoderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
