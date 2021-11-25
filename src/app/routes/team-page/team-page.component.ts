import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Fixture, Mood, Team } from 'src/app/model';
import { FootballService } from 'src/app/service/football.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html'
})
export class TeamPageComponent implements OnInit {

  fixtures: Fixture[] = [];
  team!: Team;

  constructor(private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private footballService: FootballService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => +params.teamId),
      mergeMap((teamId: number) => this.footballService.getTeam(teamId)),
      tap((team: Team) => this.team = team),
      // tap(() => this.titleService.setTitle(`${this.team.name} - Accessibility Dev Day`)),
      mergeMap(() => this.footballService.getFixturesByTeam(this.team.id))
    ).subscribe((f: Fixture[]) => this.fixtures = f.sort((a: Fixture, b: Fixture) => b.date.getTime() - a.date.getTime()));
  }

  getMoodForFixture(fixture: Fixture): Mood {
    if (fixture.away.team.id === this.team.id) {
      return fixture.away.mood;
    }
    return fixture.home.mood;
  }

  back = () => {
    this.router.navigate(['']);
  }

}
