gsap.registerPlugin(ScrollTrigger);

let media=window.matchMedia("(max-width: 500px)")


const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});


var tl=gsap.timeline();

tl.to("#nav,#heading h1",
 { 
    ease: Expo.easeIn, 
    opacity:1,
 duration: 2,
  stagger: 1,
 })

 .to("#heading img",
 { 
    ease: Expo.easeIn, 
    opacity:1,
 duration: .2,
  stagger: 1,
 })
 .to(".btm",
 { 
    ease: Expo.easeIn, 
    opacity:1,
 duration: .2,
  stagger: 1,
 })
 .to("#second ,#forth,.thir-img,#third-left",{
    opacity:1,
    duration:2,
    ease:Expo.easeIn,
    stagger:2,

 })

document.querySelector("#right .box1").addEventListener("mousemove",function(det){
   document.querySelector("#container").style.backgroundColor ="#" +det.target.dataset.color;

})
document.querySelector("#right .box1").addEventListener("mouseleave",function(det){
   document.querySelector("#container").style.backgroundColor ="#000";
   
})
var cur = document.querySelector("#cursor")
window.addEventListener("mousemove",function(dets){
   var det = cur.getBoundingClientRect()
   var x=dets.clientX-(det.width/2)
   var y=dets.clientY-(det.width/2)
   cur.style.left = x+"px"
   cur.style.top = y+"px"
})
if(y<165 || y>360 || x>805||x<470){
   if(y<4||y>596||x>1260){
      cur.style.width="0px"
      cur.style.height="0px"
   }
   else{
      cur.style.width="13px"
      cur.style.height="13px"
   }
}