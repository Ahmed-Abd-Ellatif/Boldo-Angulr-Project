import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionCardComponent } from './services-section-card.component';

describe('ServicesSectionCardComponent', () => {
  let component: ServicesSectionCardComponent;
  let fixture: ComponentFixture<ServicesSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
