import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuthenticationService } from '../service/authentication.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: CategoryDTO[];

  constructor(private homeService: HomeService, public authenticationService: AuthenticationService) { }

  getCategory() {
    this.homeService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
      console.log(categories)});
  }

  choseCategory(category: CategoryDTO): void {
    console.log(category.name)
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
