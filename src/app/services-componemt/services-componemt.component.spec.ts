import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponemtComponent } from './services-componemt.component';

describe('ServicesComponemtComponent', () => {
  let component: ServicesComponemtComponent;
  let fixture: ComponentFixture<ServicesComponemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComponemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
