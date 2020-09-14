import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son01Component } from './son01.component';

describe('Son01Component', () => {
  let component: Son01Component;
  let fixture: ComponentFixture<Son01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
