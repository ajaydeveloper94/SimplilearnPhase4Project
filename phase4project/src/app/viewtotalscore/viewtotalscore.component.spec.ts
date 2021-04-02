import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtotalscoreComponent } from './viewtotalscore.component';

describe('ViewtotalscoreComponent', () => {
  let component: ViewtotalscoreComponent;
  let fixture: ComponentFixture<ViewtotalscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtotalscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtotalscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
