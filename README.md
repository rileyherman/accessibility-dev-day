# AccessibilityDevDay

### Exercise 1 - Don't be stupid and why should you care?

Let's start with a definition: according to [MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility), "Accessibility is the practice of making your websites usable by as many people as possible."

Seems easy enough. There's only [4.66 billion people on the internet](https://www.statista.com/statistics/617136/digital-population-worldwide/). 

To be frank, a lot of people will be able to use your website so long as you can use your website. The problem is that a lot of people won't. That doesn't mean they don't exist. The WHO counts [15% of the world's population as living with a disability](https://www.who.int/publications/i/item/9789241564182); the same report submits that "Disability is part of the human condition. Almost everyone will be temporarily or permanently impaired at some point in life". In the US (sorry, couldn't find the Canada stats I wanted), the population of software developers that live with a disability is about [1%](https://www.census.gov/data/tables/2017/demo/disability/acs-17.html)*. 

Building accessibility friendly sites isn't just for people living with declared disabilities. Techniques that improve accessibility for people living with disablities improve accessibility for everyone. For example, semantic HTML is good for SEO and often considered more maintainable. Acessibility of websites is a large component of [Corporate Social Responsibility](https://www.tandfonline.com/doi/abs/10.1080/15332860802086185), which could be [good for market share](https://www.researchgate.net/profile/Mahabubur-Rahman-10/publication/321638509_Corporate_Social_Responsibility_And_Marketing_Performance_The_Moderating_Role_Of_Advertising_Intensity/links/5b02ebdea6fdccf9e4f7562c/Corporate-Social-Responsibility-And-Marketing-Performance-The-Moderating-Role-Of-Advertising-Intensity.pdf). 

If that's not convincing and you still want to be a jerk, accessibility is also enforced by law in some juristictions. For example, the [Harmonised European standard](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) is compliance to WCAG 2.1 to Level AA ([which is quite a long read](https://www.w3.org/TR/WCAG21/) but luckily there's a [summary](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)). Germany has an even stricter [standard](https://www.einfach-fuer-alle.de/artikel/bitv_english/). In Canada this is governed by the [Canadian Human Rights Act](https://laws-lois.justice.gc.ca/eng/acts/h-6/FullText.html) for the public and private sector and the [Policy on Communications and Federal Identity](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=30683) which is based on [WCAG 2.0](https://www.w3.org/TR/WCAG20/) for government websites. Will the feds come knocking on your door because you forgot alt text on an image for your Sailor Moon fanfic site? No. But if you were making the governemnt of Canada's official Sailor Moon fanfic site they could be. Do you want to be under that headline? Didn't think so. EDIT THIS LATER.

There are 7 chapters in this workshop. Welcome to the first one! It's not just me rambling about documentation; you will get to touch some code in a second. First, let me give you a quick tour of the app. Task 1 starts in src/app/components/content/content.component.ts - if you're ever lost I would encourage you to use global find in your IDE and search for "Task 1". 

\* an amalgamation of the data linked and [this](https://www.bls.gov/emp/tables/emp-by-detailed-occupation.htm)

### The App

Here's the problem: I watch a lot of soccer in other timezones, which means I watch a lot of replays of games. The game has already happened; I have restrained from checking the score, but then a thought hits - what if my team got obliterated? I don't want to watch that. Then again, if I look at the score to see whether my team got played out of the park, I've spoiled the game. Solution: this site just _lightly_ spoils the game - if my team lost by 2 or more goals, I get an indication to not watch that game. Otherwise, I should watch it. I don't know whether my team won, drew, or lost a closer game so the mystery is still there, but I do know I won't watch my team pull a [Brazil in the 2014 World Cup](https://youtu.be/aE4BdIP6bvc).

The site gets its data from the .json files in the src/app/data folder. If you're curious, that comes from the populate-data.sh file but I put the results of that script in that folder so no one else needs to register for an API key. You can easily switch this from premier league to any league from the documentation if you so choose. Documentation for the API I'm using can be found [here](https://rapidapi.com/api-sports/api/API-FOOTBALL). 

It's an Angular 11 PWA using TailwindCSS. It's NPM so a simple `npm install` should be enough to get you going. There are a few useful commands (all can be found in the package.json): 

* `npm run lint`: linter using tslint.json. I know, I know, use eslint. I was lazy.
* `npm run dev`: start in development mode. This does all the nifty reloading and stuff for when you're actually writing code. http://localhost:4200/
* `npm run start`: start in production mode (but, you know, locally). Purges all the extra styles; doesn't restart on changes, that kind of thing. If you want to run reports of any kind, use this as it better mimics what's going on when it's actually deployed somewhere. http://localhost:4202/
* `npm run deploy`: packages everything up and deploys to github pages. THIS ONLY WORKS IF YOU FORK THE REPO. It's a PWA so it should work on mobile - this is one way to be able to interact with the site on you cell phone. For me the url would be https://rileyherman.github.io/accessibility-dev-day/ but it depends on your github username. 

Now for a tour of the code itself. It's an Angular app so a lot of it is basically the things you need to have an Angular app. I'd encourage you to look at app-routing.module.ts and click into the route components: the about page, the home page that displays all of the teams, and the team page that takes a team id and displays all of the fixtures and whether I should watch them. There are a couple of reusable components for layout - header is the header on every page, content is just a wrapper for some padding in the body of the page. There also a team component and a fixture component that display teams and fixtures as cards. Feel free to change anything you want.

Back to accessibility - task 1 is in src/app/components/content/content.component.ts. Enjoy!
