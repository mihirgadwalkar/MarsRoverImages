import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpicComponent } from './viewpic.component';

describe('ViewpicComponent', () => {
  let component: ViewpicComponent;
  let fixture: ComponentFixture<ViewpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
