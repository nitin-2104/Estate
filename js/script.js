
function LocomotiveAnimation(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

LocomotiveAnimation();


// function cursorAnimation() {
//   // var realestate=document.querySelector("#main")
//   // var btn=document.querySelector("#estate")
//   // realestate.addEventListener("mouseenter", function() {
//   //   gsap.to(btn,{
//   //     scale:1,
//   //     opacity:1

//   //   })
//   // })
//   // realestate.addEventListener("mouseleave", function() {
//   //   gsap.to(btn,{
//   //     scale:0,
//   //     opacity:0

//   //   })
//   // })
//   // realestate.addEventListener("mousemove", function(dets) {
//   //   gsap.to(btn,{
//   //     left:dets.x-80,
//   //     top:dets.y-80

//   //   })
//   // })

//   /*****************************************page 1*/ 

//   var realestate1=document.querySelector("#page1")
//   var btn1=document.querySelector("#estate1")
//   realestate1.addEventListener("mouseenter", function() {
//     gsap.to(btn1,{
//       scale:1,
//       opacity:1

//     })
//   })
//   realestate1.addEventListener("mouseleave", function() {
//     gsap.to(btn1,{
//       scale:0,
//       opacity:0

//     })
//   })
//   realestate1.addEventListener("mousemove", function(dets) {
//     gsap.to(btn1,{
//       left:dets.x-80,
//       top:dets.y-80

//     })
//   })


//     /*****************************************page 2*/ 

//     var realestate2=document.querySelector("#page2")
//     var btn2=document.querySelector("#estate2")
//     realestate2.addEventListener("mouseenter", function() {
//       gsap.to(btn2,{
//         scale:1,
//         opacity:1
  
//       })
//     })
//     realestate2.addEventListener("mouseleave", function() {
//       gsap.to(btn2,{
//         scale:0,
//         opacity:0
  
//       })
//     })
//     realestate2.addEventListener("mousemove", function(dets) {
//       gsap.to(btn2,{
//         left:dets.x-80,
//         top:dets.y-80
  
//       })
//     })

// }


// cursorAnimation();





// your-script.js
document.addEventListener("DOMContentLoaded", function () {
  gsap.to('#my-image', {
    rotate: 360, // Rotate 360 degrees around its own axis
    transformOrigin: 'center center', // Set the transform origin to the center
    ease: 'power1.inOut', // Use a normal easing function
    duration: 12, // Set the duration for one repetition
    repeat: -1, // Repeat the animation for the specified number of repetitions
    // yoyo: true, // Play the animation in reverse after each repetition
    repeatDelay: 0, // Set the delay between repetitions
  });
});
