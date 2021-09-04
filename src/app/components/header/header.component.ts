import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex items-center justify-between p-6 bg-gray-100 text-gray-900">
      <div class="flex items-center text-lg">
        <span [class.invisible]="!onBack" (click)="onBack()" class="material-icons mr-4 cursor-pointer">arrow_back</span>
        <span>Is the replay worth the watch?</span>
      </div>
      <div class="grid grid-cols-2 gap-4 text-center">
        <a class="cursor-pointer" href="/about">About</a>
        <a class="cursor-pointer" href="/accessibility">Accessiblility</a>
      </div>
    </div>
  `
})
export class HeaderComponent {

  @Input() onBack!: () => void;
}
