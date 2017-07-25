import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WplistComponent } from './wplist.component';

describe('WplistComponent', () => {
  let component: WplistComponent;
  let fixture: ComponentFixture<WplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
