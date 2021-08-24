import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproutHomeComponent } from './sprout-home.component';

describe('SproutHomeComponent', () => {
  let component: SproutHomeComponent;
  let fixture: ComponentFixture<SproutHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproutHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
