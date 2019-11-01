import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponemtComponent } from './header-componemt.component';

describe('HeaderComponemtComponent', () => {
  let component: HeaderComponemtComponent;
  let fixture: ComponentFixture<HeaderComponemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
