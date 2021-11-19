import {useRef, useState,useEffect} from 'react'
import {triangleRollOn,triangleRollOff} from '../../../Functions/AnimationManager'

function Options(props:options){
    ////////////////////////////////////////////////////////////////
    //REFS//
    const triangleRef = useRef<any>()
    const optionRef = useRef<any>()

    const[display, setDisplay]=useState("inlineFlex")
    const[structure,setStructure] =useState({})

    useEffect(() =>{
        if(props.flag === false){
            setDisplay("none")
            setStructure({
                display:"block"
            })
        }
    },[props.flag])
    //TRIANGLE ANIMATION//
    useEffect(() =>{       
        if(props.roll === true){
            triangleRollOn(triangleRef.current,optionRef.current,".option-select")
        }
        if(props.roll === false){
            triangleRollOff(triangleRef.current,optionRef.current,".option-select")
        }   
    },[props.roll])
    ////////////////////////////////////////////////////////////////

    return(
        <div className="formInput" id="service-input" style={structure}>
            <label htmlFor="service" className="flag-contact" style={{display: display}}>
                <p className="flagOrder">01</p>
                <p className="flagText">Služba</p>
            </label>
            <div className="actualOption">
                <div id="actualOption">
                    {props.actualOption}
                </div>
                <div id="button" onClick={()=>{props.forwardFn.setRoll(!props.roll);console.log("clicked")}}>
                    <div className="triangle" ref={triangleRef}></div>
                </div>
                <div className="options" ref={optionRef}>
                    {
                        props.selectOptions.map((option:{id:string,value:string,optionNumber:number})=>{
                            return(
                            <p className="option-select" 
                                id={option.id} 
                                key={option.id}
                                onClick={() =>{props.forwardFn.optionSetup(option.optionNumber)}}
                            >
                                {option.value}
                            
                            </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export {Options}