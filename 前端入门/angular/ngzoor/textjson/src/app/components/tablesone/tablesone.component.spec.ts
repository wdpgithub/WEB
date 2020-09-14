import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesoneComponent } from './tablesone.component';

describe('TablesoneComponent', () => {
  let component: TablesoneComponent;
  let fixture: ComponentFixture<TablesoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
