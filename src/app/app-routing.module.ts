import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionFoundComponent } from './auction-found/auction-found.component';
import { UserCreateAuctionComponent } from './user-create-auction/user-create-auction.component';
import { UserAuctionsObservedComponent } from './user-auctions-observed/user-auctions-observed.component';
import { UserAuctionsWonComponent } from './user-auctions-won/user-auctions-won.component';
import { UserAuctionsComponent } from './user-auctions/user-auctions.component';
import { UserBiddenProductsComponent } from './user-bidden-products/user-bidden-products.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auction-card/:id', component: AuctionCardComponent },
  { path: 'auction-list/:category', component: AuctionListComponent },
  { path: 'auction-found/:phrase', component: AuctionFoundComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate:[AuthGuardService] },
  { path: 'user-create-auction', component: UserCreateAuctionComponent, canActivate:[AuthGuardService] },
  { path: 'user-auctions-observed', component: UserAuctionsObservedComponent, canActivate:[AuthGuardService] },
  { path: 'user-auctions-won', component: UserAuctionsWonComponent, canActivate:[AuthGuardService] },
  { path: 'user-auctions', component: UserAuctionsComponent, canActivate:[AuthGuardService] },
  { path: 'user-bidden-products', component: UserBiddenProductsComponent, canActivate:[AuthGuardService] },
  { path: 'user-cart', component: CartComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
