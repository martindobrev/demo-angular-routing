import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    console.log('LOGGING OUT...');
    this.authService.logout();
    this.router.navigate(['../'], { relativeTo: this.activatedRoute});
  }

}