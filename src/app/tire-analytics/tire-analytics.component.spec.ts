import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireAnalyticsComponent } from './tire-analytics.component';

describe('TireAnalyticsComponent', () => {
  let component: TireAnalyticsComponent;
  let fixture: ComponentFixture<TireAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TireAnalyticsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
