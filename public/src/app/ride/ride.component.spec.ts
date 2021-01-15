import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RideComponent } from './ride.component';

describe('RideComponent', () => {
  let component: RideComponent;
  let fixture: ComponentFixture<RideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
