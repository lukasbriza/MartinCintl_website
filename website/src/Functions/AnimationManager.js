import {gsap, Power2} from 'gsap'

//PAGE COUNTER ANIMATION//
const pageCounterDuration = 0.3
const pageCounterAnOn = (count,underliner) => {
    
    gsap.to(count,{
        duration: pageCounterDuration,
        ease: "linear",
        color: 'white'
    })
    gsap.to(underliner,{
        duration: pageCounterDuration,
        ease: "linear",
        width: "100%"
    })
}

const pageCounterAnOff = (count,underliner) => {
    gsap.to(count,{
        duration: pageCounterDuration,
        ease: "linear",
        color: '#6E6E6E'
    })
    gsap.to(underliner,{
        duration: pageCounterDuration,
        ease: "linear",
        width: "0%"
    })
}

//MANU SLIDER ANIMATION//
const menuSliderDuration = 1.5
const menuSliderOn = (element) => {
    gsap.to(element, {
        right: '0vw',
        ease: Power2.easeOut,
        duration: menuSliderDuration,
    })
}

const menuSliderOff = (element) => {
    gsap.to(element, {
        right: '-100vw',
        ease: Power2.easeOut,
        duration: menuSliderDuration,
    })
}
export {
    pageCounterAnOn,
    pageCounterAnOff,
    menuSliderOn,
    menuSliderOff
}
