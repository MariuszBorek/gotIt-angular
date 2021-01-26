import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateAuctionComponent } from './user-create-auction.component';

describe('UserCreateAuctionComponent', () => {
  let component: UserCreateAuctionComponent;
  let fixture: ComponentFixture<UserCreateAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
