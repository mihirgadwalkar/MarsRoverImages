import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverdetailsComponent } from './roverdetails.component';

describe('RoverdetailsComponent', () => {
  let component: RoverdetailsComponent;
  let fixture: ComponentFixture<RoverdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
