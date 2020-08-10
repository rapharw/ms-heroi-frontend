import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderListComponent } from './poder-list.component';

describe('PoderListComponent', () => {
  let component: PoderListComponent;
  let fixture: ComponentFixture<PoderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
