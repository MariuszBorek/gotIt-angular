import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionPremiumComponent } from './auction-premium.component';

describe('AuctionPremiumComponent', () => {
  let component: AuctionPremiumComponent;
  let fixture: ComponentFixture<AuctionPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
