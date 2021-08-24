import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sprout-home',
  templateUrl: './sprout-home.component.html',
  styleUrls: ['./sprout-home.component.css']
})
export class SproutHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  optionClicked() {
    document.getElementById('menuButton').click();
  }

}
