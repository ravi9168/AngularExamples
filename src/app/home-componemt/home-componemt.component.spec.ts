import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponemtComponent } from './home-componemt.component';

describe('HomeComponemtComponent', () => {
  let component: HomeComponemtComponent;
  let fixture: ComponentFixture<HomeComponemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
