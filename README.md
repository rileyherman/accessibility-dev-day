# AccessibilityDevDay

### Quick links

* [Exercise 1 - Don't be stupid and why should you care?](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-1)
* [Exercise 2 - Do the things we all know we should](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-2)
* [Exercise 3 - To the Lighthouse](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-3)
* [Exercise 4 - The eye of man hath not heard](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-4)
* [Exercise 5 - I think U2 wrote a song about this once](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-5)
* [Exercise 6 - Now that you've heard it from me, don't take it from me](https://github.com/rileyherman/accessibility-dev-day/tree/exercise-6)

### The App

Here's the problem: I watch a lot of soccer in other timezones, which means I watch a lot of replays of the games that took place while I was sleeping or at work. The game has already happened; I have restrained from checking the score, but then the thought hits - what if my team got obliterated? I don't want to watch that. Then again, if I look at the score to see whether my team lost, I've spoiled the game. Solution: this site just _lightly_ spoils the game - if my team lost by 2 or more goals, I get an indication to not watch that game. Otherwise, I should watch it. I don't know whether my team won, drew, or lost a closer game so the mystery is still there, but I do know I won't watch my team pull a [Brazil in the 2014 World Cup](https://youtu.be/aE4BdIP6bvc).

The site gets its data from the .json files in the [src/app/data](./src/app/data) folder. If you're curious, that comes from the [populate-data.sh](populat-data.sh) file but I put the results of that script in that folder so no one else needs to register for an API key. You can easily switch this from premier league to any league from the documentation if you so choose. Documentation for the API I'm using can be found [here](https://rapidapi.com/api-sports/api/API-FOOTBALL). 

It's an Angular 11 PWA using TailwindCSS. It's NPM so a simple `npm install` should be enough to get you going. There are a few useful commands (all can be found in the [package.json](./package.json)): 

* `npm run dev`: start in development mode. This does all the nifty reloading and stuff for when you're actually writing code. http://localhost:4200/
* `npm run start`: start in production mode (but, you know, locally). Purges all the extra styles; doesn't restart on changes; that kind of thing. If you want to run reports of any kind, use this as it better mimics what's going on when it's actually deployed somewhere. http://localhost:4202/
* `npm run deploy`: packages everything up and deploys to github pages. THIS ONLY WORKS IF YOU FORK THE REPO. It's a PWA so it should work on mobile - this is one way to be able to interact with the site on your cell phone. For me the url would be https://rileyherman.github.io/accessibility-dev-day/ 

Now for a tour of the code itself. It's an Angular app so a lot of it is basically the things you need to have an Angular app. I'd encourage you to look at [app-routing.module.ts](./src/app/app-routing.module.ts) and click into the route components: the [about page](src/app/routes/about-page/about-page.component.ts), the [home page](./src/app/routes/home-page/home-page.component.ts) that displays all of the teams, and the [team page](./src/app/routes/team-page/team-page.component.ts) that takes a team id and displays all of the fixtures and whether I should watch them. There are a couple of reusable components for layout - [header](./src/app/components/header/header.component.ts) is the header on every page, [content](./src/app/components/content/content.component.ts) is just a wrapper for some padding in the body of the page. There also a [team component](./src/app/components/team/team.component.ts) and a [fixture component](./src/app/components/fixture/fixture.component.ts) that display teams and fixtures as cards. Feel free to change anything you want!