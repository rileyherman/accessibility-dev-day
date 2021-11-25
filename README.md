# Accessibility Dev Day

### Exercise 1 - Don't be stupid and why should you care?

Let's start with a definition: according to [MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility), "Accessibility is the practice of making your websites usable by as many people as possible."

Seems easy enough. There's only [4.66 billion people with an internet connection](https://www.statista.com/statistics/617136/digital-population-worldwide/). 

To be frank, a lot of people will be able to use your website so long as you can use your website. The problem is that a lot of people won't. That doesn't mean they don't exist. The WHO counts [15% of the world's population as living with a disability](https://www.who.int/publications/i/item/9789241564182); the same report submits that "Disability is part of the human condition. Almost everyone will be temporarily or permanently impaired at some point in life".

Building accessibility friendly sites isn't just for people living with declared disabilities. Techniques that improve accessibility for people living with disablities improve accessibility for everyone. For example, semantic HTML is good for SEO and often considered more maintainable. Accessibility of websites is a large component of [Corporate Social Responsibility](https://www.tandfonline.com/doi/abs/10.1080/15332860802086185), which could be [good for market share](https://www.researchgate.net/profile/Mahabubur-Rahman-10/publication/321638509_Corporate_Social_Responsibility_And_Marketing_Performance_The_Moderating_Role_Of_Advertising_Intensity/links/5b02ebdea6fdccf9e4f7562c/Corporate-Social-Responsibility-And-Marketing-Performance-The-Moderating-Role-Of-Advertising-Intensity.pdf). 

If that's not a good enough reason, accessibility is also enforced by law in some juristictions. For example, the [Harmonised European standard](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) is compliance to WCAG 2.1 to Level AA ([which is quite a long read](https://www.w3.org/TR/WCAG21/) but luckily there's a [summary](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)). Germany has a custom, even stricter [standard](https://www.einfach-fuer-alle.de/artikel/bitv_english/). In Canada this is governed by the [Canadian Human Rights Act](https://laws-lois.justice.gc.ca/eng/acts/h-6/FullText.html) for the public and private sector and the [Policy on Communications and Federal Identity](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=30683) (which is based on [WCAG 2.0](https://www.w3.org/TR/WCAG20/)) for government websites. Will the feds come knocking on your door because you forgot alt text on an image for your Sailor Moon fanfic site? No. But if you were making the government of Canada's official Sailor Moon fanfic site they could be. Do you want to be under that headline? Didn't think so.

This exercise is all about how to not be a jerk. You mostly get to delete things. 

Welcome to the first exercise! It's not just me rambling about documentation; you will get to touch some code in a second. Task 1 starts in [the content component](./src/app/components/content/content.component.ts). Have fun!
