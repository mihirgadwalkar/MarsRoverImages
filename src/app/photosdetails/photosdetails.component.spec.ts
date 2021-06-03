import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosdetailsComponent } from './photosdetails.component';

describe('PhotosdetailsComponent', () => {
  let component: PhotosdetailsComponent;
  let fixture: ComponentFixture<PhotosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
