import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authentocationService: AuthenticationService) { }

  ngOnInit(): void {

    this.authentocationService.logOut();
    this.refresh();
    // this.router.navigate(['home']);

  }

  refresh(): void {
    window.location.reload();

  }


}
