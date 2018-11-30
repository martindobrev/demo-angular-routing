import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from './../../dialog.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Discard changes?');
  }

}
