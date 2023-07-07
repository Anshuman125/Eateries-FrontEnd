var tl = gsap.timeline();

tl.from('.section', {
    stagger: .3, 
    width: 0, 
    duration: 2, 
    opacity: 0,
    ease: 'Expo.easeInOut'
}).from('nav a',{
    stagger: .1,
    x: 30,
    duration: 1.5,
    opacity: 0,
    ease: 'Expo.easeInOut'
},'-=1')
.from('#circle',{
    rotate: '180deg',
    opacity: 0,
    ease: 'Expo.easeInOut',
    duration: 1
},'-=2')
.from('#circle3',{
    rotate: '180deg',
    ease: 'Expo.easeInOut',
    duration: 2
},'-=1.5')
.from('#circle img',{
    y: '800',
    ease: 'Expo.easeInOut',
    duration: 1.5
},'-=1')
