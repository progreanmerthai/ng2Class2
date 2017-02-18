import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-detail',
    template: `<h2>{{selectedHero.name}} details!</h2>
                <div><label>id: </label>{{selectedHero.id}}</div>
                <div>
                    <label>name: </label>
                    <input value="{{selectedHero.name}}" placeholder="name">
                </div>`
})

export class HeroDetailComponent {
    @Input()
    selectedHero: Hero;
}