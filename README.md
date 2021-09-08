![Code Institute logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

![Tokyo 2020 Olympics logo](https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/2020_Summer_Olympics_logo_new.svg/158px-2020_Summer_Olympics_logo_new.svg.png)

# Going for Gold!

A truly level playing field...

[Site concept partly inspired by this LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:6830398833353117697/)

[Official Tokyo 2020 Olympic Medal Count](https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/medal-standings.htm)

[Local `JSON` file created by copying and pasting data found in this (archived) repository](https://github.com/kevinle-1/olympic-api)

[Olympic flag image downloaded from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/640px-Olympic_flag.svg.png)

[Chequered Tokyo 2020 logo downloaded from Wikipedia and customised for use throughout the site](https://upload.wikimedia.org/wikipedia/sco/1/1d/2020_Summer_Olympics_logo_new.svg)

['3D Transforms and Animations'](https://www.the-art-of-web.com/css/3d-transforms/) (The Art of Web)

['Fetch API'](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (MDN Web Docs)

[REST Countries API](https://restcountries.eu/)

[Problematic API endpoint for Kosovo: `"cioc":null`](https://restcountries.eu/rest/v2/alpha/xk)

[Dynamic pure CSS search bar refactored and customised from Jove Angelevski's template](https://codepen.io/AlbertFeynman/pen/BPvzWZ)

[Landing page Olympic rings SVG GSAP animation adapted from Steve Gardner's CodePen](https://codepen.io/ste-vg/details/kXzXYW)

[Hamburger icon SVG with CSS hover animation adapted from Cassie Evans' CodePen](https://codepen.io/cassie-codes/pen/ExgXNWY)

[Animated loading component adapted from @CodeBoomer's 'Olympics CSS Spinner' CodePen](https://codepen.io/CodeBoomer/pen/BzOPPz/)

[ColorSpace's online colour gradient generator](https://mycolor.space/gradient) was used to apply a metallic shine effect to the gold-, silver- and bronze-coloured landing page buttons, and to create the linear gradients found elsewhere throughout the site.

The [JPG to PNG online editing tool](https://jpg2png.com/) was used to convert a `.jpeg` version of the Tokyo 2020 logo to `.png` format

['How to sort an array of objects by multiple fields?'](https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields) (Stack Overflow)

[Summary of the situation surrounding Russian (ROC) athletes' participation at the Tokyo Games](https://en.wikipedia.org/wiki/Russian_Olympic_Committee_athletes_at_the_2020_Summer_Olympics) (Wikipedia)

I had to intercept the data being returned from the REST Countries API for Russia: changing the name from ['Russian Federation'](https://restcountries.eu/rest/v2/name/russia) to 'ROC' and the flag image's `src` value to [a URL found on the official Olympics.com website](https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/ROC.png).

Likewise, the outdated name of ['Macedonia (the former Yugoslav Republic of)'](https://restcountries.eu/rest/v2/name/macedonia) in the REST Countries API database was overwritten with the correct modern name of 'North Macedonia'

I also decided to abbreviate the verbose country name versions of ['Venezuela (Bolivarian Republic of)'](https://restcountries.eu/rest/v2/name/venezuela), [United States of America](https://restcountries.eu/rest/v2/name/usa), [Syrian Arab Republic](https://restcountries.eu/rest/v2/name/syria), [Moldova (Republic of)](https://restcountries.eu/rest/v2/name/moldova), [Iran (Islamic Republic of)](https://restcountries.eu/rest/v2/name/iran) and ['Republic of Kosovo'](https://restcountries.eu/rest/v2/name/kosovo), in keeping with the site's overall minimalist aesthetic

The situation in relation to Great Britain/The United Kingdom (or "Team GB", as they are informally known nowadays) at the Olympics is naturally [quite complicated](https://en.wikipedia.org/wiki/Team_GB#Calls_for_renaming) and [frequently](https://inews.co.uk/sport/olympics/team-gb-why-not-uk-olympics-tokyo-2020-name-british-explained-1122737) [misunderstood](https://twitter.com/daraobriain/status/1418897202471227394). Either way, seeing as the official Olympic website adheres to [calling them 'Great Britain'](https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/medal-standings.htm), this was the preferred nomenclature adopted by the developer. To that end, the lengthy name of ['United Kingdom of Great Britain and Northern Ireland' returned from the API endpoint](https://restcountries.eu/rest/v2/name/great%20britain) was reformatted manually through the use of conditional logic within the Medallists component.

[Guidance on additional configuration requirements to facilitate continuous deployment (via Netlify) from John Smilga](https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22778973#content)

Inspiration for applying dynamic colour styles to the `.container-flag` elements on the [Medallists page](https://going-for-gold.netlify.app/medallists) came from my mentor Tim, who alerted me to the fact that the five Olympic ring colours [represent the five main continents](https://en.wikipedia.org/wiki/Olympic_symbols#:~:text=The%201949%E2%80%9350%20edition%20of,%2C%20and%20red%20for%20America%22). After learning of this, I was able to conditionally target the `background-image` property of each of these elements based on the "region" property value of each corresponding item returned from the REST Countries API endpoint.

['How to print a number with commas as thousands separators in JavaScript'](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript) (Stack Overflow)

Site logo design adapted from a [Canva base template](https://www.canva.com/design/DAEpKFB9Qs4/EgBNQWkP7pLS6kfjalAE4A/edit)

CSS toggle-switch functionality adapted (for integration with React state values) [from Nick Bottomley's CodePen](https://codepen.io/nickbottomley/pen/uhfmn)

Favicon generated using the [free online favicon.io tool](https://favicon.io/favicon-converter/)

The official Tokyo 2020 font was developed by [Morisawa](https://olympics.com/tokyo-2020/en/news/morisawa-official-font-tokyo-2020), a Japanese type foundry, and appears to be unavailable for public use. After a bit of digging, I therefore decided to use the [Freeroad Regular font](https://webfonts.ffonts.net/Freeroad-Regular.font), which is a close approximation of the ["industrial `sans serif`"](https://fontmeme.com/images/TOKYO-2020-NEW.gif) seen in the Games' [(redesigned)](https://www.theguardian.com/sport/2016/apr/25/tokyo-2020-organisers-unveil-new-logo-olympic-plagiarism-allegations) [logo](https://fontmeme.com/images/TOKYO-2020-NEW.gif), for all primary headings across the site. To complement this, I chose [Raleway](https://fonts.google.com/specimen/Raleway?query=raleway), a popular `sans serif` font available via Google Fonts, as the default `body` font.

## Features

### Potential future features:

- Expand the scope of the project to also incorporate the Tokyo 2020 Paralympic Games

- The flag images returned from the REST Countries API are not of uniform dimensions, which presents challenges in terms of layout. This is something that could be addressed more thoroughly further down the line (for the time being, some basic contingency CSS has been put in place), e.g. by applying dynamic styling to the `.flag-wrapper` elements and their contents to ensure standardised width/height for each double-sided flag.

[Project title is of course a respectful nod to the greatest TV game show of all time](https://www.youtube.com/watch?v=lTjVNwYRCNk)
