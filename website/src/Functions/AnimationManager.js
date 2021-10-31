import {gsap, Power2, Power1} from 'gsap'

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
        color: '#4d4d4d'
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
    let tl = gsap.timeline()
    tl.to(element,{
        display: 'flex',
        duration: 0.002,
        ease: 'none'
    })
      .to(element, {
        right: '0vw',
        ease: Power2.easeOut,
        duration: menuSliderDuration,
    })
}

const menuSliderOff = (element) => {
    let tl = gsap.timeline()
    tl.to(element, {
        right: '-100vw',
        ease: Power2.easeOut,
        duration: menuSliderDuration,
    })
      .to(element,{
          display: 'none',
          duration: 0.002,
          ease: 'none'
      })
}

//TILE ANIMATION ON//
const tileTextOnDelay = 0.5 + 1.8
const tileOn = (layer, tile, flagLine, flagText, flag) => {
    let tl = gsap.timeline()
        tl.addLabel('layerOn')
        .to(layer, {
            background: 'rgba(0, 0, 0, 0.514)',
            ease: Power1.easeOut,
            duration: 0.5
        }, 'layerOn')
        .addLabel('start')
        .to(tile, {
            width: '60vw',
            ease: Power1.easeOut,
            duration: 1.8
        }, "start")
        .to(flagLine, {
            height: '70%',
            ease: Power1.easeOut,
            delay: 0.5,
            duration: 1.5
        }, "start")
        .to(flag, {
            width: '350px',
            ease: Power1.easeOut,
            delay: 0.5,
            duration: 1.5
        }, "start")
        .addLabel('flagDone')
        .to(flagText, {
            display: 'initial',
            ease: 'none',
            duration: 0.002
        }, 'flagDone')
        .to(flagText, {
            opacity: 1,
            ease: Power1.easeOut,
            duration: 1
        })
}

const tileTextOn = (content, tileText, button, contextFn) => {
    let tl = gsap.timeline()
        tl.to(content, {
            display: 'grid',
            duration: 0.3,
            delay: tileTextOnDelay,
            ease: 'none'
        })
        .to(tileText, {
            opacity: 1,
            duration: 1,
            ease: Power1.easeOut
        })
       .to(button,{
            opacity: 1,
            duration: 1,
            delay: -0.5,
            ease: Power1.easeOut,
            onComplete: () => {
                contextFn.setTileAnRunning(false)
            }
        })
        
        return(tl)
}

//TILE ANIMATION OFF//
const tileOff = (layer, tile, flagLine, flagText, flag) => {
    let tl = gsap.timeline()
        tl.addLabel('start')
        .to(flagText, {
            opacity: 0,
            duration: 0.5,
        }, 'start')
        .to(flagText, {
            display: 'none',
            duration: 0.02,
            ease: 'none'
        })
        .to(flagLine, {
            height: '0%',
            duration: 1,
            delay: 0.5,
            ease: Power1.easeOut,
        }, 'start')
        .to(flag, {
            width: '55px',
            ease: Power1.easeOut,
            delay: 0.5,
            duration: 1.5
        }, 'start')
        .to(tile, {
            width: '20vw',
            ease: Power1.easeOut,
            delay: 0.5,
            duration: 1.8
        }, "start")
        .to(layer, {
            background: 'rgba(0, 0, 0, 0)',
            duration: 0.5,
            delay: -0.5,
            ease: Power1.easeOut,
        })

}

const tileTextOff = (content, tileText, button) => {
    let tl = gsap.timeline()
        tl.addLabel('start')
        .to(tileText, {
            opacity: 0,
            duration: 0.5,
            ease: Power1.easeOut
        }, 'start')
        .to(button, {
            opacity: 0,
            duration: 0.5,
            ease: Power1.easeOut
        }, 'start')
        .to(content, {
            display: 'none',
            duration: 0.002,
            ease: 'none'
        })
        return(tl)
}

const waitCursorOn = () => {
    gsap.to('.tile', {
        cursor: 'wait'
    })
}

const waitCursorOff = () => {
    gsap.to('.tile', {
        cursor: 'pointer'
    })
}

export {
    pageCounterAnOn,
    pageCounterAnOff,
    menuSliderOn,
    menuSliderOff,
    tileOn,
    tileOff,
    tileTextOn,
    tileTextOff,
    waitCursorOn,
    waitCursorOff
}
