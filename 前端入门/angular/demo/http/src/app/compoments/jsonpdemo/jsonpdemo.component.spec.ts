import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpdemoComponent } from './jsonpdemo.component';

describe('JsonpdemoComponent', () => {
  let component: JsonpdemoComponent;
  let fixture: ComponentFixture<JsonpdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
