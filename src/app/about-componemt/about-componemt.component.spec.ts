import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponemtComponent } from './about-componemt.component';

describe('AboutComponemtComponent', () => {
  let component: AboutComponemtComponent;
  let fixture: ComponentFixture<AboutComponemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
