// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var overlay = document.querySelector("#overlay")

var scrolls = document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    scrolls.style.scale = 1
})
overlay.addEventListener("mouseleave",function(){
    scrolls.style.scale = 0
})

overlay.addEventListener("mousemove",function(dets){
    scrolls.style.left = dets.x + "px";
    scrolls.style.top = dets.y + "px";

})