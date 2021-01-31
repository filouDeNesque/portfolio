var menuMobile = document.getElementById('menumobile')
var visibility = 0;


function visibilityMenu() {
    if (visibility == 0) {
        menuMobile.classList.add("visible")
        console.log(visibility);
        visibility += 1;
        gsap.fromTo(".visible", {
            y: 400,
            x: -200
        }, {
            y: 0,
            x: 0,
            duration: 0.5
        });
        gsap.fromTo(".menu-mobil1", {
            y: 400,
            x: -300
        }, {
            y: 0,
            x: 0,
            duration: 1
        });
        gsap.fromTo(".menu-mobil2", {
            y: 400,
            x: -300
        }, {
            y: 0,
            x: 0,
            duration: 1.2
        });
        gsap.fromTo(".menu-mobil3", {
            y: 400,
            x: -300
        }, {
            y: 0,
            x: 0,
            duration: 1.5
        });
        gsap.fromTo(".menu-mobil4", {
            y: 400,
            x: -300
        }, {
            y: 0,
            x: 0,
            duration: 1.8   
        });
    } else {
        menuMobile.classList.remove("visible")
        visibility = 0;
    }
}

