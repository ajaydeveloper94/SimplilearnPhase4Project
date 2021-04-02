import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewansComponent } from './reviewans.component';

describe('ReviewansComponent', () => {
  let component: ReviewansComponent;
  let fixture: ComponentFixture<ReviewansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
