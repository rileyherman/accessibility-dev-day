import { Component, Input } from '@angular/core';
import { Team } from 'src/app/model';

@Component({
  selector: 'app-team-tile',
  template: `
    <div (click)="handleClick()" [ngClass]="{ 'cursor-pointer hover:shadow-md': !!onClick }" class="flex justify-center p-2">
      <img [src]="team.logo" />
    </div>
  `
})
export class TeamTileComponent {

  @Input() team!: Team;
  @Input() onClick!: () => void;

  handleClick(): void {
    if (!!this.onClick) {
      this.onClick()
    }
  }
}
