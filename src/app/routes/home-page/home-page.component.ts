import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { debounce, switchMap } from 'rxjs/operators';
import { Team } from 'src/app/model';
import { FootballService } from 'src/app/service/football.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit, OnDestroy {

  teams: Team[] = [];
  searchFormControl: FormControl = new FormControl('');
  valueChangesSub: Subscription = Subscription.EMPTY;

  constructor(private titleService: Title, private footballService: FootballService, private router: Router) { }

  ngOnInit(): void {
    // this.titleService.setTitle('Accessibility Dev Day');
    this.footballService.getTeams().subscribe(t => this.teams = t);
    this.valueChangesSub = this.searchFormControl.valueChanges
      .pipe(
        debounce(() => interval(500)),
        switchMap(query => this.footballService.findTeams(query))
      )
      .subscribe(t => this.teams = t);
  }

  ngOnDestroy(): void {
    this.valueChangesSub.unsubscribe();
  }

  goToTeam(teamId: number): () => void {
    return () => this.router.navigate(['team', teamId]);
  }

}
