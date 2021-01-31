import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountNavBarComponent } from './user-account-nav-bar.component';

describe('UserAccountNavBarComponent', () => {
  let component: UserAccountNavBarComponent;
  let fixture: ComponentFixture<UserAccountNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
