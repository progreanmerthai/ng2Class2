import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = HEROES;
    ngOnInit() {
        this.heroes = HEROES.slice(1, 5);
    }
}