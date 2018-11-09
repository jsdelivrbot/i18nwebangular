import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPracticeComponent } from './tech-practice.component';

describe('TechPracticeComponent', () => {
  let component: TechPracticeComponent;
  let fixture: ComponentFixture<TechPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
