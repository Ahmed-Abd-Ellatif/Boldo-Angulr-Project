import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetesNewsComponent } from './letes-news.component';

describe('LetesNewsComponent', () => {
  let component: LetesNewsComponent;
  let fixture: ComponentFixture<LetesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LetesNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
