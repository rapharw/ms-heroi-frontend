import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderRemoveComponent } from './poder-remove.component';

describe('PoderRemoveComponent', () => {
  let component: PoderRemoveComponent;
  let fixture: ComponentFixture<PoderRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
