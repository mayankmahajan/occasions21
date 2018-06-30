import { CarouselModule } from "angular2-carousel";
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './ad-banner/hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { AdDirective }          from './ad-banner/ad.directive';
import { AdService }            from './ad-banner/ad.service';
import { BarComponent } from './bar/bar.component';
import { AboutComponent } from './about/about.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { CarouselComponent,CarouselItemElement } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EarnwithusComponent } from './earnwithus/earnwithus.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  providers: [AdService],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective,
                  BarComponent,
                  AboutComponent,
                  DisplayListComponent,
                  CarouselComponent,
                  CarouselItemDirective,
                  CarouselItemElement,
                  AboutusComponent,
                  EarnwithusComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
