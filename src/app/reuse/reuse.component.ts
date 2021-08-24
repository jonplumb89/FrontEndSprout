import { Component, OnInit } from '@angular/core';
import { ReuseService } from '../reuse.service';
import { ReuseObject } from '../models/reuse.model';
import { InteractiveFlowers } from '../animations/interactive-flowers'

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent implements OnInit {

  reuseItems: ReuseObject[];

  constructor(private reuseService: ReuseService) { }

  ngOnInit() {
    this.reuseItems = [];
    this.reuseService.getData().subscribe((res: any) => {
      res.data.children.forEach(item => {
        let url = item.data.url;
        let image = item.data.thumbnail;
        let title = item.data.title;
        let reuseObject: ReuseObject = {
          title: title,
          url: url,
          image: image
        }
        this.reuseItems.push(reuseObject);
      })
    })
  }

}
