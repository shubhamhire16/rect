let rect = document.querySelector("#center");

rect.addEventListener("mousemove",(details)=>{
  var rectanglelocation = rect.getBoundingClientRect();
  var interval = details.clientX - rectanglelocation.left;
  if(interval<rectanglelocation.width/2){
    var redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,interval);
    gsap.to(rect,{
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  }
  else{
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,interval);
    gsap.to(rect,{
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
})

rect.addEventListener("mouseleave",()=>{
  gsap.to(rect,{
    backgroundColor: "white"
  })
})
