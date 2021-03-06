import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from "./Hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})


export class HeroesComponent implements OnInit {
	heroes: Hero[];
    selectedHero: Hero;

	constructor(private router: Router,
				private heroService: HeroService) {
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);	
	}

	ngOnInit(): void {
		this.getHeroes();	
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);	
	}
}


