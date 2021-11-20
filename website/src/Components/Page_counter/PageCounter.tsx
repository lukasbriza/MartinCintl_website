import {useEffect, useRef, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import {pageCounterAnOn, pageCounterAnOff} from '../../Functions/AnimationManager'
import {PageContext, AnimationContext} from '../../Functions/Context'


function PageCounter(props:pageCounter){
    const context:any = useContext(PageContext)
    const contextAn:any = useContext(AnimationContext)
    
    let counterArray = props.counterData
    let linksArray = props.pageLinks
    
    let element:any = useRef()
    let selector = gsap.utils.selector(element)

    const [opacity, setOpacity] = useState(1)
    const [display, setDisplay] = useState('grid')

    const [breakPoint, setBreakpoint] = useState(false)
    //////////////////////////////////////
    //ANIMATION SETUP//
    useEffect(() =>{
        linksArray.forEach((link:string, i:number) =>{
            if(link === context.location){
                pageCounterAnOn(selector("#_"+i+"count"), selector("#_"+i+"count-underliner"),false)
            }
            if(link !== context.location){
                pageCounterAnOff(selector("#_"+i+"count"), selector("#_"+i+"count-underliner"))
            }
        })
        if(context.width <=768 && context.location === '/contact'){
            pageCounterAnOn('#_3count','#_3count-underliner',true)
            setBreakpoint(true)
        }
    },[context.location])
    useEffect(() =>{
        if(context.width <=768 && context.location === '/contact' && breakPoint === false){
            pageCounterAnOn('#_3count','#_3count-underliner',true)
            setBreakpoint(true)
        } else if(context.width > 768 && breakPoint === true){
            pageCounterAnOn('#_3count','#_3count-underliner',false)
            setBreakpoint(false)
        }
    },[context.width])
    //SHOW SETUP//
    useEffect(() =>{
        if(contextAn.menuSlider === true) {
            contextAn.functions.setPageCounter(false)
            setOpacity(0)
            setTimeout(()=>{
                setDisplay('none')
            },1000)
        }
        if(contextAn.menuSlider === false) {
            contextAn.functions.setPageCounter(true)
            setDisplay('grid')
            setTimeout(()=>{
                setOpacity(1)
            },1000)
        }
    },[contextAn.menuSlider])
    //////////////////////////////////////
    //ARRAY PROCESSING//
    function activeLinkAnimation(obj:any){
        if(context.width <= 768 && obj.idCount === "_3count"){
            pageCounterAnOn(selector("#"+obj.idCount),selector("#"+obj.idUnderliner),true)
        }
        if(obj.idCount === "_2count" || obj.idCount === "_1count" || obj.idCount === "_0count"){
            pageCounterAnOn(selector("#"+obj.idCount),selector("#"+obj.idUnderliner),false)
        }
    }
    
    function classSetter(i:number){
        switch(i){
            case 0:
                contextAn.functions.setAnimationClass("Down")
                break
            case 1:
                if(context.location === "/"){
                    contextAn.functions.setAnimationClass("Up")
                } else {
                    contextAn.functions.setAnimationClass("Down")
                }
                break
            case 2:
                if(context.location === "/contact"){
                    contextAn.functions.setAnimationClass("Down")
                } else {
                    contextAn.functions.setAnimationClass("Up")
                }
                break
            case 3:
                contextAn.functions.setAnimationClass("Up")
                break
        }
    }
    let counts = linksArray.map((link:string, i:number)=>{
        return(
            <Link 
                to={link} 
                className="count-wrapper"
                id={"_"+i+"count-wrapper"}
                key={"_"+i+"count-wrapperKey"}
                onClick={()=>{activeLinkAnimation({
                                idLink: "_"+i+"count-wrapper",
                                idCount: "_"+i+"count",
                                idUnderliner: "_"+i+"count-underliner"
                            })}}

                onMouseEnter={()=>{classSetter(i)}}
                onTouchStart={()=>{classSetter(i)}}
            >
                <p 
                    id={"_"+i+"count"} 
                    key={"_"+i+"countKey"} 
                    className="count"
                >
                    {counterArray[i]}
                </p>
                <div 
                    className="count-underliner"
                    id={"_"+i+"count-underliner"}
                    key={"_"+i+"count-underlinerKey"}
                ></div>
            </Link>
        )
    })
    return(
        <div 
            id="pageCounter-wrapper"
            style={{opacity: opacity, display: display}}
        >
            <div id="countPositioner" ref={element}>
                {counts}
            </div>
        </div>
    )
}

export {PageCounter}