



function time() {
    let a = 0;
    
    setInterval(() => {
        a = a + Math.floor(Math.random()*10)
   
        if (a<100) {
            document.querySelector('#loader h1').innerHTML = a +'%'
        } else {
            a = 100;
            document.querySelector('#loader h1').innerHTML = a+'%' 
            
        }       
    }, 100);
}




 let tl =gsap.timeline()

 tl.from('#loader h1',{
    scale:0.5,
    duration:2,
    delay:0.4,
    onStart: time()

 })

 tl.to("#loader",{
    y:-1000,
    duration:2,
    delay:0.4
 })


tl.to('#page1 h1',{
    Transform:'translateX(-100%)',
    fontWeight:'150',
    
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        scrub:5,
        pin:true


    }

})