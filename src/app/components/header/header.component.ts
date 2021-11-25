import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <!-- 
      Task 3 - Skip to my lou

      Have you ever tried just using your keyboard on a site and had to tab through every link 
      in the header on every page? It's very annoying. One simple trick to help keyboard users 
      is a skipnav. 
      
      A skipnav is just a link to the main content. If you look in the content component 
      (src/app/components/content/content.component.ts), you'll notice that there's a 
      <main id="maincontent"> surrounding the body of every page. We can allow a user to skip 
      all of the heading links and go directly to the main content by linking to that id.

      The problem is that it doesn't look good. It's right at the top of the page and it 
      messes with the vibe of the thing. Usually, this is solved by only showing it when it's
      focused. You're all clever developers - there are 1000 ways to hide something using CSS.
      
      Here are a few DON'Ts when it comes to hiding content:
      - The "hidden" HTML attribute, "display: none", and "visibility: hidden" all remove the content 
        from the accessibility tree. Consequently, they also mean the content cannot be focused, 
        which makes it poor for this usage. 
      - Anything with a size of zero will not be read by a screen reader. For example, "width: 0px".
      - Something like line-height: 0px may or may not work - don't risk it.
      - text-indent: -10000px probably works, but it's definitely not the best way. 

      The recommended way is the one specified here https://webaim.org/techniques/css/invisiblecontent/. 
      Once you've added your skipnav, you can move onto the next task in src/app/components/team/team.component.ts

      Reference https://webaim.org/techniques/skipnav/; https://webaim.org/techniques/css/invisiblecontent/
    -->
    <header class="flex items-center justify-between p-6 bg-gray-100 text-gray-900 border border-l-0 border-t-0 border-r-0 shadow">
      <div class="flex items-center text-lg">
        <button [class.invisible]="!back" (click)="back()"><span class="material-icons mr-4 cursor-pointer">arrow_back</span></button>
        <h3>Is the replay worth it?</h3>
      </div>
      <nav class="flex items-center hidden xl:block text-lg">
        <a class="cursor-pointer mr-4" tabindex="0" href="/about">About</a>
      </nav>
      <nav class="flex items-center xl:hidden">
        <a tabindex="0" href="/about"><span class="material-icons cursor-pointer mr-4">help_outline</span></a>   
      </nav>
    </header>
  `,
  styles: [`
  `]
})
export class HeaderComponent {

  constructor(private router: Router) { }

  @Input() back!: () => void;

  about = () => {
    this.router.navigate(['about']);
  }
}
