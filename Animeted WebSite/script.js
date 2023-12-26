




onload()

function onload() {
    cursorAnimation();
    page2Animation();
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
            opacity: 1
        });
    });
    page1Content.addEventListener('mouseleave', (event) => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0

        });
    });

}

function page2Animation() {
    gsap.to("#page2Span", {
        y: -12,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: " #page2Span",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    })
}
// gsap.to("", {
//     y: -12,
//     scrollTrigger: {
//         trigger: "#page2 #page2Span",
//         scroller: "body"
//     }
// })