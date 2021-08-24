import { Component } from '@angular/core';
import { EarthService } from './earth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprout';

  constructor(private earthService: EarthService) {};

  requestLatLon() {
    this.earthService.getUsersLatLon('US', '48044').subscribe(resp => {
      console.log(resp);
    });
  };

  
};
