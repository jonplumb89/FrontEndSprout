import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  allArticles : any;
  articleDets : any;
  reduceURL : string = "";
  reduceDes : string;
  articleContent : string;
  articleShown: boolean = false;
  cleanArticleContent : string;

  constructor(private earthService: EarthService, private router: Router) { 
    this.earthService.getReduceArticles().subscribe( (res: any) => {
      this.allArticles = res.result;
    });
  }

  requestArticleDetails (e) {
    this.reduceURL = encodeURIComponent(e.target.value);
    let decodeURL = decodeURIComponent(this.reduceURL);
    this.earthService.getArticleDetails(this.reduceURL).subscribe ( (res: any) => {
      this.articleDets = res[`${decodeURL}`];
      this.articleContent = this.articleDets.content;

      const regex = /(\[caption[^>]*].*?\[\/caption])/gm;
      this.cleanArticleContent = this.articleContent.replace(regex, "");

      this.articleShown = true;
      this.reduceDes = this.articleDets.description;
    });
  };

  scrollToTop () {
    window.scroll(0,0)
  }

  ngOnInit() {
    
  }
};