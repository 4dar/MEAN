import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCompComponent } from './switch-comp.component';

describe('SwitchCompComponent', () => {
  let component: SwitchCompComponent;
  let fixture: ComponentFixture<SwitchCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
