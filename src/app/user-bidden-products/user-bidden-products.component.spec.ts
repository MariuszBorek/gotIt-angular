import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBiddenProductsComponent } from './user-bidden-products.component';

describe('UserBiddenProductsComponent', () => {
  let component: UserBiddenProductsComponent;
  let fixture: ComponentFixture<UserBiddenProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBiddenProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBiddenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
