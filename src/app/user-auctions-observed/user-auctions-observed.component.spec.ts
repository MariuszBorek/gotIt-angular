import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuctionsObservedComponent } from './user-auctions-observed.component';

describe('UserAuctionsObservedComponent', () => {
  let component: UserAuctionsObservedComponent;
  let fixture: ComponentFixture<UserAuctionsObservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuctionsObservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuctionsObservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
