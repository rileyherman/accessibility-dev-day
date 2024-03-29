import { Component, Input, ɵɵsetComponentScope } from '@angular/core';
import { Team } from 'src/app/model';

@Component({
  selector: 'app-team',
  template: `
    <figure tabindex="0" (keyup.enter)="handleClick()" (click)="handleClick()" [ngClass]="{ 'cursor-pointer hover:shadow-md': !!onClick }" class="flex justify-center p-2">
      <img width="150" height="150" [alt]="team.name" [src]="logo" />
    </figure>
  `
})
export class TeamComponent {

  @Input() team!: Team;
  @Input() onClick!: () => void;

  handleClick(): void {
    if (!!this.onClick) {
      this.onClick();
    }
  }

  get logo(): string {
    return `assets/logos/${this.team.id}.webp`;
  }
}
