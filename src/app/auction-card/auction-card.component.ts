import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent implements OnInit {

  auctionId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.auctionId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
