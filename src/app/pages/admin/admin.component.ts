import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  token: string;
  constructor(private http: HttpClient) {
      this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    
  }

}
