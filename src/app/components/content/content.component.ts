import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
  <!-- 
    Task 1 - Aria-l bold

    Why would you do this?
    For accessibility reasons, of course!
    aria-hidden removes elements from the accessibility tree that are extraneous or irrelevant. 
    Unfortunately, here we're removing the bulk of our site from the accessibility tree, which 
    is not a good idea. Most accessibility tools run off the accessibility tree. If you are using 
    Firefox, you can see the effects of this in dev tools -> Accessibility tab. In Chrome dev tools 
    you can see the tree in the Elements tab -> double chevron in the right hand pane -> Accessibility. 
    There's a header. 
    And then there's nothing. 

    The general advice is to use HTML5 attributes with built in aria elements. I know we all just 
    use <div> for everything and I'm not asking that to change (yet). 

    We'll come back around to the accessibility tree, but for now just remove the offending attribute
    and move on to the next task.

    If you'd like to learn more about aria attributes, here are some references: 
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
    https://w3c.github.io/using-aria/

    Frankly, the best way to avoid having to mess with aria attributes is to use semantic HTML. 
    You'll see that motif frequently over the course of the workshop. 

    Next task in src/main.ts
   -->
    <div class="grid grid-cols-6 p-8" aria-hidden="true">
      <main class="col-start-2 col-span-4">
        <ng-content></ng-content>
      </main>
    </div>
  `,
})
export class ContentComponent {
}
