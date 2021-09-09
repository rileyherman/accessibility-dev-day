import { Component, Input } from '@angular/core';
import { Fixture, Mood } from 'src/app/model';

@Component({
  selector: 'app-fixture-tile',
  template: `
  <div class="border shadow p-2">
    <div class="flex items-center mb-2">
      <app-team-tile class="mr-4" [team]="fixture.home.team"></app-team-tile>
      <ng-container *ngIf="happy; else worried">
        <div class="mr-4 text-lg text-gray-900">HAPPY</div>
      </ng-container>
      <ng-template #worried>
        <div class="mr-4 text-lg text-gray-900">WORRIED</div>
      </ng-template>
      <app-team-tile [team]="fixture.away.team"></app-team-tile>
    </div>
    <div class="text-sm text-gray-700 text-center">{{date}}</div>
  </div>
  `
})
export class FixtureTileComponent {

  @Input() fixture!: Fixture;
  @Input() mood!: Mood;

  get happy(): boolean {
    return this.mood === Mood.HAPPY;
  }

  get date(): string {
    return new Date(this.fixture.date).toDateString();
  }

}
