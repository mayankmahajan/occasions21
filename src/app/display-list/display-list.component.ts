import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  categories: Categories[] = [];
  ngOnInit() {
    this.getCategories();
  }

  category: Categories = {
    id: 1,
    name: 'Imitations'
  }

  getCategories(): void {
    this.heroService.getCategories()
      .subscribe(categories  => this.categories = categories);
  }


}
