import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { HomeComponent } from './home/home.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionFoundComponent } from './auction-found/auction-found.component';
import { UserCreateAuctionComponent } from './user-create-auction/user-create-auction.component';
import { UserAuctionsObservedComponent } from './user-auctions-observed/user-auctions-observed.component';

import { UserAuctionsWonComponent } from './user-auctions-won/user-auctions-won.component';
import { UserAuctionsComponent } from './user-auctions/user-auctions.component';
import { UserBiddenProductsComponent } from './user-bidden-products/user-bidden-products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    UserProfileComponent,
    HomeComponent,
    AuctionCardComponent,
    AuctionListComponent,
    AuctionFoundComponent,
    UserCreateAuctionComponent,
    UserAuctionsObservedComponent,
    UserAuctionsWonComponent,
    UserAuctionsComponent,
    UserBiddenProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
