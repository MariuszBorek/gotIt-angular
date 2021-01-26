import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuctionsWonComponent } from './user-auctions-won.component';

describe('UserAuctionsWonComponent', () => {
  let component: UserAuctionsWonComponent;
  let fixture: ComponentFixture<UserAuctionsWonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuctionsWonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuctionsWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
