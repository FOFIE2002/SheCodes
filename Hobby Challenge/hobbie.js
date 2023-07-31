function scrollToSection(recipies) {
  const section = document.getElementById(recipies);
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection(home) {
  const section = document.getElementById(home);
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection(contact_us) {
  const section = document.getElementById(contact_us);
  section.scrollIntoView({ behavior: "smooth" });
}

TweenMax.to(".hobby h1", 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".hobby h1", 2, {
  delay: 0.3,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".hobby", 2, {
  delay: 1,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".ellipse-container", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".yellow", 1, {
  delay: 3.5,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle1", 1, {
  delay: 2.4,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle2", 1, {
  delay: 2.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".logo", 1, {
  delay: 3,
  opacity: 0,
  ease: Expo.easeInOut,
});

/* TweenMax.from(".logo", 1, {
                delay: 3,
                opacity: 0,
                y: -100,
                ease: Expo.easeInOut
            }) */

TweenMax.staggerFrom(
  ".menu-links ul li",
  1,
  {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08
);

TweenMax.from(".scrolldown", 1, {
  delay: 3.4,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
});

TweenMax.from(".text .title", 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from(".text p", 1, {
  delay: 3.2,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from(".see-meals", 1, {
  delay: 3.4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMaxstaggerFrom(
  ".media ul li",
  1,
  {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  },
  0.08
);
