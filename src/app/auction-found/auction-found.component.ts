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

  // retrievedImage: any;
  // base64Data: any;
  // retrieveResonse: any;
  // photos: any[];

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getAuctionsMatchingThePhrase() {
    this.auctionService.findActionsMatchingThePhrase(this.phrase).subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }

  // getImage(photoName: string): any {
  //   this.auctionService.findImage(photoName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //         this.photos.push(this.retrievedImage);
  //       }
  //     );
  // }

  ngOnInit(): void {
    this.phrase = this.activatedRoute.snapshot.paramMap.get('phrase');
    this.getAuctionsMatchingThePhrase();
  }

}
