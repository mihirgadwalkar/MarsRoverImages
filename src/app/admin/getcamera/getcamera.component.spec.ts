import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcameraComponent } from './getcamera.component';

describe('GetcameraComponent', () => {
  let component: GetcameraComponent;
  let fixture: ComponentFixture<GetcameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
