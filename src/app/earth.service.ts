import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor(private http: HttpClient) { }

  getUsersLatLon(country, ZIP) {
    return this.http.get("https://fierce-oasis-61354.herokuapp.com/latLon/" + country + "/" + ZIP);
    // })
  };

  getLocationFromLatLon(latitude, longitude) {
    return this.http.get("https://fierce-oasis-61354.herokuapp.com/location/" + latitude + "/" + longitude);
  };

  getNothing() {
    return;
  }

  getLocationDetails(locationId) {
    // return this.http.get("https://fierce-oasis-61354.herokuapp.com/locationInfo/" + locationId);
    // console.log(locationId);
    const locationObject = this.http.get("https://fierce-oasis-61354.herokuapp.com/locationInfo/" + locationId);
    return locationObject;
    // console.log("locationObject = " + locationObject);
    // const objectKeys = Object.keys(locationObject);
    // console.log("objectKeys");
    // console.log(objectKeys); 
    // const responseArray = Object.values(locationObject);
    // console.log(responseArray);
    // return responseArray;
    // let responseArray = Object.values(locationObject);
    // console.log("responseArray = " + responseArray);
    // return responseArray[0];
  };

  //function to get Reduce articles from Proxy Server
  getReduceArticles() {
    return this.http.get("https://fierce-oasis-61354.herokuapp.com/reduce/");
  };

  //function to get Reduce article details from Proxy Server
  getArticleDetails(reduceURL) {
    let decodeURL = decodeURI(reduceURL);
    return this.http.get("https://fierce-oasis-61354.herokuapp.com/reduce/details/" + decodeURL);
  }
};
