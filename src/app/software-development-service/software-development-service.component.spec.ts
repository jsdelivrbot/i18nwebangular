import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentServiceComponent } from './software-development-service.component';

describe('SoftwareDevelopmentServiceComponent', () => {
  let component: SoftwareDevelopmentServiceComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDevelopmentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
