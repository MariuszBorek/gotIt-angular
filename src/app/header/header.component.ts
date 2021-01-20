import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionService } from '../service/auction.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router) { }

  findAuctions(phrase: string) {
    if(phrase) {
      this.router.navigate(['auction-found', phrase]);
      console.log(phrase);
    }
  }



  ngOnInit(): void {
  }

}
