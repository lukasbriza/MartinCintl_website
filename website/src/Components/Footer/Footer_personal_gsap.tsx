import React, {useRef, useState, useEffect} from 'react'
import {gsap, Power1, Power2} from 'gsap'
//FUNCTION//
import {deviceDetection} from '../../Functions/DeviceDetect';


function Footer_personal_gsap(props:any){
    //REF SETUP//
    const leftSideRef:any = useRef(null)
    const rightSideRef:any = useRef(null)
    const dividerRef:any = useRef(null)
    const leftTextRef:any = {
        leftTextPt1: useRef(null),
        leftTextPt2: useRef(null),
        leftTextPt3: useRef(null),
        circle: useRef(null)
    }
    const rightTextRef:any = useRef(null)

    //////////////////////////////////////////////////////
    //STATES//
    const [active, setActive] = useState(false)
    const [onAn, setOnAn] = useState(false)
    const [onAnTime, setonAnTime] = useState(0)
    const [offAn, setOffAn] = useState(false)
    const [offAnTime, setOffAnTime] = useState(0)

    
    //////////////////////////////////////////////////////
    //INPUTS//
    const input = ["Lu","c","ky","Coder"]
    const link = "https://github.com/lukasbriza"
    
    let ls = leftSideRef.current
    let rs = rightSideRef.current

    let lt1 = leftTextRef.leftTextPt1.current
    let lt2 = leftTextRef.leftTextPt2.current
    let lt3 = leftTextRef.leftTextPt3.current
    let ci = leftTextRef.circle.current

    let rt = rightTextRef.current

    let dr = dividerRef.current
    //////////////////////////////////////////////////////
    //ANIMATION//
    const animationOn = () =>{
        let tl = gsap.timeline({onStart: ()=>{setOnAn(true);setonAnTime(3000)}, onComplete: ()=>{setOnAn(false)}})
            .addLabel('start')
            .to(ls,{left: "0px", duration: 1.5, ease: Power1.easeOut},'start')
            .to(rs,{right: "0px", duration: 1.5, ease: Power1.easeOut, onComplete: ()=>{setonAnTime(1500)}},'start')
            .to(dr,{height: "25px", duration: 1, delay: 0.5, ease: Power1.easeOut}, 'start')
            .to(lt3,{opacity: 1, duration: 0.5, ease: Power1.easeOut, onStart: ()=>{setonAnTime(2000)}},'start+=1')
            .to(lt2,{opacity: 1, duration: 0.5, ease: Power1.easeOut},'start+=1')
            .to(lt1,{opacity: 1, duration: 0.5, ease: Power1.easeOut},'start+=1')
            .to(rt,{opacity: 1, duration: 0.5, ease: Power1.easeOut},'start+=1')
            .addLabel("text")
            .to(lt1,{left: "0px", duration: 0.5, ease: Power1.easeOut, onComplete: ()=>{setonAnTime(1000)}},'text')
            .to(lt3,{right: "0px", duration: 0.5, ease: Power1.easeOut},'text')
            .to(ci,{strokeDashoffset: 0, duration: 1, ease: Power1.easeOut, onComplete: ()=>{setonAnTime(0)}})
        return tl
    }
    const animationOff = () => {
        let tl = gsap.timeline({onStart: ()=>{setOffAn(true);setOffAnTime(3000)}, onComplete: ()=>{setOffAn(false)}})
            .addLabel('start')
            .to(ci,{strokeDashoffset: 50, duration: 0.75, ease: Power1.easeOut, onComplete: ()=>{setOffAnTime(2250)}},'start')
            .to(lt1,{left: "4px", duration: 0.5, delay: 0.75, ease: Power1.easeOut, onComplete: ()=>{setOffAnTime(1750)}}, 'start')
            .to(lt3,{right: "4px", duration: 0.5, delay: 0.75, ease: Power1.easeOut}, 'start')
            .addLabel('text')
            .to(lt3,{opacity: 0, duration: 0.25, ease: Power1.easeOut, onComplete: ()=> {setOffAnTime(1500)}},'text')
            .to(lt2,{opacity: 0, duration: 0.25, ease: Power1.easeOut},'text')
            .to(lt1,{opacity: 0, duration: 0.25, ease: Power1.easeOut},'text')
            .to(rt,{opacity: 0, duration: 0.25, ease: Power1.easeOut},'text')
            .to(ls,{left: "56px", duration: 1.5, delay: 0.25, ease: Power1.easeOut},'text')
            .to(rs,{right: "57px", duration: 1.5, delay: 0.25, ease: Power1.easeOut},'text')
            .to(dr,{height: "0px", duration: 0.75, delay: 0.25, ease: Power2.easeOut, onComplete: ()=>{setOffAnTime(750)}},'text')
        return tl  
    }
    ////////////////////////////////////////////////////// 
    
    useEffect(() => {
        if(active === true && offAn === false){
            //start animation
            animationOn()
        }
        if(active === true && offAn === true){
            setTimeout(() =>{
                animationOn()
            },offAnTime)
        }
        if(active === false && onAn === false){
            //reverse animation
            animationOff()
        }
        if(active === false && onAn === true){
            setTimeout(()=>{
                animationOff()
            },onAnTime)
        }
    }, [active])
    //////////////////////////////////////////////////////
    return(
        <div id="footer">
            <a 
                id="footerLogo-wrapper" 
                href={link}
                onMouseEnter={() => { 
                    setActive(true)
                }}
                onMouseLeave={() => {
                    setActive(false)                  
                }}
            >
                <LeftSide ref={leftSideRef}/>
                <LeftText 
                    ref={leftTextRef}
                    text={{
                        pt1: input[0],
                        pt2: input[1],
                        pt3: input[2]
                    }}
                />
                <Divider ref={dividerRef}/>
                <RightText 
                    ref={rightTextRef}
                    text={input[3]}
                />
                <RightSide ref={rightSideRef}/>
            </a>
        </div>
    )
}


const LeftText = React.forwardRef((props:any, ref:any) => {
    const {leftTextPt1, leftTextPt2, leftTextPt3, circle} = ref

    return(
        <div className="leftText">
            <div id="pt1" ref={leftTextPt1}>{props.text.pt1}</div>
            <div id="pt2-wrapper">
                <div id="pt2" ref={leftTextPt2}>{props.text.pt2}</div>
                <svg height="18" width="18" id="circle">
                    <circle
                        ref={circle}
                        cx="9"
                        cy="9"
                        r="8"
                        stroke="white"
                        strokeWidth="2"
                        fill="transparent"
                        id="circlePath"
                    ></circle>
                </svg>
            </div>
            <div id="pt3" ref={leftTextPt3}>{props.text.pt3}</div>
        </div>
    )
})

const RightText = React.forwardRef((props:any, ref:any) => {
    return(
        <div className="rightText" ref={ref}>
            {props.text}
        </div>
    )
})

const LeftSide = React.forwardRef((props: any, ref:any) => {
    return(
        <div className="leftSide-logo" ref={ref}>
            <div className="line centerX" id="line1"></div>
            <div className="line centerX" id="line2"></div>
        </div>
    )
})

const RightSide = React.forwardRef((props: any, ref:any) => {
    return(
        <div className="rightSide-logo" ref={ref}>
            <div className="line centerX" id="line3"></div>
            <div className="line centerX" id="line4"></div>
        </div>
    )
})

const Divider = React.forwardRef((props: any, ref:any) => {
    return(
        <div className="divider" ref={ref}></div>
    )
})


export {Footer_personal_gsap}