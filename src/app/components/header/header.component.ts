import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex items-center justify-between p-6 bg-gray-100 text-gray-900 border border-l-0 border-t-0 border-r-0 shadow">
      <div class="flex items-center text-lg">
        <button [class.invisible]="!back" (click)="back()"><span class="material-icons mr-4 cursor-pointer">arrow_back</span></button>
        <h3>Is the replay worth it?</h3>
      </div>
      <nav class="flex items-center hidden xl:block text-lg">
        <button class="cursor-pointer mr-4" (click)="about()">About</button>
      </nav>
      <nav class="flex items-center xl:hidden">
        <button (click)="about()"><span class="material-icons cursor-pointer mr-4">help_outline</span></button>   
      </nav>
    </header>
  `
})
export class HeaderComponent {

  constructor(private router: Router) { }

  @Input() back!: () => void;

  about = () => {
    this.router.navigate(['about']);
  }
}
