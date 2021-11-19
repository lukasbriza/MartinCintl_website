import {useContext, useState, useEffect} from 'react'

import {AnimationContext,PageContext} from '../../Functions/Context'

function MenuButton(props:menuButton){
    const context:any = useContext(AnimationContext)
    const appContext:any = useContext(PageContext)

    const[mobStyle, setmobStyle] = useState("white")

    useEffect(()=>{
        if(appContext.width <= 768 && appContext.location === "/contact" && mobStyle === "white"){
            setmobStyle("black")
        }
        if(appContext.width > 768 && mobStyle === "black"){
            setmobStyle("white")
        }
    },[appContext.width])
    useEffect(() =>{
        if(context.menuSlider === true && appContext.width <= 768 && appContext.location === "/contact"){
            setmobStyle("white")
        }
        if(context.menuSlider === false && appContext.width <=768 && appContext.location === "/contact"){
            setmobStyle("black")
        }

    },[context.menuSlider])
    useEffect(() =>{
        if(appContext.location !== "/contact"){
            setmobStyle("white")
        }
        if(appContext.location === "/contact" && appContext.width <= 768){
            setmobStyle("black")
        }
    },[appContext.location])


    return(
            <div 
                id={props.id}
                onClick={() => {
                    context.functions.setMenuSlider(!context.menuSlider)
                }}
            >
                <p className="center absolute" style={{color: mobStyle, fontWeight: 600}}>Menu</p>
            </div>
    )
}

export {MenuButton}