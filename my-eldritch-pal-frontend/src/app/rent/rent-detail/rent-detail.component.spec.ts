import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDetailComponent } from './rent-detail.component';

describe('RentDetailComponent', () => {
  let component: RentDetailComponent;
  let fixture: ComponentFixture<RentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
