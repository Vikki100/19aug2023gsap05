gsap.to('#page1 h1',{
    Transform:'translateX(-100%)',
    fontWeight:'200',
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        scrub:5,
        pin:true


    }

})