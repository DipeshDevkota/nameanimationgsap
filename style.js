gsap.registerPlugin(ScrollTrigger);

 function breakTheText(){
gsap.registerPlugin(ScrollTrigger);

  var topic=document.querySelector("h2")
  
 var h2Text = topic.textContent

 var splittedText=h2Text.split("")
 var halfvalue=splittedText.length/2

 var clutter="";
 
 splittedText.forEach(function(e,idx)
{
  if(idx<halfvalue)
    {
        clutter += `<span class="a">${e}</span>`
    }
    else
    {
        clutter += `<span class="b">${e}</span>`
    }

})


topic.innerHTML=clutter

 }
 breakTheText()

 gsap.from("h2 .a",{
    y:40,
    duration:0.5,
    delay:0.2,
    stagger:0.15,
    opacity:0
    
 })
 gsap.from("h2 .b",{
    y:40,
    duration:0.5,
    delay:0.1,
    stagger:-0.20,
    opacity:0
    
 })





