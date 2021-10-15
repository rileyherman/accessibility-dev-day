import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex items-center justify-between p-6 bg-gray-100 text-gray-900 border border-l-0 border-t-0 border-r-0 shadow">
      <div class="flex items-center text-lg">
        <span [class.invisible]="!back" (click)="back()" class="material-icons mr-4 cursor-pointer">arrow_back</span>
        <span>Is the replay worth it?</span>
      </div>
      <div class="flex items-center hidden xl:block text-lg">
        <a class="cursor-pointer mr-4" (click)="about()">About</a>
        <a class="cursor-pointer" (click)="accessibility()">Accessiblility</a>
      </div>
      <div class="flex items-center xl:hidden">
        <span (click)="about()" class="material-icons cursor-pointer mr-4">help_outline</span>
        <span (click)="accessibility()" class="material-icons cursor-pointer">accessibility</span>
      </div>
    </div>
  `
})
export class HeaderComponent {

  constructor(private router: Router) { }

  @Input() back!: () => void;

  about = () => {
    this.router.navigate(['about']);
  }

  accessibility = () => {
    this.router.navigate(['accessibility']);
  }
}