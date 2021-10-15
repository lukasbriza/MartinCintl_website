import {useEffect, useRef, useContext} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import {pageCounterAnOn, pageCounterAnOff} from '../../Functions/AnimationManager'
import {PageContext} from '../../Functions/Context'


function PageCounter(props:pageCounter){
    const context:any = useContext(PageContext)
    let counterArray = props.counterData
    let linksArray = props.pageLinks
    let element:any = useRef()
    let selector = gsap.utils.selector(element)

    //////////////////////////////////////
    //ANIMATION SETUP//
    useEffect(() =>{
        linksArray.forEach((link:string, i:number) =>{
            if(link === context.location){
                pageCounterAnOn(selector("#_"+i+"count"), selector("#_"+i+"count-underliner"))
            }
            if(link !== context.location){
                pageCounterAnOff(selector("#_"+i+"count"), selector("#_"+i+"count-underliner"))
            }
        })
    },[context.location])
    //////////////////////////////////////
    //ARRAY PROCESSING//
    function activeLinkAnimation(obj:any){
       pageCounterAnOn(selector("#"+obj.idCount),selector("#"+obj.idUnderliner))
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
        <div id="pageCounter-wrapper">
            <div id="countPositioner" ref={element}>
                {counts}
            </div>
        </div>
    )
}

export {PageCounter}