const Parallax_el = document.querySelectorAll(".Parallax");

let xValue =0,yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY -window.innerHeight/2;


    Parallax_el.forEach((el) => {
        let speedx  = el.dataset.speedx;
        let speedy  = el.dataset.speedy;

        el.style.transform =`translateX(calc(-50% + ${xValue  * speedx }px))  translateY(calc(-50% + ${yValue  * speedy }px))`;

    });

     
});
/*  gsap */

let timeline = gsap.timeline();
Parallax_el.forEach(el => {
    timeline.from(
        el,
    {
        top:`${el.offsetHeight / 2 + el.dataset.dist}px `,
        duration : 1,
    },
    "1"
);

})
