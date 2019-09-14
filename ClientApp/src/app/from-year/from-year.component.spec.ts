import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromYearComponent } from './from-year.component';

describe('FromYearComponent', () => {
  let component: FromYearComponent;
  let fixture: ComponentFixture<FromYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
