import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    title: string = 'สวัสดีชาวโลก';
    hero: Hero = new Hero();
    heroes: Hero[] = HEROES;

    changeValue(data): void {
        this.hero.id = data.id;
        this.hero.name = data.name;
    }

}

