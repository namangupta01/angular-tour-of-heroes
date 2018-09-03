import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatDialog } from '@angular/material';
import { MatDailogExampleComponent } from '../mat-dailog-example/mat-dailog-example.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  qwerty(): void {
    console.log("jhghjk");
    let dialogRef = this.dialog.open(MatDailogExampleComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
