import { Component, Input } from '@angular/core';
import { Team } from 'src/app/model';

@Component({
  selector: 'app-team-tile',
  template: `
    <div class="cursor-pointer bg-gray-100 text-gray-900 text-center shadow-sm hover:shadow-md grid grid-cols-1 gap-2 p-2 border">
      <img [src]="team.logo" />
    </div>
  `
})
export class TeamTileComponent {

  @Input() team!: Team;

}
