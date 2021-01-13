import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionFoundComponent } from './auction-found.component';

describe('AuctionFoundComponent', () => {
  let component: AuctionFoundComponent;
  let fixture: ComponentFixture<AuctionFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
