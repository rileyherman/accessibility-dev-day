import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessibility-page',
  templateUrl: './accessibility-page.component.html',
})
export class AccessibilityPageComponent {

  constructor(private router: Router) { }

  back = () => {
    this.router.navigate(['']);
  }
}
