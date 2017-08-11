import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartAdminComponent } from './depart-admin.component';

describe('DepartAdminComponent', () => {
  let component: DepartAdminComponent;
  let fixture: ComponentFixture<DepartAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
