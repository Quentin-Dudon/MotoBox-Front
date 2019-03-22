import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableBodyComponent } from './admin-table-body.component';

describe('AdminTableBodyComponent', () => {
  let component: AdminTableBodyComponent;
  let fixture: ComponentFixture<AdminTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
