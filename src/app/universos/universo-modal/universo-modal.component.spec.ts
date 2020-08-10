import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoModalComponent } from './universo-modal.component';

describe('UniversoModalComponent', () => {
  let component: UniversoModalComponent;
  let fixture: ComponentFixture<UniversoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
