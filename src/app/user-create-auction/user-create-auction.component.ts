import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDTO } from '../interface/CategoryDTO';
import { NewAuctionDTO } from '../interface/NewAuctionDTO';
import { HomeService } from '../service/home.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-create-auction',
  templateUrl: './user-create-auction.component.html',
  styleUrls: ['./user-create-auction.component.scss']
})
export class UserCreateAuctionComponent implements OnInit {

  newCreatedAuction = new NewAuctionDTO('', '', '', '', '', false, 0, false);
  categories: CategoryDTO[];
  selectedFile: File;

  constructor(private homeService: HomeService, private userProfileService: UserProfileService) { }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => { this.categories = categories, console.log(categories); });
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadAuction() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.userProfileService.createUserAuction(this.newCreatedAuction, uploadImageData).subscribe(res => console.log('ok'));

  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
