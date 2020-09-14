import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son02Component } from './son02.component';

describe('Son02Component', () => {
  let component: Son02Component;
  let fixture: ComponentFixture<Son02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
