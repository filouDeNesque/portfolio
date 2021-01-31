gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".parallax1", {
    y: -500
}, {
    y: 0,
    duration: 1
});
gsap.to(".parallax3", {
    scrollTrigger: {
        trigger: ".parallax3",
        toggleActions:"restart pause resume none"
    },
    x:-130,
    duration: 2
});

gsap.to(".parallax4", {
    scrollTrigger: {
        trigger: ".parallax3",
        toggleActions:"restart pause resume none"
    },
    x:-65,
    duration: 1.5
});

gsap.to(".parallax5", {
    scrollTrigger: {
        trigger: ".parallax3",
        toggleActions:"restart pause resume none"
    },
    x:0,
    duration: 1
});


gsap.fromTo(".col1", {
    y: 300
}, {
    y: 0,
    duration: 1
});
gsap.fromTo(".col2", {
    y: 400
}, {
    y: 0,
    duration: 1
});
gsap.fromTo(".col3", {
    y: 500
}, {
    y: 0,
    duration: 1
});
gsap.fromTo(".col4", {
    y: 600
}, {
    y: 0,
    duration: 1
});