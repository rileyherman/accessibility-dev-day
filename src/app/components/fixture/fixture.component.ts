import { Component, Input } from '@angular/core';
import { Fixture, Mood } from 'src/app/model';

@Component({
  selector: 'app-fixture',
  template: `
  <!-- 
    Task 5 - Colour me timbers

    I'll cut to the chase on this one - don't use only colour to convey meaning. If someone can't see
    well, they won't get the meaning. It's as simple as that. In this task, the ring on the card conveys
    whether you should watch the match. Add another indication in an accessible way.

    If we talk about colour, we need to talk about contrast. Not only is the colour the only thing 
    conveying meaning, but it's not an obvious colour contrast to make it usable for the low sighted. 

    My personal favourite for checking colour contrast is https://snook.ca/technical/colour_contrast/colour.html#fg=FFFFFF,bg=000000
    Tailwind colour #s can be found here https://tailwindcss.com/docs/customizing-colors

    You'll notice that the checker tells you whether you are WCAG 2 AA Compliant, etc. This is a 
    standard based on contrast ratio (if you want to learn more about how this is calculated
    https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast): 
    AA is the standard that most organizations adhere to as AAA is more difficult to make pretty. For
    what it's worth, the Canadian government regulation for their websites is AA. Since bigger text is
    easier to see, the contrast ratio is less for 18pt+ text. 
    Less than 18pt: 4.5:1 (example of 4.557:1 https://snook.ca/technical/colour_contrast/colour.html#fg=757575,bg=000000)
    More than 18pt: 3:1 (example of 3.339:1 https://snook.ca/technical/colour_contrast/colour.html#fg=606060,bg=000000)

    Tailwind colours are very good at complying at the AA level: a red-100 on gray-100 background, 
    for example, is compliant. While the ring is not necessarily text, it is conveying meaning so
    in my opinion it should be compliant. Also when you add another indication, please make that AA
    compliant. 

    Talking about colour necessitates talking about text. We'll do that over in 
    src/app/routes/about-page/about-page.component.html
  -->
  <div [class.ring-green-100]="happy" [class.ring-red-100]="sad" class="border shadow p-2 ring-2">
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
