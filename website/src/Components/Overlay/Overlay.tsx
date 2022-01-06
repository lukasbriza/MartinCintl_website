import {useRef,useState, useEffect} from 'react'
import {overlayOn, overlayOff} from '../../Functions/AnimationManager'

function Overlay(props:Overlay){
    const overlay:any = useRef()
    const cross:any = useRef()
    const content:any = useRef()

    const [running, setRunning] = useState(false)

    useEffect(() =>{
        if(props.show === true && running === false){
            overlayOn(overlay.current,cross.current,content.current, setRunning)
        }
        if(props.show === false && running === false){
            overlayOff(overlay.current,cross.current,content.current, setRunning)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.show])

        let header = null
        if(props.header != null){
            header =(<div className="overlay-header">{props.header}</div>)
        }
        return(
            <div className="overlay-wrapper absolute top0 left0 hv100 wv100" ref={overlay}>
                <div className="overlay-content-wrapper">
                    <div className="hide-button" onClick={()=>{props.onClick()}} ref={cross}>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="content" ref={content}>
                        {header}
                        <div className="overlay-content">
                            {props.content}
                        </div>
                    </div>
                </div>
        
            </div>
        )
    
}

export {Overlay}