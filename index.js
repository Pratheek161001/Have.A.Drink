var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",
    end:"60% 50%",
    scrub:"true",
}})
tl.to("#fanta",{
    top:"119%",
    left:"2%",
    rotate:"360deg",
},'orange')
tl.to("#orangecut",{
    top:"152%",
    left:"25%",
},'orange')
tl.to("#bigorange",{
    width:"13%",
    top:"172%",
    right:"12%",
},'orange')
tl.to("#leaf",{
    width:"12%",
    top:"102%",
    left:"5%",
    rotate:"220deg",
},'orange')
tl.to("#leaf2",{
    width:"9%",
    top:"108%",
    right:"25%",
    rotate:"-10deg"
},'orange')
tl.to("#leaf2-down",{
    width:"10%",
    top:"130%",
    left:"30%",
    rotate:"-60deg",
},'orange')
tl.to("#leaf2-up",{
    width:"10%",
    top:"180%",
    left:"55%",
    rotate:"360deg",
},'orange')

var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:"50% 50%",
    scrub:"true",
}})
tl2.from("#lemon1",{
    rotate:"-90deg",
    right:"-100%",
    top:"110%",
},'ca')
tl2.from("#lemon2",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",
},'ca')
tl2.from("#cocacola",{
    rotate:"-90deg",
    right:"%",
    top:"110%",
},'ca')
tl2.from("#pepsi",{
    rotate:"-90deg",
    left:"%",
    top:"110%",
},'ca')
tl2.to("#orangecut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "215%",
    left: "33%",
}, 'ca')

