import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroverComponent } from './viewrover.component';

describe('ViewroverComponent', () => {
  let component: ViewroverComponent;
  let fixture: ComponentFixture<ViewroverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewroverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
