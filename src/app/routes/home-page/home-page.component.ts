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
    /*
      Task 1 - Let's start at the very beginning; a very good place to start

      What makes a good page title? Not this. The best practice with page titles is to check that the title
      adequately and succintly describes the page. It should be front-loaded: meaning that the unique info
      should be first. Fix the page title here (feel free to check the other page titles in 
      src/app/routes/about-page/about-page.component.ts and src/app/routes/team-page/team-page.component.ts
      as well). 

      Do: Contact Acme Web Solutions
      Don't: Acme Web Solutions, Inc. | Contact Us

      Great! Next task in src/app/routes/home-page/home-page.component.html

      Reference https://www.w3.org/WAI/test-evaluate/preliminary/#title
    */
    this.titleService.setTitle('This is a Really Fun and Informative Accessibility Dev Day');
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
