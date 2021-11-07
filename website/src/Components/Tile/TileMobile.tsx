import {useEffect, useRef} from 'react'
//ANIMATION//
import {mobileFlagOn, mobileFlagOff} from '../../Functions/AnimationManager'

function TileMobile(props:any){
    const flag:any = useRef()
    const flagLine:any = useRef()
    const flagText:any = useRef()

    useEffect(()=>{
        if(props.open === true){
            mobileFlagOn(flag.current,flagLine.current,flagText.current)
        }
        if(props.close === false){
            mobileFlagOff(flag.current,flagLine.current,flagText.current)
        }
    }, [props.open])
    return(
        <div 
            className="tile hv100"
            style={{
                backgroundImage: `url(${props.background})`
            }}
        >
            <div 
                className="tileLayer w100 h100"  
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
            >
                <div 
                    className="flag"
                    ref={flag}
                >
                    <p className="count">
                        {props.flagCount}
                    </p>
                    <div 
                        className="flagLine"
                        ref={flagLine}
                    ></div>
                    <p 
                        className="flagText"
                        ref={flagText}
                    >
                        {props.flagText}
                    </p>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export {TileMobile}