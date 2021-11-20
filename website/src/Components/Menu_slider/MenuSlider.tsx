import {Link} from 'react-router-dom'
import {useRef,useContext, useEffect} from 'react'

import {AnimationContext} from '../../Functions/Context'
import {menuSliderOff, menuSliderOn} from '../../Functions/AnimationManager'

function MenuSlider(props:menuSlider){
    const context:any = useContext(AnimationContext)

    const menuSlider:any = useRef()

    //ANIMATION LISTENER//
    useEffect(() => {
        if(context.menuSlider === true){
            menuSliderOn(menuSlider.current)
            context.functions.setActualPage(false)
        }
        if(context.menuSlider === false){
            menuSliderOff(menuSlider.current)
            context.functions.setActualPage(true)
        }
    }, [context.menuSlider])

    //SLIDER PROPERTIES RENDERING//
    const menuItems = props.pagesAll.map((menuItem:string, index:number) => {
        return(
            <Link 
                to={props.routesAll[index]}
                key={index+menuItem+"key"}
                id={"_"+index+menuItem}
                onClick={()=>{
                    setTimeout(()=>{
                        menuSliderOff(menuSlider.current)
                        context.functions.setActualPage(true)
                    },1750)
                }}
            >
                <p>{menuItem}</p>
            </Link>
        )
    })

    return(
        <div 
            id="menuSlider"
            ref={menuSlider}
        >
            <div id="menubox-wrapper">
                <div className="line" id="line1"></div>
                <div className="line" id="line2"></div>
                {menuItems}
                <div className="line" id="line3"></div>
                <div className="line" id="line4"></div>
            </div>
        </div>
    )
}

export {MenuSlider}