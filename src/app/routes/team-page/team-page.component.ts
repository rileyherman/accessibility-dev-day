import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';
import { Fixture, Mood } from 'src/app/model';
import { FootballService } from 'src/app/service/football.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  fixtures: Fixture[] = [];
  teamId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private footballService: FootballService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.teamId = +params.teamId),
      mergeMap(() => this.footballService.getFixturesByTeam(this.teamId))
    ).subscribe(f => this.fixtures = f.sort((a: Fixture, b: Fixture) => b.date.getTime() - a.date.getTime()));
  }

  getMoodForFixture(fixture: Fixture): Mood {
    if (fixture.away.team.id === this.teamId) {
      return fixture.away.mood;
    }
    return fixture.home.mood;
  }

  back = () => {
    this.router.navigate(['']);
  }

}
