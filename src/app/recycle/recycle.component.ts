import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
// import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { forkJoin, Observable } from 'rxjs';

import { MapsService } from '../maps.service'

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.css']
})
export class RecycleComponent implements OnInit {
  country: string = "US";
  ZIP: number;
  latitude: number;
  longitude: number;
  locationId: string;
  response: object;
  responseArrayKeys: Array<string> = [];
  responseArrayObjects: Array<object> = [
    // {0: {
    //   address: "46922 Romeo Plank",
    //   city: "Macomb",
    //   country: "US",
    //   created: "2011-12-20T11:53:27",
    //   curbside: false,
    //   description: "AutoZone",
    //   event_only: false,
    //   fax: "",
    //   geocoded: true,
    //   hours: "Please call for hours of operation.",
    //   latitude: 42.64244119839103,
    //   location_type_id: 28,
    //   longitude: -82.93529707050959,
    //   municipal: false,
    //   national: false,
    //   notes: null,
    //   notes_public: null,
    //   phone: "(586) 226-2730",
    //   postal_code: "48044",
    //   province: "MI",
    //   region: "Macomb",
    //   updated: "2011-12-20T11:53:27",
    //   url: "https://www.autozone.com/landing/page.jsp?name=in-our-stores"
    // }}, {0: {
    //   address: "18400 Hall Rd",
    //   city: "Charter Township of Clinton",
    //   country: "US",
    //   created: "2012-06-20T17:48:50",
    //   curbside: false,
    //   description: "Walmart Supercenter",
    //   event_only: false,
    //   fax: "",
    //   geocoded: true,
    //   hours: "Please call for hours of operation.",
    //   latitude: 42.62599730967077,
    //   location_type_id: 28,
    //   longitude: -82.93753160591059,
    //   municipal: false,
    //   national: false,
    //   notes: null,
    //   notes_public: null,
    //   phone: "(586) 263-7196",
    //   postal_code: "48038",
    //   province: "MI",
    //   region: "Macomb",
    //   updated: "2012-06-20T17:48:50",
    //   url: "https://www.walmart.com/"
    // }}
  ];
  errorMessage: string = "";

  constructor(private earthService: EarthService, private mapsService : MapsService) {};
  
  openInMaps(lat, lng) {
    return this.mapsService.openLocationInMaps(lat, lng);
  };

  recyclingFacts: Array<string> = [
    "Without exception, recycling is the top action society can do to simultaneously improve the environment, the economy, sustainable manufacturing, and to prevent waste from going into oceans.",
    "Recycling is in a crisis in the U.S. due to public confusion about recycling. Find your closest recycling center below!",
    "U.S. recycling levels are currently 21.4% (recent EPA funded Yale University Study). Let's do our part to find a center and get recycling!",
    "When U.S. recycling levels reach 75% it will be the environmental and CO2 equivalent of removing 55 million cars from U.S. roads each year. Let's find your closest center below!",
    "When U.S. recycling levels reach 75% it will generate 1.5 million new jobs in the U.S. (net). Let's find your closest center below!",
    "Manufacturers truly want these materials back to reuse in their manufacturing, but they aren't able to reuse the materials if people don't recycle. Let's find your closest location and get started!"
  ]
  recyclingFact: string = "";
  requestLatLonAndLocation() {
    if (this.ZIP > 4999 && this.ZIP < 100000) {
      // console.log("searching for " + this.ZIP);
      this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe((resp: any) => {
        if (resp !== null) {
          // console.log(resp);
          this.latitude = resp.latitude;
          this.longitude = resp.longitude;
          // console.log(resp);
          this.requestLocation();
        } else {
          this.errorMessage = "Zip code not found";
        };
    })} else {
      this.errorMessage = "Please enter a 5-digit number to proceed";
    };
  };
  requestLocation() {
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
      // console.log("second API request ran");
      // console.log(resp);
      for (let index = 0; index < 20; index++) {
        this.responseArrayKeys[index] = (resp[index].location_id);
      };
      // console.log(this.responseArrayKeys);
      this.requestLocationDetails();
    });
  };
  requestLocationDetails() {
    // console.log(this.responseArrayKeys[0]);
    // console.log("fork runs now");
    let promises : Observable<object>[] = [
      this.earthService.getLocationDetails(this.responseArrayKeys[0]),
      this.earthService.getLocationDetails(this.responseArrayKeys[1]),
      this.earthService.getLocationDetails(this.responseArrayKeys[2]),
      this.earthService.getLocationDetails(this.responseArrayKeys[3]),
      this.earthService.getLocationDetails(this.responseArrayKeys[4]),
      this.earthService.getLocationDetails(this.responseArrayKeys[5]),
      this.earthService.getLocationDetails(this.responseArrayKeys[6]),
      this.earthService.getLocationDetails(this.responseArrayKeys[7]),
      this.earthService.getLocationDetails(this.responseArrayKeys[8]),
      this.earthService.getLocationDetails(this.responseArrayKeys[9]),
      this.earthService.getLocationDetails(this.responseArrayKeys[10]),
      this.earthService.getLocationDetails(this.responseArrayKeys[11]),
      this.earthService.getLocationDetails(this.responseArrayKeys[12]),
      this.earthService.getLocationDetails(this.responseArrayKeys[13]),
      this.earthService.getLocationDetails(this.responseArrayKeys[14]),
      this.earthService.getLocationDetails(this.responseArrayKeys[15]),
      this.earthService.getLocationDetails(this.responseArrayKeys[16]),
      this.earthService.getLocationDetails(this.responseArrayKeys[17]),
      this.earthService.getLocationDetails(this.responseArrayKeys[18]),
      this.earthService.getLocationDetails(this.responseArrayKeys[19])
    ];
    forkJoin(promises).subscribe(values => {
      console.log("ran");
      // console.log(values);
      if (values === null) {
        this.errorMessage = "no results found";
      }
      this.responseArrayObjects = values;
      this.errorMessage = "";
      console.log(this.responseArrayObjects);
    });
  };
  ngOnInit() {
    let integerForRecyclingFact = Math.floor(Math.random() * this.recyclingFacts.length);
    this.recyclingFact = this.recyclingFacts[integerForRecyclingFact];
  }
}



