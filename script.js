
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursorFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

cursorFollower();

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnim();

document.querySelectorAll(".element").forEach(function(element){
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function(dets){
        gsap.to(element.querySelector("img"),{
            opacity:0,
            ease: "power3.out",
            duration:0.5,
        });
    });

    element.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - element.getBoundingClientRect().top;
        diffrot = dets.clientX-rotate;
        rotate= dets.clientX;
        gsap.to(element.querySelector("img"),{
            opacity:1,
            ease:"power3.out",
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5),
        });
    });
})