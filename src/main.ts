import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Task 2 - Just because you can, doesn't mean you should
  // You're developers - I don't need to explain to you why this is a dumb piece of code. 
  // BUT I do want you to run Lighthouse with this still here and see if it gets detected. 
  // Note that if you haven't done Task 1, that will be detected by Lighthouse.
  
  // Next task in ./styles.css
  document.addEventListener('keydown', function (e) {
    e.preventDefault();
  });
