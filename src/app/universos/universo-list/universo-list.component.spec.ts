import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoListComponent } from './universo-list.component';

describe('UniversoListComponent', () => {
  let component: UniversoListComponent;
  let fixture: ComponentFixture<UniversoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
