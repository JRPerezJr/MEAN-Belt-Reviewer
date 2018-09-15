import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allRides() {
    return this._http.get('api/rides');
  }
  createRide(newRide: any) {
    return this._http.post('api/rides', newRide);
  }
  singleRide(id: string) {
    return this._http.get(`/api/rides/${id}`);
  }
  addRider(newRider: any, r_id: string) {
    // /api/rides/:id/passenger<--this is the API route
    return this._http.post(`/api/rides/${r_id}/passenger`, newRider);
  }
  eject(rider: any, r_id) {
    return this._http.delete(`/api/rides/${r_id}/passenger/${rider._id} `);
  }
}
