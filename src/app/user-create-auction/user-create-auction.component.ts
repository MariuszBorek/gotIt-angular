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

  newCreatedAuction = new NewAuctionDTO('', '', '', '0', '', false, 7, false);
  categories: CategoryDTO[];
  selectedFile: File;

  messagePhoto: string;
  messageFormData: string;
  messageCreatedAuction: string;

  constructor(private homeService: HomeService, private userProfileService: UserProfileService, private router: Router) { }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadAuction() {
    const uploadImageData = new FormData();
    if(this.checkIfPhotoWasAdded() && this.checkIfBasicFormDataAreFilled()) {
      console.log(this.newCreatedAuction);
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.userProfileService.createUserAuction(this.newCreatedAuction, uploadImageData).subscribe(() => {
        this.messageCreatedAuction = 'success!';
        this.router.navigate(['user-auctions']);
      });
    }
  }

  checkIfPhotoWasAdded(): boolean {
    if(typeof this.selectedFile === 'undefined') {
      this.messagePhoto = 'Add photo';
      return false;
    } else {
      this.messagePhoto = '';
      return true;
    }
  }

  checkIfBasicFormDataAreFilled(): boolean {
    if(this.newCreatedAuction.category != '' &&
    this.newCreatedAuction.category != 'Choose category' &&
    this.newCreatedAuction.title != '' &&
    this.newCreatedAuction.buyNowPrice!= '') {
      this.messageFormData = '';
      return true;
    } else {
      this.messageFormData = 'category, title and buy now price is mandatory';
      return false;
    }
  }


  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
