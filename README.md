# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![This is the desktop layout screenshot of the project](/images/Screenshot-desktop%20design.PNG.)

![This is the mobile layout screenshot of the project](/images/Screenshot-mobile%20design.PNG.)

### Links

- Solution URL: [Solution](https://github.com/brusli147/faq-accordion-card-main)
- Live Site URL: [Live](https://brusli147.github.io/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This is the first time that I used <picture> element

```html
<picture>
      <source media="(max-width: 980px)" srcset="images/illustration-woman-online-mobile.svg">
      <source media="(min-width: 980px)" srcset="images/illustration-woman-online-desktop.svg">
      <img class="woman-img" src="images/illustration-woman-online-mobile.svg" alt="Woman standing in front of the computer">
    </picture>
```
```css
.proud-of-this-css {
  background: linear-gradient(hsl(273, 75%, 66%),hsl(240, 73%, 65%));
}
```


### Continued development

In the future I would like to work with CSS Frameworks like Sass and Bootstrap, also with JS framework React.

### Useful resources

- [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- GitHub - [Leon Andric](https://github.com/brusli147)
- Frontend Mentor - [@brusli](https://www.frontendmentor.io/profile/brusli147)

## Acknowledgments

Thanks to the Slack community!!
