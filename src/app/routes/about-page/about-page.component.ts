import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
})
export class AboutPageComponent {

  constructor(private router: Router) { }

  back = () => {
    this.router.navigate(['']);
  }
}
