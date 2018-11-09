import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeExeComponent } from './how-we-exe.component';

describe('HowWeExeComponent', () => {
  let component: HowWeExeComponent;
  let fixture: ComponentFixture<HowWeExeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeExeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeExeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
