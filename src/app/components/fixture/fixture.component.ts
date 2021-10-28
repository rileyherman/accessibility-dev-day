import { Component, Input } from '@angular/core';
import { Fixture, Mood } from 'src/app/model';

@Component({
  selector: 'app-fixture',
  template: `
  <div [class.ring-green-300]="happy" [class.ring-red-300]="sad" class="border shadow p-2 ring-2">
    <div class="flex items-center mb-2">
      <app-team class="mr-4" [team]="fixture.home.team"></app-team>
      <div class="mr-4 text-lg text-gray-900">VS</div>
      <app-team [team]="fixture.away.team"></app-team>
    </div>
    <div class="text-sm text-gray-700 text-center">{{date}}</div>
  </div>
  `
})
export class FixtureComponent {

  @Input() fixture!: Fixture;
  @Input() mood!: Mood;

  get happy(): boolean {
    return this.mood === Mood.HAPPY;
  }

  get sad(): boolean {
    return this.mood === Mood.SAD;
  }

  get date(): string {
    return new Date(this.fixture.date).toDateString();
  }

}
