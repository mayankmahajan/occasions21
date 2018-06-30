
import { Component, OnInit } from '@angular/core';
import { AdService }         from './ad-banner/ad.service';
import { AdItem }            from './ad-banner/ad-item';
import { HeroService } from './hero.service';
import { Bar } from './bar/bar';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  constructor(private heroService: HeroService) { }
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }

  links: Bar[] = [];

  

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.heroService.getLinks()
      .subscribe(links  => this.links = links);
  }

}
