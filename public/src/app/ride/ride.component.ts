import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';

import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {
  ride: any;
  newRider: any;
  errors = [];

  constructor(private _http: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      this.getRide(data['id']);
      // console.log(data['id']);<--Use this to verify the ID is going through.
      // this._http.singleRide(data['id']).subscribe(single => {
      //   this.ride = single;
      // });<--this function was removed and this.getRide was added
    });
    this.newRider = {name: ''};
  }
  getRide(r_id) {
    this._http.singleRide(r_id).subscribe(single => {
      this.ride = single;
    });
  }
  addRider() {
    this.errors = [];
    this._http.addRider(this.newRider, this.ride['_id']).subscribe(data => {
      // error handling
      if (data['errors']) {
        // tslint:disable-next-line:forin
        for (const key in data['errors']) {
          this.errors.push(data['errors'][key]['message']);
        }
      } else {
        this.getRide(this.ride['_id']);
      }
    });
    // console.log(this.newRider);<--used to see if the rider object was created in the console
    this.newRider = {name: ''};
  }
  deleteRider(rider: any) {
    console.log(rider);
    this._http.eject(rider, this.ride._id).subscribe(data => {
      console.log(data);
      this.getRide(this.ride['_id']);
    });
  }

}
