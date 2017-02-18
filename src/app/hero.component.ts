import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { HeroService } from './hero.service';


import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    title: string = 'สวัสดีชาวโลก';
    hero: Hero = new Hero(0, 'dummy');
    targetHero: Hero;
    heroes: Hero[] = [];


    constructor(private service: HeroService) {
        this.heroes = this.service.getHeroes();
    }
    changeValue(data: Hero): void {
        this.hero = data;
    }

    register(form: NgForm): void {
        this.addHero(form.value.name);
    }

    addHero(name: string) {
        this.targetHero = new Hero(100, name);
        this.heroes.push(this.targetHero);
    }

}

