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
    this.titleService.setTitle('About - Accessibility Dev Day');

    /* 
      Task 7 - Make like orange juice and focus

      Since Angular makes single page apps, the traditional resetting of focus doesn't happen 
      as seemlessly with Angular routing. To pop a keyboard user back up to the top of the page,
      we can change where the focus is once the navigation event has completed.

      You're all done! Head on over to the exercise-3 branch to learn all about some tools to help 
      evaluate the accessibility of a site.

      Reference https://angular.io/guide/accessibility#routing-and-focus-management
    */
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const mainHeader = document.getElementById('#maincontent');
      if (mainHeader) {
        mainHeader.focus();
      }
    });
  }

  back = () => {
    this.router.navigate(['']);
  }
}
