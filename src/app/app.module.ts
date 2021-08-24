import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
import { RecycleComponent } from './recycle/recycle.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ReuseComponent } from './reuse/reuse.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';
import { QuizComponent } from './quiz/quiz.component';
// import { EarthService } from './earth.service'

@NgModule({
  declarations: [
    AppComponent,
    SproutHomeComponent,
    ReduceComponent,
    ReuseComponent,
    RecycleComponent,
    AboutUsComponent,
    LandingComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
