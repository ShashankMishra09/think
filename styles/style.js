
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fPAgeAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundelem",{
        y:'0',
        duration: 2,
        delay: -0.8,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from("#foot",{
        y:'-10',
        opacity: 0,
        delay: -0.8,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
}

fPAgeAnim();

document.querySelectorAll(".elem").forEach(elem => {
    var rotate=0;
    var differ=0;
    elem.addEventListener("mousemove", (dets)=>{
       var diff =  dets.clientY-elem.getBoundingClientRect().top
       differ = dets.clientX - rotate;
       rotate=dets.clientX;
       
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20,differ)
        })
    })
    elem.addEventListener("mouseleave", (dets)=>{
         gsap.to(elem.querySelector("img"),{
             opacity:0,
             ease:Power3,
             duration:0.5
         })
     })
});
