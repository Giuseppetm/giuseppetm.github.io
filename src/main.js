/*
    Home animations
*/
var textWrapper = document.querySelector('.home-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter home-title yellow'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.home-title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
});

// Wrap every letter in a span
var textWrapper2 = document.querySelector('.home-description');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter home-description'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home-description .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300 + 30 * i
});