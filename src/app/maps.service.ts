import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  openLocationInMaps(lat, lng) {
    return ("https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng);
  };

  
}
