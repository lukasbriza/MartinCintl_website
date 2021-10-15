import {gsap} from 'gsap'

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

export {
    pageCounterAnOn,
    pageCounterAnOff
}
