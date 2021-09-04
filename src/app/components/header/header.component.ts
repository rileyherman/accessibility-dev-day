import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex items-center justify-between p-6 bg-gray-100 text-gray-900">
      <div class="flex items-center text-lg">
        <span [class.invisible]="!back" (click)="back()" class="material-icons mr-4 cursor-pointer">arrow_back</span>
        <span>Is the replay worth the watch?</span>
      </div>
      <div class="grid grid-cols-2 gap-4 text-center">
        <a class="cursor-pointer" (click)="about()">About</a>
        <a class="cursor-pointer" (click)="accessibility()">Accessiblility</a>
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
