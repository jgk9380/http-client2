import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpCompleteComponent } from './wp-complete.component';

describe('WpCompleteComponent', () => {
  let component: WpCompleteComponent;
  let fixture: ComponentFixture<WpCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
