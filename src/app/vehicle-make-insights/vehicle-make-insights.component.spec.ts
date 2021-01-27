import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakeInsightsComponent } from './vehicle-make-insights.component';

describe('VehicleMakeInsightsComponent', () => {
  let component: VehicleMakeInsightsComponent;
  let fixture: ComponentFixture<VehicleMakeInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMakeInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMakeInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
