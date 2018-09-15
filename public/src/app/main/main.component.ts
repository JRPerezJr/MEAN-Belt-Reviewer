import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allRides: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.allRides().subscribe(data => {
      this.allRides = data;
    });
  }

}
