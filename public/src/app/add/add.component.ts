import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';

import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newRide: any;
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRide = {driver: '', dest: '', cap: '' };
    // this._httpService.allRides().subscribe(data => console.log(data));<--This function is not needed for the app
  }
  addRide() {
    this.errors = [];
    this._httpService.createRide(this.newRide).subscribe(data => {
      console.log(data);
      if (data['errors']) {
         // tslint:disable-next-line:forin
         for (const key in data['errors']) {
          //  console.log(data['errors'][key]['message']);<--used for diagnosis in the console
           this.errors.push(data['errors'][key]['message']);
        }
      } else {
        this.newRide = {driver: '', dest: '', cap: ''};
        this._router.navigate(['/rides']);
      }
    });
  }

}
