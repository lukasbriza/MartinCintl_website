import {useState, useRef, useContext, useEffect} from 'react'
////////////////////////////////////////////////////
//CONTEXT//
import {AnimationContext} from '../../Functions/Context'
////////////////////////////////////////////////////
//ANIMATIONS//
import {tileOn,tileOff,waitCursorOn,waitCursorOff} from '../../Functions/AnimationManager'
////////////////////////////////////////////////////

function Tile(props:Tile){
    const [background, setBackground] = useState('rgba(0, 0, 0, 0)')
    const contextAn:any = useContext(AnimationContext)

    const tile:any = useRef()
    const flag:any = useRef()
    const flagLine:any = useRef()
    const flagText:any = useRef()
    const layer:any = useRef()

    //////////////////////////////////////////////////////
    //POINTER LISTENER//
    useEffect(() =>{
        if(contextAn.tileAnRunning === false){
            waitCursorOff()
        }
        if(contextAn.tileAnRunning === true){
            waitCursorOn()
        }
    }, [contextAn.tileAnRunning])
    //////////////////////////////////////////////////////
    //OPEN ANIMATION LISTENER//
    useEffect(() =>{
        if(props.open === true) {
            tileOn(
                layer.current,
                tile.current, 
                flagLine.current, 
                flagText.current,
                flag.current
            )
        }
        if(props.open === false) {
            tileOff(
                layer.current,
                tile.current, 
                flagLine.current, 
                flagText.current,
                flag.current
            )
        }
    }, [props.open])
    //////////////////////////////////////////////////////
    //PC VIEW//
    return(
        <div 
            className="tile hv100"
            id={props.id}
            ref={tile}

            onClick={()=>{

                if(contextAn.tileAnRunning === false){
                    switch (props.flagCount){
                        case "01":
                                contextAn.functions.setTileAnRunning(true)
    
                                contextAn.functions.setOpenTile1(true)
                                contextAn.functions.setOpenTile2(false)
                                contextAn.functions.setOpenTile3(false)
                            break
                        case "02":
                                contextAn.functions.setTileAnRunning(true)
    
                                contextAn.functions.setOpenTile1(false)
                                contextAn.functions.setOpenTile2(true)
                                contextAn.functions.setOpenTile3(false)
                            break
                        case "03":
                                contextAn.functions.setTileAnRunning(true)
    
                                contextAn.functions.setOpenTile1(false)
                                contextAn.functions.setOpenTile2(false)
                                contextAn.functions.setOpenTile3(true)
                            break
                    }
                }
            }}

            style={{
                backgroundImage: `url(${props.background})`
            }}
        >
            <div 
                className="tileLayer w100 h100"  
                ref={layer}
                style={{
                    backgroundColor: background
                }}

                onMouseEnter={() => {
                    if(props.open === false){
                        setBackground('rgba(0, 0, 0, 0.3)')
                    }
                }}
                onMouseLeave={()=>{
                    if(props.open === false){
                        setBackground('rgba(0, 0, 0, 0)')
                    }
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

export {Tile}