import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-auction-found',
  templateUrl: './auction-found.component.html',
  styleUrls: ['./auction-found.component.scss']
})
export class AuctionFoundComponent implements OnInit {

  phrase: string;
  ListOfProducts: AuctionDTO[];

  photoPath = '/assets/images/photos/';

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getAuctionsMatchingThePhrase() {
    this.auctionService.findActionsMatchingThePhrase(this.phrase).subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }

  ngOnInit(): void {
    this.phrase = this.activatedRoute.snapshot.paramMap.get('phrase');
    this.getAuctionsMatchingThePhrase();
  }

}
