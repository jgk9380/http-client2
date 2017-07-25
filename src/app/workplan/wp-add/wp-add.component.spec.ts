import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpAddComponent } from './wp-add.component';

describe('WpAddComponent', () => {
  let component: WpAddComponent;
  let fixture: ComponentFixture<WpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
