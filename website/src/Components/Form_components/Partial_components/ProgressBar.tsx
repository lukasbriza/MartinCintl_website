import {useEffect, useState, useRef} from 'react'

function ProgressBar(props:any){


    return(
        <div className="progressBar-wrapper">
            <Circle active={props.progress.c1} value={1} onClick={()=>{props.callback({c1:true,c2:false,c3:false})}}/>
            <div className="line-wrapper" ><div className="lineFiller"></div></div>
            <Circle active={props.progress.c2} value={2} onClick={()=>{props.callback({c1:true,c2:true,c3:false})}}/>
            <div className="line-wrapper"><div className="lineFiller"></div></div>
            <Circle active={props.progress.c3} value={3} onClick={()=>{props.callback({c1:true,c2:true,c3:true})}}/>
        </div>
    )
}

function Circle(props:any){
    const circleRef:any = useRef()
    const numberRef:any = useRef()

    const [circleFill, setCircleFill] = useState("transparent")
    const [color, setColor] = useState("black")

    useEffect(() =>{
        //ACTIVE ANIMATION
        if(props.active === true){
            setCircleFill("#4F5FA4")
            setColor("white")
        } else {
            setCircleFill("transparent")
            setColor("black")
        }
    },[props.active])

    //CIRCLE SETUP//
    let size = 42
    let cxcy = size/2
    let r = cxcy-1

    return(
        <div className="circleWrapper" style={{height: size+"px",width: size+"px"}} onClick={props.onClick}>
            
            <p className="number" style={{color:color}} ref={numberRef}>{props.value}</p>
            
            <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
                <circle ref={circleRef} 
                cx={cxcy} cy={cxcy} r={r} 
                stroke="rgb(61, 61, 61)" 
                strokeWidth="1" 
                fill={circleFill}
                className="circle"/>
            </svg>
        </div>
    )
}

export {ProgressBar}