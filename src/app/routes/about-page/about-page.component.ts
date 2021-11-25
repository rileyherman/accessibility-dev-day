import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
})
export class AboutPageComponent implements OnInit {

  constructor(private titleService: Title, private router: Router) { }
  
  ngOnInit(): void {
    this.titleService.setTitle('Wow! You got here. Someone checks the about page for this Accessibility Dev Day. Lookit you go!');
  }

  back = () => {
    this.router.navigate(['']);
  }
}
