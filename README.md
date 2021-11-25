# Accessibility Dev Day

### Exercise 3 - To the Lighthouse

There's been a lot fo scratching the surface of topics in this workshop - the reason being that accessibility can be affected in a variety of ways
by a variety of decsions. It's a lot to keep in mind. In this exercise, we're going to go through some tools for checking accessibility.

Quick app note - running the app in dev mode is generally not the most accurate way to run the tests. If you would like to fork the repo and publish 
to github pages (`npm run deploy`), that would be the most accurate. If you don't want to do that, `npm run start` will be the next best thing.

#### Chrome - Lighthouse
In the first exercise, I asked you to run a Lighthouse test in Chrome Dev Tools. [Lighthouse](https://developers.google.com/web/tools/lighthouse/) checks [these things](https://web.dev/accessibility-scoring/). It will catch things like 
* aria-* attributes are ok
* `<title>`s (including having no `<title>` on `<iframe>`s)
* `alt` text on `<img>` tags
* form fields have unique labels
* colour contrast
* `lang` attribute on `<html>` tags (this tells the screen reader which language interpreter to use)

Try running it on this site and see what you get! Fix the broken things. You only need to select the Accessibility category and one of Mobile or Desktop - 
feel free to play with the others if you feel inspired. Live your life. 

Chrome also has some accessibility settings in the Elements tab. In the overflow menu double chevron, there's an Accessibility tab. This allows you to 
view the Accessibility tree and any aria-* attributes, including computed ones. 

#### Firefox - Accessibility Tab

The Firefox equivalent is the [Accessibility](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) tab in Firefox's Dev Tools. This is a little less pretty (it doesn't let you get a pretty PDF).
Select "All issues" from the "Check for issues" dropdown. In the editor window you can see the accessibility tree and any issues get an exclamation mark. 
The biggest complaint you'll often see in this tool is keyboard naviagability, but it also checks colour contrast as well as text labels. 

Mess around in there. It's a little less user friendly, so I encourage you to follow the [docs](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)

#### Out of the box? In another box? Whatever the saying is.

Both of these tools miss a few things that should not be particularly difficult for a tool to check: 
* clickable areas less than 44 square pixels, 
* duplicate link text, 
* using `<div>` for everything, etc. 

However, lots can not be easily programmably checked or can be red herrings. Some common examples include
* using only colour to convey meaning,
* `alt` text on purely decorative images,
* missing skipnav, etc.

There area few tools that can help you track down stinkers. I personally like [Web Developer](https://chrispederick.com/work/web-developer/) which is very similar to Dev Tools except
has a few extras that are useful. If you have delpoyed to GitHub pages, you can run the Validate Accessibility tool, which runs the WAVE 
Web Accessibility test. You can use the [WAVE Extension directly](https://wave.webaim.org/extension/) if you would like to. This allows you to run against localhost as well. 
Web AIM is generally an excellent resource for this kind of thing and WAVE will track down many of the WCAG 2.0 violations your site may have. 

Finally, [here's a great list of tools by Harvard Accessibility](https://accessibility.huit.harvard.edu/tools). Some of my favourites from this list are:
* [A tool for checking the accessibility of surveys](https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/check-survey-accessibility/#AccessibleAndNonAccessibleQuestionTypes)
* [A photosensitive epilepsy analysis tool](https://trace.umd.edu/peat/)
* [The W3C HTML checker](https://validator.w3.org/nu/) (you can check this site - my one complaint is that it doesn't detech `<div>` soup so this site does alright)
* [A PDF accessibility checker](https://www.access-for-all.ch/en/pdf-accessibility-checker.html)
* [Tanaguru, for corporate training and advice on accessibility](https://www.tanaguru.com/en/)

If you want to do a manual, guided review of your website then I would highly suggest walking through with (this review from W3](https://www.w3.org/WAI/test-evaluate/preliminary/). 
