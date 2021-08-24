import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

  constructor() { }

  activeFacts : string = "The concept of reducing what is produced and what is consumed is essential to the waste hierarchy. The logic behind it is simple to understand – if there is less waste, then there is less to recycle or reuse.";
  recycleActive : boolean = false;
  reuseActive : boolean = false;
  reduceActive : boolean = true;

  updateSelectedComponent(component : string) {
    var element = document.getElementById('image');
    this.recycleActive = false;
    this.reuseActive = false;
    this.reduceActive = false;
    // console.log("clicked");
    switch(component) {
      case "recycle": {
        // console.log("recycle clicked");
        this.recycleActive = true;
        element.className = "rotateToRecycle";
        this.activeFacts = "One of the issues facing communities that want to become more involved with a recycling effort is that while the relying collection and sorting process may be affordable to implement, there still has to be a facility to receive and transform the discarded waste into a raw material. More progress is being made toward uniting recycling plants with industries that can process the waste material through agreements and incentive credits.";
        break;
      }
      case "reuse": {
        // console.log("reuse clicked");
        this.reuseActive = true;
        element.className = "rotateToReuse";
        this.activeFacts = "You may have a box of things you keep that are broken or that you don’t have a use for that you hang on to in-case you find another use for them; or you may find bargains on old furniture or go trash picking and get things that you can refinish – in either case you are working towards reusing the item. Learning to reuse items, or re-purpose them for a use different then what they are intended for is essential in waste hierarchy.";
        break;
      }
      case "reduce": {
        // console.log("reduce clicked");
        this.reduceActive = true;
        element.className = "rotateToReduce";
        this.activeFacts = "The concept of reducing what is produced and what is consumed is essential to the waste hierarchy. The logic behind it is simple to understand – if there is less waste, then there is less to recycle or reuse.";
        break;
      }
      default: {
        // console.log("default selected");
      }
    };
  };

  // Rotate() {
  //   var element = document.getElementById('image');
  //   var x = document.getElementById("reduce");
  //   var a = document.getElementById("reuse");
  //   var b = document.getElementById("recycle");
  //   var x1 = document.getElementById("reduce1");
  //   var a1 = document.getElementById("reuse1");
  //   var b1 = document.getElementById("recycle1");

  //   if (element.className === "normal") {
  //     element.className = "rotate";
  //     var x = document.getElementById("reduce");
  //     if (x.style.display === "none") {
  //       x.style.display = "block";
  //       a.style.display = "none";
  //       b.style.display = "none";
  //       x1.style.display = "block";
  //       a1.style.display = "none";
  //       b1.style.display = "none";
  //     } else {
  //       x.style.display = "none";
  //       a.style.display = "block";
  //       b.style.display = "none";
  //       x1.style.display = "none";
  //       a1.style.display = "block";
  //       b1.style.display = "none";
  //     }
  //   }
  //   else if (element.className === "rotate") {
  //     element.className = 'rotate1';
  //     var a = document.getElementById("reuse");
  //     if (x.style.display === "none") {
  //       a.style.display = "block";
  //       x.style.display = "none";
  //       b.style.display = "none";
  //       a1.style.display = "block";
  //       x1.style.display = "none";
  //       b1.style.display = "none";
  //     } else {
  //       x.style.display = "none";
  //       a.style.display = "block";
  //       b.style.display = "none";
  //       x1.style.display = "none";
  //       a1.style.display = "block";
  //       b1.style.display = "none";
  //     }
  //     a.style.display === "block";    
  //   } else if ( element.className === "rotate1" && element.className ==="rotate1") {
  //     element.className = 'normal';
  //     var b = document.getElementById("recycle");
  //     if (x.style.display === "none") {
  //       b.style.display = "block";
  //       a.style.display = "none";
  //       x.style.display = "none";
  //       b1.style.display = "block";
  //       a1.style.display = "none";
  //       x1.style.display = "none";
  //     } else {
  //       x1.style.display = "block";
  //       a1.style.display = "none";
  //       b1.style.display = "none";
  //       x1.style.display = "block";
  //       a1.style.display = "none";
  //       b1.style.display = "none";
  //     }
  //   }
  // }

  // optionClicked1() {
  //   document.getElementById('image').click();
  // }
  ngOnInit() {
       }
    

}
