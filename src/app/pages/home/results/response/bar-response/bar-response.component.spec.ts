import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarResponseComponent } from './bar-response.component';

describe('BarResponseComponent', () => {
  let component: BarResponseComponent;
  let fixture: ComponentFixture<BarResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
