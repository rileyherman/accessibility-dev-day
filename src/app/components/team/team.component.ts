import { Component, Input, ɵɵsetComponentScope } from '@angular/core';
import { Team } from 'src/app/model';

@Component({
  selector: 'app-team',
  template: `
    <div (click)="handleClick()" [ngClass]="{ 'cursor-pointer hover:shadow-md': !!onClick }" class="flex justify-center p-2">
      <!-- 
        Task 1 - Alt-on Brown's Recipe Book

        Here we're displaying a team's logo. Currently the alt text is blank - I want you to write it. 
        Hint: the team name is team.name - to use it you'll need to bind the alt attribute.

        - Good alt text is short, but not too short. Screen readers always read all of the text, so your 
        description should be efficiently to the point. 
        - Don't use "image of" or "pictured: " or anything because the user will already know it's an image.
        - Alt text should be accurate. If context is needed and it's making your alt text too long, consider 
        adding the context in the image description and tidying up the alt text. Another option is the longdesc
        attribute, although this is not as common.
        - Make sure your spelling and punctuation is correct as this will affect how the text is perceived, 
        especially if there's a screen reader between the user and your site.
        - If the image includes text, make sure it is also present in the alt text to make it as seamless as
        possible
        - If your image is a chart or a table or displaying conplex data, consider linking to the data source
        and summarizing what you want your reader to get out of the visualization. 

        Reference https://moz.com/learn/seo/alt-text 

        Facebook does this automatically, but it's closed source
        https://www.forbes.com/sites/stevenaquino/2021/01/19/facebook-announces-revamped-version-of-its-ai-powered-automatic-alternative-text-aat-tool/
        
        If you want to get super fancy about it, you can use MS Azure's Computer Vision to generate alt text. 
        Something like this would be good for a site which uses images from users - for example, social media.
        https://codepen.io/sdras/details/jawPGa

        Now that we have some alt text, let's move on to showing and hiding content. See you in src/app/routes/team-page/team-page.component.ts
      -->
      <img width="150" height="150" alt="" [src]="logo" />
    </div>
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
