import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
  <!-- Task 1 - Aria-l bold

    Why would you do this?
    For accessibility reasons, of course!
    aria-hidden removes elements from the accessibility tree that are extraneous or irrelevant. 
    Unfortunately, here we're removing the bulk of our site from the accessibility tree, which 
    is not a good idea.

    The general advice is to use HTML5 attributes with built in aria elements. I know we all just 
    use <div> for everything and I'm not asking that to change. 

    We'll come back around to the accessibility tree, but for now just remove the offending attribute
    and move on to the next task.

    References on ARIA 
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
    https://w3c.github.io/using-aria/

    Next task in ../../../main.ts
   -->
    <div class="grid grid-cols-6 p-8" aria-hidden="true">
      <div class="col-start-2 col-span-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ContentComponent {
}
