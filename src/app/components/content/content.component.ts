import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="grid grid-cols-6 p-8">
      <main id="maincontent" class="col-start-2 col-span-4">
        <ng-content></ng-content>
      </main>
    </div>
  `,
})
export class ContentComponent {
}
