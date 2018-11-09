import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpasiComponent } from './bpasi.component';

describe('BpasiComponent', () => {
  let component: BpasiComponent;
  let fixture: ComponentFixture<BpasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
