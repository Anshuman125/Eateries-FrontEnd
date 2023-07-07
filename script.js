var tl = gsap.timeline({
    repeat:-1
});

tl.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"63%",
    duration: 3,
    stagger:2
})

var active = 3;
var circle = document.querySelector("#circle");
var a = document.querySelector("nav a");
var c = document.querySelector(".cross");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function(dets){
    gsap.to(circle,{
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})

var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".second");

gsap.to(mncircles[active-1], {
    opacity: 1
});
gsap.to(sec[active-1], {
    opacity: 1
});

mncircles.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#gola",{
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut, 
            duration: 1
        })
        greyout();
        gsap.to(this, {
            opacity: 1
        })
        gsap.to(sec[index], {
            opacity: 1
        })
    })
})

function greyout(){
    gsap.to(mncircles, {
        opacity: .2
    })
    gsap.to(sec, {
        opacity: .4
    })
}

a.addEventListener("mousemove", function(dets){
    var dim = a.getBoundingClientRect();

    var xstart = dim.x;
    var xend = dim.x + dim.width;

    var val = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(circle, {
        scale: 5
    })
    gsap.to("nav a", {
        color: "yellow",
        fontWeight:"bold",
        duration: .4
    })

    gsap.to("nav a", {
        x: lerp(-20, 20, val),
        duration: .3
    })
})
a.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1
    })
    gsap.to("nav a", {
        color: "white",
        fontWeight:100,
        duration: .4
    })
})

c.addEventListener("click", function(){
    gsap.to("#gola",{
        rotate: 50, 
        ease: Expo.easeInOut,
        duration: 1.5
    });
    document.querySelector("#panel").style.display= "none";
    document.querySelector("#gola").style.display= "none";
    document.querySelector("#screen").style.opacity= 1;
    document.querySelector(".cross").style.display= "none";
    document.querySelector("#rightLinks").style.display= "flex";
    a.style.display= "block";
})

a.addEventListener("click", function(){
    document.querySelector("#panel").style.display= "flex";
    document.querySelector("#gola").style.display= "block";
    document.querySelector(".cross").style.display= "block";
    document.querySelector("#screen").style.opacity= 0.4;
    document.querySelector("#rightLinks").style.display= "none";
    a.style.display= "none"
    gsap.to("#gola",{
        rotate: 0,
        ease: Expo.easeInOut,
        
        duration: 1.5
    });
    
})

