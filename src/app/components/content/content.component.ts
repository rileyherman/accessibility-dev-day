import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="grid grid-cols-6 p-8">
      <div class="col-start-2 col-span-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ContentComponent {
}
