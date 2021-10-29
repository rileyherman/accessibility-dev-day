import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /* 
    Task 2 - Just because you can, doesn't mean you should

    You're developers - I don't need to explain to you why this is a dumb piece of code. 
    BUT I do want you to run a Lighthouse Accessibility report with this still here and see 
    if it gets detected. In Chrome, it's under the Dev Tools -> Lighthouse tab. Only 
    Accessibility needs to be selected and Mobile or Desktop both are fine. If you're using
    Firefox, go to the Accessibility Tab and Check for Issues -> All issues. 

    (Note that if you haven't done Task 1, that will be detected by 
    Lighthouse - it's not garbage, it just doesn't stop you from being a moron). When you 
    see the next task, remember that that didn't show up either.

    You know what to do. Log a Github Issue of course! Everyone reads those, right? ... right?
    And you should probably delete the offending code.

    (I stole this from https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)
    
    Next task in src/styles.css
  */
  document.addEventListener('keydown', function (e) {
    e.preventDefault();
  });
