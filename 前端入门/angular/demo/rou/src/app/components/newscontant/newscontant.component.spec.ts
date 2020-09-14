import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscontantComponent } from './newscontant.component';

describe('NewscontantComponent', () => {
  let component: NewscontantComponent;
  let fixture: ComponentFixture<NewscontantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscontantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
