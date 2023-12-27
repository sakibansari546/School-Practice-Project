locoMotiveScroller()

function locoMotiveScroller() {


    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


onload()

function onload() {
    loadingAnimation();
    headingAnimation();
    cursorAnimation();
    page2Animation();
    page3Animation();
    page4Animation();
    headerAnimation();
}

function loadingAnimation() {
    let tl = gsap.timeline();
    loading();
    function loading() {
        let loder = document.querySelector('#loader h2');
        console.log(loder);
        let a = 0;
        setInterval(() => {
            if (a < 100) {
                a += Math.floor(Math.random() * 10) + 1;
                loder.innerHTML = a + '%';
            } else {
                a = 100;
                loder.innerHTML = a + '%';
            }

        }, 100);
    }



    tl.to("#loader h2", {
        scale: 1.5,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        onStart: loading()
    })
    tl.to("#loader", {
        top: "-100vh",
        delay: 0.5,
        duration: 1,
    });
}



function headingAnimation() {
    gsap.to('#page1 #page1-heading', {
        transform: 'translateX(-125%)',
        fontWeight: "100",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            markers: true,
            start: "top 0%",
            end: "top -100%",
            scrub: 2,
            pin: true
        }
    })
}

function headerAnimation() {
    let openBtn = document.querySelector('#open-menu-btn');
    let closeBtn = document.querySelector('#close-menu-btn');
    let menuContainer = document.querySelector('.nav-container')
    openBtn.addEventListener('click', () => {
        gsap.to('.nav-container', {
            y: { value: 0 },
            duration: 1,
            stagger: 0.5,
            opacity: 1,
        });
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';

        gsap.to('.left-nav video', {
            scale: 1,
            opacity: 1,
            duration: 1
        });
        gsap.to('.left-nav .video-con span', {
            y: 20,
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.3
        });

        gsap.to('.right-nav ul li', {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
        });
        gsap.to('.right-nav ul button', {
            scale: 1,
            opacity: 1,
            delay: 0.5,
            duration: 1,
            stagger: 0.1,
        });

    })
    closeBtn.addEventListener('click', () => {
        gsap.to(menuContainer, {
            opacity: 0,
            y: -500,
            duration: 1,
        });

        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';

        gsap.to('.left-nav video', {
            scale: 0,
            opacity: 0,
            duration: 1
        });

        gsap.to('.left-nav .video-con span', {
            y: 0,
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });
        gsap.to('.right-nav ul li', {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
        });
    });
}

function cursorAnimation() {
    let page1Content = document.querySelector('#page1-content');
    let cursor = document.querySelector('#cursor');

    page1Content.addEventListener('mousemove', (event) => {
        gsap.to(cursor, {
            x: event.x,
            y: event.y
        });
    });
    page1Content.addEventListener('mouseenter', (event) => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 1,
        });
    });
    page1Content.addEventListener('mouseleave', (event) => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 1,
        });
    });

    let tl = gsap.timeline()


    tl.from("#page1-content nav h3,#page1-content nav h4", {
        y: -100,
        duration: 1,
        opacity: 0,
        // delay: 1,
        stagger: 0.4
    });
    tl.from("#page1-content  h1 span", {
        y: 100,
        scale: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
    });

}

function page2Animation() {

    gsap.from("#page2 h1", {
        y: 120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 46%",
            // markers: true,
            scrub: 5
        }
    });

    gsap.from(".elm-left h4", {
        x: -120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 46%",
            // markers: true,
            scrub: 5
        }
    });
    gsap.from(".elm-right h4", {
        x: 120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 46%",
            // markers: true,
            scrub: 5
        }
    });
}

function page3Animation() {
    gsap.from("#page3 h2", {
        y: 120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 70%",
            // markers: true,
            scrub: 5
        }
    });
    gsap.from("#page3 h4", {
        x: 120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page3",
            scroller: "#main",
            start: "top 75%",
            end: "top 75%",
            // markers: true,
            scrub: 5
        }
    });
}


function page4Animation() {

    gsap.from("#page4 h1", {
        y: 120,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page4",
            scroller: "#main",
            start: "top 40%",
            end: "top 46%",
            // markers: true,
            scrub: 5
        }
    });

    gsap.to("#page4 .elm-left h4", {
        opacity: 1,
        scale: 1,
        stagger: 0.25,
        duration: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page4",
            scroller: "#main",
            start: "top 60%",
            end: "top 46%",
            // markers: true,
            scrub: 5
        }
    });
    // gsap.from("#page4 .elm-right h4", {
    //     x: -120,
    //     stagger: 0.25,
    //     duration: 1,
    //     stagger: 0.2,
    //     duration: 1,
    //     scrollTrigger: {
    //         trigger: " #page4",
    //         scroller: "#main",
    //         start: "top 60%",
    //         end: "top 46%",
    //         // markers: true,
    //         scrub: 5
    //     }
    // });
}
