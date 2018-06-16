import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Bar } from './bar';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  links: Bar[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getLinks()
  }

  getLinks(): void {
    this.heroService.getLinks()
      .subscribe(links  => this.links = links);
  }

}
