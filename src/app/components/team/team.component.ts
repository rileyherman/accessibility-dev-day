import { Component, Input, ɵɵsetComponentScope } from '@angular/core';
import { Team } from 'src/app/model';

@Component({
  selector: 'app-team',
  template: `

    <!-- 
      Task 4a - For the last time, their name is Zel... er, I mean Link

      The moment you've all been waiting for - semantic HTML.

      We all fucking love <div>s. <div>s are great. Full disclosure: I'm not going to scold you for using 
      <div>s for everything in the future. I just want you to be aware of the consequences. 

      Here's the traditional case for semantic HTML from a non-accessibility point of view - it's (arguably, 
      although I personally don't 100% agree with this 100% of the time) easier to read since the tag tells 
      you what the element is doing; it's lighter as you don't have to replicate baked-in HTML functionality;
      and it's good for SEO. Further, it doesn't take any longer to type <a> than it does <div> so why not? 

      Personally, I find the accessibility case much more compelling. Screen readers read HTML the way HTML 
      wants to be read. We'll use a screen reader in a later exercise and hopefully it'll help you understand 
      what a pain poor usage can be. For now, here's a few tips:

      - Use the right tag. You can overwrite the ugly styles that HTML gives by default. You were going to 
        anyway for the <div>. Is it a button? Use a <button>. Is it a link? Use a <a>. Is it a table? CSS grid.
        Just kidding - that has its place and it's not the same place as <table>
      - Use <h_> for your headers: a screen reader can allow a user to quickly jump between headings, which
        only works when there are headings to jump to. Lots of sites I've seen recommend an <h_> on every page
        that has content to jump around in, which is a little extreme in my opinion.
      - I know it's not 1998 but for goodness' sake do NOT use a <table> for layouts. A screen reader would 
        read it as a table for data and it would be borderline unusable for that user.
      - Consider including a <caption> or a summary attribute on <table>s that summarize the table's contents
        or a <figcaption> for an <img>
      - Don't use an <a> tag when you mean a <button>. If you're tempted to put an href="#" or href="javascript:void(0)"
        on your <a>, you should reconsider.
      - Links that open in a new tab should indicate that they do so. This can be a jarring experience, 
        especially for people with low vision or cognitive concerns

      If you really need to use a <div> in place of a more semantic tag (for example, some implementations 
      of a resizable <textarea>), here are some things you can do to mimic the built in features:
      - include a tabindex attribute, tabindex="0" allows a non-tabbable element
        to be tabbed into (ie focused). You will also need to handle keyboard inputs (for example, adding an
        event listener to call the onClick() when the Enter key is pressed on a fake button)
      - include an ARIA attribute. In Angular, this usually means binding to the ARIA attributes you need.
        See here for an example: https://angular.io/guide/accessibility#case-study-building-a-custom-progress-bar
        and here for a more in-depth look at ARIA https://developers.google.com/web/fundamentals/accessibility/semantics-aria

      Tangentially realted to this is links and link text. Providing adequate context is very important for 
      link text. Screen readers usually have a feature where they bring up a list of every link on the page - 
      thus removing the context. Text like "click me" can be very frustrating in this scenario. However, this 
      isn't event a problem for this piece of code yet - it's still a div, so it won't even show up on the 
      list of links at this time. Further, it's an image without alt text (yet). 

      According to Yale's Usability & Web Accessibility Evaluation 
      (https://usability.yale.edu/web-accessibility/articles/links#image-links),
      <blockquote>
        In general, content editors should avoid using images as links. If an image functions as a link, the 
        image must have alt text that conveys the location and purpose of the link. The alt text should not 
        describe the image. Treat image links as links, not as images.
      </blockquote>

      So here's your task: fix this. Specifically: the improper use of a <div> for a link, the <img> link 
      (either make it not an image link or provide a better image link), and the sub task about alt text.

      Reference https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML

      Bonus task https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility
    -->
    <figure tabindex="0" (keyup.enter)="handleClick()" (click)="handleClick()" [ngClass]="{ 'cursor-pointer hover:shadow-md': !!onClick }" class="flex justify-center p-2">
      <!-- 
        Task 4b - Hey now; you're an alt star

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

        Now that we have some alt text, let's move on to colour. See you in src/app/components/fixture/fixture.component.ts
      -->
      <img width="150" height="150" alt="" [src]="logo" />
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
