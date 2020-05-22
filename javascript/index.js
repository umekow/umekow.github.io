document.querySelector('.more').addEventListener('mouseover', event => {
    gsap.to(".arrow", {duration:1, rotation:-90})
    console.log("moveover!")
}); 


//animejs animation for name

const svgPath = document.querySelectorAll('.path');

const svgText = anime({
targets: svgPath,
loop: false,
direction: 'alternate',
strokeDashoffset: [anime.setDashoffset, 5],
easing: 'easeInOutExpo',
duration: 5000,
delay: (el, i) => { return i * 500 }
});