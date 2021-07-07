import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroverComponent } from './addrover.component';

describe('AddroverComponent', () => {
  let component: AddroverComponent;
  let fixture: ComponentFixture<AddroverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddroverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
