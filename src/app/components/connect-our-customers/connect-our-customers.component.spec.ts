import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectOurCustomersComponent } from './connect-our-customers.component';

describe('ConnectOurCustomersComponent', () => {
  let component: ConnectOurCustomersComponent;
  let fixture: ComponentFixture<ConnectOurCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectOurCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectOurCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
