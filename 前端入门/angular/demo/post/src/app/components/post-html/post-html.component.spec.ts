import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHtmlComponent } from './post-html.component';

describe('PostHtmlComponent', () => {
  let component: PostHtmlComponent;
  let fixture: ComponentFixture<PostHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
