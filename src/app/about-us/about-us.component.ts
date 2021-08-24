import { Component, OnInit } from '@angular/core';
import { InteractiveFlowers } from '../animations/interactive-flowers'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  
  message: string = 'View All';
  jonInfoShown: boolean = false;
  daveInfoShown: boolean = false;
  jessInfoShown: boolean = false;
  

  ngOnInit() {
    
    const canvas = <HTMLCanvasElement>document.getElementById('flower');

    const flowers = new InteractiveFlowers(canvas);

    const btn = document.getElementById('clearBtn');

    btn.addEventListener('click', () => {
      flowers.clearCanvas();
    });
  }

  toggleJon(){
    this.jonInfoShown = !this.jonInfoShown;
  };

  toggleDave(){
    this.daveInfoShown = !this.daveInfoShown;
  };

  toggleJess(){
    this.jessInfoShown = !this.jessInfoShown;
  };

  viewAll(){
    this.jonInfoShown = !this.jonInfoShown;
    this.daveInfoShown = !this.daveInfoShown;
    this.jessInfoShown = !this.jessInfoShown;

    if(this.jonInfoShown && this.daveInfoShown && this.jessInfoShown) {
      this.message = 'Close All';
    }
    else {
      this.message = 'View All';
    }
  };
}
