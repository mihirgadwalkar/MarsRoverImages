import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpicComponent } from './getpic.component';

describe('GetpicComponent', () => {
  let component: GetpicComponent;
  let fixture: ComponentFixture<GetpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
